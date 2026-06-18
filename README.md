# Jin Yang Academic Site

This repository contains the Astro rebuild of Jin Yang's academic homepage.

## Edit Content

Most updates should happen in `src/data/*.yaml`:

- `site.yaml`: profile, navigation, research overview
- `news.yaml`: papers, awards, talks
- `publications.yaml`: publication list
- `projects.yaml`: selected projects
- `patents.yaml`: patents
- `awards.yaml`: selected honors and awards

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static site is generated into `dist/`.
