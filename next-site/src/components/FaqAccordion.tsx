"use client";

import { useEffect } from "react";

const DURATION = 320;
const EASING = "cubic-bezier(.23, 1, .32, 1)";

/**
 * FAQ rows stay native <details>, so keyboard, screen readers and find-in-page
 * keep working; the answer height is animated so opening a question never snaps
 * the page below it. Reduced motion falls back to the instant toggle.
 */
export function FaqAccordion() {
  useEffect(() => {
    const faq = document.getElementById("faq");
    if (!faq) return;

    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    const teardown: Array<() => void> = [];

    faq.querySelectorAll<HTMLDetailsElement>("details").forEach((details) => {
      const summary = details.querySelector("summary");
      const panel = details.querySelector<HTMLElement>(".faq-panel");
      if (!summary || !panel || typeof panel.animate !== "function") return;

      let anim: Animation | null = null;
      let open = details.open;

      const onToggle = () => {
        if (!anim) open = details.open;
      };
      details.addEventListener("toggle", onToggle);

      const onClick = (event: Event) => {
        event.preventDefault();

        if (reduce.matches) {
          open = !open;
          details.open = open;
          return;
        }

        const next = !open;
        const from = next && !details.open ? 0 : panel.getBoundingClientRect().height;

        if (anim) {
          anim.cancel();
          anim = null;
        }

        open = next;
        if (next) details.open = true;
        const to = next ? panel.scrollHeight : 0;

        anim = panel.animate([{ height: `${from}px` }, { height: `${to}px` }], {
          duration: DURATION,
          easing: EASING,
        });

        anim.onfinish = () => {
          anim = null;
          details.open = next;
        };
      };
      summary.addEventListener("click", onClick);

      teardown.push(() => {
        summary.removeEventListener("click", onClick);
        details.removeEventListener("toggle", onToggle);
        anim?.cancel();
      });
    });

    return () => teardown.forEach((fn) => fn());
  }, []);

  return null;
}
