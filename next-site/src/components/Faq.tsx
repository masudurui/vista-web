import { ChevronDown } from "@/components/icons";
import { faq } from "@/lib/site";

/** Questions straight from the shipped site. Native <details>, so it works without JS. */
export function Faq() {
  return (
    <div className="mt-12 border-y border-line">
      {faq.map((item) => (
        <details key={item.question} className="group border-b border-line last:border-b-0">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[17px] font-medium text-ink transition-colors hover:text-accent-strong [&::-webkit-details-marker]:hidden">
            {item.question}
            <span className="shrink-0 text-faint transition-transform duration-200 group-open:rotate-180">
              <ChevronDown />
            </span>
          </summary>
          <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-muted">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
