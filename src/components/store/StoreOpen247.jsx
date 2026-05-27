import { Clock } from 'lucide-react';

// Bold "Open 24/7" banner. Uses the brand charcoal as the background with
// a green glow - consistent with the hero gradient elsewhere on the site.
export default function StoreOpen247() {
  return (
    <section className="section bg-slate-50">
      <div className="container-x">
        <div
          className="reveal relative overflow-hidden rounded-3xl shadow-2xl"
          style={{
            backgroundImage:
              'radial-gradient(900px 360px at 15% 0%, rgba(26,166,74,0.30), transparent 60%), radial-gradient(700px 320px at 95% 100%, rgba(26,166,74,0.20), transparent 60%), linear-gradient(135deg, #0f1113 0%, #1a1d20 60%, #23272b 100%)',
          }}
        >
          {/* Subtle dot grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative grid gap-8 p-8 sm:p-12 lg:grid-cols-[auto_1fr] lg:items-center">
            {/* Big clock badge */}
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-accent shadow-lg shadow-accent/30 sm:h-24 sm:w-24">
                <Clock className="h-10 w-10 text-white sm:h-12 sm:w-12" />
              </div>
              <span className="rounded-full bg-white/10 px-4 py-2 text-base font-extrabold text-white ring-1 ring-white/20 backdrop-blur sm:text-lg">
                24 / 7
              </span>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                🕐 Always Open, Always Ready
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/85">
                Our convenience store is open every hour of every day.
                Whether it’s a late-night snack run, an early-morning coffee,
                or an emergency top-up of oil and screen wash - we’ve got you
                covered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
