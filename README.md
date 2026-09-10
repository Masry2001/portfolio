# mohamedmousa.tech

Personal portfolio for **Mohamed Hany Musa** — a single-page resume site.
Built with [Astro](https://astro.build) + React islands + Tailwind CSS v4,
adapted from the MIT-licensed [starfolio](https://github.com/webrating/starfolio)
template. Ships as a static site, served by Nginx on a VPS.

## Editing content

Everything lives in two files — you never touch components:

| File | Controls |
| --- | --- |
| `src/data/resume.tsx` | Name, bio, work, education, skills, certifications, projects, social links |
| `src/data/config.ts` | Site URL, SEO, theme colors, base font size |

- Add a job → add an object to the `work` array.
- Add a project → add an object to the `projects` array.
- Certificate PDFs are served from `public/certificates/`.
- The hero photo is `public/portfolio.png` (512×512).

## Local development

Requires **Node ≥ 22.12** and **pnpm**.

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static output -> dist/
pnpm preview    # serve the built dist/ locally
```

## Deployment

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds the site
and `rsync`s `dist/` to the VPS over SSH.

Required repository secrets:

| Secret | Example |
| --- | --- |
| `SSH_HOST` | `203.0.113.10` |
| `SSH_USER` | `deploy` |
| `SSH_PRIVATE_KEY` | contents of a dedicated deploy private key |
| `DEPLOY_PATH` | `/var/www/mohamedmousa.tech` |
| `SSH_PORT` | *(optional, defaults to 22)* |

The VPS serves `DEPLOY_PATH` as a static site via its own Nginx server block,
alongside the existing apps. HTTPS via Certbot.

## Local-only files

`_source/` holds raw material (LinkedIn export, notes) and is git-ignored.
