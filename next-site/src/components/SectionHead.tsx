import type { ReactNode } from "react";

type SectionHeadProps = {
  /** id for the h2, so the section can be labelled by it. */
  id: string;
  eyebrow: string;
  title: ReactNode;
  body?: string;
  align?: "left" | "center";
};

export function SectionHead({
  id,
  eyebrow,
  title,
  body,
  align = "left",
}: SectionHeadProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl"
      }
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="headline mt-4 text-ink">
        {title}
      </h2>
      {body ? <p className="lede mt-5">{body}</p> : null}
    </div>
  );
}
