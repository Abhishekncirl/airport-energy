import { Check, Info } from 'lucide-react';

// Generic service card used across the Other Services grid.
//   - emoji + title
//   - optional image (renders as a 16/9 banner on top)
//   - description
//   - optional list of `chips` (small tag pills)
//   - optional sectioned `groups`:
//        { heading, kind: 'checkmark' | 'plain', items: [string|{label,subtitle}] }
//   - optional `infoBox` callout (yellow Info tip - shown at the bottom)
//   - optional `footer` line
//
// New optional props (added for the AdBlue card):
//   - `accentColor`  - hex string that tints the top accent bar AND the
//                      checkmark pill colour. Falls back to the brand accent.
//   - `topTag`       - tiny pill rendered top-right of the title row
//                      (e.g. "Available in-store")
//   - `sizes`        - array of { label, sub } rendered as a 3-col mini-grid
//                      below the description
//   - `infoBlock`    - { heading, body } - a richer info callout (used for
//                      "What is AdBlue?"). Renders above `groups`.
export default function ServiceCard({
  emoji,
  title,
  image,
  imageAlt,
  description,
  chips = [],
  groups = [],
  infoBox,
  footer,
  accentColor,
  topTag,
  sizes,
  infoBlock,
}) {
  // CSS-variable trick so we can tint the accent bar + checkmark pill
  // without hand-writing a Tailwind colour. `--accent-soft` is a 14% alpha
  // tint for backgrounds.
  const accentStyle = accentColor
    ? {
        '--accent-strong': accentColor,
        '--accent-soft': `${accentColor}22`,
      }
    : undefined;

  return (
    <article
      className="reveal group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1.5 hover:shadow-2xl"
      style={accentStyle}
    >
      {accentColor && (
        <div
          aria-hidden="true"
          className="h-2 w-full"
          style={{ backgroundColor: accentColor }}
        />
      )}

      {image && (
        <div className="aspect-[16/10] overflow-hidden bg-slate-100">
          <img
            src={image}
            alt={imageAlt ?? title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            {emoji && (
              <span aria-hidden="true" className="text-2xl sm:text-3xl">
                {emoji}
              </span>
            )}
            <h3 className="flex-1 text-xl font-bold leading-tight text-brand-900">
              {title}
            </h3>
          </div>
          {topTag && (
            <span
              className="shrink-0 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider"
              style={
                accentColor
                  ? { backgroundColor: `${accentColor}1A`, color: accentColor }
                  : undefined
              }
            >
              {topTag}
            </span>
          )}
        </div>

        <p className="mt-3 leading-relaxed text-slate-600">{description}</p>

        {sizes && sizes.length > 0 && (
          <ul className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
            {sizes.map((s) => (
              <li
                key={s.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center transition group-hover:border-slate-300"
                style={
                  accentColor
                    ? {
                        borderColor: `${accentColor}33`,
                        backgroundColor: `${accentColor}0d`,
                      }
                    : undefined
                }
              >
                <p
                  className="text-lg font-extrabold leading-none sm:text-xl"
                  style={accentColor ? { color: accentColor } : undefined}
                >
                  {s.label}
                </p>
                {s.sub && (
                  <p className="mt-1.5 text-[11px] leading-snug text-slate-600">
                    {s.sub}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}

        {chips.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {chips.map((c) => (
              <li
                key={c}
                className="rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-700"
              >
                {c}
              </li>
            ))}
          </ul>
        )}

        {infoBlock && (
          <div
            className="mt-5 rounded-2xl p-4 text-sm"
            style={
              accentColor
                ? {
                    backgroundColor: `${accentColor}0d`,
                    borderLeft: `3px solid ${accentColor}`,
                  }
                : { backgroundColor: '#f1f5f9', borderLeft: '3px solid #cbd5e1' }
            }
          >
            <p
              className="text-[11px] font-extrabold uppercase tracking-wider"
              style={accentColor ? { color: accentColor } : { color: '#475569' }}
            >
              {infoBlock.heading}
            </p>
            <p className="mt-1.5 leading-relaxed text-slate-700">
              {infoBlock.body}
            </p>
          </div>
        )}

        {groups.map((g) => (
          <div key={g.heading} className="mt-5">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
              {g.heading}
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {g.items.map((item) => {
                const isObj = typeof item === 'object';
                const checkBg = accentColor
                  ? { backgroundColor: `${accentColor}1A`, color: accentColor }
                  : undefined;
                return (
                  <li
                    key={isObj ? item.label : item}
                    className="flex items-start gap-2.5"
                  >
                    <span
                      className={
                        accentColor
                          ? 'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full'
                          : 'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent-700'
                      }
                      style={checkBg}
                    >
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span className="leading-relaxed">
                      {isObj ? (
                        <>
                          <span className="font-semibold text-brand-900">
                            {item.label}
                          </span>
                          {item.subtitle && (
                            <span className="block text-xs text-slate-500">
                              {item.subtitle}
                            </span>
                          )}
                        </>
                      ) : (
                        item
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        {infoBox && (
          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            <Info className="mt-0.5 h-4 w-4 shrink-0" />
            <p>{infoBox}</p>
          </div>
        )}

        {footer && (
          <p className="mt-auto pt-6 text-xs leading-relaxed text-slate-500">
            {footer}
          </p>
        )}
      </div>
    </article>
  );
}
