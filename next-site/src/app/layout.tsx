import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

import { site, pricing } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}: a visual file browser for macOS`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
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
  authors: [{ name: "Vista", url: site.url }],
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
    url: site.url,
    siteName: site.name,
    title: `${site.name}: ${site.tagline}`,
    description: site.ogDescription,
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
    title: `${site.name}: ${site.tagline}`,
    description: site.ogDescription,
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
  themeColor: "#fbfaf7",
  colorScheme: "light",
};

/**
 * Structured data for search engines. Values are taken from the same constants
 * used to render the page, so they cannot drift apart.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: site.name,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "macOS 14 or later",
      description: site.description,
      url: site.url,
      image: `${site.url}/images/og-image.png`,
      offers: [
        {
          "@type": "Offer",
          name: "Early bird",
          price: pricing.earlyBird.replace("$", ""),
          priceCurrency: "USD",
          category: "one-time purchase",
          url: site.buyUrl,
        },
        {
          "@type": "Offer",
          name: "Regular",
          price: pricing.regular.replace("$", ""),
          priceCurrency: "USD",
          category: "one-time purchase",
          url: site.buyUrl,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          // Static, build-time JSON built from our own constants.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
