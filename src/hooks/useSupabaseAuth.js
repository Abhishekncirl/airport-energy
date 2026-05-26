// Tiny hook that mirrors Supabase's auth session into React state.
// Components can either subscribe to the full session or just ask for
// the signed-in user. Refreshes happen automatically — no polling.
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase.js';

export function useSupabaseAuth() {
  const [session, setSession] = useState(null);
  // `loading` is true until we've heard back from Supabase the first time,
  // so guarded routes can show a spinner instead of flashing "logged out".
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return undefined;
    }

    let mounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setSession(data.session);
      setLoading(false);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      setLoading(false);
    });

    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  return {
    session,
    user: session?.user ?? null,
    loading,
    isAuthenticated: Boolean(session?.user),
  };
}
