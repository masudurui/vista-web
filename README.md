# Vista – File Organization for Mac

A beautiful landing page for Vista, a Mac app that automatically organizes your files, helps you find anything instantly, and reclaim storage without digging.

## Features

- **Search in Plain English** — Natural language search to find files your way
- **Auto-Organized** — Files categorized by type with live storage counts
- **Find Duplicates** — Spot and remove duplicate files instantly
- **Smart Cleanup** — Intelligent suggestions for freeing up space
- **Live Text Search** — Search inside screenshots and images
- **Privacy First** — All processing happens on your Mac, no cloud, no tracking

## Tech Stack

- Single-file HTML + CSS + vanilla JavaScript
- No build tools required
- Fully responsive (mobile, tablet, desktop)
- Dark mode support via CSS custom properties

## Getting Started

Open `index.html` in your browser to preview locally.

## Deployment

Deploy to GitHub Pages or any static hosting:

```bash
# GitHub Pages (automatic from main branch)
git push origin main
```

Then access at: `https://masudurui.github.io/vista-web`

## Download links

The app is hosted **on this site**, not on GitHub. `Vista.zip` sits in the repo root and is served at:

```
https://vistaformac.com/Vista.zip
```

All four download CTAs in `index.html` (hero, pricing card trial link, closing CTA, footer panel CTA) use:

```html
<a href="./Vista.zip" download="Vista.zip" class="…">Download</a>
```

- Because the file is on the same domain, the `download` attribute is honoured: one click saves the app and the visitor never leaves the page (no GitHub tab, no release page).
- **Shipping a new version:** rebuild the app, replace `Vista.zip` in this folder with the new build (keep the exact filename), then `git add Vista.zip index.html && git commit && git push`. No code changes needed.
- If you ever rename the file (e.g. `Vista-1.1.0.zip`), update the four `href` values in `index.html`.
- Keep the zip under GitHub Pages' 100 MB per-file limit; a versioned filename also avoids CDN cache staleness (Pages caches files for ~10 minutes).

## Customization

Edit these sections in `index.html`:

- **Colors** — CSS custom properties in `:root`
- **Copy** — Hero headline, features, FAQ
- **CTA** — Download button and trial badge
- **Features** — Feature cards in the grid

## Future Enhancements

- [ ] Interactive dashboard mockup
- [ ] Animated feature demos
- [ ] Pricing page
- [ ] Blog/Help center
- [ ] App download links (DMG, etc.)

---

Made with Claude Code
