# Deployment — mohamedmousa.tech

The site is a **static** Astro build. GitHub Actions builds it and `rsync`s
`dist/` to the VPS on every push to `main`. The VPS just serves files with
Nginx, next to the existing Laravel app.

---

## 1. DNS (at the domain registrar)

Add two records for `mohamedmousa.tech`:

```
A    @      <VPS_IP>
A    www    <VPS_IP>
```

TTL 3600. Check propagation:

```bash
dig +short mohamedmousa.tech
dig +short www.mohamedmousa.tech
```

Both must return `<VPS_IP>` before requesting the TLS cert.

---

## 2. VPS — one-time setup

SSH in as a sudo user.

### 2a. Web root + deploy user

```bash
# a dedicated, unprivileged user for CI deploys
sudo adduser --disabled-password --gecos "" deploy
sudo mkdir -p /var/www/mohamedmousa.tech
sudo chown -R deploy:www-data /var/www/mohamedmousa.tech
sudo chmod -R 755 /var/www/mohamedmousa.tech

# temporary page to test Nginx before the first real deploy
echo "<h1>Coming soon</h1>" | sudo tee /var/www/mohamedmousa.tech/index.html
```

### 2b. SSH deploy key

On your machine (not the VPS):

```bash
ssh-keygen -t ed25519 -f ./deploy_key -N "" -C "github-actions-portfolio"
```

Put the **public** key on the VPS:

```bash
sudo -u deploy mkdir -p /home/deploy/.ssh
sudo -u deploy tee -a /home/deploy/.ssh/authorized_keys < deploy_key.pub
sudo -u deploy chmod 700 /home/deploy/.ssh
sudo -u deploy chmod 600 /home/deploy/.ssh/authorized_keys
```

Keep the **private** key (`deploy_key`) for step 3. Delete it locally afterwards.

### 2c. Nginx server block

`/etc/nginx/sites-available/mohamedmousa.tech`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name mohamedmousa.tech www.mohamedmousa.tech;
    root /var/www/mohamedmousa.tech;
    index index.html;

    location / {
        try_files $uri $uri/ /404.html;
    }

    # hashed build assets — cache hard
    location /_astro/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # certificate PDFs — show in the browser, never force a download
    location /certificates/ {
        add_header Content-Disposition "inline" always;
    }

    # security headers (the static build has no server middleware)
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
}
```

Enable and reload (this does **not** touch the Laravel vhost):

```bash
sudo ln -s /etc/nginx/sites-available/mohamedmousa.tech /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
curl -I http://mohamedmousa.tech        # expect 200 + "Coming soon"
```

### 2d. HTTPS (Certbot — already installed for the Laravel site)

```bash
sudo certbot --nginx -d mohamedmousa.tech -d www.mohamedmousa.tech
```

Certbot adds the `443` block and the HTTP→HTTPS redirect, and reuses the
existing renewal timer.

---

## 3. GitHub repository secrets

`Settings → Secrets and variables → Actions → New repository secret`:

| Secret | Value |
| --- | --- |
| `SSH_HOST` | the VPS IP |
| `SSH_USER` | `deploy` |
| `SSH_PRIVATE_KEY` | full contents of the `deploy_key` file (including the BEGIN/END lines) |
| `DEPLOY_PATH` | `/var/www/mohamedmousa.tech` |
| `SSH_PORT` | *(only if SSH is not on 22)* |

Until `SSH_HOST` exists, the workflow builds and then skips the deploy steps
with a warning — that is expected and the run still shows green.

---

## 4. First real deploy

```bash
git commit --allow-empty -m "trigger deploy"
git push
```

Watch it: `gh run watch --repo Masry2001/portfolio` (or the Actions tab).
Then verify:

- `https://mohamedmousa.tech` shows the site, padlock valid
- `http://mohamedmousa.tech` and `https://www.mohamedmousa.tech` redirect to the apex
- a deep path like `/nope` renders the 404 page
- the existing Laravel site still works

After that, every push to `main` publishes in ~2 minutes.
