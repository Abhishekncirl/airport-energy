import { Car, CreditCard, Sparkles } from 'lucide-react';

const STEPS = [
  {
    icon: Car,
    title: 'Pull In',
    body: 'Park next to any available machine — no booking, no waiting.',
  },
  {
    icon: CreditCard,
    title: 'Tap & Pay €1',
    body: 'Use card, contactless, mobile wallet, or coin to activate the station.',
  },
  {
    icon: Sparkles,
    title: 'Get Detailing',
    body: 'Vacuum, wash, inflate, freshen, or clean mats — all in one visit.',
  },
];

// Neon-green accent on the step number bubble (vs the green tile elsewhere
// on the site) keeps this page visually distinct.
export default function ValetHowItWorks() {
  return (
    <section className="section bg-slate-50">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">How it works</span>
          <h2 className="section-title mt-3">Three steps. €1 to start.</h2>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, body }, idx) => (
            <li
              key={title}
              className="reveal relative flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-8 text-center transition hover:-translate-y-1 hover:shadow-md"
            >
              <span
                className="absolute -top-4 right-6 inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-extrabold text-black shadow-md"
                style={{ backgroundColor: '#00FF66' }}
              >
                {idx + 1}
              </span>
              <div
                className="rounded-2xl p-4"
                style={{
                  backgroundColor: 'rgba(0,255,102,0.12)',
                  color: '#0f1113',
                }}
              >
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-brand-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
