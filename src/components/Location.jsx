import { MapPin, Clock, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="section bg-slate-50">
      <div className="container-x grid items-stretch gap-10 lg:grid-cols-5">
        {/* Map */}
        <div className="reveal lg:col-span-3">
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
            <iframe
              title="Airport Energy location map"
              src="https://www.google.com/maps?q=Dublin%20Airport&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        {/* Details */}
        <div className="reveal lg:col-span-2">
          <span className="eyebrow">Find us</span>
          <h2 className="section-title mt-3">
            Right on the way to your terminal.
          </h2>
          <p className="mt-4 text-slate-600">
            Easy access from the main airport approach road, with extra-wide
            forecourt lanes for taxis, rideshare and rental returns.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-accent/10 p-3 text-accent">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Address
                </p>
                <p className="mt-1 text-base font-medium text-brand-900">
                  Airport Approach Road,<br />
                  Dublin Airport, Co. Dublin, K67 X4P9
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-brand-100 p-3 text-brand-700">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Opening hours
                </p>
                <p className="mt-1 text-base font-medium text-brand-900">
                  Open 24 / 7 — every day of the year
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Forecourt, store, café and EV chargers always available.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-fuel-green/10 p-3 text-fuel-green">
                <Navigation className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Get directions
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Dublin%20Airport"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex items-center gap-2 text-base font-semibold text-brand-700 hover:text-accent"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
