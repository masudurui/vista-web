import type { Metadata } from "next";

import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy | Vista",
  description:
    "Vista is a local file browser for Mac. Your files, folders, and search activity never leave your device. This policy explains how Vista handles your data.",
  alternates: { canonical: "/privacy/" },
  openGraph: {
    type: "article",
    url: "https://vistaformac.com/privacy/",
    siteName: "Vista",
    title: "Privacy Policy | Vista",
    description:
      "Vista runs entirely on your Mac. Your files, folders, and search activity never leave your device.",
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
    title: "Privacy Policy | Vista",
    description:
      "Vista runs entirely on your Mac. Your files, folders, and search activity never leave your device.",
    images: ["/images/og-image.png"],
  },
};

const notCollected = [
  "We do not collect any personal information.",
  "We do not require an account.",
  "We do not track how you use the app.",
  "We do not use analytics or advertising SDKs.",
  "We do not send your files, search queries, or file names anywhere.",
] as const;

const body = "max-w-[70ch] text-[16px] leading-[1.65] text-muted";
const heading =
  "mt-10 text-[clamp(22px,2.6vw,28px)] font-semibold leading-[1.2] tracking-[-0.025em]";
const list =
  "mt-3 grid list-disc gap-2.5 pl-[22px] text-[16px] leading-[1.6] text-muted";

export default function PrivacyPage() {
  return (
    <PageShell>
      <main id="top" className="mx-auto w-full max-w-[900px] px-4 pt-14 md:pt-24">
        <p className="eyebrow">Privacy</p>
        <h1 className="mt-3 text-[clamp(38px,5.6vw,60px)] font-semibold leading-[1.02] tracking-[-0.045em] [text-wrap:balance]">
          Privacy Policy for Vista
        </h1>
        <p className="mt-3.5 text-[14px] text-faint">
          Last updated: November 13, 2026
        </p>

        <div className="mt-9">
          <p className={body}>
            Vista is a local file browser for Mac. Your privacy is important to
            us. This policy explains how Vista handles your data.
          </p>

          <h2 className={heading}>What Vista does with your files</h2>
          <p className={`mt-3 ${body}`}>
            Vista runs entirely on your Mac. Your files, folders, and search
            activity never leave your device. We do not upload, store, or access
            your files on any server.
          </p>

          <h2 className={heading}>Data we do not collect</h2>
          <ul className={list}>
            {notCollected.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className={heading}>Visual Search model</h2>
          <p className={`mt-3 ${body}`}>
            If you enable Visual Search, Vista downloads a small on-device model
            (about 110 MB) the first time you use it. This model is used only on
            your Mac to find photos and videos by description. After the
            download, Visual Search works fully offline. No files or search
            queries are sent during or after the download.
          </p>

          <h2 className={heading}>Website</h2>
          <p className={`mt-3 ${body}`}>
            The Vista website does not use tracking cookies or analytics. We do
            not collect personal data through the website.
          </p>

          <h2 className={heading}>Contact</h2>
          <p className={`mt-3 ${body}`}>
            If you have questions about this privacy policy, you can contact us
            at{" "}
            <a
              className="text-accent-strong underline underline-offset-[2px]"
              href="mailto:support@vistaformac.com"
            >
              support@vistaformac.com
            </a>
            .
          </p>
        </div>
      </main>
    </PageShell>
  );
}
