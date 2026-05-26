import { useEffect, useState } from 'react';
import { Fuel, Loader2 } from 'lucide-react';

// Formats a Date the same way as the public Fuel Prices card.
function fmtUpdatedAt(iso) {
  if (!iso) return 'never';
  const d = new Date(iso);
  return (
    d.toLocaleDateString(undefined, { day: '2-digit', month: 'short' }) +
    ' · ' +
    d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
  );
}

// Controlled card for a single fuel type. The parent owns the array of
// rows and the global save/cancel state; this component only:
//   - validates the input as the user types
//   - reports back its current draft value via onChange
//   - shows the existing live price + last-updated timestamp for context
export default function FuelPriceEditor({
  fuelType,
  label,
  row,
  draftValue,
  onChange,
  saving,
  saved,
}) {
  const [error, setError] = useState(null);
  const livePrice = row?.price;
  const updatedAt = row?.updated_at;

  // Re-validate whenever the draft changes
  useEffect(() => {
    if (draftValue === '' || draftValue == null) {
      setError(null);
      return;
    }
    const num = Number(draftValue);
    if (Number.isNaN(num) || num <= 0) {
      setError('Price must be a positive number');
    } else if (/\.\d{4,}$/.test(String(draftValue))) {
      setError('Max 3 decimal places');
    } else {
      setError(null);
    }
  }, [draftValue]);

  const hasChange =
    draftValue !== '' &&
    draftValue != null &&
    Number(draftValue) !== livePrice &&
    !error;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-brand-900 p-3 text-white">
            <Fuel className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {fuelType}
            </p>
            <p className="text-base font-bold text-brand-900">{label}</p>
          </div>
        </div>
        {saving ? (
          <Loader2 className="h-5 w-5 animate-spin text-slate-400" />
        ) : saved ? (
          <span className="rounded-full bg-fuel-green/10 px-3 py-1 text-xs font-semibold text-fuel-green">
            Saved
          </span>
        ) : hasChange ? (
          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-700">
            Unsaved
          </span>
        ) : null}
      </div>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Current price
        </p>
        <p className="mt-1 text-3xl font-extrabold text-brand-900">
          {livePrice != null ? (
            <>
              €{livePrice.toFixed(3)}
              <span className="ml-1 text-sm font-semibold text-slate-500">
                /L
              </span>
            </>
          ) : (
            <span className="text-base font-medium text-slate-400">
              loading…
            </span>
          )}
        </p>
      </div>

      <label className="mt-5 block">
        <span className="text-sm font-semibold text-slate-700">New price (€/L)</span>
        <input
          type="number"
          step="0.001"
          min="0"
          inputMode="decimal"
          value={draftValue ?? ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder={livePrice != null ? livePrice.toFixed(3) : '0.000'}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${fuelType}-error` : undefined}
          className={`mt-2 w-full rounded-xl border bg-white p-3 text-sm shadow-inner focus:outline-none focus:ring-2 ${
            error
              ? 'border-red-300 focus:border-red-400 focus:ring-red-200'
              : 'border-slate-200 focus:border-brand-500 focus:ring-brand-200'
          }`}
        />
        {error && (
          <p id={`${fuelType}-error`} className="mt-1.5 text-xs text-red-600">
            {error}
          </p>
        )}
      </label>

      <p className="mt-4 text-xs text-slate-500">
        Last updated: <span className="font-semibold text-slate-700">{fmtUpdatedAt(updatedAt)}</span>
      </p>
    </article>
  );
}
