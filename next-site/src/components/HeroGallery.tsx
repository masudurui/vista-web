"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";

import { shots } from "@/lib/media";

const SLIDE = 112;
const DURATION = 720;

/**
 * The hero product tour, rebuilt to the live DOM: a wallpaper panel with a
 * 16:10 window that slides between screenshots, the caption underneath, and the
 * thumbnail strip with its edge fade. Arrow keys work on the tablist.
 */
export function HeroGallery() {
  const [index, setIndex] = useState(0);
  const [incoming, setIncoming] = useState<number | null>(null);
  const [slides, setSlides] = useState({ a: 0, b: SLIDE });
  const stripRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const shot = shots[index];

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

  /* Commit the slide once the incoming frame has landed. */
  useEffect(() => {
    if (incoming === null) return;
    const dir = incoming > index ? 1 : -1;
    const frame = requestAnimationFrame(() => {
      setSlides({ a: -dir * SLIDE, b: 0 });
    });
    const commit = setTimeout(() => {
      setIndex(incoming);
      setIncoming(null);
      setSlides({ a: 0, b: SLIDE });
    }, DURATION);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(commit);
    };
    // Only react to a new incoming frame; index is read inside.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [incoming]);

  const select = useCallback(
    (next: number, focus = true) => {
      const target = ((next % shots.length) + shots.length) % shots.length;
      if (incoming === null && target !== index) setIncoming(target);
      if (focus) tabRefs.current[target]?.focus();
      tabRefs.current[target]?.scrollIntoView({
        block: "nearest",
        inline: "center",
      });
    },
    [index, incoming],
  );

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      select(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      select(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      select(0);
    } else if (event.key === "End") {
      event.preventDefault();
      select(shots.length - 1);
    }
  };

  const nextShot = incoming === null ? null : shots[incoming];

  return (
    <div className="hero-showcase" data-hero-gallery>
      <div
        className="hero-panel"
        id="hero-panel"
        role="tabpanel"
        aria-labelledby={shot.id}
      >
        <div className="hero-slides">
          <figure
            className="hero-frame"
            id="hero-frame-a"
            style={{ "--slide": `${slides.a}%` } as CSSProperties}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              id="hero-shot"
              src={shot.src}
              width={shot.width}
              height={shot.height}
              fetchPriority={index === 0 ? "high" : "auto"}
              decoding="async"
              alt={shot.alt}
            />
          </figure>
          <figure
            className="hero-frame"
            id="hero-frame-b"
            aria-hidden="true"
            style={{ "--slide": `${slides.b}%` } as CSSProperties}
          >
            {nextShot ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img id="hero-shot-next" src={nextShot.src} alt="" decoding="async" />
            ) : null}
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
          onClick={() => select(index - 1, false)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <button
          type="button"
          className="hero-nav hero-nav--next"
          aria-label="Next screenshot"
          onClick={() => select(index + 1, false)}
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
              aria-selected={i === index}
              aria-controls="hero-panel"
              aria-label={item.name}
              tabIndex={i === index ? 0 : -1}
              onClick={() => select(i, false)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.thumb}
                width={480}
                height={300}
                alt=""
                decoding="async"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
