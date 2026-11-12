"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";

import { shots } from "@/lib/media";

const SLIDE = 112;
const DURATION = 700;

/**
 * The hero product tour, matching the live page's DOM and slide behaviour:
 * the incoming frame starts on the side you are travelling from (right for
 * next, left for previous), the outgoing frame leaves the other way, and the
 * swap commits once the incoming screenshot has loaded.
 */
export function HeroGallery() {
  /** What the caption and the tablist show — updates on click, like the live page. */
  const [selected, setSelected] = useState(0);

  const indexRef = useRef(0); // the screenshot currently on screen
  const aFig = useRef<HTMLElement | null>(null);
  const bFig = useRef<HTMLElement | null>(null);
  const aImg = useRef<HTMLImageElement | null>(null);
  const bImg = useRef<HTMLImageElement | null>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const stripRef = useRef<HTMLDivElement | null>(null);
  const token = useRef(0);
  const commit = useRef<(() => void) | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduce = useRef(false);

  const shot = shots[selected];

  useEffect(() => {
    reduce.current = matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const updateFade = useCallback(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const max = strip.scrollWidth - strip.clientWidth;
    strip.style.setProperty("--fade-start", strip.scrollLeft > 2 ? "24px" : "0px");
    strip.style.setProperty(
      "--fade-end",
      strip.scrollLeft < max - 2 ? "24px" : "0px",
    );
  }, []);

  useEffect(() => {
    updateFade();
    window.addEventListener("resize", updateFade);
    return () => window.removeEventListener("resize", updateFade);
  }, [updateFade]);

  /** Park both frames with transitions off: A showing the current shot. */
  const resetFrames = useCallback(() => {
    const a = aFig.current;
    const b = bFig.current;
    if (!a || !b) return;
    a.style.transition = "none";
    b.style.transition = "none";
    a.style.setProperty("--slide", "0%");
    b.style.setProperty("--slide", `${SLIDE}%`);
    bImg.current?.removeAttribute("src");
    void a.offsetWidth;
    a.style.transition = "";
    b.style.transition = "";
  }, []);

  const finish = useCallback(
    (target: number) => {
      const next = shots[target];
      if (aImg.current) {
        aImg.current.src = next.src;
        aImg.current.alt = next.alt;
      }
      indexRef.current = target;
      commit.current = null;
      if (timer.current) {
        clearTimeout(timer.current);
        timer.current = null;
      }
      resetFrames();
    },
    [resetFrames],
  );

  const show = useCallback(
    (target: number) => {
      const a = aFig.current;
      const b = bFig.current;
      const bI = bImg.current;
      if (!a || !b || !bI) return;
      if (target === indexRef.current) return;

      // Let any in-flight slide land first, so the direction is measured
      // against the frame that is actually on screen.
      if (commit.current) commit.current();

      const next = shots[target];
      const dir = target > indexRef.current ? 1 : -1; // >=: next, <: previous
      const mine = ++token.current;

      if (reduce.current) {
        finish(target);
        return;
      }

      bI.src = next.src;
      bI.alt = "";

      const run = () => {
        if (mine !== token.current) return;
        const inFrom = dir >= 0 ? `${SLIDE}%` : `-${SLIDE}%`;
        const outTo = dir >= 0 ? `-${SLIDE}%` : `${SLIDE}%`;

        a.style.transition = "none";
        b.style.transition = "none";
        b.style.setProperty("--slide", inFrom);
        a.style.setProperty("--slide", "0%");
        void b.offsetWidth;
        a.style.transition = "";
        b.style.transition = "";
        b.style.setProperty("--slide", "0%");
        a.style.setProperty("--slide", outTo);

        const done = () => {
          if (commit.current !== done) return;
          finish(target);
        };
        commit.current = done;
        timer.current = setTimeout(done, DURATION + 40);
      };

      let started = false;
      const start = () => {
        if (started || mine !== token.current) return;
        started = true;
        run();
      };

      if (bI.complete && bI.naturalWidth > 0) start();
      else {
        bI.onload = start;
        bI.onerror = start;
        setTimeout(start, 140);
      }
    },
    [finish],
  );

  const select = useCallback(
    (next: number, focus = true) => {
      const target = ((next % shots.length) + shots.length) % shots.length;
      setSelected(target);
      show(target);
      if (focus) tabRefs.current[target]?.focus();
      tabRefs.current[target]?.scrollIntoView({
        block: "nearest",
        inline: "center",
      });
    },
    [show],
  );

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      select(selected + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      select(selected - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      select(0);
    } else if (event.key === "End") {
      event.preventDefault();
      select(shots.length - 1);
    }
  };

  return (
    <div className="hero-showcase" data-hero-gallery>
      <div
        className="hero-panel"
        id="hero-panel"
        role="tabpanel"
        aria-labelledby={shot.id}
      >
        <div className="hero-slides">
          <figure className="hero-frame" id="hero-frame-a" ref={aFig}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              id="hero-shot"
              ref={aImg}
              src={shots[0].src}
              width={shots[0].width}
              height={shots[0].height}
              fetchPriority="high"
              decoding="async"
              alt={shots[0].alt}
            />
          </figure>
          <figure className="hero-frame" id="hero-frame-b" aria-hidden="true" ref={bFig}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img id="hero-shot-next" ref={bImg} alt="" decoding="async" />
          </figure>
          <figure className="hero-frame" id="hero-frame-video" hidden>
            <video
              id="hero-shot-video"
              muted
              loop
              playsInline
              preload="none"
              aria-label=""
            />
          </figure>
        </div>

        <button
          type="button"
          className="hero-nav hero-nav--prev"
          aria-label="Previous screenshot"
          onClick={() => select(selected - 1, false)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <button
          type="button"
          className="hero-nav hero-nav--next"
          aria-label="Next screenshot"
          onClick={() => select(selected + 1, false)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <p className="hero-caption" aria-live="polite">
        <b>{shot.name}</b> <span>{shot.text}</span>
      </p>

      <div className="hero-thumbs-wrap">
        <div
          className="hero-thumbs"
          role="tablist"
          aria-label="Vista screenshots"
          onKeyDown={onKeyDown}
          onScroll={updateFade}
          ref={stripRef}
        >
          {shots.map((item, i) => (
            <button
              key={item.id}
              ref={(node) => {
                tabRefs.current[i] = node;
              }}
              type="button"
              className="hero-thumb"
              id={item.id}
              role="tab"
              aria-selected={i === selected}
              aria-controls="hero-panel"
              aria-label={item.name}
              tabIndex={i === selected ? 0 : -1}
              onClick={() => select(i, false)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.thumb} width={480} height={300} alt="" decoding="async" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

