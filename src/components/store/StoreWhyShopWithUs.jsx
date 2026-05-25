import { Leaf, ShieldCheck, Zap } from 'lucide-react';

const REASONS = [
  {
    icon: Leaf,
    title: 'Fresh Daily',
    body: 'Sandwiches and wraps delivered fresh every morning.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Brands',
    body: 'Only quality products from brands you know.',
  },
  {
    icon: Zap,
    title: 'Quick & Easy',
    body: 'In, out, and back on the road in minutes.',
  },
];

export default function StoreWhyShopWithUs() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why shop with us</span>
          <h2 className="section-title mt-3">Built for drivers in a hurry.</h2>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="reveal flex flex-col items-center rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center transition hover:-translate-y-1 hover:border-accent hover:shadow-md"
            >
              <div className="rounded-xl bg-accent/10 p-3 text-accent">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-brand-900">
                {title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
