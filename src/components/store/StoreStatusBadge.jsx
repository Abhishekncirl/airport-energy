import { useStoreStatus } from '../../hooks/useStoreStatus.js';

// Small pill that reads "Open now" (green dot) or "Closed - opens at ..."
// (grey dot). Used inside the store hero and on the homepage Services card.
//
// `variant`:
//   - 'dark' (default) - for use on dark / image backgrounds (hero)
//   - 'light'          - for use on white card backgrounds
export default function StoreStatusBadge({ variant = 'dark' }) {
  const { isOpen, opensAt, todayHours } = useStoreStatus();

  const label = isOpen
    ? `Open now · ${todayHours}`
    : `Closed · opens ${opensAt}`;

  const base =
    'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold';
  const styles =
    variant === 'light'
      ? 'border border-slate-200 bg-white text-slate-700 shadow-sm'
      : 'border border-white/20 bg-white/10 text-white backdrop-blur';

  const dot = isOpen ? 'bg-fuel-green animate-pulse-soft' : 'bg-slate-400';

  return (
    <span className={`${base} ${styles}`}>
      <span className={`h-2 w-2 rounded-full ${dot}`} />
      {label}
    </span>
  );
}
