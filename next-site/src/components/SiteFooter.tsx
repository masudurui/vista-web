import { PolarBuyButton } from "@/components/PolarBuyButton";

export function SiteFooter() {
  return (
<footer className="foot" id="foot">
  <div className="foot-wrap">
    <div className="foot-panels">
      <div className="foot-panel foot-panel--brand">
        <div className="foot-panel-head">
          <p className="foot-eyebrow">On your Mac</p>
          <svg className="foot-mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true" focusable="false">
            <circle cx="12" cy="12" r="9.25" /><path d="M12 7.5v9M7.5 12h9" />
          </svg>
        </div>
        <h2 className="foot-panel-title">Local by<br /> default.</h2>
        <span className="foot-panel-rule" aria-hidden="true"></span>
        <p className="foot-panel-note">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true" focusable="false">
            <path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9" /><circle cx="12" cy="12" r="2.4" />
          </svg>
          Search, text recognition, and duplicate detection run on your Mac, never on a server.
        </p>
      </div>

      <div className="foot-panel foot-panel--pattern">
        <div className="foot-panel-head">
          <p className="foot-eyebrow">Ready when you are</p>
          <svg className="foot-mark" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.15" aria-hidden="true" focusable="false">
            <path d="M16 3.4 21.1 6.3v5.9L16 15.1 10.9 12.2V6.3z" />
            <path d="M9.9 14.1 15 17v5.9l-5.1 2.9L4.8 22.9V17z" />
            <path d="M22.1 14.1 27.2 17v5.9l-5.1 2.9-5.1-2.9V17z" />
          </svg>
        </div>
        <h2 className="foot-panel-title">Your files,<br /> at a glance.</h2>
        <span className="foot-panel-rule" aria-hidden="true"></span>
        <div className="foot-panel-foot">
          <div className="flex flex-wrap gap-3">
            <PolarBuyButton className="btn cta-arrow cta-lg">
              <span className="cta-label">Buy now for $19</span>
              <span className="cta-arrow-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
              </span>
            </PolarBuyButton>
            <a href="https://vistaformac.com/Vista.zip" download="Vista.zip" className="btn-quiet cta-arrow has-icon cta-lg">
              <span className="cta-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v11M7.5 10.5 12 15l4.5-4.5M5 19.5h14" /></svg>
              </span>
              <span className="cta-label">Download</span>
              <span className="cta-arrow-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="foot-band">
    <div className="foot-wrap foot-band-inner">
      <div className="foot-brand">
        <a href="#top" className="foot-lockup"><span className="appicon w-7 h-7" aria-hidden="true"></span>Vista</a>
        <p className="foot-desc">A visual file browser for macOS.<br />No account, no cloud, no tracking.</p>
      </div>

      <div className="foot-links">
        <nav className="foot-col" aria-labelledby="foot-product">
          <p className="foot-kicker" id="foot-product">Product</p>
          <ul>
            <li><a href="#customize">Features</a></li>
            <li><a href="#visual-search">Visual search</a></li>
            <li><a href="#search">Search inside files</a></li>
            <li><a href="#viewer">Viewer</a></li>
            <li><a href="#keyboard">Keyboard</a></li>
            <li><a href="#cleanup">Clean up</a></li>
            <li><a href="#themes">Themes</a></li>
          </ul>
        </nav>

        <nav className="foot-col" aria-labelledby="foot-company">
          <p className="foot-kicker" id="foot-company">Company</p>
          <ul>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="https://vistaformac.com/compare/">Compare with Finder</a></li>
            <li><a href="#faq">Questions</a></li>
            <li><a href="https://vistaformac.com/privacy/">Privacy</a></li>
            <li><a href="/tools/">Free tools</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <p className="foot-mega" aria-hidden="true">Vista</p>
  </div>

  <div className="foot-bottom">
    <div className="foot-wrap">
      <div className="foot-bar">
        <p className="foot-bar-left">
          <span>© 2026 Vista</span>
          <span>macOS 14 Sonoma or later</span>
        </p>
        <div className="foot-bar-right">
          <a href="#top" className="foot-top">Back to top
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 19V6M6 11.5 12 5.5l6 6" /></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
}
