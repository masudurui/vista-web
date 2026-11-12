"use client";

import { useEffect, useRef } from "react";

/**
 * The live site's header: hidden on arrival, slides in once the page is scrolled
 * past ~80px, and leaves again at the top. Same markup and classes as the live
 * page, with the scroll handling done in React.
 */
export function SiteHead() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const showAt =
      parseFloat(getComputedStyle(el).getPropertyValue("--head-show-at")) || 80;
    let visible: boolean | null = null;

    const update = () => {
      const next = window.scrollY > showAt;
      if (next === visible) return;
      visible = next;
      el.classList.toggle("is-visible", next);
      el.inert = !next;
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("pageshow", update);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("pageshow", update);
    };
  }, []);

  return (
    <header className="site-head" id="site-head" ref={ref}>
      <div className="site-head-inner">
        <div className="flex items-center justify-between h-16">
          <a
            href="#top"
            className="flex items-center gap-2.5 font-semibold tracking-[-0.02em] text-[16px]"
          >
            <span className="appicon w-7 h-7" aria-hidden="true" />
            Vista
          </a>
          <nav
            className="hidden sm:flex items-center gap-8 text-[14px] text-muted"
            aria-label="Main"
          >
            <a href="#customize" className="hover:text-ink transition-colors">
              Features
            </a>
            <a href="#pricing" className="hover:text-ink transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hover:text-ink transition-colors">
              FAQ
            </a>
            <a
              href="https://vistaformac.com/tools/"
              className="hover:text-ink transition-colors"
            >
              Free tools
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="https://buy.polar.sh/polar_cl_TUK1YuJb0ImcyWnIdfuDXfaBeenBgx5fgmHdU2T5oTH"
              className="btn cta-arrow"
              data-polar-checkout
              data-polar-checkout-theme="light"
            >
              <span className="cta-label">Buy now for $19</span>
              <span className="cta-arrow-icon" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 12h16m-6-6 6 6-6 6" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
