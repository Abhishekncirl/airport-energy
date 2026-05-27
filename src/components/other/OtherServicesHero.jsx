import { ArrowDown, Banknote, Landmark, WashingMachine } from 'lucide-react';

// Charcoal hero with brand-green accent. Three pill-icons hint at what's
// inside so visitors get the picture before they scroll.
const ICONS = [
  { Icon: WashingMachine, label: 'Laundry' },
  { Icon: Banknote, label: 'ATM' },
  { Icon: Landmark, label: 'M50 Toll' },
];

export default function OtherServicesHero() {
  const scrollToGrid = () => {
    const el = document.getElementById('services-grid');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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

      <div className="container-x pb-16 sm:pb-20 lg:pb-24">
        <div className="reveal mx-auto max-w-3xl text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
            Extras · One stop, more done
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Other Services at{' '}
            <span className="bg-gradient-to-r from-accent-300 via-accent to-accent-600 bg-clip-text text-transparent">
              Airport Energy.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            We’re more than a petrol station. From self-service laundry to
            free ATM and M50 toll payments, we make your stop count.
          </p>

          {/* Icon row */}
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {ICONS.map(({ Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur"
              >
                <Icon className="h-4 w-4 text-accent-300" />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={scrollToGrid}
              className="btn-primary"
            >
              See all services
              <ArrowDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
