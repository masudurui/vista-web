import Link from "next/link";
import type { ReactNode } from "react";

import { tools } from "@/lib/tools";

/**
 * Free tools section. The list lives in src/lib/tools.ts (shared with the
 * sitemap); the tools themselves are served by this app from public/tools — see
 * the rewrites in next.config.ts — so these are internal routes and use <Link>.
 */

/** Icon artwork copied from the tools hub. */
const icons: Record<string, ReactNode> = {
  "screenshot-settings": (
    <>
      <path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" />
      <circle cx="12" cy="12" r="2.6" />
    </>
  ),
  "folder-xray": (
    <>
      <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.2h7.5A2.5 2.5 0 0 1 21 9.7v7.8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z" />
      <circle cx="11.5" cy="13.6" r="2.6" />
      <path d="M13.5 15.6l2.2 2.2" />
    </>
  ),
  "folder-structure": (
    <>
      <rect x="4" y="3.5" width="6" height="5" rx="1.2" />
      <rect x="14" y="10" width="6" height="5" rx="1.2" />
      <rect x="14" y="16.5" width="6" height="4" rx="1.2" />
      <path d="M7 8.5V18.5M7 12.5h7M7 18.5h7" />
    </>
  ),
  "file-naming": (
    <>
      <path d="M7 3h7l5 5v12.2a.8.8 0 0 1-.8.8H7a.8.8 0 0 1-.8-.8V3.8A.8.8 0 0 1 7 3z" />
      <path d="M14 3v5h5M9.5 13h6M9.5 16.5h4" />
    </>
  ),
  "wallpaper-folder-colors": (
    <>
      <path d="M12 3.2a8.8 8.8 0 1 0 0 17.6c1.2 0 2-.8 2-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8H17a3.8 3.8 0 0 0 3.8-3.8C20.8 6.6 16.9 3.2 12 3.2z" />
      <circle cx="7.8" cy="11.2" r="1" fill="currentColor" stroke="none" />
      <circle cx="10.2" cy="7.6" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.6" cy="7.6" r="1" fill="currentColor" stroke="none" />
    </>
  ),
};

export function FreeTools() {
  return (
    <section id="free-tools" className="section" aria-labelledby="free-tools-title">
      <div className="sec-head">
        <p className="eyebrow">Free tools</p>
        <h2 id="free-tools-title" className="h2">
          Small tools for<br className="hidden md:inline" /> a tidier Mac.
        </h2>
        <p className="lede">Free, in your browser, and nothing to sign up for.</p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mt-10 md:mt-14">
        {tools.map((tool) => (
          <li key={tool.slug}>
            <Link
              href={`/tools/${tool.slug}/`}
              className="group flex h-full min-h-[80px] items-start gap-3.5 rounded-[18px] border border-line bg-surface p-5 transition-colors hover:border-line-strong"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[12px] bg-accent-soft text-accent-strong">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  {icons[tool.slug]}
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block text-[16px] font-semibold tracking-[-0.015em] text-ink">
                  {tool.label}
                </span>
                <span className="mt-0.5 block text-[13px] leading-[1.4] text-faint">
                  {tool.hint}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-[13px] text-faint md:text-center">
        Everything runs in your browser. Files and images you drop in stay on
        your Mac.
      </p>
    </section>
  );
}
