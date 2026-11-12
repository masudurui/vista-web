import { Check } from "@/components/icons";

export type Point = {
  title: string;
  body?: string;
};

/** A short list of true statements about the app, marked with a green tick. */
export function Points({ items }: { items: Point[] }) {
  return (
    <ul className="mt-8 grid gap-4">
      {items.map((item) => (
        <li key={item.title} className="flex gap-3">
          <span className="mt-0.5 text-accent">
            <Check width={17} height={17} />
          </span>
          <span className="text-[15px] leading-relaxed text-ink-soft">
            <span className="font-medium text-ink">{item.title}</span>
            {item.body ? <span className="text-muted"> {item.body}</span> : null}
          </span>
        </li>
      ))}
    </ul>
  );
}
