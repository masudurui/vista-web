import type { ReactNode } from "react";

import { PolarBuyButton } from "@/components/PolarBuyButton";
import { site } from "@/lib/media";

const navLink = "transition-colors hover:text-ink";

/**
 * Header and footer shared by the secondary pages (release notes, privacy,
 * support). Same markup and classes as the landing page chrome, so the App
 * Store pages look like the rest of the site.
 */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-[1232px] items-center justify-between gap-4 px-4">
          <a
            href="/"
            className="flex items-center gap-2.5 text-[16px] font-semibold tracking-[-0.025em]"
          >
            <span className="appicon h-7 w-7" aria-hidden="true" />
            Vista
          </a>

          <nav
            className="hidden items-center gap-5 text-[14px] text-muted md:flex lg:gap-7"
            aria-label="Main"
          >
            <a className={navLink} href="/#customize">Features</a>
            <a className={navLink} href="/#pricing">Pricing</a>
            <a className={navLink} href="/compare/">Compare</a>
            <a className={navLink} href="/tools/">Free tools</a>
            <a className={navLink} href="/privacy/">Privacy</a>
            <a className={`${navLink} hidden lg:inline`} href="/#faq">FAQ</a>
          </nav>

          <PolarBuyButton className="btn cta-arrow">
            <span className="cta-label">Buy now for $19</span>
            <span className="cta-arrow-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
            </span>
          </PolarBuyButton>
        </div>
      </header>

      {children}

      <footer className="mt-20 border-t border-line text-muted md:mt-28">
        <div className="mx-auto grid w-full max-w-[1232px] gap-9 px-4 pt-12 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16">
          <div>
            <a
              href="/"
              className="inline-flex items-center gap-2.5 text-[17px] font-semibold tracking-[-0.025em] text-ink no-underline"
            >
              <span className="appicon h-7 w-7" aria-hidden="true" />Vista
            </a>
            <p className="mt-3.5 max-w-[34ch] text-[14.5px] leading-[1.55]">
              A visual file browser for macOS.<br />
              No account, no cloud, no tracking.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-12">
            <nav aria-labelledby="foot-product">
              <p
                id="foot-product"
                className="m-0 text-[11px] font-semibold uppercase tracking-[0.13em] text-faint"
              >
                Product
              </p>
              <ul className="mt-3.5 grid list-none gap-2.5 p-0 text-[14px]">
                <li><a className={navLink} href="/#customize">Features</a></li>
                <li><a className={navLink} href="/#pricing">Pricing</a></li>
                <li><a className={navLink} href="/#faq">Questions</a></li>
              </ul>
            </nav>

            <nav aria-labelledby="foot-company">
              <p
                id="foot-company"
                className="m-0 text-[11px] font-semibold uppercase tracking-[0.13em] text-faint"
              >
                Company
              </p>
              <ul className="mt-3.5 grid list-none gap-2.5 p-0 text-[14px]">
                <li><a className={navLink} href="https://vistaformac.com/compare/">Compare with Finder</a></li>
                <li><a className={navLink} href="/privacy/">Privacy</a></li>
                <li><a className={navLink} href="/support/">Support</a></li>
                <li><a className={navLink} href="/release-notes/">Release notes</a></li>
                <li><a className={navLink} href="/tools/">Free tools</a></li>
                <li><a className={navLink} href={site.downloadUrl} download="Vista.zip">Download</a></li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mx-auto mt-8 flex w-full max-w-[1232px] flex-wrap items-center justify-between gap-2 border-t border-line px-4 py-4 text-[12.5px] text-faint">
          <p className="m-0 flex flex-wrap gap-x-5 gap-y-1">
            <span>© 2026 Vista for Mac</span>
            <span>Not affiliated with Apple Inc.</span>
          </p>
          <a className={navLink} href="/">Back to home</a>
        </div>
      </footer>
    </>
  );
}
