import { ArrowRight, DownloadIcon } from "@/components/icons";
import { pricing, site } from "@/lib/site";

export function PriceCard() {
  return (
    <div className="rounded-[22px] border border-line bg-surface p-7 sm:p-9">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium text-ink">Vista for Mac</p>
        <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-strong">
          Early bird
        </span>
      </div>

      <dl className="mt-7 grid gap-3">
        <div className="flex items-baseline justify-between gap-4">
          <dt className="text-xs font-medium tracking-[0.08em] uppercase text-faint">
            Early bird price
          </dt>
          <dd className="text-4xl font-medium tracking-tight text-ink">
            {pricing.earlyBird}
          </dd>
        </div>
        <div className="flex items-baseline justify-between gap-4 border-t border-line pt-3">
          <dt className="text-xs font-medium tracking-[0.08em] uppercase text-faint">
            Regular price
          </dt>
          <dd className="text-lg text-faint line-through">{pricing.regular}</dd>
        </div>
      </dl>

      <p className="mt-6 text-sm leading-relaxed text-muted">
        One payment. Early bird for the first {pricing.licenceCount} licenses,
        then {pricing.regular}.
      </p>

      <div className="mt-7 flex flex-col gap-3">
        <a
          href={site.buyUrl}
          className="btn w-full"
          rel="noopener noreferrer"
          data-polar-checkout
        >
          Buy for {pricing.earlyBird}
          <ArrowRight />
        </a>
        <a
          href={site.downloadUrl}
          className="btn-quiet w-full"
          rel="noopener noreferrer"
        >
          <DownloadIcon />
          Download free trial
        </a>
      </div>

      <p className="mt-5 text-center text-xs text-faint">
        Try free for {pricing.trialDays} days first · {site.requirements}
      </p>
    </div>
  );
}
