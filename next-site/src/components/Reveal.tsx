"use client";

import { useEffect } from "react";

/**
 * The live page's section entrance: each cluster of elements rises out of a
 * short blur, staggered 50ms, once it scrolls into view. Ported as-is — the
 * classes are only added on the client so server-rendered HTML stays visible.
 */
export function Reveal() {
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    const clusters: HTMLElement[][] = [];
    const push = (items: HTMLElement[]) => {
      if (items.length) clusters.push(items);
    };
    const all = (root: ParentNode, sel: string) =>
      Array.from(root.querySelectorAll<HTMLElement>(sel));

    [
      "customize",
      "search",
      "visual-search",
      "viewer",
      "keyboard",
      "cleanup",
      "themes",
      "privacy",
      "free-tools",
    ].forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;
      push(all(section, ".sec-head > *"));
      push(all(section, ":scope > .laptop"));
      push(all(section, ":scope > .keys-note"));
      push(all(section, ".grid > *"));
    });

    const faq = document.getElementById("faq");
    if (faq) {
      push(all(faq, ".grid > div:first-child > *"));
      push(all(faq, "details"));
    }

    const close = document.querySelector('section[aria-labelledby="close-title"]');
    if (close) push(all(close, ":scope > div > *"));

    const poster = document.querySelector<HTMLElement>("#pricing .price-poster");
    if (poster) push([poster]);

    const foot = document.querySelector(".foot");
    if (foot) {
      push(all(foot, ".foot-panels > *"));
      push(all(foot, ".foot-band-inner > *"));
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add("is-in");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    const touched: HTMLElement[] = [];

    clusters.forEach((items) => {
      items.forEach((el, i) => {
        el.classList.add("rise");
        el.style.setProperty("--d", Math.min(i * 50, 200) + "ms");
        touched.push(el);

        const clearBlur = (event: TransitionEvent) => {
          if (event.target !== el || event.propertyName !== "filter") return;
          el.style.filter = "none";
          el.removeEventListener("transitionend", clearBlur);
        };
        el.addEventListener("transitionend", clearBlur);
        io.observe(el);
      });
    });

    return () => {
      io.disconnect();
      touched.forEach((el) => {
        el.classList.remove("rise", "is-in");
        el.style.removeProperty("--d");
        el.style.removeProperty("filter");
      });
    };
  }, []);

  return null;
}
