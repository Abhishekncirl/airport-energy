import { Check, Star } from 'lucide-react';

// Reusable card for a single wash tier. The medal colour is supplied by
// the parent so all the visual variation lives in one place.
//
// `featured` makes the card slightly bigger + adds a "Most popular" ribbon.
export default function WashPackageCard({
  tier,
  price,
  includes,
  accentColor,
  textColor,
  featured = false,
}) {
  return (
    <article
      className={`reveal group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-1.5 hover:shadow-2xl ${
        featured
          ? 'border-transparent ring-2 ring-offset-2 sm:scale-[1.03] lg:scale-105'
          : 'border-slate-200'
      }`}
      style={featured ? { boxShadow: `0 24px 60px -20px ${accentColor}66` } : undefined}
    >
      {/* Top accent bar (medal colour) */}
      <div
        aria-hidden="true"
        className="h-2.5 w-full"
        style={{ backgroundColor: accentColor }}
      />

      {/* "Most popular" ribbon for the featured tier */}
      {featured && (
        <div
          className="absolute right-4 top-6 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md"
          style={{ backgroundColor: accentColor }}
        >
          <Star className="h-3 w-3 fill-current" />
          Most popular
        </div>
      )}

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <h3
          className="text-sm font-extrabold uppercase tracking-[0.2em]"
          style={{ color: textColor }}
        >
          {tier}
        </h3>

        <p className="mt-3 flex items-baseline gap-1 text-brand-900">
          <span className="text-5xl font-extrabold tracking-tight sm:text-6xl">
            €{price}
          </span>
          <span className="text-sm font-semibold text-slate-500">/ wash</span>
        </p>

        <ul className="mt-6 space-y-3 text-sm text-slate-600">
          {includes.map((line) => (
            <li key={line} className="flex items-start gap-2.5">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: `${accentColor}22`, color: textColor }}
              >
                <Check className="h-3 w-3 stroke-[3]" />
              </span>
              <span className="leading-relaxed">{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
