import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

/**
 * Polar's embedded checkout: the loader comes from jsDelivr, the overlay it
 * opens talks to Polar's origins, and the card fields render inside Stripe's
 * frames. Only the hosts those pieces need are added.
 */
const POLAR_SCRIPT = "https://cdn.jsdelivr.net";
const POLAR_FRAMES = [
  "https://buy.polar.sh",
  "https://polar.sh",
  "https://js.stripe.com",
  "https://hooks.stripe.com",
];
const POLAR_CONNECT = [
  "https://api.polar.sh",
  "https://buy.polar.sh",
  "https://polar.sh",
  "https://api.stripe.com",
  "https://merchant-ui-api.stripe.com",
];
const POLAR_IMAGES = ["https://buy.polar.sh", "https://polar.sh"];

/**
 * Security headers applied to every route.
 *
 * `script-src` has to allow inline scripts because the App Router streams its
 * hydration payload inline. Development additionally needs `'unsafe-eval'` and
 * websockets for React Refresh / Turbopack HMR — those are only ever added when
 * NODE_ENV is "development", so the production policy stays strict.
 */
function contentSecurityPolicy(): string {
  const scriptSrc = ["'self'", "'unsafe-inline'", POLAR_SCRIPT];
  const connectSrc = ["'self'", ...POLAR_CONNECT];

  if (isDev) {
    scriptSrc.push("'unsafe-eval'");
    connectSrc.push("ws:", "wss:");
  }

  return [
    "default-src 'self'",
    `script-src ${scriptSrc.join(" ")}`,
    // The live page loads Inter as a fallback for non-Apple platforms.
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    `img-src 'self' data: blob: ${POLAR_IMAGES.join(" ")}`,
    "media-src 'self'",
    "font-src 'self' data: https://fonts.gstatic.com",
    `connect-src ${connectSrc.join(" ")}`,
    `frame-src ${POLAR_FRAMES.join(" ")}`,
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
  ].join("; ");
}

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "Content-Security-Policy", value: contentSecurityPolicy() },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  /* The repo root has no package.json, so tell Turbopack where the app lives. */
  turbopack: { root: process.cwd() },

  /* The free tools ship as static HTML in public/tools (hub + one folder per
     tool). Trailing slashes keep their relative links (`../`, `../<tool>/`)
     resolving, and the rewrites serve the folder index files at pretty URLs. */
  trailingSlash: true,

  async rewrites() {
    return [
      { source: "/tools", destination: "/tools/index.html" },
      { source: "/tools/:slug", destination: "/tools/:slug/index.html" },
    ];
  },

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
