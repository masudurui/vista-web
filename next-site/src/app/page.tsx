import type { CSSProperties } from "react";

import { FaqAccordion } from "@/components/FaqAccordion";
import { HeroGallery } from "@/components/HeroGallery";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHead } from "@/components/SiteHead";
import { VideoFigure } from "@/components/VideoFigure";

export default function Page() {
  return (
    <>
      <SiteHead />

<div className="max-w-[1200px] mx-auto">

  <main id="top">

    <section className="pt-20 md:pt-32" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">A visual file browser for macOS</p>
        <h1 id="hero-title" className="h1 hero-h1 mt-6">See your files, not filenames.</h1>
        <p className="hero-lede mt-8 md:mt-10"><span className="hl">Vista shows your files as thumbnails, sorted by kind.</span> Give folders their own color and shape, find photos by what’s in them, and search the words inside screenshots and PDFs.</p>
        <div className="hero-cta mt-10 md:mt-12 flex flex-wrap items-center gap-x-5 gap-y-4">
          <div className="flex flex-wrap gap-3">
            <a href="https://buy.polar.sh/polar_cl_TUK1YuJb0ImcyWnIdfuDXfaBeenBgx5fgmHdU2T5oTH" className="btn cta-arrow" data-polar-checkout data-polar-checkout-theme="light">
              <span className="cta-label">Buy now for $19</span>
              <span className="cta-arrow-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
              </span>
            </a>
            <a href="https://vistaformac.com/Vista.zip" download="Vista.zip" className="btn-quiet cta-arrow has-icon">
              <span className="cta-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v11M7.5 10.5 12 15l4.5-4.5M5 19.5h14" /></svg>
              </span>
              <span className="cta-label">Download</span>
              <span className="cta-arrow-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
              </span>
            </a>
          </div>
          <p className="hero-meta text-[13px] text-faint">7-day free trial · One-time purchase · macOS 14+</p>
        </div>
      </div>

      <HeroGallery />
    </section>

    <section id="intro" className="section" aria-labelledby="intro-title">
      <h2 id="intro-title" className="intro-title"><span className="hl">Vista shows thumbnails you can recognize at a glance, not long lists of filenames.</span> It sorts your folders by kind, finds photos by what’s in them, and never sends a file off your Mac.</h2>

      <ul className="pillars" role="list">
        <li className="pillar">
          <p className="fig">01</p>
          <div className="pillar-art">
            <svg viewBox="0 0 400 300" aria-hidden="true" focusable="false">
              <defs>
                <linearGradient id="fv-lift" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#FCFCFB" /><stop offset="1" stopColor="#DCEDE3" /></linearGradient>
              </defs>
              <g className="lift" style={{ "--l": "-4px", "--d": "0ms" } as CSSProperties}><g transform="matrix(.866 .5 -.866 .5 200 64)" stroke="#9DB3A8" strokeWidth="1" fill="#F4F9F6" fillOpacity=".6">
                <rect x="0" y="0" width="52" height="52" rx="7" /><rect x="60" y="0" width="52" height="52" rx="7" /><rect x="120" y="0" width="52" height="52" rx="7" fill="#E3EEE8" fillOpacity=".9" /><rect x="0" y="60" width="52" height="52" rx="7" /><rect x="60" y="60" width="52" height="52" rx="7" fill="none" strokeDasharray="3 3" /><rect x="120" y="60" width="52" height="52" rx="7" /><rect x="0" y="120" width="52" height="52" rx="7" fill="#E3EEE8" fillOpacity=".9" /><rect x="60" y="120" width="52" height="52" rx="7" /><rect x="120" y="120" width="52" height="52" rx="7" />
              </g></g>
              <g className="lift" style={{ "--l": "-8px", "--d": "45ms" } as CSSProperties}><g transform="matrix(.866 .5 -.866 .5 200 64)" fill="none" stroke="#B4CABF" strokeWidth="1" strokeLinecap="round">
                <circle cx="16" cy="16" r="4" /><polyline points="8,42 22,28 31,36 37,30 46,42" strokeLinejoin="round" /><path d="M70 14h26" /><path d="M70 22h32" /><path d="M70 30h20" /><path d="M70 38h28" /><path d="M141 17L155 26L141 35Z" strokeLinejoin="round" /><rect x="8" y="70" width="36" height="32" rx="3" /><path d="M8 77h36" /><circle cx="136" cy="76" r="4" /><polyline points="128,102 142,88 151,96 157,90 166,102" strokeLinejoin="round" /><path d="M21 137L35 146L21 155Z" strokeLinejoin="round" /><rect x="68" y="130" width="36" height="32" rx="3" /><path d="M68 137h36" /><path d="M130 134h26" /><path d="M130 142h32" /><path d="M130 150h20" /><path d="M130 158h28" />
              </g></g>
              <g className="lift" style={{ "--l": "-12px", "--d": "90ms" } as CSSProperties}><g stroke="#9DB3A8" strokeWidth="1" strokeDasharray="2 3"><path d="M155 106V150" /><path d="M245 106V150" /><path d="M200 132V176" /></g></g>
              <g className="lift" style={{ "--l": "-16px", "--d": "135ms" } as CSSProperties}><g transform="matrix(.866 .5 -.866 .5 200 20)"><rect x="60" y="60" width="52" height="52" rx="7" fill="#CFDFD7" stroke="#9DB3A8" strokeWidth="1" /></g></g>
              <g className="lift" style={{ "--l": "-22px", "--d": "180ms" } as CSSProperties}><g transform="matrix(.866 .5 -.866 .5 200 14)">
                <rect x="60" y="60" width="52" height="52" rx="7" fill="url(#fv-lift)" stroke="#13803B" strokeWidth="1" />
                <g fill="none" stroke="#13803B" strokeWidth="1" strokeLinecap="round"><circle cx="76" cy="76" r="4" /><polyline points="68,102 82,88 91,96 97,90 106,102" strokeLinejoin="round" /></g>
              </g></g>
            </svg>
          </div>
          <h3>Thumbnails first</h3>
          <p>Files and folders as large thumbnails, sorted into photos, screenshots, documents, and videos, no matter which folder they’re in.</p>
        </li>

        <li className="pillar">
          <p className="fig">02</p>
                                                  <div className="pillar-art">
            <svg viewBox="0 0 400 300" aria-hidden="true" focusable="false">
              <g className="lift" style={{ "--l": "-4px", "--d": "0ms" } as CSSProperties}>
                <g transform="matrix(.866 .5 -.866 .5 200 118)">
                  <rect x="0" y="0" width="140" height="140" rx="9" fill="#F4F9F6" stroke="#9DB3A8" />
                  <g fill="#E4EBE7" fillOpacity=".8">
                    <rect x="18" y="34" width="84" height="8" rx="4" />
                    <rect x="18" y="52" width="56" height="8" rx="4" />
                  </g>
                </g>
              </g>
              <g className="lift" style={{ "--l": "-9px", "--d": "70ms" } as CSSProperties}>
                <g transform="matrix(.866 .5 -.866 .5 200 106)">
                  <rect x="0" y="0" width="140" height="140" rx="9" fill="#FCFCFB" stroke="#9DB3A8" />
                  <g fill="#E4EBE7">
                    <rect x="18" y="26" width="100" height="8" rx="4" />
                    <rect x="18" y="44" width="70" height="8" rx="4" />
                  </g>
                </g>
              </g>
              <g className="lift" style={{ "--l": "-15px", "--d": "140ms" } as CSSProperties}>
                <g transform="matrix(.866 .5 -.866 .5 200 94)">
                  <rect x="0" y="0" width="140" height="140" rx="9" fill="#FCFCFB" stroke="#9DB3A8" />
                  <g fill="#CFDCD5">
                    <rect x="18" y="20" width="92" height="8" rx="4" />
                    <rect x="18" y="38" width="110" height="8" rx="4" />
                  </g>
                  <rect x="18" y="56" width="76" height="8" rx="4" fill="#D3E8DA" stroke="#13803B" strokeWidth=".8" />
                  <g fill="#E4EBE7">
                    <rect x="18" y="74" width="100" height="8" rx="4" />
                    <rect x="18" y="92" width="58" height="8" rx="4" />
                  </g>
                </g>
              </g>
              <g className="lift" style={{ "--l": "-22px", "--d": "200ms" } as CSSProperties}>
                <path d="M244 120 214 138" fill="none" stroke="#13803B" strokeDasharray="2 4" strokeOpacity=".65" />
                <circle cx="258" cy="100" r="26" fill="#FFFFFF" fillOpacity=".6" stroke="#13803B" strokeWidth="1.4" />
                <circle cx="258" cy="100" r="16" fill="none" stroke="#B4CABF" />
                <path d="M277 119 291 133" fill="none" stroke="#13803B" strokeWidth="3" strokeLinecap="round" />
              </g>
            </svg>
          </div>
          <h3>Search inside files</h3>
          <p>Press / and type what you remember. Vista reads filenames and the words inside screenshots and PDFs, with matching lines shown under each result.</p>
        </li>

        <li className="pillar">
          <p className="fig">03</p>
                                                  <div className="pillar-art">
            <svg viewBox="0 0 400 300" aria-hidden="true" focusable="false">
              <g fill="none" stroke="#9DB3A8">
                <circle cx="200" cy="150" r="76" strokeDasharray="3 5" />
                <circle cx="200" cy="150" r="98" strokeDasharray="3 5" strokeOpacity=".6" />
              </g>
              <g className="lift" style={{ "--l": "-4px", "--d": "0ms" } as CSSProperties}>
                <g transform="matrix(.866 .5 -.866 .5 200 118)">
                  <rect x="0" y="0" width="96" height="96" rx="9" fill="#F4F9F6" stroke="#9DB3A8" />
                </g>
              </g>
              <g fill="none" stroke="#9DB3A8" strokeDasharray="2 4" strokeOpacity=".7">
                <path d="M200 140 312 107" />
                <path d="M200 140 84 211" />
                <path d="M200 140 306 225" />
                <path d="M200 140 120 111" />
              </g>
              <g className="lift" style={{ "--l": "-12px", "--d": "40ms" } as CSSProperties}>
                <g transform="matrix(.866 .5 -.866 .5 200 92)">
                  <rect x="0" y="0" width="96" height="96" rx="9" fill="#FCFCFB" stroke="#9DB3A8" />
                  <circle cx="27" cy="31" r="5" fill="none" stroke="#B4CABF" />
                  <path d="M14 72 33 48 44 61 50 53 80 72 Z" fill="#E3EEE8" stroke="#B4CABF" strokeLinejoin="round" />
                </g>
              </g>
              <g className="lift" style={{ "--l": "-6px", "--d": "80ms" } as CSSProperties}>
                <g transform="matrix(.866 .5 -.866 .5 312 92)">
                  <rect x="0" y="0" width="30" height="30" rx="5" fill="#FCFCFB" stroke="#9DB3A8" />
                  <path d="M4 23 11 14 15 19 18 16 26 23 Z" fill="none" stroke="#B4CABF" strokeLinejoin="round" />
                </g>
              </g>
              <g className="lift" style={{ "--l": "-6px", "--d": "110ms" } as CSSProperties}>
                <g transform="matrix(.866 .5 -.866 .5 84 196)">
                  <rect x="0" y="0" width="30" height="30" rx="5" fill="#FCFCFB" stroke="#9DB3A8" />
                  <path d="M4 23 11 14 15 19 18 16 26 23 Z" fill="none" stroke="#B4CABF" strokeLinejoin="round" />
                </g>
              </g>
              <g className="lift" style={{ "--l": "-6px", "--d": "140ms" } as CSSProperties}>
                <g transform="matrix(.866 .5 -.866 .5 120 96)">
                  <rect x="0" y="0" width="30" height="30" rx="5" fill="#FCFCFB" stroke="#9DB3A8" />
                  <path d="M4 23 11 14 15 19 18 16 26 23 Z" fill="none" stroke="#B4CABF" strokeLinejoin="round" />
                </g>
              </g>
              <g className="lift" style={{ "--l": "-16px", "--d": "180ms" } as CSSProperties}>
                <g transform="matrix(.866 .5 -.866 .5 306 210)">
                  <rect x="0" y="0" width="32" height="32" rx="6" fill="#FFFFFF" stroke="#13803B" strokeWidth="1.4" />
                  <path d="M5 25 12 15 17 20 20 17 28 25 Z" fill="none" stroke="#13803B" strokeLinejoin="round" />
                </g>
              </g>
            </svg>
            <svg className="pulse" viewBox="0 0 400 300" aria-hidden="true" focusable="false">
              <circle className="pulse-ping" cx="306" cy="226" r="28" fill="none" stroke="#13803B" strokeWidth="1" />
            </svg>
          </div>
          <h3>Visual Search</h3>
          <p>Describe a photo or video (“horse on the mountain”) and Vista finds it. The AI model is a one-time download of about 110 MB; after that, every search runs on your Mac, offline. Results show as “Visual match.”</p>
        </li>

        <li className="pillar">
          <p className="fig">04</p>
          <div className="pillar-art pillar-art--fan">
            <svg viewBox="0 0 400 300" aria-hidden="true" focusable="false">
              <g stroke="#9DB3A8" strokeWidth="1">
                <g className="lift" style={{ "--fan": "-5deg", "--grow": "1.02", "--d": "0ms" } as CSSProperties}><g transform="translate(200 246) rotate(-48)"><rect x="-26" y="-176" width="52" height="176" rx="10" fill="#FCFCFB" /><rect x="-19" y="-166" width="38" height="22" rx="5" fill="#FBEDE4" /><rect x="-19" y="-140" width="38" height="22" rx="5" fill="#F6D9C6" /><rect x="-19" y="-114" width="38" height="22" rx="5" fill="#F0BFA0" /><rect x="-19" y="-88" width="38" height="22" rx="5" fill="#E9A27B" /></g></g><g className="lift" style={{ "--fan": "5deg", "--grow": "1.02", "--d": "40ms" } as CSSProperties}><g transform="translate(200 246) rotate(48)"><rect x="-26" y="-176" width="52" height="176" rx="10" fill="#FCFCFB" /><rect x="-19" y="-166" width="38" height="22" rx="5" fill="#F2EFF9" /><rect x="-19" y="-140" width="38" height="22" rx="5" fill="#E1DAF4" /><rect x="-19" y="-114" width="38" height="22" rx="5" fill="#CBBEEC" /><rect x="-19" y="-88" width="38" height="22" rx="5" fill="#B2A0E2" /></g></g><g className="lift" style={{ "--fan": "-3deg", "--grow": "1.035", "--d": "80ms" } as CSSProperties}><g transform="translate(200 246) rotate(-24)"><rect x="-26" y="-176" width="52" height="176" rx="10" fill="#FCFCFB" /><rect x="-19" y="-166" width="38" height="22" rx="5" fill="#F6F2E6" /><rect x="-19" y="-140" width="38" height="22" rx="5" fill="#ECE3C9" /><rect x="-19" y="-114" width="38" height="22" rx="5" fill="#DCCFA8" /><rect x="-19" y="-88" width="38" height="22" rx="5" fill="#C8B888" /></g></g><g className="lift" style={{ "--fan": "3deg", "--grow": "1.035", "--d": "120ms" } as CSSProperties}><g transform="translate(200 246) rotate(24)"><rect x="-26" y="-176" width="52" height="176" rx="10" fill="#FCFCFB" /><rect x="-19" y="-166" width="38" height="22" rx="5" fill="#EEF5F8" /><rect x="-19" y="-140" width="38" height="22" rx="5" fill="#D8E9F0" /><rect x="-19" y="-114" width="38" height="22" rx="5" fill="#BCD8E4" /><rect x="-19" y="-88" width="38" height="22" rx="5" fill="#9CC4D6" /></g></g><g className="lift" style={{ "--fan": "0deg", "--grow": "1.05", "--d": "160ms" } as CSSProperties}><g transform="translate(200 246) rotate(0)"><rect x="-26" y="-176" width="52" height="176" rx="10" fill="#FCFCFB" stroke="#13803B" /><rect x="-19" y="-166" width="38" height="22" rx="5" fill="#E3F0E8" /><rect x="-19" y="-140" width="38" height="22" rx="5" fill="#C6E2D0" /><rect x="-19" y="-114" width="38" height="22" rx="5" fill="#8FC9A8" /><rect x="-19" y="-88" width="38" height="22" rx="5" fill="#13803B" /></g></g>
              </g>
              <g className="fan-hub">
                <circle cx="200" cy="246" r="6" fill="#FCFCFB" stroke="#9DB3A8" strokeWidth="1" />
                <circle cx="200" cy="246" r="1.8" fill="#9DB3A8" />
              </g>
            </svg>
          </div>
          <h3>Make it yours</h3>
          <p>24 colors, 7 rounder folder shapes, and 31 icons. Apply one style (or varied colors) to every folder at once. Themes: Sage Soft (default), White, and Dark.</p>
        </li>

        <li className="pillar">
          <p className="fig">05</p>
                                                            <div className="pillar-art">
            <svg viewBox="0 0 400 300" aria-hidden="true" focusable="false">
              <g className="lift" style={{ "--l": "-4px", "--d": "0ms" } as CSSProperties}>
                <g transform="matrix(.866 .5 -.866 .5 124 94)">
                  <rect x="0" y="0" width="80" height="80" rx="8" fill="#F4F9F6" stroke="#9DB3A8" />
                </g>
              </g>
              <g className="lift" style={{ "--l": "-9px", "--d": "70ms" } as CSSProperties}>
                <g transform="matrix(.866 .5 -.866 .5 124 110)">
                  <rect x="0" y="0" width="80" height="80" rx="8" fill="#FCFCFB" stroke="#9DB3A8" />
                  <g fill="#CFDCD5">
                    <rect x="10" y="18" width="46" height="6" rx="3" />
                    <rect x="10" y="32" width="34" height="6" rx="3" />
                    <rect x="10" y="46" width="42" height="6" rx="3" />
                  </g>
                </g>
              </g>
              <g className="lift" style={{ "--l": "-16px", "--d": "150ms" } as CSSProperties}>
                <circle cx="168" cy="92" r="11" fill="#FFFFFF" stroke="#13803B" />
                <path d="M163 92 166 95 173 87" fill="none" stroke="#13803B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <g className="lift" style={{ "--l": "-11px", "--d": "110ms" } as CSSProperties}>
                <path d="M232.3 117 286 148 286 222 232.3 191Z" fill="#FCFCFB" stroke="#9DB3A8" />
                <path d="M286 148 339.7 117 339.7 191 286 222Z" fill="#F4F9F6" stroke="#9DB3A8" />
                <path d="M232.3 117 286 86 339.7 117 286 148Z" fill="#E3EEE8" stroke="#9DB3A8" />
                <g stroke="#B4CABF" strokeLinecap="round">
                  <path d="M304 138v74" />
                  <path d="M322 129v74" />
                </g>
              </g>
              <g className="lift" style={{ "--l": "-18px", "--d": "200ms" } as CSSProperties}>
                <path d="M200 158 230 142" fill="none" stroke="#9DB3A8" strokeDasharray="3 4" />
                <path pathLength="100" className="pulse-meteor" d="M200 158 230 142" fill="none" stroke="#13803B" />
                <path pathLength="100" className="pulse-meteor" d="M200 158 230 142" fill="none" stroke="#13803B" style={{ animationDelay: ".14s", opacity: ".45" } as CSSProperties} />
                <path d="M230 142 222.8 149.8" fill="none" stroke="#13803B" strokeLinejoin="round" />
                <path d="M230 142 219.6 143.6" fill="none" stroke="#13803B" strokeLinejoin="round" />
              </g>
              <g className="lift" style={{ "--l": "-14px", "--d": "240ms" } as CSSProperties}>
                <path d="M238 200C222 224 196 226 184 210" fill="none" stroke="#13803B" strokeDasharray="3 4" strokeOpacity=".5" />
                <path d="M184 210 194 210" fill="none" stroke="#13803B" strokeLinejoin="round" strokeOpacity=".5" />
                <path d="M184 210 188 220" fill="none" stroke="#13803B" strokeLinejoin="round" strokeOpacity=".5" />
              </g>
            </svg>
          </div>
          <h3>Clean up safely</h3>
          <p>Old downloads, duplicates, and near-identical photos, reviewed before anything moves. Files only go to the Trash, with Undo.</p>
        </li>

        <li className="pillar">
          <p className="fig">06</p>
          <div className="pillar-art">
            <svg viewBox="0 0 400 300" aria-hidden="true" focusable="false">
              <g fill="none" stroke="#9DB3A8" strokeWidth="1">
                <ellipse cx="200" cy="186" rx="84" ry="48" />
                <ellipse cx="200" cy="186" rx="120" ry="69" strokeOpacity=".75" />
                <ellipse cx="200" cy="186" rx="156" ry="90" strokeDasharray="3 4" />
              </g>
              <circle cx="310" cy="158.4" r="5" fill="#FCFCFB" stroke="#13803B" strokeWidth="1" />
              <circle cx="62" cy="228" r="3" fill="#FCFCFB" stroke="#9DB3A8" strokeWidth="1" />
              <g stroke="#8FA89B" strokeWidth="1" strokeLinejoin="round">
                <path d="M144.6 130L200 162V218L144.6 186Z" fill="#E3EEE8" />
                <path d="M200 162L255.4 130V186L200 218Z" fill="#D3E3DA" />
                <path d="M200 98L255.4 130L200 162L144.6 130Z" fill="#FCFCFB" />
              </g>
              <g transform="matrix(.866 .5 -.866 .5 200 98)" fill="none" stroke="#13803B" strokeWidth="1">
                <rect x="22" y="29" width="20" height="16" rx="3" />
                <path d="M26 29v-5a6 6 0 0 1 12 0v5" />
              </g>
            </svg>
            <svg className="pulse" viewBox="0 0 400 300" aria-hidden="true" focusable="false">
              <circle className="pulse-ping" cx="200" cy="186" r="60" fill="none" stroke="#13803B" strokeWidth="1" />
              <g fill="none" stroke="#9DB3A8" strokeWidth="1" strokeDasharray="2 4" strokeOpacity=".8">
                <path d="M200 186L356.0 186.0" />
                <path d="M200 186L278.0 108.1" />
                <path d="M200 186L122.0 108.1" />
                <path d="M200 186L44.0 186.0" />
                <path d="M200 186L122.0 263.9" />
                <path d="M200 186L278.0 263.9" />
              </g>
              <g fill="none" stroke="#13803B" strokeWidth="1.4" strokeLinecap="round">
                <path pathLength="100" className="pulse-meteor" d="M200 186L356.0 186.0" style={{ animationDelay: "0.00s", opacity: "1" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L356.0 186.0" style={{ animationDelay: "0.07s", opacity: "0.55" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L356.0 186.0" style={{ animationDelay: "0.14s", opacity: "0.32" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L356.0 186.0" style={{ animationDelay: "0.21s", opacity: "0.18" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L356.0 186.0" style={{ animationDelay: "0.28s", opacity: "0.09" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L278.0 108.1" style={{ animationDelay: "0.42s", opacity: "1" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L278.0 108.1" style={{ animationDelay: "0.49s", opacity: "0.55" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L278.0 108.1" style={{ animationDelay: "0.56s", opacity: "0.32" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L278.0 108.1" style={{ animationDelay: "0.63s", opacity: "0.18" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L278.0 108.1" style={{ animationDelay: "0.70s", opacity: "0.09" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L122.0 108.1" style={{ animationDelay: "0.84s", opacity: "1" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L122.0 108.1" style={{ animationDelay: "0.91s", opacity: "0.55" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L122.0 108.1" style={{ animationDelay: "0.98s", opacity: "0.32" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L122.0 108.1" style={{ animationDelay: "1.05s", opacity: "0.18" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L122.0 108.1" style={{ animationDelay: "1.12s", opacity: "0.09" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L44.0 186.0" style={{ animationDelay: "1.26s", opacity: "1" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L44.0 186.0" style={{ animationDelay: "1.33s", opacity: "0.55" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L44.0 186.0" style={{ animationDelay: "1.40s", opacity: "0.32" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L44.0 186.0" style={{ animationDelay: "1.47s", opacity: "0.18" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L44.0 186.0" style={{ animationDelay: "1.54s", opacity: "0.09" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L122.0 263.9" style={{ animationDelay: "1.68s", opacity: "1" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L122.0 263.9" style={{ animationDelay: "1.75s", opacity: "0.55" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L122.0 263.9" style={{ animationDelay: "1.82s", opacity: "0.32" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L122.0 263.9" style={{ animationDelay: "1.89s", opacity: "0.18" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L122.0 263.9" style={{ animationDelay: "1.96s", opacity: "0.09" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L278.0 263.9" style={{ animationDelay: "2.10s", opacity: "1" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L278.0 263.9" style={{ animationDelay: "2.17s", opacity: "0.55" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L278.0 263.9" style={{ animationDelay: "2.24s", opacity: "0.32" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L278.0 263.9" style={{ animationDelay: "2.31s", opacity: "0.18" } as CSSProperties} />
                <path pathLength="100" className="pulse-meteor" d="M200 186L278.0 263.9" style={{ animationDelay: "2.38s", opacity: "0.09" } as CSSProperties} />
              </g>
            </svg>
          </div>
          <h3>Private by design</h3>
          <p>Search, text recognition, duplicate detection, and Visual Search all run on your Mac. No account, no uploads, no tracking.</p>
        </li>
      </ul>
    </section>

    <section id="visual-search" className="section" aria-labelledby="visual-search-title">
      <div className="sec-head">
        <p className="eyebrow">Visual Search</p>
        <h2 id="visual-search-title" className="h2">Find photos by<br /> what’s in them.</h2>
        <p className="lede">Type what you see, like “horse”, “mountain” or “red car”, and Vista finds the matching photos and videos, even when the filename says nothing. It runs on an AI model that lives on your Mac: a one-time download of about 110 MB, and after that every search works offline — photos, videos, screenshots, PDFs and the text inside files.</p>
      </div>

      <div className="laptop mt-10 md:mt-14">
        <div className="laptop-lid">
          <figure className="media has-media is-video" style={{ aspectRatio: "3024 / 1964" } as CSSProperties} data-static>
            <video autoPlay={true} muted={true} loop={true} playsInline={true} preload="metadata" poster="/images/visual-search-poster.jpg" aria-label="Vista's Visual Search: typing “horse on the mountain” and finding the matching photos and videos">
              <source src="/images/visual-search.mp4" type="video/mp4" />
            </video>
          </figure>
        </div>
        <div className="laptop-base" aria-hidden="true"></div>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-6">
        <li className="fact"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="3" /><circle cx="9" cy="10" r="1.6" /><path d="M4.8 17.2 9.6 12l3.9 3.9 2.6-2.2 3.1 3.5" /></svg>Photos and videos</li>
        <li className="fact"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 4v9.5M8.5 10 12 13.5 15.5 10M5 19.5h14" /></svg>One-time 110 MB model</li>
        <li className="fact"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 4.8 5.9v5.6c0 4.2 3 7.5 7.2 8.5 4.2-1 7.2-4.3 7.2-8.5V5.9z" /><path d="M9.2 11.9 11.2 14l3.8-3.8" /></svg>Then searches work offline</li>
      </ul>
    </section>

    <section id="customize" className="section" aria-labelledby="customize-title">
      <div className="sec-head">
        <p className="eyebrow">Make it yours</p>
        <h2 id="customize-title" className="h2">Color, shape and<br /> name every folder.</h2>
        <p className="lede">Vista sorts your files into folders by kind. Give each one its own color, style, icon and name. The styles are rounder and more Apple-like now, and one click applies a style to all your folders at once.</p>
      </div>

      <div className="laptop mt-10 md:mt-14">
        <div className="laptop-lid">
          <VideoFigure name="customize" className="aspect-[16/10]" />
        </div>
        <div className="laptop-base" aria-hidden="true"></div>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-6">
        <li className="fact"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3.5" y="7.5" width="12" height="12" rx="3.2" /><path d="M8.5 4.5h8.2A3.8 3.8 0 0 1 20.5 8.3v8.2" /></svg>Apply one style to every folder at once</li>
        <li className="fact"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 7.6A2.6 2.6 0 0 1 6.6 5h2.7l2 2.2h6.1A2.6 2.6 0 0 1 20 9.8v7.6A2.6 2.6 0 0 1 17.4 20H6.6A2.6 2.6 0 0 1 4 17.4z" /></svg>Rounder, more Apple-like shapes</li>
      </ul>
    </section>

    
    <section id="search" className="section" aria-labelledby="search-title">
      <div className="sec-head">
        <p className="eyebrow">On-device search</p>
        <h2 id="search-title" className="h2">Find the words<br /> inside your files.</h2>
        <p className="lede">Press <kbd className="key">/</kbd> and type what you remember, like “screenshots with wifi.” Vista searches filenames and the text inside screenshots and PDFs, and lists the best matches first. The search runs on your Mac.</p>
      </div>

      <div className="laptop mt-10 md:mt-14">
        <div className="laptop-lid">
          <VideoFigure name="search" className="aspect-[16/10]" />
        </div>
        <div className="laptop-base" aria-hidden="true"></div>
      </div>
    </section>

    <section id="viewer" className="section" aria-labelledby="viewer-title">
      <div className="sec-head">
        <p className="eyebrow">Viewer</p>
        <h2 id="viewer-title" className="h2">Browse like Photos.</h2>
        <p className="lede">Photos and videos open full size. Zoom, pan, swipe to the next item, and select text inside an image with Live Text.</p>
      </div>

      <div className="laptop mt-10 md:mt-14">
        <div className="laptop-lid">
          <figure className="media is-video has-media" style={{ aspectRatio: "3024 / 1964" } as CSSProperties}>
            <video autoPlay={true} muted={true} loop={true} playsInline={true} preload="metadata" poster="/images/viewer-poster.jpg" aria-label="Vista’s viewer: photos and videos open full size, with zoom, pan and Live Text">
              <source src="/images/viewer.mp4" type="video/mp4" />
            </video>
          </figure>
        </div>
        <div className="laptop-base" aria-hidden="true"></div>
      </div>
    </section>

    <section id="keyboard" className="section" aria-labelledby="keyboard-title">
      <div className="sec-head">
        <p className="eyebrow">Keyboard</p>
        <h2 id="keyboard-title" className="h2">Move like Gmail.</h2>
        <p className="lede">Single-key shortcuts and the arrow keys move you between categories and files, and open the viewer. ↓ moves down, ↑ moves up. You can use Vista without touching the mouse.</p>
      </div>

      <div className="laptop mt-10 md:mt-14">
        <div className="laptop-lid">
          <VideoFigure name="gmail" className="fit" />
        </div>
        <div className="laptop-base" aria-hidden="true"></div>
      </div>

      <p className="keys-note"><kbd className="key">↓</kbd> <kbd className="key">↑</kbd> Move down and up between categories and files.</p>
    </section>

    <section id="cleanup" className="section" aria-labelledby="cleanup-title">
      <div className="sec-head">
        <p className="eyebrow">Clean Up</p>
        <h2 id="cleanup-title" className="h2">Clean up.<br /> Undo anything.</h2>
        <p className="lede">Vista finds old downloads, leftover installers, duplicates and near-identical photos. You review each list before anything moves. Files go to the Trash, and Undo brings them back.</p>
      </div>

      <div className="laptop mt-10 md:mt-14">
        <div className="laptop-lid">
          <VideoFigure name="cleanup" className="aspect-[16/10]" />
        </div>
        <div className="laptop-base" aria-hidden="true"></div>
      </div>
    </section>

    <section id="themes" className="section" aria-labelledby="themes-title">
      <div className="sec-head">
        <p className="eyebrow">Themes</p>
        <h2 id="themes-title" className="h2">Sage Soft, White,<br /> or Dark.</h2>
        <p className="lede">Sage Soft is the default: Vista’s own calm, soft green. White is clean and bright for the daytime, and Dark keeps everything quiet when the light goes down.</p>
      </div>

      <div className="laptop mt-10 md:mt-14">
        <div className="laptop-lid">
          <figure className="media is-video has-media" style={{ aspectRatio: "3024 / 1964" } as CSSProperties}>
            <video autoPlay={true} muted={true} loop={true} playsInline={true} preload="metadata" poster="/images/theme-poster.jpg" aria-label="Vista switching between the Sage Soft, White and Dark themes from the Theme picker in Settings">
              <source src="/images/theme.mp4" type="video/mp4" />
            </video>
          </figure>
        </div>
        <div className="laptop-base" aria-hidden="true"></div>
      </div>
    </section>

    <section id="privacy" className="section" aria-labelledby="privacy-title">
      <div className="sec-head">
        <p className="eyebrow">Privacy</p>
        <h2 id="privacy-title" className="h2">Works offline.<br /> Stays on your Mac.</h2>
        <p className="lede">Indexing, text recognition, duplicate detection and Visual Search run entirely on your Mac, with or without Wi‑Fi. Visual Search needs a one-time model download of about 110 MB; after that, search across photos, videos, screenshots, PDFs and the text inside files works offline, and nothing leaves the device.</p>
      </div>

      <div className="laptop mt-10 md:mt-14">
        <div className="laptop-lid">
          <VideoFigure name="offline" className="fit" />
        </div>
        <div className="laptop-base" aria-hidden="true"></div>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-10 md:mt-14">
        <li className="fact"><svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M256,136a12,12,0,0,1-12,12H204a12,12,0,0,1,0-24h40A12,12,0,0,1,256,136Zm-54.81,56.28a12,12,0,1,1-18.38,15.44C169.12,191.42,145,172,108,172c-28.89,0-55.46,12.68-74.81,35.72a12,12,0,0,1-18.38-15.44A124.08,124.08,0,0,1,63.5,156.53a72,72,0,1,1,89,0A124,124,0,0,1,201.19,192.28ZM108,148a48,48,0,1,0-48-48A48.05,48.05,0,0,0,108,148Z" /></svg>No account</li>
        <li className="fact"><svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M56.88,31.93A12,12,0,1,0,39.12,48.07L71.79,84A68,68,0,0,0,72,220h88a91.26,91.26,0,0,0,30.66-5.24l8.46,9.31a12,12,0,0,0,17.76-16.14ZM160,196H72a44,44,0,0,1-1.8-87.95A91.91,91.91,0,0,0,68,128a12,12,0,0,0,24,0,68.22,68.22,0,0,1,2.66-18.84l77.88,85.67A68.67,68.67,0,0,1,160,196Zm92-68a91.32,91.32,0,0,1-17.53,54,12,12,0,1,1-19.41-14.11,68,68,0,0,0-89.57-98.53,12,12,0,0,1-12.2-20.66A92,92,0,0,1,252,128Z" /></svg>No cloud</li>
        <li className="fact"><svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M56.88,31.93A12,12,0,1,0,39.12,48.07l16,17.65C20.67,88.66,5.72,121.58,5,123.13a12.08,12.08,0,0,0,0,9.75c.37.82,9.13,20.26,28.49,39.61C59.37,198.34,92,212,128,212a131.34,131.34,0,0,0,51-10l20.09,22.1a12,12,0,0,0,17.76-16.14ZM128,188c-29.59,0-55.47-10.73-76.91-31.88A130.69,130.69,0,0,1,29.52,128c5.27-9.31,18.79-29.9,42-44.29l90.09,99.11A109.33,109.33,0,0,1,128,188Zm123-55.12c-.36.81-9,20-28,39.16a12,12,0,1,1-17-16.9A130.48,130.48,0,0,0,226.48,128a130.36,130.36,0,0,0-21.57-28.12C183.46,78.73,157.59,68,128,68c-3.35,0-6.7.14-10,.42a12,12,0,1,1-2-23.91c3.93-.34,8-.51,12-.51,36,0,68.63,13.67,94.49,39.52,19.35,19.35,28.11,38.8,28.48,39.61A12.08,12.08,0,0,1,251,132.88Z" /></svg>No tracking</li>
        <li className="fact"><svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M156,88H100a12,12,0,0,0-12,12v56a12,12,0,0,0,12,12h56a12,12,0,0,0,12-12V100A12,12,0,0,0,156,88Zm-12,56H112V112h32Zm88-4H220V116h12a12,12,0,0,0,0-24H220V56a20,20,0,0,0-20-20H164V24a12,12,0,0,0-24,0V36H116V24a12,12,0,0,0-24,0V36H56A20,20,0,0,0,36,56V92H24a12,12,0,0,0,0,24H36v24H24a12,12,0,0,0,0,24H36v36a20,20,0,0,0,20,20H92v12a12,12,0,0,0,24,0V220h24v12a12,12,0,0,0,24,0V220h36a20,20,0,0,0,20-20V164h12a12,12,0,0,0,0-24Zm-36,56H60V60H196Z" /></svg>On-device AI</li>
        <li className="fact"><svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M216.88,207.93a12,12,0,1,1-17.76,16.14L147.78,167.6a56.06,56.06,0,0,0-52.71,7.1,12,12,0,0,1-14.14-19.4,79.35,79.35,0,0,1,41.92-15.12L103.51,118.9a104.18,104.18,0,0,0-40.06,19.55,12,12,0,0,1-14.9-18.81A128.46,128.46,0,0,1,85.61,99.21l-17.31-19a151.14,151.14,0,0,0-36.68,22.28A12,12,0,1,1,16.39,83.91a175.52,175.52,0,0,1,35-22.38L39.12,48.07A12,12,0,1,1,56.88,31.93ZM128,188a16,16,0,1,0,16,16A16,16,0,0,0,128,188Zm64.55-49.55a12,12,0,0,0,14.9-18.81A127.27,127.27,0,0,0,170,99.05a12,12,0,0,0-7.87,22.67A103.62,103.62,0,0,1,192.55,138.45Zm47.06-54.54A176.33,176.33,0,0,0,128,44c-3.94,0-7.93.13-11.86.39a12,12,0,1,0,1.59,24c3.4-.23,6.86-.34,10.27-.34a152.24,152.24,0,0,1,96.38,34.46,12,12,0,1,0,15.23-18.55Z" /></svg>Works without Wi‑Fi</li>
        <li className="fact"><svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M228.75,100.05c-3.52-3.67-7.15-7.46-8.34-10.33-1.06-2.56-1.14-7.83-1.21-12.47-.15-10-.34-22.44-9.18-31.27s-21.27-9-31.27-9.18c-4.64-.07-9.91-.15-12.47-1.21-2.87-1.19-6.66-4.82-10.33-8.34C148.87,20.46,140.05,12,128,12s-20.87,8.46-27.95,15.25c-3.67,3.52-7.46,7.15-10.33,8.34-2.56,1.06-7.83,1.14-12.47,1.21C67.25,37,54.81,37.14,46,46S37,67.25,36.8,77.25c-.07,4.64-.15,9.91-1.21,12.47-1.19,2.87-4.82,6.66-8.34,10.33C20.46,107.13,12,116,12,128S20.46,148.87,27.25,156c3.52,3.67,7.15,7.46,8.34,10.33,1.06,2.56,1.14,7.83,1.21,12.47.15,10,.34,22.44,9.18,31.27s21.27,9,31.27,9.18c4.64.07,9.91.15,12.47,1.21,2.87,1.19,6.66,4.82,10.33,8.34C107.13,235.54,116,244,128,244s20.87-8.46,27.95-15.25c3.67-3.52,7.46-7.15,10.33-8.34,2.56-1.06,7.83-1.14,12.47-1.21,10-.15,22.44-.34,31.27-9.18s9-21.27,9.18-31.27c.07-4.64.15-9.91,1.21-12.47,1.19-2.87,4.82-6.66,8.34-10.33C235.54,148.87,244,140.05,244,128S235.54,107.13,228.75,100.05Zm-17.32,39.29c-4.82,5-10.28,10.72-13.19,17.76-2.82,6.8-2.93,14.16-3,21.29-.08,5.36-.19,12.71-2.15,14.66s-9.3,2.07-14.66,2.15c-7.13.11-14.49.22-21.29,3-7,2.91-12.73,8.37-17.76,13.19C135.78,214.84,130.4,220,128,220s-7.78-5.16-11.34-8.57c-5-4.82-10.72-10.28-17.76-13.19-6.8-2.82-14.16-2.93-21.29-3-5.36-.08-12.71-.19-14.66-2.15s-2.07-9.3-2.15-14.66c-.11-7.13-.22-14.49-3-21.29-2.91-7-8.37-12.73-13.19-17.76C41.16,135.78,36,130.4,36,128s5.16-7.78,8.57-11.34c4.82-5,10.28-10.72,13.19-17.76,2.82-6.8,2.93-14.16,3-21.29C60.88,72.25,61,64.9,63,63s9.3-2.07,14.66-2.15c7.13-.11,14.49-.22,21.29-3,7-2.91,12.73-8.37,17.76-13.19C120.22,41.16,125.6,36,128,36s7.78,5.16,11.34,8.57c5,4.82,10.72,10.28,17.76,13.19,6.8,2.82,14.16,2.93,21.29,3,5.36.08,12.71.19,14.66,2.15s2.07,9.3,2.15,14.66c.11,7.13.22,14.49,3,21.29,2.91,7,8.37,12.73,13.19,17.76,3.41,3.56,8.57,8.94,8.57,11.34S214.84,135.78,211.43,139.34ZM176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51Z" /></svg>Offline license</li>
      </ul>
    </section>

    <section id="pricing" className="section" aria-labelledby="pricing-title">
      <div className="price-poster">
        <div className="price-poster-head">
          <div>
            <p className="price-eyebrow">Pricing</p>
            <h2 id="pricing-title" className="price-title">Pay once.<br /> Keep it.</h2>
          </div>
          <div className="price-heading-side">
            <p className="price-lede">Try everything free for 7 days. Then buy it once, with free updates.</p>
            <p className="price-signs" aria-hidden="true">
              <span className="price-sign-dot"></span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" focusable="false">
                <circle cx="12" cy="12" r="4" /><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6" />
              </svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" focusable="false">
                <path d="M12 2.6 20 7v10l-8 4.4L4 17V7z" />
              </svg>
            </p>
          </div>
        </div>

        <div className="price-grid">
          <div className="price-story">
            <p className="price-kicker">What you get</p>
            <h3 className="price-sub">Every feature.<br /> Nothing to renew.</h3>
            <p className="price-copy">Buy once and every feature is yours, with free updates: no account, no cloud, and nothing that expires.</p>

            <ul className="price-features" role="list">
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5 10 17 19 7" /></svg>Every feature</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5 10 17 19 7" /></svg>Free updates</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5 10 17 19 7" /></svg>No account</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5 10 17 19 7" /></svg>No cloud</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5 10 17 19 7" /></svg>Works offline</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5 10 17 19 7" /></svg>No tracking</li>
            </ul>

            <p className="price-local">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 4.5 6v6c0 4.4 3.1 7.9 7.5 9 4.4-1.1 7.5-4.6 7.5-9V6L12 3Z" /><path d="M9 12.2 11 14l4-4" /></svg>
              Everything runs on your Mac. Nothing is uploaded, and your license works without a connection.
            </p>
          </div>

          <div className="price-ticket">
            <div className="price-ticket-top">
              <p className="price-ticket-name">Vista for Mac</p>
              <span className="price-ticket-tag">Early bird</span>
            </div>

            <div className="price-ticket-band" aria-hidden="true">
              <span className="price-ticket-dots"></span>
              <svg className="price-ticket-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" focusable="false">
                <path d="M6 18 18 6M8 6h10v10" />
              </svg>
            </div>

            <div className="price-ticket-price">
              <span className="price-ticket-num"><span className="sr-only">Early bird price: </span>$19</span>
              <s className="price-ticket-was"><span className="sr-only">Regular price: </span>$29</s>
            </div>
            <p className="price-ticket-note">One payment. Early bird for the first 300 licenses, then $29.</p>

            <div className="price-ticket-actions">
              <a href="https://buy.polar.sh/polar_cl_TUK1YuJb0ImcyWnIdfuDXfaBeenBgx5fgmHdU2T5oTH" className="price-ticket-buy" data-polar-checkout data-polar-checkout-theme="light">Buy for $19
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h13M13 6.5 18.5 12 13 17.5" /></svg>
              </a>
              <a href="https://vistaformac.com/Vista.zip" download="Vista.zip" className="price-ticket-trial">Download free trial</a>
            </div>
            <p className="price-ticket-fine">Try free for 7 days first · macOS 14 or later</p>
          </div>
        </div>

        <p className="price-mega" aria-hidden="true">$19</p>
      </div>
    </section>

    <section id="faq" className="section" aria-labelledby="faq-title">
      <div className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-8 md:gap-16">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-title" className="h2 mt-4">Questions</h2>
        </div>
        <div>
          <details>
            <summary>Does Vista reorganize my folders?<svg className="pm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg></summary>
            <div className="faq-panel"><p>No. Vista changes how you see your files, not where they live. Your folders stay exactly as they are.</p></div>
          </details>
          <details>
            <summary>Which folders does Vista look at?<svg className="pm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg></summary>
            <div className="faq-panel"><p>Desktop, Documents, Downloads, Pictures, Movies, and Music, plus any folder you add.</p></div>
          </details>
          <details>
            <summary>Can Vista delete my files?<svg className="pm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg></summary>
            <div className="faq-panel"><p>No. Clean Up only moves files you’ve reviewed to the Trash, and Undo brings them back.</p></div>
          </details>
          <details>
            <summary>Does anything leave my Mac?<svg className="pm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg></summary>
            <div className="faq-panel"><p>No. Search, text recognition, duplicate detection and Visual Search run on your Mac. The only network request is the one-time Visual Search model download, about 110 MB; there’s no account and no cloud.</p></div>
          </details>
          <details>
            <summary>How does Visual Search work?<svg className="pm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg></summary>
            <div className="faq-panel"><p>Vista uses an AI model that runs on your Mac. You describe what you are looking for, like “horse”, “mountain” or “red car”, and it matches photos and videos by what’s in them, not by filename; text inside screenshots and PDFs is searchable too. The model is a one-time download of about 110 MB when you set it up, and after that every search works offline.</p></div>
          </details>
          <details>
            <summary>Which themes does Vista have?<svg className="pm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg></summary>
            <div className="faq-panel"><p>Sage Soft, White and Dark. Sage Soft is the default, Vista’s own soft green theme, and you can switch at any time.</p></div>
          </details>
          <details>
            <summary>Can I style all my folders at once?<svg className="pm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg></summary>
            <div className="faq-panel"><p>Yes. Pick a color, one of the seven rounder folder styles and an icon, then apply that style to every folder in one click, or keep individual folders different.</p></div>
          </details>
          <details>
            <summary>Does Vista work without internet?<svg className="pm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg></summary>
            <div className="faq-panel"><p>Yes. Visual Search needs its one-time model download of about 110 MB; after that everything runs locally, and your license works without a connection.</p></div>
          </details>
          <details>
            <summary>Is this a subscription?<svg className="pm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg></summary>
            <div className="faq-panel"><p>No. You pay once and get free updates.</p></div>
          </details>
          <details>
            <summary>Why is it $19 and not $29?<svg className="pm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg></summary>
            <div className="faq-panel"><p>The first 300 licenses are $19 as a thank-you to early users. After that it’s $29. Still one payment, still with free updates.</p></div>
          </details>
          <details>
            <summary>What do I need?<svg className="pm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg></summary>
            <div className="faq-panel"><p>A Mac running macOS 14 Sonoma or later.</p></div>
          </details>
        </div>
      </div>
    </section>

    <section className="section pb-16 md:pb-24" aria-labelledby="close-title">
      <div className="flex flex-col items-center text-center">
        <span className="appicon w-16 h-16" aria-hidden="true"></span>
        <h2 id="close-title" className="h2 mt-8">See what you have.</h2>
        <p className="lede mt-5">7 days free. No account needed.</p>
        <a href="https://vistaformac.com/Vista.zip" download="Vista.zip" className="btn cta-arrow has-icon mt-9">
          <span className="cta-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v11M7.5 10.5 12 15l4.5-4.5M5 19.5h14" /></svg>
          </span>
          <span className="cta-label">Download for Mac</span>
          <span className="cta-arrow-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
          </span>
        </a>
      </div>
    </section>
  </main>
</div>

      <SiteFooter />
      <Reveal />
      <FaqAccordion />
    </>
  );
}
