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

| Width | Page height | Sections |
| --- | --- | --- |
| 1440 | 17179 px vs **17179 px** | all 13 identical in offset + height |
| 768 | 15054 px vs **15054 px** | all 13 identical |
| 390 | 15094 px vs **15094 px** | all 13 identical |

Also identical: `h1`/`h2` font-size, weight, line-height, letter-spacing and colour; hero
panel and window geometry; thumbnail size; pricing ticket; FAQ rows; footer bands.
Console is clean (no hydration warnings), all 19 images load, and all 8 clips reach
`readyState 4` and play when on screen.

## Deliberate differences

- **Polar checkout embed is not loaded.** The live page pulls
  `cdn.jsdelivr.net/npm/@polar-sh/checkout` to open an overlay; here the Buy buttons are
  the same links with the same `data-polar-checkout` attributes, so they work as normal
  navigations. Add that script (and allow `cdn.jsdelivr.net` in the CSP) to get the
  overlay back.
- **Media is copied into `public/images`** (~24 MB) so the app is self-contained and
  works offline; the live site reads the same files from `/images`.
- **`/tools/`, `/privacy/`, `/compare/` and `Vista.zip`** point at the live domain — they
  are still served by the static site.
- **Nothing invented**: copy, prices and FAQ answers are the live ones, and the
  folder-preview widget that was removed from the live page is absent here too.
