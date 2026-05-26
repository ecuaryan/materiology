# materiology

Radiology decision-support tools built with Angular + Angular Material.

This is a single-page app that includes:
- **ACR TI-RADS**: a point-based form to determine TI-RADS level + recommendation.
- **Incidental findings workflows**: guided decision trees for common organs (Liver, Adrenal, Renal, Pancreas).

## Tech stack

- Angular CLI (Angular v5-era project)
- Angular Material (SCSS theming)
- GitHub Pages SPA routing support via `src/ghspa.js` and `src/404.html`

## Getting started

### Prerequisites

- **Node.js**: this project targets an older Angular toolchain; if you hit install/build issues, try a Node 6–8 environment via `nvm`.
- **npm** (a `package-lock.json` is included)

### Install

```bash
npm install
```

### Run locally

```bash
npm start
```

Then open `http://localhost:4200/`.

## Scripts

- **Dev server**: `npm start` (runs `ng serve`)
- **Production build**: `npm run build` (runs `ng build --prod`)
- **Unit tests**: `npm test` (Karma)
- **Lint**: `npm run lint`
- **E2E tests**: `npm run e2e` (Protractor)

## Routes / pages

The primary pages are wired in `src/app/app.module.ts` and rendered from the toolbar/nav in `src/app/app.component.ts`:
- Home
- TI-RADS (`/ti-rads`)
- Workflow pages (Liver/Adrenal/Renal/Pancreas)

## Deploying to GitHub Pages (optional)

This repo includes a common GitHub Pages SPA workaround:
- `src/404.html` (served for unknown routes)
- `src/ghspa.js` (rewrites the URL back to the SPA route)

If you deploy this as a **project site** (e.g. `https://<user>.github.io/materiology/`), build with a base href that matches the repo name:

```bash
./node_modules/.bin/ng build --prod --base-href /materiology/
```

Notes:
- `src/404.html` currently uses `<base href="/materiology/">`. If you rename the repo (or deploy to a different path), update that value.
- `src/index.html` includes Google Tag Manager. If you’re forking this, you may want to remove/replace that snippet.

## License

MIT (see `package.json`).

