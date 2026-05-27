// Single source of truth for the live fuel prices.
//
// - Reads `fuel_prices` from Supabase when configured; otherwise returns the
//   seeded fallback so the public site never breaks for someone running it
//   without secrets.
// - Polls every `refreshInterval` ms (default 60s) so the hero chip and the
//   "Live Fuel Prices" section both reflect admin edits within ~1 minute.
// - Caches the last successful payload in `localStorage` so a transient
//   network failure doesn't blank out the cards - we keep the last-known
//   values until the next successful fetch.
// - Exposes a `refresh()` callback for components that want an immediate
//   re-fetch (e.g. the Refresh button on the prices section).
import { useCallback, useEffect, useRef, useState } from 'react';

import { isSupabaseConfigured, supabase } from '../lib/supabase.js';

const STORAGE_KEY = 'airport-energy:fuel-prices:v1';
const FUEL_KEYS = ['petrol', 'diesel'];

const FALLBACK = {
  petrol: {
    fuel_type: 'petrol',
    price: 1.739,
    previous_price: 1.759,
    updated_at: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
  },
  diesel: {
    fuel_type: 'diesel',
    price: 1.689,
    previous_price: 1.679,
    updated_at: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
  },
};

function readCache() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // Bare sanity check that the cached blob has the shape we expect.
    if (parsed && parsed.petrol && parsed.diesel) return parsed;
    return null;
  } catch {
    return null;
  }
}

function writeCache(rows) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(rows));
  } catch {
    // localStorage may be full, blocked (Safari private mode), etc. - ignore.
  }
}

function normalise(row) {
  return {
    fuel_type: row.fuel_type,
    price: Number(row.price),
    previous_price:
      row.previous_price != null ? Number(row.previous_price) : null,
    updated_at: row.updated_at,
  };
}

export function useFuelPrices({ refreshInterval = 60_000 } = {}) {
  // Initialise from cache (or fallback) so the first paint has values.
  const initial = readCache() ?? FALLBACK;
  const [rows, setRows] = useState(initial);
  // `loading` reflects ONLY the first fetch after mount, so the cards never
  // re-flash a skeleton on every poll.
  const [loading, setLoading] = useState(isSupabaseConfigured);
  const [error, setError] = useState(null);
  const [lastFetchedAt, setLastFetchedAt] = useState(new Date());

  // Refs guard against state updates after unmount and de-dup concurrent fetches.
  const mountedRef = useRef(true);
  const inFlightRef = useRef(false);

  const fetchPrices = useCallback(async () => {
    if (inFlightRef.current) return;
    inFlightRef.current = true;

    try {
      if (!isSupabaseConfigured || !supabase) {
        // Static fallback (cached or seeded). Treat as a successful "fetch".
        if (mountedRef.current) {
          setError(null);
          setLastFetchedAt(new Date());
          setLoading(false);
        }
        return;
      }

      const { data, error: fetchErr } = await supabase
        .from('fuel_prices')
        .select('fuel_type, price, previous_price, updated_at')
        .in('fuel_type', FUEL_KEYS);

      if (fetchErr) throw fetchErr;

      const byKey = {};
      for (const r of data ?? []) {
        byKey[r.fuel_type] = normalise(r);
      }
      // Only commit if we got at least one valid row - otherwise keep the
      // existing values rather than blanking the UI.
      if (FUEL_KEYS.some((k) => byKey[k])) {
        if (mountedRef.current) {
          setRows((prev) => ({ ...prev, ...byKey }));
          setError(null);
          setLastFetchedAt(new Date());
          setLoading(false);
        }
        writeCache({ ...rows, ...byKey });
      }
    } catch (e) {
      if (mountedRef.current) {
        setError(e?.message ?? String(e));
        setLoading(false);
      }
      // Cache is left untouched on error so consumers keep the last-known prices.
    } finally {
      inFlightRef.current = false;
    }
    // `rows` is intentionally omitted: re-reading it would loop forever.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    fetchPrices();
    const id = setInterval(fetchPrices, refreshInterval);
    return () => {
      mountedRef.current = false;
      clearInterval(id);
    };
  }, [fetchPrices, refreshInterval]);

  // Compute the most recent updated_at across all fuels so the relative-time
  // label in either card reflects the freshest data.
  let mostRecent = null;
  for (const k of FUEL_KEYS) {
    const t = rows?.[k]?.updated_at;
    if (!t) continue;
    if (!mostRecent || new Date(t) > new Date(mostRecent)) mostRecent = t;
  }

  return {
    petrol: rows?.petrol ?? null,
    diesel: rows?.diesel ?? null,
    /** ISO timestamp of the newest row (or null). */
    updatedAt: mostRecent,
    /** Date the hook last fetched (used by the Refresh button label). */
    lastFetchedAt,
    loading,
    error,
    refresh: fetchPrices,
  };
}
