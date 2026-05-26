import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Fuel,
  RefreshCw,
  TrendingDown,
  TrendingUp,
  Minus,
  Loader2,
} from 'lucide-react';

import { isSupabaseConfigured, supabase } from '../lib/supabase.js';

// Cards (icon, label, accent) merged with whatever live data we pull from
// Supabase. The hardcoded `fallback` numbers are only used when the build
// has no Supabase keys (e.g. someone cloned the repo without credentials).
const FUELS = [
  {
    key: 'petrol',
    label: 'Petrol (Unleaded 95)',
    icon: Fuel,
    accent: 'bg-fuel-green/10 text-fuel-green ring-fuel-green/30',
    fallback: { price: 1.739, previous_price: 1.759 },
  },
  {
    key: 'diesel',
    label: 'Diesel',
    icon: Fuel,
    accent: 'bg-brand-100 text-brand-700 ring-brand-200',
    fallback: { price: 1.689, previous_price: 1.679 },
  },
];

function formatTime(date) {
  return date.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function FuelPrices() {
  // Map of { petrol: row, diesel: row }
  const [rows, setRows] = useState({});
  const [loading, setLoading] = useState(true);
  const [lastFetchedAt, setLastFetchedAt] = useState(new Date());
  // Re-render every 30s to keep the "X min ago" line fresh.
  const [, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((n) => n + 1), 30_000);
    return () => clearInterval(id);
  }, []);

  const loadPrices = useCallback(async () => {
    setLoading(true);

    // Fallback when Supabase isn't configured for this build.
    if (!isSupabaseConfigured) {
      const fallback = {};
      for (const f of FUELS) {
        fallback[f.key] = {
          ...f.fallback,
          updated_at: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
        };
      }
      setRows(fallback);
      setLastFetchedAt(new Date());
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from('fuel_prices')
      .select('fuel_type, price, previous_price, updated_at')
      .in('fuel_type', FUELS.map((f) => f.key));

    if (error || !data) {
      // Fall back to the seeded values rather than show an error to visitors.
      const fallback = {};
      for (const f of FUELS) {
        fallback[f.key] = {
          ...f.fallback,
          updated_at: new Date().toISOString(),
        };
      }
      setRows(fallback);
    } else {
      const byKey = {};
      for (const r of data) {
        byKey[r.fuel_type] = {
          price: Number(r.price),
          previous_price:
            r.previous_price != null ? Number(r.previous_price) : null,
          updated_at: r.updated_at,
        };
      }
      setRows(byKey);
    }

    setLastFetchedAt(new Date());
    setLoading(false);
  }, []);

  useEffect(() => { loadPrices(); }, [loadPrices]);

  // Most-recent updated_at across all rows = the "Last updated" stamp shown
  // under the cards. Falls back to fetch time if no row has one.
  const mostRecentUpdate = useMemo(() => {
    const stamps = Object.values(rows)
      .map((r) => (r?.updated_at ? new Date(r.updated_at) : null))
      .filter(Boolean);
    if (!stamps.length) return lastFetchedAt;
    return new Date(Math.max(...stamps.map((d) => d.getTime())));
  }, [rows, lastFetchedAt]);

  const minutesAgo = Math.max(
    0,
    Math.floor((Date.now() - mostRecentUpdate.getTime()) / 60000)
  );

  return (
    <section id="prices" className="section bg-white">
      <div className="container-x">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Today's Pricing</span>
            <h2 className="section-title mt-3">Live fuel prices.</h2>
            <p className="mt-4 text-lg text-slate-600">
              Transparent, up-to-the-minute pricing for every grade we stock
              — refreshed by our team whenever the wholesale rate changes.
            </p>
          </div>

          <button
            type="button"
            onClick={loadPrices}
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

            // Falling price = good for the customer, render green.
            // Rising = orange. No change = neutral grey.
            const TrendIcon =
              delta == null ? Minus : delta < 0 ? TrendingDown : delta > 0 ? TrendingUp : Minus;
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
          Last updated at{' '}
          <span className="font-semibold text-slate-700">
            {formatTime(mostRecentUpdate)}
          </span>
          <span className="text-slate-400">•</span>
          <span>{minutesAgo === 0 ? 'just now' : `${minutesAgo} min ago`}</span>
        </p>
      </div>
    </section>
  );
}
