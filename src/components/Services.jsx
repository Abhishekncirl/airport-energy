import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Coffee,
  Droplets,
  Fuel,
  LayoutGrid,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';

// Each service can optionally have a `href` — if present, the whole card
// becomes a React Router link with a "Learn more →" affordance.
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
    href: '/carwash',
    linkLabel: 'View wash packages',
  },
  {
    icon: Sparkles,
    title: 'Valet Cleaning',
    body: 'Self-service detailing bay — vacuum, water, air, fragrance and mat cleaner. Pro-grade machines, just €1 per use.',
    tag: 'Detailing',
    href: '/valet-cleaning',
    linkLabel: 'Explore valet centre',
  },
  {
    icon: ShoppingBag,
    title: 'Convenience Store',
    body: 'Car care essentials, fresh sandwiches, cold drinks, sweets and snacks — open every hour of every day.',
    tag: 'Shop',
    href: '/convenience-store',
    linkLabel: 'Browse the store',
  },
  {
    icon: LayoutGrid,
    title: 'Other Services',
    body: 'More than just fuel — self-service laundry, free ATM, M50 toll payments and more, all in one stop.',
    tag: 'Extras',
    href: '/other-services',
    linkLabel: 'See all services',
  },
  {
    icon: Coffee,
    title: 'Coffee & Snacks',
    body: 'Freshly brewed Insomnia coffee, hot food and grab-and-go — plus a special offer for taxi drivers.',
    tag: 'Cafe',
    href: '/coffee-snacks',
    linkLabel: 'See coffee menu',
  },
];

function ServiceCard({ service }) {
  const { icon: Icon, title, body, tag, href, linkLabel } = service;

  const inner = (
    <>
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

      {href && (
        <p className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent-700 transition group-hover:gap-2 group-hover:text-accent-600">
          {linkLabel ?? 'Learn more'}
          <ArrowUpRight className="h-4 w-4" />
        </p>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        to={href}
        aria-label={`${title} — ${linkLabel ?? 'Learn more'}`}
        className="reveal card group block cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-2xl"
      >
        {inner}
      </Link>
    );
  }

  return <article className="reveal card group">{inner}</article>;
}

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
            From fuel to a touch-free WashPod carwash to fresh coffee —
            we’ve designed Airport Energy to get you back on the road in
            minutes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
