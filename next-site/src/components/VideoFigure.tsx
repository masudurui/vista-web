"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { featureVideos, VIDEO_ASPECT } from "@/lib/media";

const PLAY_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 5.5v13l11-6.5z" />
  </svg>
);

const PAUSE_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <rect x="6.5" y="5" width="4" height="14" rx="1" />
    <rect x="13.5" y="5" width="4" height="14" rx="1" />
  </svg>
);

type Props = {
  name: keyof typeof featureVideos;
  /** Extra classes from the live markup, e.g. "aspect-[16/10]" or "fit". */
  className?: string;
};

/**
 * A feature clip in the laptop frame. This is what the live page's media loader
 * ends up rendering: the figure marked as video, the clip itself, an optional
 * keystroke cue, and the play/pause button that appears on hover.
 */
export function VideoFigure({ name, className = "" }: Props) {
  const video = featureVideos[name];
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [paused, setPaused] = useState(false);
  const [cue, setCue] = useState(false);
  const userPaused = useRef(false);

  const toggle = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      userPaused.current = false;
      void el.play().catch(() => {});
    } else {
      userPaused.current = true;
      el.pause();
    }
  }, []);

  /* Only decode footage that is on screen, like the live page does. */
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !video.cues) return;

    let frame = 0;
    const tick = () => {
      const { currentTime } = el;
      const hit = video.cues?.some(
        ([start, length]) => currentTime >= start && currentTime < start + length,
      );
      setCue(Boolean(hit));
      frame = requestAnimationFrame(tick);
    };
    const start = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      setCue(false);
    };

    el.addEventListener("play", start);
    el.addEventListener("pause", stop);
    if (!el.paused) start();
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("play", start);
      el.removeEventListener("pause", stop);
    };
  }, [video.cues]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting }) => {
          if (userPaused.current) return;
          if (isIntersecting) void el.play().catch(() => {});
          else el.pause();
        });
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <figure
      className={`media has-media is-video ${className}`.trim()}
      style={{ aspectRatio: VIDEO_ASPECT }}
    >
      <video
        ref={videoRef}
        src={video.src}
        poster={video.poster}
        aria-label={video.alt}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
      />
      {video.cues?.length ? (
        <span
          className={cue ? "cue on" : "cue"}
          aria-hidden="true"
          // Static markup from our own config, never user content.
          dangerouslySetInnerHTML={{
            __html: `<kbd>${video.cues[0][2]}</kbd>${video.cues[0][3]}`,
          }}
        />
      ) : null}
      <button
        type="button"
        className="vbtn"
        onClick={toggle}
        aria-label={paused ? "Play video" : "Pause video"}
      >
        {paused ? PLAY_ICON : PAUSE_ICON}
      </button>
    </figure>
  );
}
