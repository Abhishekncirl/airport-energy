import { Coffee, Sandwich, Flame, ShoppingBasket } from 'lucide-react';

const ITEMS = [
  {
    icon: Coffee,
    title: 'Fresh Coffee',
    body: 'Americano, Cappuccino, Latte, Espresso, Flat White, Mocha - brewed with Insomnia Coffee, official partner of the GAA & GPA.',
    tag: 'Barista',
  },
  {
    icon: Sandwich,
    title: 'Sandwiches & Wraps',
    body: 'Freshly made chicken & bacon wraps, club sandwiches and rotating daily specials prepared in-house.',
    tag: 'Made fresh',
  },
  {
    icon: Flame,
    title: 'Hot Food',
    body: 'Jambons, sausage rolls, pastries and other grab-and-go hot items - perfect when you’re short on time.',
    tag: 'Grab & go',
  },
  {
    icon: ShoppingBasket,
    title: 'Snacks & Drinks',
    body: 'Crisps, chocolate bars, healthy snacks and a wide range of cold drinks for the road ahead.',
    tag: 'Travel kit',
  },
];

export default function CoffeeOfferings() {
  return (
    <section id="offerings" className="section bg-white">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">What we serve</span>
          <h2 className="section-title mt-3">From the bar, fresh every day.</h2>
          <p className="mt-4 text-lg text-slate-600">
            A focused menu of barista-quality coffee, hot food and travel
            essentials - designed for drivers, commuters and locals on the
            move.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, body, tag }) => (
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
