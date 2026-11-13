import type { Metadata } from "next";

import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Support | Vista",
  description:
    "Need help with Vista? Email support@vistaformac.com and we’ll help you sort it out.",
  alternates: { canonical: "/support/" },
  openGraph: {
    type: "website",
    url: "https://vistaformac.com/support/",
    siteName: "Vista",
    title: "Support | Vista",
    description:
      "Need help with Vista? Email support@vistaformac.com and we’ll help you sort it out.",
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
    title: "Support | Vista",
    description:
      "Need help with Vista? Email support@vistaformac.com and we’ll help you sort it out.",
    images: ["/images/og-image.png"],
  },
};

const link = "text-accent-strong underline underline-offset-[2px]";

export default function SupportPage() {
  return (
    <PageShell>
      <main id="top" className="mx-auto w-full max-w-[900px] px-4 pt-14 md:pt-24">
        <p className="eyebrow">Support</p>
        <h1 className="mt-3 text-[clamp(38px,5.6vw,60px)] font-semibold leading-[1.02] tracking-[-0.045em] [text-wrap:balance]">
          Support
        </h1>
        <p className="mt-5 max-w-[62ch] text-[clamp(17px,1.7vw,20px)] leading-[1.55] text-muted [text-wrap:pretty]">
          If you need help with Vista, email us at support@vistaformac.com. Tell
          us what you were doing and what happened, and we’ll help you sort it
          out.
        </p>

        <div className="mt-9 rounded-card border border-line-strong bg-paper p-6 md:p-7">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-accent-strong">
            Email support
          </p>
          <a
            href="mailto:support@vistaformac.com"
            className="mt-2.5 inline-block text-[clamp(19px,2.6vw,25px)] font-semibold tracking-[-0.025em] text-ink no-underline [overflow-wrap:anywhere] hover:underline hover:underline-offset-[3px]"
          >
            support@vistaformac.com
          </a>
          <div className="mt-5">
            <a className="btn" href="mailto:support@vistaformac.com">
              Email us
            </a>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-[clamp(22px,2.6vw,28px)] font-semibold leading-[1.2] tracking-[-0.025em]">
            Helpful links
          </h2>
          <ul className="mt-3 grid list-disc gap-2.5 pl-[22px] text-[16px] leading-[1.6] text-muted">
            <li>
              <a className={link} href="/release-notes/">Release notes</a> — what’s
              new in the latest version of Vista.
            </li>
            <li>
              <a className={link} href="/privacy/">Privacy policy</a> — how Vista
              handles your data.
            </li>
          </ul>
        </div>
      </main>
    </PageShell>
  );
}
