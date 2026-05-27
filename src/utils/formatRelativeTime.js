// Returns a short, human-readable "Updated X ago" string.
//
//   < 60 sec     → "Updated just now"
//   < 60 min     → "Updated 23 min ago"
//   < 24 hr      → "Updated 5 hr ago"
//   >= 1 day     → "Updated 3 days ago"
//
// Pass `prefix=''` if you want just "23 min ago" without the "Updated " bit.
export function formatRelativeTime(timestamp, { prefix = 'Updated ' } = {}) {
  if (!timestamp) return `${prefix}never`.trim();

  const then = new Date(timestamp).getTime();
  if (Number.isNaN(then)) return `${prefix}never`.trim();

  const sec = Math.max(0, Math.floor((Date.now() - then) / 1000));

  if (sec < 60) return `${prefix}just now`;

  const min = Math.floor(sec / 60);
  if (min < 60) return `${prefix}${min} min ago`;

  const hr = Math.floor(min / 60);
  if (hr < 24) return `${prefix}${hr} hr ago`;

  const day = Math.floor(hr / 24);
  return `${prefix}${day} day${day === 1 ? '' : 's'} ago`;
}
