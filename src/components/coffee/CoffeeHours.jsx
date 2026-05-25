import { Clock, Sunrise, MoonStar } from 'lucide-react';

const ROWS = [
  { day: 'Monday – Friday', hours: '6:00 AM — 8:00 PM' },
  { day: 'Saturday', hours: '6:30 AM — 8:00 PM' },
  { day: 'Sunday', hours: '7:00 AM — 8:00 PM' },
];

export default function CoffeeHours() {
  return (
    <section className="section bg-white">
      <div className="container-x grid items-stretch gap-10 lg:grid-cols-2">
        <div className="reveal">
          <span className="eyebrow">Opening hours</span>
          <h2 className="section-title mt-3">
            Pop in any time the kettle’s on.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            The coffee bar runs slightly different hours from the
            forecourt and convenience store (which are open 24/7). Here’s
            when the espresso machine is humming.
          </p>

          <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2">
              <Sunrise className="h-4 w-4 text-accent" /> Early opens
            </span>
            <span className="inline-flex items-center gap-2">
              <MoonStar className="h-4 w-4 text-brand-700" /> Late closes
            </span>
          </div>
        </div>

        <div className="reveal rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
            <div className="rounded-xl bg-brand-900 p-3 text-white">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Coffee bar
              </p>
              <p className="text-lg font-bold text-brand-900">
                Weekly schedule
              </p>
            </div>
          </div>

          <ul className="mt-4 divide-y divide-slate-200">
            {ROWS.map(({ day, hours }) => (
              <li
                key={day}
                className="flex items-center justify-between py-4"
              >
                <span className="font-semibold text-brand-900">{day}</span>
                <span className="text-slate-600">{hours}</span>
              </li>
            ))}
          </ul>

          <p className="mt-4 rounded-xl bg-accent/10 px-4 py-3 text-sm text-accent-900">
            ☕ Forecourt, store and WashPod carwash remain open 24 / 7.
          </p>
        </div>
      </div>
    </section>
  );
}
