// Handles two scroll behaviours React Router doesn't do out of the box:
//   1. On a pure route change (no hash) → scroll to top.
//   2. On a route change with a hash → smooth-scroll to the matching element
//      once the new page has rendered.
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait for the new page's DOM to mount, then scroll.
      const id = hash.slice(1);
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}
