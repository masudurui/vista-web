import { Faq } from "@/components/Faq";
import { HeroGallery } from "@/components/HeroGallery";
import { Points } from "@/components/Points";
import { PriceCard } from "@/components/PriceCard";
import { SectionHead } from "@/components/SectionHead";
import { Shot } from "@/components/Shot";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ArrowRight, Check, DownloadIcon } from "@/components/icons";
import { included, pillars, pricing, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        {/* ---------------------------------------------------------------- Hero */}
        <section className="wrap pt-16 pb-20 sm:pt-24 sm:pb-24">
          <div className="max-w-4xl">
            <p className="eyebrow">A visual file browser for macOS</p>
            <h1 className="display mt-6 text-ink">
              See your files, not filenames.
            </h1>
            <p className="lede mt-7 max-w-2xl">
              Vista shows your files as thumbnails, sorted by kind. Give folders
              their own color and shape, find photos by what’s in them, and
              search the words inside screenshots and PDFs.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={site.buyUrl}
                className="btn"
                rel="noopener noreferrer"
                data-polar-checkout
              >
                Buy now for {pricing.earlyBird}
                <ArrowRight />
              </a>
              <a
                href={site.downloadUrl}
                className="btn-quiet"
                rel="noopener noreferrer"
              >
                <DownloadIcon />
                Download free trial
              </a>
            </div>

            <p className="mt-5 text-sm text-faint">
              {pricing.trialDays}-day free trial · One-time purchase ·{" "}
              {site.requirements}
            </p>
          </div>

          <HeroGallery />
        </section>

        {/* ------------------------------------------------------------ Pillars */}
        <section
          className="border-y border-line bg-paper-deep/70"
          aria-label="What Vista does"
        >
          <div className="wrap grid gap-10 py-16 md:grid-cols-3 md:gap-14 md:py-20">
            {pillars.map((pillar, index) => (
              <div key={pillar.title}>
                <p className="text-xs tabular-nums tracking-[0.14em] text-faint">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-[17px] font-medium text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* -------------------------------------------------------- Thumbnails */}
        <section
          id="features"
          aria-labelledby="thumbnails-title"
          className="wrap scroll-mt-24 py-20 sm:py-28"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHead
                id="thumbnails-title"
                eyebrow="Visual browsing"
                title={<>Thumbnails you can recognize at a glance.</>}
                body="Files and folders as large thumbnails, sorted into photos, screenshots, documents and videos, no matter which folder they’re in."
              />
              <Points
                items={[
                  {
                    title: "Sorted by kind, not by folder.",
                    body: "Photos, screenshots, videos, documents, music, archives and large files each get their own place, wherever the files actually live.",
                  },
                  {
                    title: "Full-size previews.",
                    body: "Photos and videos open full size: zoom, pan, swipe to the next item, and select text inside an image with Live Text.",
                  },
                  {
                    title: "Keyboard first.",
                    body: "Single-key shortcuts and the arrow keys move you between categories and files, and open the viewer. You can use Vista without touching the mouse.",
                  },
                ]}
              />
            </div>
            <div className="grid gap-4">
              <Shot
                src="/images/hero/home.webp"
                alt="Vista’s Home screen: folders by kind, with a storage bar across the top"
                width={1900}
                height={1193}
              />
              <Shot
                src="/images/hero/viewer.webp"
                alt="Vista’s viewer showing a photo full size, with the rest of the folder underneath"
                width={1600}
                height={1005}
                caption="Photos and videos open full size, with the next items a swipe away."
              />
            </div>
          </div>
        </section>

        <div className="wrap">
          <hr className="rule" />
        </div>

        {/* ------------------------------------------------------ Search in files */}
        <section
          id="search"
          aria-labelledby="search-title"
          className="wrap scroll-mt-24 py-20 sm:py-28"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="lg:order-2">
              <SectionHead
                id="search-title"
                eyebrow="On-device search"
                title={<>Find the words inside your files.</>}
                body="Press / and type what you remember, like “screenshots with wifi.” Vista searches filenames and the text inside screenshots and PDFs, and lists the best matches first. The search runs on your Mac."
              />
              <Points
                items={[
                  {
                    title: "Filenames and contents.",
                    body: "Matching lines from a screenshot or a PDF are shown under each result, so you can see why it matched.",
                  },
                  {
                    title: "Plain English.",
                    body: "Ask for “screenshots with wifi” or “attachments from gmail” instead of remembering a filename.",
                  },
                ]}
              />
            </div>
            <Shot
              className="lg:order-1"
              src="/images/hero/search.webp"
              alt="Vista’s search results for “screenshots with wifi”, with the matching screenshots shown as thumbnails"
              width={1900}
              height={1193}
            />
          </div>
        </section>

        <div className="wrap">
          <hr className="rule" />
        </div>

        {/* ------------------------------------------------------- Visual Search */}
        <section
          id="visual-search"
          aria-labelledby="visual-search-title"
          className="wrap scroll-mt-24 py-20 sm:py-28"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHead
                id="visual-search-title"
                eyebrow="Visual search"
                title={<>Find photos by what’s in them.</>}
                body="Type what you see, like “horse”, “mountain” or “red car”, and Vista finds the photos and videos that match, even when the filename says nothing. It runs on an AI model that lives on your Mac: one download, then every search is offline."
              />
              <p className="mt-8 inline-flex flex-wrap items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-[13px] text-ink-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                One-time model download, about 110 MB · then fully offline
              </p>
              <Points
                items={[
                  {
                    title: "Describe it in words.",
                    body: "The model matches photos and videos by what’s in them, not by filename, so “horse on the mountain” finds the shot even if it is called IMG_4821.",
                  },
                  {
                    title: "Marked as a visual match.",
                    body: "Result cards say why they matched, next to the filename matches.",
                  },
                ]}
              />
            </div>
            <Shot
              src="/images/visual-search-poster.jpg"
              alt="Vista’s search field suggesting queries, with the results grid underneath"
              width={1600}
              height={1040}
            />
          </div>
        </section>

        <div className="wrap">
          <hr className="rule" />
        </div>

        {/* -------------------------------------------------- Folder customization */}
        <section
          id="customize"
          aria-labelledby="customize-title"
          className="wrap scroll-mt-24 py-20 sm:py-28"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="lg:order-2">
              <SectionHead
                id="customize-title"
                eyebrow="Make it yours"
                title={<>Color, shape and name every folder.</>}
                body="Vista sorts your files into folders by kind. Give each one its own color, style, icon and name. The styles are rounder and more Apple-like now, and one click applies a style to all your folders at once."
              />

              <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-line py-6">
                {[
                  ["24", "colors"],
                  ["7", "folder shapes"],
                  ["31", "icons"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <dt className="sr-only">{label}</dt>
                    <dd>
                      <span className="block text-2xl font-medium tracking-tight text-ink">
                        {value}
                      </span>
                      <span className="text-xs text-muted">{label}</span>
                    </dd>
                  </div>
                ))}
              </dl>

              <Points
                items={[
                  {
                    title: "Apply one style to every folder at once.",
                    body: "Pick a color, one of the seven shapes and an icon, then send it to every folder in one click, or keep individual folders different.",
                  },
                  {
                    title: "Rounder, more Apple-like shapes.",
                    body: "The folder styles were redrawn to sit naturally next to the rest of macOS.",
                  },
                ]}
              />
            </div>
            <div className="grid gap-4 lg:order-1">
              <Shot
                src="/images/hero/customize.webp"
                alt="Vista’s Edit Folder sheet: a folder preview with color swatches, folder shapes and an icon picker"
                width={1900}
                height={1193}
              />
              <Shot
                src="/images/hero/icons.webp"
                alt="Vista’s icon picker, with the chosen icon applied to the folder"
                width={1900}
                height={1193}
                caption="31 folder icons, or let a folder show its name."
              />
            </div>
          </div>
        </section>

        <div className="wrap">
          <hr className="rule" />
        </div>

        {/* ------------------------------------------------------------- Themes */}
        <section
          id="themes"
          aria-labelledby="themes-title"
          className="wrap scroll-mt-24 py-20 sm:py-28"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHead
                id="themes-title"
                eyebrow="Themes"
                title={<>Sage Soft, White, or Dark.</>}
                body="Sage Soft is the default: Vista’s own calm, soft green. White is clean and bright for the daytime, and Dark keeps everything quiet when the light goes down."
              />
              <ul className="mt-8 flex flex-wrap gap-2">
                {[
                  { name: "Sage Soft", note: "Default" },
                  { name: "White", note: "Bright" },
                  { name: "Dark", note: "Quiet" },
                ].map((theme) => (
                  <li
                    key={theme.name}
                    className="rounded-full border border-line bg-surface px-4 py-2 text-[13px] text-ink-soft"
                  >
                    <span className="font-medium text-ink">{theme.name}</span>
                    <span className="text-faint"> · {theme.note}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Shot
              src="/images/theme-poster.jpg"
              alt="Vista’s Theme picker in Settings, with Sage Soft, White and Dark to choose from"
              width={1600}
              height={1040}
            />
          </div>
        </section>

        <div className="wrap">
          <hr className="rule" />
        </div>

        {/* ----------------------------------------------------------- Clean Up */}
        <section
          id="cleanup"
          aria-labelledby="cleanup-title"
          className="wrap scroll-mt-24 py-20 sm:py-28"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="lg:order-2">
              <SectionHead
                id="cleanup-title"
                eyebrow="Clean Up"
                title={<>Clean up. Undo anything.</>}
                body="Vista finds old downloads, leftover installers, duplicates and near-identical photos. You review each list before anything moves. Files go to the Trash, and Undo brings them back."
              />
              <Points
                items={[
                  {
                    title: "Nothing moves until you review it.",
                    body: "Every suggestion is a list you read first, with the space it would free.",
                  },
                  {
                    title: "Only the Trash, with Undo.",
                    body: "Vista never deletes a file outright, and Undo brings back anything you change your mind about.",
                  },
                ]}
              />
            </div>
            <Shot
              className="lg:order-1"
              src="/images/hero/cleanup.webp"
              alt="Vista’s Clean Up screen: suggestions for leftover installers, old downloads and old screenshots, with files selected for review"
              width={1900}
              height={1193}
            />
          </div>
        </section>

        {/* ----------------------------------------------------------- Privacy */}
        <section
          id="privacy"
          aria-labelledby="privacy-title"
          className="scroll-mt-24 border-y border-line bg-paper-deep/70"
        >
          <div className="wrap grid gap-12 py-20 sm:py-28 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-20">
            <SectionHead
              id="privacy-title"
              eyebrow="Privacy"
              title={
                <>
                  Works offline.
                  <br />
                  Stays on your Mac.
                </>
              }
              body="Indexing, text recognition, duplicate detection and Visual Search run entirely on your Mac, with or without Wi-Fi. The AI model is downloaded once; after that, nothing leaves the device."
            />

            <ul className="grid gap-px overflow-hidden rounded-[18px] border border-line bg-line sm:grid-cols-2">
              {[
                ["No account", "Nothing to sign in to."],
                ["No cloud", "Nothing is uploaded."],
                ["No tracking", "Nothing to report back."],
                ["On-device AI", "The model runs on your Mac."],
                ["Works without Wi-Fi", "Indexing and search keep working."],
                ["Offline license", "Your license works without a connection."],
              ].map(([title, body]) => (
                <li key={title} className="bg-surface p-5">
                  <p className="text-[15px] font-medium text-ink">{title}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted">
                    {body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ----------------------------------------------------------- Pricing */}
        <section
          id="pricing"
          aria-labelledby="pricing-title"
          className="wrap scroll-mt-24 py-20 sm:py-28"
        >
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-20">
            <div>
              <SectionHead
                id="pricing-title"
                eyebrow="Pricing"
                title={<>Pay once. Keep it.</>}
                body={`Try everything free for ${pricing.trialDays} days. Then buy it once, with free updates.`}
              />

              <div className="mt-10">
                <p className="eyebrow">What you get</p>
                <h3 className="mt-3 text-xl font-medium tracking-tight text-ink">
                  Every feature. Nothing to renew.
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
                  Buy once and every feature is yours, with free updates: no
                  account, no cloud, and nothing that expires.
                </p>

                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {included.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2.5 text-[14px] text-ink-soft"
                    >
                      <span className="text-accent">
                        <Check width={15} height={15} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 max-w-md text-sm leading-relaxed text-faint">
                  Everything runs on your Mac. Nothing is uploaded, and your
                  license works without a connection.
                </p>
              </div>
            </div>

            <PriceCard />
          </div>
        </section>

        {/* --------------------------------------------------------------- FAQ */}
        <section
          id="faq"
          aria-labelledby="faq-title"
          className="wrap scroll-mt-24 pb-20 sm:pb-28"
        >
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <SectionHead
              id="faq-title"
              eyebrow="FAQ"
              title={<>Questions.</>}
              body="Folders, privacy, and how the one-time price works."
            />
            <Faq />
          </div>
        </section>

        {/* --------------------------------------------------------- Final call */}
        <section className="border-t border-line bg-paper-deep/70">
          <div className="wrap py-20 text-center sm:py-28">
            <h2 className="headline text-ink">See what you have.</h2>
            <p className="lede mx-auto mt-4 max-w-md">
              {pricing.trialDays} days free. No account needed.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={site.downloadUrl}
                className="btn"
                rel="noopener noreferrer"
              >
                <DownloadIcon />
                Download for Mac
              </a>
              <a
                href={site.buyUrl}
                className="btn-quiet"
                rel="noopener noreferrer"
                data-polar-checkout
              >
                Buy for {pricing.earlyBird}
                <ArrowRight />
              </a>
            </div>
            <p className="mt-5 text-sm text-faint">
              One-time purchase · {site.requirements}
            </p>
          </div>
        </section>




      </main>

      <SiteFooter />
    </>
  );
}
