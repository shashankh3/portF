# Portfolio — Shashank Hirwani

Matrix-themed Vue 3 portfolio for full-stack, GenAI and mobile engineering work.

## Stack

- Vue 3 (Composition API, `<script setup>`)
- Vue CLI 5 / webpack
- Plain CSS (design tokens in `src/styles/base.css`)
- No runtime UI or animation dependencies

## Commands

Requires Node 22.12 or newer.

```bash
npm install       # install dependencies
npm run serve     # dev server with hot reload
npm run build     # production bundle in dist/
npm run lint      # ESLint (JS + Vue SFCs)
npm test          # Vitest unit tests for pure helpers
```

## Structure

```
src/
  App.vue                 page template and composition root
  components/             video player, GitHub activity calendar
  composables/            rain, typing, scroll spy, reveal, pointer, menu
  data/portfolio.js       all page copy and project metadata
  styles/                 base tokens, sections, responsive breakpoints
  utils/                  asset-path and contribution-calendar helpers
public/                   static files (videos, posters, resume, favicon)
```

Edit content in `src/data/portfolio.js`; markup and layout read from it. The
matrix rain lives in `src/composables/useMatrixRain.js` and its visual
constants (speed, cell size, trail fade, colours) are intentionally fixed.

## Deployment

Pushes to `main` deploy to GitHub Pages via
`.github/workflows/pages.yml`. The workflow runs lint, builds with
`PUBLIC_PATH=/<repo>/`, and publishes `dist/`.

`vue.config.js` reads `PUBLIC_PATH` so the same build works from a domain
root (for example Netlify) or a GitHub project subpath. Always resolve files
from `public/` through `src/utils/asset.js` — root-absolute paths like
`/videos/x.mp4` break on project pages.
