# Keyhouse: React + Vite e-commerce catalog

## Run locally
    npm install
    npm run dev          # http://localhost:5173
    npm run build && npm run preview

## Deploy (pick one)
**Vercel**: push to GitHub, import the repo at vercel.com/new. Framework auto-detects Vite. `vercel.json` handles SPA routing.
**Netlify**: push to GitHub, "Add new site" -> import. `netlify.toml` and `public/_redirects` are already set.
**Render**: New -> Static Site. Build: `npm install && npm run build`. Publish dir: `dist`. Add a Rewrite rule `/*` -> `/index.html`.

## Verify after deploy
- Open /product/forge-75 directly and refresh: it must load (proves SPA rewrite works).
- Run Lighthouse in Chrome DevTools; target 90+ Performance.

## Optimising real images
Put photos in `public/img/`, convert to WebP/AVIF (e.g. squoosh.app), generate 400w and 800w sizes, then use
`<img srcset="/img/x-400.webp 400w, /img/x-800.webp 800w" sizes="(max-width:700px) 100vw, 400px" width="400" height="300" loading="lazy">`.
Keep `fetchpriority="high"` only on the product-page hero.
