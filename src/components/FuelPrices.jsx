import { useEffect, useMemo, useState } from 'react';
import { Fuel, RefreshCw, TrendingDown, TrendingUp } from 'lucide-react';

const PRICES = [
  {
    key: 'petrol',
    label: 'Petrol (Unleaded 95)',
    icon: Fuel,
    accent: 'bg-fuel-green/10 text-fuel-green ring-fuel-green/30',
    base: 1.739,
    trend: 'down',
    change: -0.02,
  },
  {
    key: 'diesel',
    label: 'Diesel',
    icon: Fuel,
    accent: 'bg-brand-100 text-brand-700 ring-brand-200',
    base: 1.689,
    trend: 'up',
    change: 0.01,
  },
];

function formatTime(date) {
  return date.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function FuelPrices() {
  const [updatedAt, setUpdatedAt] = useState(new Date());
  const [tick, setTick] = useState(0);

  // Re-render every 30s to keep the "last updated" feel alive.
  useEffect(() => {
    const id = setInterval(() => setTick((n) => n + 1), 30_000);
    return () => clearInterval(id);
  }, []);

  const minutesAgo = useMemo(() => {
    const ms = Date.now() - updatedAt.getTime();
    return Math.max(0, Math.floor(ms / 60000));
  }, [updatedAt, tick]);

  return (
    <section id="prices" className="section bg-white">
      <div className="container-x">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Today's Pricing</span>
            <h2 className="section-title mt-3">Live fuel prices.</h2>
            <p className="mt-4 text-lg text-slate-600">
              Transparent, up-to-the-minute pricing for every grade we stock —
              including our EV fast-charging rate.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setUpdatedAt(new Date())}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-accent hover:text-accent"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </button>
        </div>

        <div className="reveal mt-10 grid gap-6 sm:grid-cols-2">
          {PRICES.map(({ key, label, icon: Icon, accent, base, unit, trend, change }) => {
            const TrendIcon = trend === 'down' ? TrendingDown : TrendingUp;
            const trendColor =
              trend === 'down' ? 'text-fuel-green' : 'text-amber-600';
            return (
              <div
                key={key}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${accent}`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </span>
                <p className="mt-6 text-4xl font-extrabold tracking-tight text-brand-900">
                  €{base.toFixed(3)}
                  <span className="ml-1 text-base font-semibold text-slate-500">
                    {unit ?? '/L'}
                  </span>
                </p>
                <p
                  className={`mt-2 inline-flex items-center gap-1 text-sm font-semibold ${trendColor}`}
                >
                  <TrendIcon className="h-4 w-4" />
                  {change > 0 ? '+' : ''}
                  {change.toFixed(2)} vs yesterday
                </p>
              </div>
            );
          })}
        </div>

        <p className="reveal mt-8 flex items-center gap-2 text-sm text-slate-500">
          <span className="inline-block h-2 w-2 animate-pulse-soft rounded-full bg-fuel-green" />
          Last updated at <span className="font-semibold text-slate-700">{formatTime(updatedAt)}</span>
          <span className="text-slate-400">•</span>
          <span>{minutesAgo === 0 ? 'just now' : `${minutesAgo} min ago`}</span>
        </p>
      </div>
    </section>
  );
}
