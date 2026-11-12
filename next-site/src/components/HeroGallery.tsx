"use client";

import { useCallback, useRef, useState, type KeyboardEvent } from "react";

import { shots } from "@/lib/site";

/**
 * The product tour: one large screenshot, ten thumbnails underneath. Tabs are
 * a real tablist — arrow keys, Home and End move between them.
 */
export function HeroGallery() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const shot = shots[active];

  const select = useCallback((index: number, focus = true) => {
    const next = (index + shots.length) % shots.length;
    setActive(next);
    if (focus) tabRefs.current[next]?.focus();
  }, []);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      select(active + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      select(active - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      select(0);
    } else if (event.key === "End") {
      event.preventDefault();
      select(shots.length - 1);
    }
  };

  return (
    <figure className="mt-14 sm:mt-16">
      <div className="rounded-[22px] border border-line bg-paper-deep p-2 sm:p-3">
        <img
          key={shot.id}
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          fetchPriority={active === 0 ? "high" : "auto"}
          decoding="async"
          className="shot-in block h-auto w-full rounded-[14px] border border-line bg-surface"
        />
      </div>

      <figcaption className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm">
        <span className="font-medium text-ink">{shot.name}</span>
        <span className="text-muted" aria-live="polite">
          {shot.caption}
        </span>
      </figcaption>

      <div
        role="tablist"
        aria-label="Vista screenshots"
        onKeyDown={onKeyDown}
        className="mt-5 grid grid-cols-5 gap-2 sm:gap-3 md:grid-cols-10"
      >
        {shots.map((item, index) => {
          const selected = index === active;
          return (
            <button
              key={item.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-label={item.name}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(index, false)}
              className={[
                "group overflow-hidden rounded-lg border p-0.5 transition-colors",
                selected
                  ? "border-accent bg-accent-soft"
                  : "border-line bg-surface hover:border-line-strong",
              ].join(" ")}
            >
              <img
                src={item.thumb}
                alt=""
                width={120}
                height={75}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full rounded-[5px]"
              />
            </button>
          );
        })}
      </div>
    </figure>
  );
}
