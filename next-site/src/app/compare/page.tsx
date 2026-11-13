import type { Metadata } from "next";

import { PageShell } from "@/components/PageShell";

import styles from "./compare.module.css";

export const metadata: Metadata = {
  title: "Finder, or Vista? | Vista",
  description:
    "An honest comparison of Finder and Vista: visual browsing with large thumbnails, search inside files and screenshots, Visual Search, folder styles, Clean Up, themes, privacy and keyboard shortcuts.",
  alternates: { canonical: "/compare/" },
  openGraph: {
    type: "article",
    url: "https://vistaformac.com/compare/",
    siteName: "Vista",
    title: "Finder, or Vista? | Vista",
    description:
      "Finder is built into macOS. Vista is a visual file browser for the same files: larger thumbnails, search inside them, and folders you can shape.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vista: a visual file browser for macOS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finder, or Vista? | Vista",
    description:
      "A feature-by-feature look at Finder and Vista: thumbnails, search inside files, Visual Search, folder styles, Clean Up, themes, privacy and shortcuts.",
    images: ["/images/og-image.png"],
  },
};

const rows = [
  {
    feature: "Visual browsing with large thumbnails",
    vista:
      "Files and folders as large thumbnails, sorted into photos, screenshots, documents and videos, with file counts and storage totals.",
    finder:
      "Icon, list, column and gallery views; icon size and previews are set per view.",
  },
  {
    feature: "Search inside files and screenshots",
    vista:
      "One search reads file names and the words inside screenshots, images, PDFs and documents (plain text, Markdown, RTF, Word, Pages). Results show the matching line and jump to the PDF page.",
    finder:
      "Spotlight searches names and indexed text in some documents. It doesn’t read the words inside screenshots or images.",
  },
  {
    feature: "Visual Search (describe a photo or video)",
    vista:
      "Describe a photo or video and Vista finds it. The model runs on your Mac after a one-time download, then works offline.",
    finder:
      "No. Spotlight matches names and metadata, not what’s in a picture.",
  },
  {
    feature: "Folder customization (colors, shapes, icons)",
    vista:
      "24 colors, 7 rounder folder shapes and 31 icons. Apply one style, or varied colors, to every folder at once.",
    finder: "Color tags, and custom icons one folder at a time.",
  },
  {
    feature: "Clean Up (preview and Undo)",
    vista:
      "Suggests old downloads, leftover installers, duplicates and near-identical photos. Review before anything moves; files go to the Trash, and Undo brings them back.",
    finder:
      "No built-in duplicate or near-identical cleanup; you sort files yourself or use another app.",
  },
  {
    feature: "Themes (Sage, White, Dark)",
    vista:
      "Sage is the default, with White and Dark in the theme picker. Switch any time.",
    finder:
      "Follows the system light or dark appearance; no per-app theme picker.",
  },
  {
    feature: "Privacy (everything stays on your Mac)",
    vista:
      "Indexing, text recognition, duplicate detection and Visual Search run on your Mac. No account, no cloud, no tracking.",
    finder: "Files are local; iCloud Drive syncs them if you turn it on.",
  },
  {
    feature: "Keyboard shortcuts",
    vista:
      "Arrow keys and single-key shortcuts move between categories and files; / to search, g then a letter to jump, and ? for the shortcut list. Open Vista from the menu bar.",
    finder: "Extensive built-in shortcuts, plus Quick Look with Space.",
  },
] as const;

export default function ComparePage() {
  return (
    <PageShell>
      <main id="top" className="mx-auto w-full max-w-[900px] px-4 pt-14 md:pt-24">
        <p className="eyebrow">Compare</p>
        <h1 className="mt-3 text-[clamp(38px,5.6vw,60px)] font-semibold leading-[1.02] tracking-[-0.045em] [text-wrap:balance]">
          Finder, or Vista?
        </h1>
        <p className="mt-5 max-w-[62ch] text-[clamp(17px,1.7vw,20px)] leading-[1.55] text-muted [text-wrap:pretty]">
          Finder is built into macOS and is the right tool for plenty of jobs.
          Vista is a visual file browser for the same files: larger thumbnails,
          search inside what’s in them, and folders you can shape. Here is how
          they differ.
        </p>

        <div className={styles.scroll}>
          <table className={styles.table}>
            <caption className="sr-only">
              Features compared between Vista and Finder
            </caption>
            <thead>
              <tr>
                <th scope="col">Feature</th>
                <th scope="col" className={styles.vista}>Vista</th>
                <th scope="col" className={styles.finder}>Finder</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature}>
                  <th scope="row">{row.feature}</th>
                  <td className={styles.vista}>{row.vista}</td>
                  <td className={styles.finder}>{row.finder}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={styles.note}>
          Compared on macOS 14 Sonoma. Finder features vary by macOS version and
          settings. Vista requires macOS 14 or later.
        </p>

        <div className="mt-12">
          <h2 className="text-[clamp(22px,2.6vw,28px)] font-semibold leading-[1.2] tracking-[-0.025em]">
            Can I use both?
          </h2>
          <p className="mt-3 max-w-[70ch] text-[16px] leading-[1.65] text-muted">
            Yes. Vista runs alongside Finder and works with the folders you
            already have. It doesn’t take over your desktop, change your file
            types, or ask you to move anything. Open Vista when a folder is
            easier to understand as pictures; keep Finder for everything else.
          </p>

          <div className={styles.callout}>
            <strong>Not affiliated with Apple.</strong> Apple, macOS and Finder
            are trademarks of Apple Inc. Vista is an independent app and is not
            affiliated with, endorsed by, or sponsored by Apple. This comparison
            reflects our own testing; features can change with macOS updates.
          </div>
        </div>
      </main>
    </PageShell>
  );
}

