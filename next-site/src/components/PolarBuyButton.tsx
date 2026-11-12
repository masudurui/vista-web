"use client";

import Script from "next/script";
import { useEffect, type ReactNode } from "react";

/**
 * Polar embedded checkout.
 *
 * The Buy buttons are plain links to the checkpoint URL with Polar's
 * `data-polar-checkout` hooks, exactly like the old static page. The overlay is
 * opened by Polar's own embed script (`embed.global.js`), never by an iframe we
 * control, and the checkout URL must stay byte-for-byte identical so the
 * post-purchase licence email keeps working.
 */
const CHECKOUT_URL =
  "https://buy.polar.sh/polar_cl_TUK1YuJb0ImcyWnIdfuDXfaBeenBgx5fgmHdU2T5oTH";

/** Overlay theme passed to Polar. */
const THEME = "dark";

export function PolarBuyButton({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={CHECKOUT_URL}
      className={className}
      data-polar-checkout=""
      data-polar-checkout-theme={THEME}
    >
      {children}
    </a>
  );
}

type PolarEmbedGlobal = { EmbedCheckout?: { init?: () => void } };

/**
 * Loads the embed and makes sure it binds.
 *
 * The script only self-initialises from `data-auto-init` when it runs before
 * `DOMContentLoaded`. `next/script` with `strategy="afterInteractive"` injects
 * it after hydration, so that event has already fired and the click handlers
 * would never be attached — the Buy links would just navigate. `init()` is
 * idempotent (it removes and re-adds the same listener), so we call it as soon
 * as the embed is available. No JavaScript? The links still work as links.
 */
export function PolarEmbed() {
  useEffect(() => {
    let cancelled = false;
    let poll = 0;

    const wire = () => {
      const embed = (window as unknown as { Polar?: PolarEmbedGlobal }).Polar
        ?.EmbedCheckout;
      if (!embed || typeof embed.init !== "function") return false;
      embed.init();
      return true;
    };

    if (!wire()) {
      poll = window.setInterval(() => {
        if (cancelled) return;
        if (wire()) window.clearInterval(poll);
      }, 150);
      window.setTimeout(() => window.clearInterval(poll), 15000);
    }

    return () => {
      cancelled = true;
      window.clearInterval(poll);
    };
  }, []);

  return (
    <Script
      src="https://cdn.jsdelivr.net/npm/@polar-sh/checkout@0.1/dist/embed.global.js"
      strategy="afterInteractive"
      data-auto-init=""
    />
  );
}
