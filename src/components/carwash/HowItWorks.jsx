import { Car, CreditCard, Sparkles } from 'lucide-react';

const STEPS = [
  {
    icon: Car,
    title: 'Drive In',
    body: 'Pull up to our car wash entrance on the forecourt - no booking required.',
  },
  {
    icon: CreditCard,
    title: 'Choose Your Wash',
    body: 'Select Gold, Silver or Bronze at the kiosk and tap to pay.',
  },
  {
    icon: Sparkles,
    title: 'Drive Away Shining',
    body: 'Spotless finish in under 5 minutes - back on the road, looking sharp.',
  },
];

export default function HowItWorks() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">How it works</span>
          <h2 className="section-title mt-3">Three steps. Five minutes.</h2>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, body }, idx) => (
            <li
              key={title}
              className="reveal relative flex flex-col items-center rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8 text-center transition hover:-translate-y-1 hover:border-accent hover:shadow-md"
            >
              <span className="absolute -top-4 right-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-900 text-sm font-extrabold text-white shadow-md">
                {idx + 1}
              </span>
              <div className="rounded-2xl bg-accent/10 p-4 text-accent">
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
