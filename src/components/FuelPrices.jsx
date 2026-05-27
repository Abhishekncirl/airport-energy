import {
  Fuel,
  Loader2,
  Minus,
  RefreshCw,
  TrendingDown,
  TrendingUp,
} from 'lucide-react';

import { useFuelPrices } from '../hooks/useFuelPrices.js';
import { formatRelativeTime } from '../utils/formatRelativeTime.js';

// Static card metadata. Live values come from the shared hook below so this
// section and the hero floating chip can never disagree.
const FUELS = [
  {
    key: 'petrol',
    label: 'Petrol (Unleaded 95)',
    icon: Fuel,
    accent: 'bg-fuel-green/10 text-fuel-green ring-fuel-green/30',
  },
  {
    key: 'diesel',
    label: 'Diesel',
    icon: Fuel,
    accent: 'bg-brand-100 text-brand-700 ring-brand-200',
  },
];

export default function FuelPrices() {
  const { petrol, diesel, updatedAt, loading, refresh } = useFuelPrices();
  const rows = { petrol, diesel };

  return (
    <section id="prices" className="section bg-white">
      <div className="container-x">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Today's Pricing</span>
            <h2 className="section-title mt-3">Live fuel prices.</h2>
            <p className="mt-4 text-lg text-slate-600">
              Transparent, up-to-the-minute pricing for every grade we stock
              - refreshed by our team whenever the wholesale rate changes.
            </p>
          </div>

          <button
            type="button"
            onClick={refresh}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <RefreshCw className="h-4 w-4" />
            )}
            Refresh
          </button>
        </div>

        <div className="reveal mt-10 grid gap-6 sm:grid-cols-2">
          {FUELS.map(({ key, label, icon: Icon, accent }) => {
            const row = rows[key];
            const price = row?.price;
            const previous = row?.previous_price;
            const delta =
              price != null && previous != null
                ? Number((price - previous).toFixed(3))
                : null;

            // Falling price = customer-friendly = green; rising = amber.
            const TrendIcon =
              delta == null
                ? Minus
                : delta < 0
                  ? TrendingDown
                  : delta > 0
                    ? TrendingUp
                    : Minus;
            const trendColor =
              delta == null || delta === 0
                ? 'text-slate-500'
                : delta < 0
                  ? 'text-fuel-green'
                  : 'text-amber-600';

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
                  {price != null ? (
                    <>
                      €{price.toFixed(3)}
                      <span className="ml-1 text-base font-semibold text-slate-500">
                        /L
                      </span>
                    </>
                  ) : (
                    <span className="text-base font-medium text-slate-400">
                      loading…
                    </span>
                  )}
                </p>
                {delta != null && (
                  <p
                    className={`mt-2 inline-flex items-center gap-1 text-sm font-semibold ${trendColor}`}
                  >
                    <TrendIcon className="h-4 w-4" />
                    {delta === 0
                      ? 'No change vs last update'
                      : `${delta > 0 ? '+' : ''}${delta.toFixed(3)} vs last update`}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <p className="reveal mt-8 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <span className="inline-block h-2 w-2 animate-pulse-soft rounded-full bg-fuel-green" />
          {updatedAt ? (
            <>
              <span className="font-semibold text-slate-700">
                {formatRelativeTime(updatedAt)}
              </span>
              <span className="text-slate-400">•</span>
              <span>auto-refreshes every minute</span>
            </>
          ) : loading ? (
            <span>Loading live prices…</span>
          ) : (
            <span>No data available</span>
          )}
        </p>
      </div>
    </section>
  );
}
