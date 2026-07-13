import { useCallback, useEffect, useMemo, useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2, RotateCcw, Save } from 'lucide-react';
import {
  collection,
  doc,
  getDocs,
  serverTimestamp,
  writeBatch,
} from 'firebase/firestore';

import AdminLayout from '../../components/admin/AdminLayout.jsx';
import FuelPriceEditor from '../../components/admin/FuelPriceEditor.jsx';
import { auth, db } from '../../lib/firebase.js';

const FUELS = [
  { key: 'petrol', label: 'Petrol (Unleaded 95)' },
  { key: 'diesel', label: 'Diesel' },
];

// Auto-dismiss toasts after this many ms.
const TOAST_MS = 4000;

// Firestore Timestamp -> ISO string (FuelPriceEditor expects ISO).
function tsToIso(ts) {
  if (!ts) return null;
  if (typeof ts === 'string') return ts;
  if (typeof ts.toDate === 'function') return ts.toDate().toISOString();
  return null;
}

export default function AdminDashboardPage() {
  // Map of { petrol: row, diesel: row } from Firestore.
  const [rows, setRows] = useState({});
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  // Draft inputs keyed by fuel type. Empty string means "no change".
  const [drafts, setDrafts] = useState({});

  // Per-row save state for the badge inside FuelPriceEditor.
  const [savingMap, setSavingMap] = useState({});
  const [savedMap, setSavedMap] = useState({});

  // Global save state for the bottom buttons.
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null); // { kind: 'success'|'error', text }

  // Per-page title
  useEffect(() => {
    const prev = document.title;
    document.title = 'Admin dashboard - Airport Energy';
    return () => { document.title = prev; };
  }, []);

  // Auto-dismiss toasts
  useEffect(() => {
    if (!toast) return undefined;
    const id = setTimeout(() => setToast(null), TOAST_MS);
    return () => clearTimeout(id);
  }, [toast]);

  const loadPrices = useCallback(async () => {
    if (!db) return;
    setLoading(true);
    setLoadError(null);
    try {
      const snap = await getDocs(collection(db, 'fuel_prices'));
      const byKey = {};
      snap.forEach((d) => {
        const data = d.data();
        byKey[d.id] = {
          fuel_type: d.id,
          price: Number(data.price),
          previous_price:
            data.previous_price != null ? Number(data.previous_price) : null,
          updated_at: tsToIso(data.updated_at),
        };
      });
      setRows(byKey);
    } catch (e) {
      setLoadError(e?.message ?? String(e));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadPrices(); }, [loadPrices]);

  // Are there unsaved valid changes?
  const dirtyKeys = useMemo(() => {
    return FUELS.filter(({ key }) => {
      const v = drafts[key];
      if (v === '' || v == null) return false;
      const num = Number(v);
      if (Number.isNaN(num) || num <= 0) return false;
      if (/\.\d{4,}$/.test(String(v))) return false;
      return num !== rows[key]?.price;
    }).map((f) => f.key);
  }, [drafts, rows]);

  const onSave = async () => {
    if (!dirtyKeys.length || submitting) return;
    setSubmitting(true);
    setToast(null);

    const nextSaving = {};
    for (const k of dirtyKeys) nextSaving[k] = true;
    setSavingMap(nextSaving);

    let firstError = null;
    const newlySaved = {};
    const editorEmail = auth?.currentUser?.email ?? null;

    // One atomic batch per fuel: the price update AND its audit-log entry
    // commit together or not at all (same guarantee the old Supabase RPC
    // gave us). Sequential so errors are attributable to a specific fuel.
    for (const key of dirtyKeys) {
      const num = Number(drafts[key]);
      const oldPrice = rows[key]?.price ?? null;
      try {
        const batch = writeBatch(db);

        // setDoc-with-merge also CREATES the doc on very first save, so a
        // brand-new Firebase project needs no manual seeding.
        batch.set(
          doc(db, 'fuel_prices', key),
          {
            price: num,
            previous_price: oldPrice,
            updated_at: serverTimestamp(),
            updated_by: editorEmail,
          },
          { merge: true }
        );

        batch.set(doc(collection(db, 'price_changes')), {
          fuel_type: key,
          old_price: oldPrice,
          new_price: num,
          changed_at: serverTimestamp(),
          changed_by_email: editorEmail,
        });

        await batch.commit();
        newlySaved[key] = true;
      } catch (e) {
        firstError = firstError ?? (e?.message ?? String(e));
        break;
      }
    }

    setSavingMap({});
    setSavedMap(newlySaved);

    // Re-pull fresh data so the cards reflect the new state.
    await loadPrices();
    setDrafts({});
    setSubmitting(false);

    if (firstError) {
      setToast({ kind: 'error', text: `Could not save: ${firstError}` });
    } else {
      setToast({ kind: 'success', text: 'Prices updated successfully' });
      // Clear the per-row "Saved" badge after a moment.
      setTimeout(() => setSavedMap({}), TOAST_MS);
    }
  };

  const onCancel = () => {
    setDrafts({});
    setToast(null);
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl">
        <header>
          <h1 className="text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
            Manage Fuel Prices
          </h1>
          <p className="mt-2 text-base text-slate-600">
            Update the prices displayed on the public{' '}
            <span className="font-semibold text-brand-900">Live Fuel Prices</span>{' '}
            section. Changes go live immediately.
          </p>
        </header>

        {loadError && (
          <div
            role="alert"
            className="mt-6 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>Could not load fuel prices: {loadError}</span>
          </div>
        )}

        <section className="mt-8 grid gap-6 sm:grid-cols-2">
          {FUELS.map(({ key, label }) => (
            <FuelPriceEditor
              key={key}
              fuelType={key}
              label={label}
              row={rows[key]}
              draftValue={drafts[key] ?? ''}
              onChange={(v) => setDrafts((d) => ({ ...d, [key]: v }))}
              saving={Boolean(savingMap[key])}
              saved={Boolean(savedMap[key])}
            />
          ))}
        </section>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={onSave}
            disabled={!dirtyKeys.length || submitting || loading}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Saving…
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                Save changes
                {dirtyKeys.length > 0 && (
                  <span className="ml-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold">
                    {dirtyKeys.length}
                  </span>
                )}
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onCancel}
            disabled={!dirtyKeys.length || submitting}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <RotateCcw className="h-4 w-4" />
            Cancel
          </button>

          {loading && (
            <span className="inline-flex items-center gap-2 text-sm text-slate-500">
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading current prices…
            </span>
          )}
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div
          role="status"
          className={`fixed bottom-6 right-6 z-50 flex max-w-sm items-start gap-3 rounded-2xl border p-4 shadow-2xl ${
            toast.kind === 'success'
              ? 'border-fuel-green/30 bg-white text-brand-900'
              : 'border-red-200 bg-white text-red-700'
          }`}
        >
          {toast.kind === 'success' ? (
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-fuel-green" />
          ) : (
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
          )}
          <p className="text-sm font-medium">
            {toast.text}
            {toast.kind === 'success' && (
              <span className="ml-1 text-fuel-green">✓</span>
            )}
          </p>
        </div>
      )}
    </AdminLayout>
  );
}
