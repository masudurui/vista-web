type ShotProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Render above the fold without lazy loading. */
  priority?: boolean;
  caption?: string;
  className?: string;
};

/**
 * A product screenshot in a hairline frame. Plain `img` on purpose: the files
 * are already sized WebP/JPEG, so they ship as-is and stay portable to any host
 * (including a static export) without an image optimiser in the middle.
 */
export function Shot({
  src,
  alt,
  width,
  height,
  priority = false,
  caption,
  className,
}: ShotProps) {
  return (
    <figure className={className}>
      <div className="rounded-[18px] border border-line bg-paper-deep p-1.5 sm:p-2">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          className="block h-auto w-full rounded-[10px] border border-line bg-surface"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-xs leading-relaxed text-faint">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
