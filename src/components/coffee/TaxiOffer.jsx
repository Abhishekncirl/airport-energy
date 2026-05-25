import { ArrowRight, BadgePercent, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

// Featured promo banner — taxi driver fuel-up reward.
// Uses Insomnia brand red (#E30613) as the dominant colour.
export default function TaxiOffer() {
  return (
    <section className="section bg-slate-50">
      <div className="container-x">
        <div
          className="reveal relative overflow-hidden rounded-3xl shadow-2xl"
          style={{
            backgroundImage:
              'linear-gradient(135deg, #E30613 0%, #b8050f 45%, #7a0008 100%)',
          }}
        >
          {/* Decorative ribbon corner */}
          <div className="absolute -right-12 top-6 rotate-45 bg-white/15 px-16 py-1 text-[11px] font-extrabold uppercase tracking-widest text-white backdrop-blur">
            Taxi reward
          </div>

          {/* Subtle texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)',
              backgroundSize: '22px 22px',
            }}
          />

          <div className="relative grid gap-8 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="text-3xl drop-shadow-md sm:text-4xl"
                >
                  🚕
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
                  <BadgePercent className="h-3.5 w-3.5" />
                  Special offer
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                Taxi Driver Special Offer
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
                Fill your taxi with{' '}
                <span className="font-bold underline decoration-white/40 underline-offset-4">
                  €30 or more of fuel
                </span>{' '}
                and enjoy a <span className="font-bold">FREE</span> small or
                medium coffee on us! Our way of saying thanks to the drivers
                who keep Ireland moving.
              </p>

              <p className="mt-3 text-sm text-white/75">
                Show your taxi licence at the counter to redeem. One coffee
                per fill-up.
              </p>

              <div className="mt-6">
                <Link
                  to="/#location"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#b8050f] shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  Fuel Up & Grab Your Free Coffee
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Big coffee mark */}
            <div className="hidden h-32 w-32 items-center justify-center rounded-full bg-white/10 ring-4 ring-white/20 backdrop-blur lg:flex">
              <Coffee className="h-16 w-16 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
