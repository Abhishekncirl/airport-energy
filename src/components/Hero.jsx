import { ArrowRight, Fuel, Clock, Droplets } from 'lucide-react';
import HeroIllustration from './HeroIllustration.jsx';

const STATS = [
  { icon: Clock, label: 'Open', value: '24 / 7' },
  { icon: Fuel, label: 'Fuel grades', value: 'Petrol & Diesel' },
  { icon: Droplets, label: 'Carwash', value: 'WashPod' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-hero-gradient pt-28 sm:pt-32"
    >
      {/* Decorative grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-x grid items-center gap-12 pb-20 lg:grid-cols-2 lg:pb-28">
        {/* Copy */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
            <span className="h-2 w-2 animate-pulse-soft rounded-full bg-fuel-green" />
            Open now — 24/7 service
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Fuel up, refresh,
            <span className="block bg-gradient-to-r from-accent-300 via-accent to-accent-600 bg-clip-text text-transparent">
              and hit the road.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Airport Energy is your reliable roadside stop for quality fuel,
            our WashPod carwash and full valet service, a stocked convenience
            store, and friendly faces — built for travellers and locals
            alike.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#prices" className="btn-primary">
              View Fuel Prices
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="btn-ghost">
              Explore Services
            </a>
          </div>

          {/* Stat strip */}
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4">
            {STATS.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur"
              >
                <Icon className="mx-auto h-5 w-5 text-accent-300" />
                <dt className="mt-2 text-xs uppercase tracking-wide text-white/60">
                  {label}
                </dt>
                <dd className="mt-1 text-lg font-bold text-white">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Visual */}
        <div className="relative animate-fade-in">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-accent/30 via-brand-500/20 to-transparent blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
            <HeroIllustration className="block h-[420px] w-full sm:h-[520px]" />
          </div>

          {/* Floating price chip */}
          <div className="absolute -bottom-6 left-6 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              Unleaded 95
            </p>
            <p className="mt-1 text-2xl font-extrabold text-brand-900">
              €1.74<span className="text-sm font-semibold text-slate-500">/L</span>
            </p>
            <p className="mt-1 flex items-center gap-1 text-xs font-medium text-fuel-green">
              <span className="h-1.5 w-1.5 rounded-full bg-fuel-green" />
              Updated 5 min ago
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
