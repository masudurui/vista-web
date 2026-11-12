import Link from "next/link";

import { ArrowRight, FolderMark } from "@/components/icons";
import { nav, pricing, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-[17px] font-medium tracking-tight text-ink"
          aria-label={`${site.name} home`}
        >
          <span className="text-accent">
            <FolderMark />
          </span>
          {site.name}
        </Link>

        <nav aria-label="Sections" className="hidden sm:block">
          <ul className="flex items-center gap-8 text-[15px] text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={site.buyUrl}
          className="btn px-5 py-2.5 text-sm"
          rel="noopener noreferrer"
        >
          Buy for {pricing.earlyBird}
          <ArrowRight width={14} height={14} />
        </a>
      </div>
    </header>
  );
}
