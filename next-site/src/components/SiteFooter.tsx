import Link from "next/link";

import { FolderMark } from "@/components/icons";
import { site } from "@/lib/site";

const footerLinks = [
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Privacy", href: `${site.url}/privacy/` },
  { label: "Free Mac tools", href: `${site.url}/tools/` },
  { label: "Compare", href: `${site.url}/compare/` },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <p className="flex items-center gap-2 text-[17px] font-medium tracking-tight text-ink">
            <span className="text-accent">
              <FolderMark />
            </span>
            {site.name}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            A visual file browser for macOS. Thumbnails, on-device search, and
            nothing uploaded.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-ink"
                  rel={
                    link.href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="wrap flex flex-col gap-2 py-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Vista. One-time purchase, free updates.</p>
          <p>Made for macOS 14 or later.</p>
        </div>
      </div>
    </footer>
  );
}
