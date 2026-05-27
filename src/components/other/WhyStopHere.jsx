import { Clock, CreditCard, Gift, ShoppingCart } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: Clock,
    title: '24/7 Access',
    body: 'Most services available round the clock.',
  },
  {
    icon: CreditCard,
    title: 'Card-Friendly',
    body: 'Tap, chip, or contactless on everything.',
  },
  {
    icon: Gift,
    title: 'Free Essentials',
    body: 'ATM withdrawals and balance checks — all free.',
  },
  {
    icon: ShoppingCart,
    title: 'One Stop',
    body: 'Fuel up, wash, eat, and run errands in minutes.',
  },
];

export default function WhyStopHere() {
  return (
    <section className="section bg-slate-50">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why stop here</span>
          <h2 className="section-title mt-3">More done in a single visit.</h2>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="reveal flex flex-col items-start rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-md"
            >
              <div className="rounded-xl bg-accent/10 p-3 text-accent">
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
