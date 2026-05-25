import { ArrowRight, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

// Hero banner for the Coffee & Snacks page.
// Uses the local coffee.png as the visual; lazy-loaded.
export default function CoffeeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-hero-gradient pt-28 sm:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-x grid items-center gap-12 pb-20 lg:grid-cols-2 lg:pb-28">
        {/* Copy */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
            <Coffee className="h-3.5 w-3.5" />
            Insomnia Coffee · Official partner
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Insomnia Coffee
            <span className="block bg-gradient-to-r from-accent-300 via-accent to-accent-600 bg-clip-text text-transparent">
              at Airport Energy.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Grounded in Ireland since 1997 — fresh coffee and hot food,
            served daily by people who genuinely love what they do.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#offerings" className="btn-primary">
              See the menu
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/" className="btn-ghost">
              Back to home
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative animate-fade-in">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-accent/30 via-brand-700/20 to-transparent blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
            <img
              src={`${import.meta.env.BASE_URL}coffee.png`}
              alt="Freshly brewed Insomnia Coffee served at Airport Energy"
              className="h-[360px] w-full object-cover sm:h-[480px]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
