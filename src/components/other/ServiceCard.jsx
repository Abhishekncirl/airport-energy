import { Check, Info } from 'lucide-react';

// Generic service card used across the Other Services grid.
//   - emoji + title
//   - optional image (renders as a 16/9 banner on top)
//   - description
//   - optional list of `chips` (small tag pills)
//   - optional sectioned `groups`:
//        { heading, kind: 'checkmark' | 'plain', items: [string|{label,subtitle}] }
//   - optional `infoBox` callout (yellow Info tip)
//   - optional `footer` line
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
}) {
  return (
    <article className="reveal group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1.5 hover:shadow-2xl">
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

        <p className="mt-3 leading-relaxed text-slate-600">{description}</p>

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

        {groups.map((g) => (
          <div key={g.heading} className="mt-5">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
              {g.heading}
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {g.items.map((item) => {
                const isObj = typeof item === 'object';
                return (
                  <li
                    key={isObj ? item.label : item}
                    className="flex items-start gap-2.5"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent-700">
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
