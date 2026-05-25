// Reusable card for the "What We Stock" grid.
// Image on top with a fixed 4:3 ratio, then title + description.
export default function CategoryCard({ image, alt, title, description }) {
  return (
    <article className="reveal group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1.5 hover:shadow-2xl">
      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-brand-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {description}
        </p>
      </div>
    </article>
  );
}
