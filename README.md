# Janvi Bahira — Portfolio

Next.js portfolio site for [janvidesigns.github.io](https://janvidesigns.github.io), based on the original résumé HTML design.

## Routes (SEO-friendly)

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About, skills, education |
| `/work` | Case studies |
| `/work/[slug]` | Case study detail |
| `/experience` | Work history |
| `/contact` | Contact |

Also: `/sitemap.xml`, `/robots.txt`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit content

All copy lives in `src/lib/content.ts` — update jobs, case studies, skills, and contact there.

## Build

```bash
npm run build
```

Static files are written to `out/` (GitHub Pages export).

## GitHub Actions

| Workflow | Trigger | What it does |
|----------|---------|----------------|
| [deploy.yml](.github/workflows/deploy.yml) | Push to `main`, or manual | Builds `out/` and deploys to GitHub Pages |
| [ci.yml](.github/workflows/ci.yml) | Push / PR to `main` | Runs lint + build (no deploy) |

## Deploy (GitHub Pages)

**One-time repo setup:**

1. Open [github.com/janvidesigns/janvidesigns.github.io/settings/pages](https://github.com/janvidesigns/janvidesigns.github.io/settings/pages)
2. **Build and deployment** → **Source**: **GitHub Actions**

**Deploy:**

```bash
git push origin main
```

Or: **Actions** → **Deploy to GitHub Pages** → **Run workflow**.

Live site: **https://janvidesigns.github.io**
