# Vista — Next.js marketing site

A rebuild of the Vista landing page on Next.js (App Router) + TypeScript + Tailwind CSS v4.

This lives in its own folder on the `nextjs-rebuild` branch: the shipped static site at the
repo root (`index.html`, `assets/`, `images/`, …) is **untouched** and still what
`vistaformac.com` serves.

## Run it

```bash
cd next-site
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build (statically prerendered)
npm start        # serve the production build
npm run typecheck
```

Requires Node 20+ (built and tested on Node 24).

## What's in here

| Path | Purpose |
| --- | --- |
| `src/app/layout.tsx` | Root layout, Inter via `next/font`, all SEO metadata, JSON-LD |
| `src/app/page.tsx` | The landing page: hero, pillars, seven feature sections, pricing, FAQ, final call |
| `src/app/globals.css` | Design tokens (`@theme`), base styles, `.btn` / `.shot` / `.wrap` and friends |
| `src/components/HeroGallery.tsx` | Client component: the ten-shot product tour (click + arrow keys) |
| `src/components/*` | Header, footer, section heading, screenshot frame, feature points, FAQ, price card, icons |
| `src/lib/site.ts` | Every string, link and number — copy lifted from the shipped site so nothing is invented |
| `public/images/` | A curated subset of the existing screenshots (hero shots + thumbs, posters, og image, icons) |
| `next.config.ts` | Security headers (CSP, HSTS, `X-Frame-Options`, …), no `X-Powered-By` |

Sections: hero → thumbnails/visual browsing → search inside files → Visual Search →
folder customization → themes → Clean Up → privacy → pricing → FAQ → download CTA.

## Things to know

- **Copy is not new.** Feature claims, FAQ answers and prices are copied verbatim from the
  static site. The only addition is the honest "one-time model download, about 110 MB"
  note on Visual Search.
- **Buy and download links point at the live site.** `site.buyUrl` is the existing Polar
  checkout; `site.downloadUrl` is `https://vistaformac.com/Vista.zip`, so the app binary
  is not duplicated in this folder.
- **Images are plain `<img>`**, not `next/image`. The files are already sized WebP/JPEG, so
  they ship as-is and the project stays portable to any host (including `output: "export"`)
  without an image optimiser. Every image has `width`/`height` to avoid layout shift.
- **The theme is light-only by design.** `colorScheme: "light"` is set on purpose; the
  design is a warm-paper page, and Dark is a feature *of the app*, not of this site.

## Deploying later

Nothing here is wired into GitHub Pages, so the live site is unaffected by this branch.
When you want to ship it, either:

1. Point Pages/Vercel at this folder (`next` framework preset, root directory `next-site`), or
2. `output: "export"` in `next.config.ts` and publish `next-site/out` — the page is fully
   static, so the export works, but note that headers in `next.config.ts` are not applied
   by static hosts.
