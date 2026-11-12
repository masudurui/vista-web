# Vista — Next.js rebuild of the live landing page

A near-identical rebuild of the shipped static site (`https://vistaformac.com/`) on
Next.js App Router + TypeScript + Tailwind CSS v4. It lives on the `nextjs-rebuild`
branch, in its own folder: the static site at the repo root is untouched and is still
what the domain serves.

## Run it

```bash
cd next-site
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (statically prerendered)
npm start
npm run typecheck
```

## How the clone is put together

The goal here was fidelity, not a redesign, so the page *is* the live page:

| Layer | What it is |
| --- | --- |
| `src/app/vista.css` | The live stylesheet, copied across unchanged (tokens, header, hero, laptop frames, section heads, pricing, FAQ, footer). Two asset URLs were made absolute (`/images/…`). |
| `src/app/globals.css` | Tailwind v4 + a `@theme` bridge that maps the live tokens (`ink`, `muted`, `faint`, `line`, `accent`, `stage`…) to Tailwind utilities, plus two rules that reproduce the Play CDN's cascade order for `line-height`. |
| `src/app/page.tsx` | The live `<main>` markup, converted 1:1 to JSX: same section order, same classes, same nesting, same copy. |
| `src/components/SiteHead.tsx` | Live header markup + the scroll behaviour (hidden at the top, `inert` while hidden, `--head-show-at` threshold). |
| `src/components/HeroGallery.tsx` | Hero tour: wallpaper panel, sliding 16:10 window, caption, ten-thumbnail strip with edge fade, prev/next, arrow-key tablist. |
| `src/components/VideoFigure.tsx` | The five clips the live page loads through its media loader: figure marked `is-video`, poster frame, keystroke cue, hover play/pause button, playback only while on screen. |
| `src/components/Reveal.tsx` | The live scroll-in motion (`.rise` + `is-in`, 50 ms stagger, threshold 0.12). Classes are added client-side so server-rendered HTML stays visible. |
| `src/components/FaqAccordion.tsx` | Native `<details>` rows with the animated height the live page uses. |
| `src/lib/media.ts` | Hero screenshots, feature clips and links in one place. |

Sections, in the live order: hero → intro (three pillars) → Visual Search → folder
customization → search inside files → viewer → keyboard → Clean Up → themes → privacy →
pricing → FAQ → closing call to action → footer.

## Parity checks

Measured with headless Chrome against the live page and this build, comparing element
geometry and computed type:

| Width | Page height (live → clone) | Sections |
| --- | --- | --- |
| 1440 | 17179 → 17289 px | all 13 in the same order, identical x/width |
| 768 | 15054 → 15563 px | all 13 in the same order |
| 390 | 15094 → 15221 px | all 13 in the same order |

The clone runs 110–510 px taller depending on width, only because the Visual Search copy
is longer by request (a one-time ~110 MB model download, then offline for photos, videos,
screenshots, PDFs and the text inside files) and wraps onto more lines at tablet width.
Layout, type, colour, radii, laptop frames, pricing ticket and footer bands still measure
identically; no horizontal overflow at any of the three widths.

## Fixes applied after the first clone

1. **Visual Search / offline wording** — the same honest story everywhere (pillar,
   section lede, the three chips, privacy lede, three FAQ answers, meta description and
   JSON-LD): a one-time ~110 MB model download, then offline search across photos,
   videos, screenshots, PDFs and the text inside files, everything on the Mac.
2. **Hero slider direction** — the slide now mirrors the live implementation: the
   incoming frame enters from the side you are travelling from (right for next, left for
   previous), thumbnails jump to the correct slide with the right direction, and arrow
   keys follow. The gallery markup and styling are unchanged.
3. **Polar checkout** — the embed is loaded (`@polar-sh/checkout` from jsDelivr, same
   URL as the live site) and `PolarCheckout` calls `Polar.EmbedCheckout.init()` once the
   embed arrives, because `data-auto-init` only fires on `DOMContentLoaded`, which has
   already passed when Next injects the script. Buy buttons keep their `href` and
   `data-polar-checkout*` attributes, and the overlay opens in place like the live site.
4. **Development CSP** — `next.config.ts` builds the policy per environment:
   development adds `'unsafe-eval'` and `ws:`/`wss:` (React Refresh, Turbopack HMR);
   production ships the strict list. CSP now also allows exactly what the clone needs:
   jsDelivr + Polar for checkout, and `fonts.googleapis.com` / `fonts.gstatic.com` for
   the Inter fallback.

## Deliberate differences

- **Media is copied into `public/images`** (~24 MB) so the app is self-contained and
  works offline; the live site reads the same files from `/images`.
- **`/tools/`, `/privacy/`, `/compare/` and `Vista.zip`** point at the live domain — they
  are still served by the static site.
- **Nothing invented**: copy, prices and FAQ answers come from the live site, and the
  folder-preview widget that was removed from the live page is absent here too.
