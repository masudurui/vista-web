import type { Metadata } from "next";

import { PageShell } from "@/components/PageShell";
import { PolarBuyButton } from "@/components/PolarBuyButton";
import { site } from "@/lib/media";

export const metadata: Metadata = {
  title: "Release notes | Vista",
  description:
    "What’s new in the latest version of Vista: Visual Search that runs on your Mac, text search inside more kinds of files, a calmer Clean Up, a Home you can arrange, and a simpler look.",
  alternates: { canonical: "/release-notes/" },
  openGraph: {
    type: "article",
    url: "https://vistaformac.com/release-notes/",
    siteName: "Vista",
    title: "Release notes | Vista",
    description:
      "Visual Search, text search inside more files, a calmer Clean Up, and more. Everything in the latest version of Vista.",
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
    title: "Release notes | Vista",
    description:
      "Visual Search, text search inside more files, a calmer Clean Up, and more. Everything in the latest version of Vista.",
    images: ["/images/og-image.png"],
  },
};

const whatsNew = [
  {
    title: "Search by sight",
    body: "Describe a photo or video and Vista finds it. Visual Search runs on your Mac with a one-time model download, then works offline. Videos are checked using a few frames from each.",
  },
  {
    title: "Search inside more files",
    body: "Vista can now read words in images, PDFs, and documents — including plain text, Markdown, RTF, Word, and Pages. Results show the matching line and highlight it in the file. PDF matches jump to the right page. Vista also spots links, emails, phone numbers, dates, amounts, and codes.",
  },
  {
    title: "Smarter search",
    body: "Results start with a Best Match view and show snippets explaining why each file matched. Sort by relevance, date, name, size, or kind. Move through suggestions with the arrow keys, then press Return or Esc.",
  },
  {
    title: "A calmer Clean Up",
    body: "Suggestions are split into “Safe to clear” and “Your call,” with a plain reason and the space each will free. Preview files before they move, switch between grid and list, and review exact copies or look-alike photos. Nothing is deleted — files go to the Trash.",
  },
  {
    title: "Make Home yours",
    body: "Reorder folders, hide the ones you don’t need, and change a folder’s name, color, shape, or icon. Apply one folder’s style to all folders, with matching or varied colors. Undo anytime or restore the defaults.",
  },
  {
    title: "Move faster",
    body: "The sidebar now has a 3×3 grid for your most-used destinations, with arrow-key navigation. Open Vista from the menu bar, press g then a letter to jump to a section, / to search, or ? for the shortcut list. Quick Settings gives you fast access to theme, text search, and Visual Search.",
  },
  {
    title: "Better names",
    body: "For screenshots, photos, and PDFs, “Suggest a Name” builds a clearer name from the text inside, plus its date or source. Review and edit the suggestions before renaming, and undo the batch later.",
  },
  {
    title: "Clearer folder access",
    body: "If macOS blocks a folder, Vista explains what happened, links to Privacy & Security settings, and lets you try again.",
  },
  {
    title: "A simpler look",
    body: "Sage is the new default. The theme picker is now Sage, White, and Dark. Dark has a softer charcoal background and off-white text.",
  },
] as const;

const fixes = [
  "TypeScript files are no longer mistaken for videos",
  "Folder watching no longer re-indexes dependency or build folders",
  "Deleted or moved files drop out of search more reliably",
  "PDFs with little or no readable text are retried instead of skipped permanently",
  "Undoing a move from the Trash no longer creates duplicate entries",
  "Search handles accents and punctuation more naturally",
] as const;

const quietLink =
  "text-[14.5px] font-medium text-accent-strong no-underline hover:underline hover:underline-offset-[3px]";

export default function ReleaseNotesPage() {
  return (
    <PageShell>
      <main id="top" className="mx-auto w-full max-w-[900px] px-4 pt-14 md:pt-24">
        <p className="eyebrow">Release notes</p>
        <h1 className="mt-3 text-[clamp(38px,5.6vw,60px)] font-semibold leading-[1.02] tracking-[-0.045em] [text-wrap:balance]">
          What’s new in Vista
        </h1>
        <p className="mt-5 max-w-[62ch] text-[clamp(17px,1.7vw,20px)] leading-[1.55] text-muted [text-wrap:pretty]">
          Visual Search that runs on your Mac, text search inside more kinds of
          files, a calmer Clean Up, and a Home screen you can arrange. Here is
          everything in the latest release.
        </p>

        <div className="mt-7 flex flex-wrap items-baseline gap-x-3.5 gap-y-2 border-b border-line pb-7">
          <p className="m-0 text-[15px] font-semibold tracking-[-0.01em] text-ink">
            Version 1.0
            <span className="ml-2 inline-block rounded-full bg-stage px-2 py-0.5 align-[1px] text-[11.5px] font-semibold uppercase tracking-[0.06em] text-faint ring-1 ring-line ring-inset">
              Build 2
            </span>
          </p>
          <p className="m-0 basis-full text-[14px] text-faint">
            13 November 2026 · macOS 14 or later · 7-day free trial
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
          <a className="btn" href={site.downloadUrl} download="Vista.zip">
            Download Vista
          </a>
          <a className={quietLink} href="#pricing">Pricing</a>
        </div>

        <section className="mt-12 md:mt-16" aria-labelledby="new-title">
          <h2
            id="new-title"
            className="m-0 text-[clamp(23px,2.7vw,29px)] font-semibold leading-[1.2] tracking-[-0.025em] [text-wrap:balance]"
          >
            New in this release
          </h2>

          <div className="mt-5 grid gap-3.5 md:grid-cols-2 md:gap-4">
            {whatsNew.map((item) => (
              <article
                key={item.title}
                className="rounded-card border border-line bg-bg px-6 py-5 shadow-[0_1px_2px_rgba(5,38,28,0.03)]"
              >
                <h3 className="m-0 text-[17px] font-semibold tracking-[-0.015em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15.5px] leading-[1.6] text-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 md:mt-16" aria-labelledby="fixes-title">
          <h2
            id="fixes-title"
            className="m-0 text-[clamp(23px,2.7vw,29px)] font-semibold leading-[1.2] tracking-[-0.025em] [text-wrap:balance]"
          >
            Fixes
          </h2>

          <ul className="mt-5 list-none rounded-card border border-line bg-bg px-6 py-1.5">
            {fixes.map((fix) => (
              <li
                key={fix}
                className="grid grid-cols-[20px_minmax(0,1fr)] items-start gap-3 border-b border-line py-3.5 text-[15.5px] leading-[1.55] text-muted last:border-b-0"
              >
                <svg
                  className="mt-px h-5 w-5 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M20 6.5 9.5 17 4 11.5" />
                </svg>
                <span>{fix}</span>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="pricing"
          className="mt-12 scroll-mt-24 md:mt-16"
          aria-labelledby="pricing-title"
        >
          <h2
            id="pricing-title"
            className="m-0 text-[clamp(23px,2.7vw,29px)] font-semibold leading-[1.2] tracking-[-0.025em] [text-wrap:balance]"
          >
            Pricing
          </h2>

          <div className="mt-5 rounded-card border border-line-strong bg-paper p-6 md:p-7">
            <p className="m-0 max-w-[56ch] text-[17px] leading-[1.6] text-ink">
              Vista Pro is $19 for early users, then $29. Free trial is now 7
              days.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
              <PolarBuyButton className="btn cta-arrow">
                <span className="cta-label">Buy now for $19</span>
                <span className="cta-arrow-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
                </span>
              </PolarBuyButton>
              <a
                className={quietLink}
                href={site.downloadUrl}
                download="Vista.zip"
              >
                Download the free trial
              </a>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
