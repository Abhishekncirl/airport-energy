import { Clock } from 'lucide-react';

import StoreStatusBadge from './StoreStatusBadge.jsx';

// Bold opening-hours banner. Replaces the old "Always Open 24/7" block
// since the convenience store actually runs Mon-Sat 6-21 and Sun 7-21.
//
// Note: file name still says Open247 for backwards-compatibility with the
// existing import in ConvenienceStorePage. The exported component name is
// what visitors see, and the content here is what matters.
const HOURS = [
  { day: 'Monday - Saturday', hours: '6:00 AM - 9:00 PM' },
  { day: 'Sunday', hours: '7:00 AM - 9:00 PM' },
];

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
            <div className="flex flex-col items-start gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-accent shadow-lg shadow-accent/30 sm:h-24 sm:w-24">
                <Clock className="h-10 w-10 text-white sm:h-12 sm:w-12" />
              </div>
              <StoreStatusBadge />
            </div>

            <div>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                🕐 Opening Hours
              </h2>

              <ul className="mt-6 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
                {HOURS.map(({ day, hours }) => (
                  <li
                    key={day}
                    className="flex items-center justify-between gap-4 px-5 py-3.5"
                  >
                    <span className="text-sm font-semibold text-white sm:text-base">
                      {day}
                    </span>
                    <span className="text-sm font-bold text-accent-300 sm:text-base">
                      {hours}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                We're open early to late, 7 days a week - so you can grab
                what you need before work, after work, and everything in
                between.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
