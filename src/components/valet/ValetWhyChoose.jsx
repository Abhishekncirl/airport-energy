import { Clock, Layers, PiggyBank, Wrench } from 'lucide-react';

const REASONS = [
  {
    icon: Wrench,
    title: 'Pro-Grade Equipment',
    body: 'The same machines professional detailers use - without the professional price tag.',
  },
  {
    icon: Clock,
    title: 'Always Open',
    body: 'Available 24/7. No staff to wait on, no appointments, no closing time.',
  },
  {
    icon: PiggyBank,
    title: 'Just €1 to Start',
    body: 'Pay only for the time you use. Every machine, every service - one euro.',
  },
  {
    icon: Layers,
    title: 'All-In-One Bay',
    body: 'Vacuum, water, air, fragrance, and mat cleaner - all under one neon-lit roof.',
  },
];

export default function ValetWhyChoose() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why our valet centre</span>
          <h2 className="section-title mt-3">Pro detailing, on your terms.</h2>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="reveal flex flex-col items-start rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-md"
              style={{ transition: 'border-color 200ms, transform 200ms, box-shadow 200ms' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#00FF66')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
            >
              <div
                className="rounded-xl p-3"
                style={{ backgroundColor: '#0f1113', color: '#00FF66' }}
              >
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
