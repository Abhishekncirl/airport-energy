import { Fuel, ShoppingBag, Wind, Coffee, Droplets, Sparkles } from 'lucide-react';

const SERVICES = [
  {
    icon: Fuel,
    title: 'Petrol & Diesel',
    body: 'Reliable everyday fuel with consistently fair pricing and quick-flow pumps.',
    tag: 'Forecourt',
  },
  {
    icon: Droplets,
    title: 'Carwash',
    body: 'Modern WashPod facility — touch-free brushes and powerful jets for a spotless finish in minutes.',
    tag: 'WashPod',
  },
  {
    icon: Sparkles,
    title: 'Valet Cleaning',
    body: 'Full interior & exterior valet by trained pros — hand-wash, vacuum, dashboard, windows, and tyre dressing.',
    tag: 'Detailing',
  },
  {
    icon: ShoppingBag,
    title: 'Convenience Store',
    body: 'Snacks, essentials, travel kit and gifts — open every hour of every day.',
    tag: 'Shop',
  },
  {
    icon: Wind,
    title: 'Air & Water',
    body: 'Free tyre inflation and water top-ups to keep your journey safe and smooth.',
    tag: 'Forecourt',
  },
  {
    icon: Coffee,
    title: 'Coffee & Snacks',
    body: 'Freshly brewed coffee, pastries and grab-and-go meals to keep you moving.',
    tag: 'Cafe',
  },
];

export default function Services() {
  return (
    <section id="services" className="section bg-slate-50">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">What we offer</span>
          <h2 className="section-title mt-3">
            Everything you need, in one stop.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From fuel to fast charging to fresh coffee — we've designed Airport
            Energy to get you back on the road in minutes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, body, tag }) => (
            <article key={title} className="reveal card group">
              <div className="flex items-start justify-between">
                <div className="rounded-xl bg-brand-900 p-3 text-white shadow-sm transition group-hover:bg-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-700">
                  {tag}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-brand-900">{title}</h3>
              <p className="mt-2 text-slate-600">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
