// Mirrors Firebase's auth state into React state (replaces useSupabaseAuth).
// Firebase refreshes ID tokens automatically - no polling needed.
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../lib/firebase.js';

export function useFirebaseAuth() {
  const [user, setUser] = useState(null);
  // `loading` is true until Firebase reports the initial auth state, so
  // guarded routes can show a spinner instead of flashing "logged out".
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return undefined;
    }

    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return {
    user,
    loading,
    isAuthenticated: Boolean(user),
  };
}
