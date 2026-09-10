# Deployment — mohamedmousa.tech

The site deploys through **Dokploy** on the VPS (same panel that runs the
e-commerce project). Dokploy builds the repo with the `Dockerfile` (multi-stage:
Astro static build → nginx serving `dist/`) and **Traefik** terminates HTTPS with
an automatic Let's Encrypt certificate.

## Pieces in this repo

| File | Purpose |
| --- | --- |
| `Dockerfile` | `node:22-alpine` builds the site, `nginx:1.27-alpine` serves `/usr/share/nginx/html` |
| `docker/nginx.conf` | `try_files` + `404.html`, long cache for `/_astro/`, inline PDFs for `/certificates/`, security headers |
| `.dockerignore` | keeps `node_modules`, `_source`, docs, CI etc. out of the build context |
| `.github/workflows/ci.yml` | builds + `astro check` on every push/PR (a canary, not the deploy) |

## Dokploy application settings

- **Project:** Portfolio → environment `production`
- **Source:** GitHub · `Masry2001/portfolio` · branch `main` · build path `/`
- **Build type:** Dockerfile (`Dockerfile`, empty context path)
- **Domains:**
  - `mohamedmousa.tech` → container port **80**, HTTPS on, cert `letsencrypt`
  - `www.mohamedmousa.tech` → same
- **Auto Deploy:** on (GitHub push webhook) — every push to `main` rebuilds.

## DNS (Namecheap → Advanced DNS)

```
A   @     176.97.212.73
A   www   176.97.212.73
```

Remove the leftover defaults that conflict:
- `CNAME  www → parkingpage.namecheap.com.`
- `URL Redirect Record  @ → http://www.mohamedmousa.tech/`

## Redeploy / rollback

- Redeploy: push to `main`, or hit **Deploy** in the Dokploy app.
- Rollback: Dokploy → the application → Deployments → redeploy a previous one.
- Logs: Dokploy → the application → Deployments / Logs.

## Local parity

```bash
docker build -t portfolio .
docker run --rm -p 8080:80 portfolio   # http://localhost:8080
```
