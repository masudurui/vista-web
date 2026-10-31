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

Every "Download" CTA points at the GitHub release **asset**, not the release page, so one click starts the download immediately:

```
https://github.com/masudurui/vista-web/releases/latest/download/Vista.zip
```

- `latest` resolves to the newest published release, so new versions need no site changes.
- The asset must be named exactly `Vista.zip` on every release (GitHub serves it with
  `Content-Disposition: attachment`, so the browser downloads instead of navigating to GitHub).
- If the asset is renamed (e.g. `Vista.dmg`), update the four `href` values in `index.html`
  (hero CTA, pricing card trial link, closing CTA, footer panel CTA).

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
