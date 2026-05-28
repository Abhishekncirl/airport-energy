import { Calendar, Droplets, Leaf, ShieldCheck } from 'lucide-react';

const REASONS = [
  {
    icon: Droplets,
    title: 'Touch-Free Technology',
    body: 'Soft brushes and high-pressure jets protect your paint while still cutting through stubborn grime.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    body: 'Water recycling system reduces consumption by up to 70% versus a traditional wash bay.',
  },
  {
    icon: Calendar,
    title: 'Open 7 Days a Week',
    body: 'Quick service from early morning to late evening - fit a wash around any schedule.',
  },
  {
    icon: ShieldCheck,
    title: 'Premium Wax Protection',
    body: 'Every wash finishes with a rain-shield wax that beads water and resists road salt.',
  },
];

export default function WhyOurWashPod() {
  return (
    <section className="section bg-slate-50">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why our car wash</span>
          <h2 className="section-title mt-3">
            Better for your car. Better for the planet.
          </h2>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="reveal flex flex-col items-start rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-md"
            >
              <div className="rounded-xl bg-brand-900 p-3 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-bold text-brand-900">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
