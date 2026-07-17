# santimendoza_hub

Source for [santimendoza.com](https://santimendoza.com) — Santiago Mendoza's personal site (identity + portfolio in a single page). Built with React, TypeScript, and Vite.

Previously this repo held a separate "hub" launcher page, with the portfolio living in its own `portfolio` repo/deploy. Both were merged here: one page, one build, one container. See `santimendoza_infra` for how it's deployed (`stacks/root`, service `web`).

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
```

## Content

Profile, skills, social links, and project data live in `src/data/profile.ts` — edit there, not in the components.
