// Reusable card for one valet machine.
//   - emoji + title at the top
//   - optional thumbnail image
//   - description paragraph
//   - bullet sections (multiple supported via `groups`)
//   - footer note (e.g. accepted payment)
//
// Neon-green accents (#00FF66) match the rest of the page.
export default function MachineCard({
  emoji,
  title,
  image,
  imageAlt,
  description,
  groups = [],
  footer,
}) {
  return (
    <article className="reveal group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1.5 hover:shadow-2xl">
      {image && (
        <div className="aspect-[4/3] overflow-hidden bg-slate-900">
          <img
            src={image}
            alt={imageAlt ?? title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start gap-3">
          {emoji && (
            <span aria-hidden="true" className="text-2xl sm:text-3xl">
              {emoji}
            </span>
          )}
          <h3 className="flex-1 text-lg font-bold leading-tight text-brand-900 sm:text-xl">
            {title}
          </h3>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {description}
        </p>

        {groups.map((g) => (
          <div key={g.heading} className="mt-5">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
              {g.heading}
            </h4>
            {g.kind === 'numbered' ? (
              <ol className="mt-3 space-y-2 text-sm text-slate-700">
                {g.items.map((item, idx) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-extrabold text-black"
                      style={{ backgroundColor: '#00FF66' }}
                    >
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {g.items.map((item) => {
                  // Items can be either a plain string or {emoji, text}
                  const isObj = typeof item === 'object';
                  return (
                    <li
                      key={isObj ? item.text : item}
                      className="flex items-start gap-2.5"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-sm"
                        style={
                          isObj
                            ? undefined
                            : { backgroundColor: 'rgba(0,255,102,0.18)', color: '#0f1113' }
                        }
                      >
                        {isObj ? item.emoji : '✓'}
                      </span>
                      <span className="leading-relaxed">
                        {isObj ? item.text : item}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}

        {footer && (
          <p className="mt-auto pt-6 text-xs leading-relaxed text-slate-500">
            {footer}
          </p>
        )}
      </div>
    </article>
  );
}
