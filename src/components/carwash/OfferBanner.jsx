// Reusable promotional banner. Both special-offer cards on the carwash
// page share this same structure — only the colours, copy and badge change.
export default function OfferBanner({
  badge,
  emoji,
  title,
  subtitle,
  body,
  finePrint,
  originalPrice,
  discountPrice,
  ribbon,
  background,
  ribbonColor,
  badgeBg = 'bg-white/15',
}) {
  return (
    <article
      className="reveal relative overflow-hidden rounded-3xl text-white shadow-2xl"
      style={{ backgroundImage: background }}
    >
      {/* Corner ribbon */}
      {ribbon && (
        <div
          className="absolute -right-12 top-6 rotate-45 px-16 py-1 text-[11px] font-extrabold uppercase tracking-widest text-white backdrop-blur"
          style={{ backgroundColor: ribbonColor ?? 'rgba(0,0,0,0.35)' }}
        >
          {ribbon}
        </div>
      )}

      {/* Dot pattern texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.45) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      <div className="relative flex h-full flex-col gap-6 p-8 sm:p-10">
        <div className="flex flex-wrap items-center gap-3">
          {emoji && (
            <span aria-hidden="true" className="text-3xl drop-shadow-md sm:text-4xl">
              {emoji}
            </span>
          )}
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur ${badgeBg}`}
          >
            {badge}
          </span>
        </div>

        <h3 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          {title}
        </h3>

        <p className="text-lg font-semibold text-white/95 sm:text-xl">
          {subtitle}
        </p>

        <p className="max-w-xl text-white/85">{body}</p>

        {/* Price comparison */}
        {(originalPrice != null || discountPrice != null) && (
          <div className="flex items-baseline gap-3 pt-1">
            {originalPrice != null && (
              <span className="text-2xl font-bold text-white/55 line-through decoration-white/40">
                €{originalPrice}
              </span>
            )}
            {discountPrice != null && (
              <span className="text-5xl font-extrabold tracking-tight drop-shadow-lg sm:text-6xl">
                €{discountPrice}
              </span>
            )}
          </div>
        )}

        {finePrint && (
          <p className="mt-auto text-xs leading-relaxed text-white/70">
            {finePrint}
          </p>
        )}
      </div>
    </article>
  );
}
