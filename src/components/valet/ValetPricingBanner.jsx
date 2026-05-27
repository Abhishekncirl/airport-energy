import { CreditCard, Smartphone, Coins } from 'lucide-react';

const PAYMENT_METHODS = [
  { icon: CreditCard, label: 'Card' },
  { icon: Smartphone, label: 'Apple / Google Pay' },
  { icon: Coins, label: 'Coin' },
];

// Bold black banner that drives home the price point right under the hero.
// Uses inline neon-green styling so the colour is unmistakable.
export default function ValetPricingBanner() {
  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="container-x">
        <div
          className="reveal relative overflow-hidden rounded-3xl bg-black p-8 text-center shadow-2xl sm:p-12"
          style={{
            backgroundImage:
              'radial-gradient(700px 260px at 0% 0%, rgba(0,255,102,0.22), transparent 60%), radial-gradient(700px 260px at 100% 100%, rgba(0,255,102,0.18), transparent 60%)',
          }}
        >
          {/* Subtle dot grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                'radial-gradient(rgba(0,255,102,0.45) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative">
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span style={{ color: '#00FF66' }}>€1</span> = Premium Detailing
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              Every machine in our Valet Centre costs just €1 per use. Pay
              by card, contactless, mobile, or coin.
            </p>

            <ul className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
              {PAYMENT_METHODS.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold text-white backdrop-blur"
                  style={{
                    borderColor: 'rgba(0,255,102,0.35)',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                  }}
                >
                  <Icon className="h-4 w-4" style={{ color: '#00FF66' }} />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
