"use client";

import { useEffect } from "react";

/**
 * Polar's embedded checkout only self-initialises from its `data-auto-init`
 * attribute when the script runs before `DOMContentLoaded`. Next injects the
 * script after hydration, so that event has already fired and the embed never
 * binds its click handlers — instead the Buy links would just navigate.
 *
 * `Polar.init()` is idempotent (it removes and re-adds the same handler), so we
 * call it as soon as the embed is available. The links and their attributes stay
 * exactly as they are, and without JavaScript they still work as plain links.
 */
type PolarEmbed = { init?: () => void };
type PolarGlobal = { EmbedCheckout?: PolarEmbed };

export function PolarCheckout() {
  useEffect(() => {
    let cancelled = false;
    let poll = 0;
    let giveUp = 0;

    const wire = () => {
      const polar = (window as unknown as { Polar?: PolarGlobal }).Polar;
      const embed = polar?.EmbedCheckout;
      if (!embed || typeof embed.init !== "function") return false;
      embed.init(); // idempotent: removes and re-adds the same click handler
      return true;
    };

    if (wire()) return;

    poll = window.setInterval(() => {
      if (cancelled) return;
      if (wire()) window.clearInterval(poll);
    }, 150);

    giveUp = window.setTimeout(() => window.clearInterval(poll), 15000);

    return () => {
      cancelled = true;
      window.clearInterval(poll);
      window.clearTimeout(giveUp);
    };
  }, []);

  return null;
}
