import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";

import { PolarCheckout } from "@/components/PolarCheckout";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vistaformac.com"),
  title: "Vista: a visual file browser for macOS",
  description:
    "Vista is a file browser for macOS that shows your files as thumbnails, sorted by kind. Style every folder, find photos by what’s in them with an on-device AI model (a one-time 110 MB download, then offline), and search the text inside screenshots and PDFs. Everything runs on your Mac.",
  applicationName: "Vista",
  generator: "Next.js",
  keywords: [
    "Vista",
    "file browser for macOS",
    "visual file browser",
    "Mac file manager",
    "thumbnail file browser",
    "search inside screenshots",
    "visual search on-device",
    "folder customization",
    "clean up disk space macOS",
  ],
  authors: [{ name: "Vista", url: "https://vistaformac.com" }],
  creator: "Vista",
  publisher: "Vista",
  category: "productivity",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://vistaformac.com/",
    siteName: "Vista",
    title: "Vista: See your files, not filenames.",
    description:
      "A visual file browser for macOS. Thumbnails sorted by kind, rounder folders in Sage Soft, White or Dark, Visual Search for photos and videos, and search inside screenshots and PDFs. Everything runs on your Mac.",
    locale: "en_US",
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
    title: "Vista: See your files, not filenames.",
    description:
      "A visual file browser for macOS. Thumbnails sorted by kind, rounder folders in Sage Soft, White or Dark, Visual Search for photos and videos, and search inside screenshots and PDFs. Everything runs on your Mac.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/images/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};

/** Same structured data the live page publishes. */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Vista",
  url: "https://vistaformac.com/",
  image: "https://vistaformac.com/images/og-image.png",
  description:
    "A visual file browser for macOS that shows files as thumbnails sorted by kind, lets you style every folder, and finds photos and videos by what’s in them with an AI model that runs on your Mac. The model is a one-time 110 MB download, then search works offline. Everything stays on the device.",
  featureList: [
    "Visual Search: describe a photo or video and find it by what’s in it",
    "Visual Search model: a one-time 110 MB download, then every search works offline",
    "Offline search across photos, videos, screenshots, PDFs and the text inside files",
    "Thumbnails sorted by kind",
    "24 folder colors, 7 rounder folder styles and 31 icons",
    "Apply one folder style to all folders at once",
    "Sage Soft, White and Dark themes",
    "Menu bar icon",
    "Search filenames and the text inside screenshots and PDFs",
    "Duplicate and near-identical photo detection",
    "Keyboard-first navigation",
    "Works offline, with no account and no cloud",
  ],
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "macOS 14+",
  offers: {
    "@type": "Offer",
    price: "19.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://vistaformac.com/#pricing",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        />
        <noscript>
          <style>{`.site-head{transform:none!important;pointer-events:auto!important}`}</style>
        </noscript>
      </head>
      <body>
        {children}
        {/* Polar embedded checkout: `data-auto-init` wires every
            [data-polar-checkout] trigger on the page, same as the live site.
            PolarCheckout re-runs Polar.init() because the embed arrives after
            DOMContentLoaded. */}
        <Script
          src="https://cdn.jsdelivr.net/npm/@polar-sh/checkout@latest/dist/embed.global.js"
          strategy="afterInteractive"
          data-auto-init=""
        />
        <PolarCheckout />
        <script
          type="application/ld+json"
          // Static, build-time JSON built from our own constants.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
