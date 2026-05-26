// Centralised Supabase client.
//
// The URL and anon key are READ from build-time env vars (Vite inlines
// anything prefixed with VITE_*). Both values are public by design — the
// anon key only grants whatever Row-Level Security policies allow.
//
// If the env vars are missing (e.g. nobody has configured Supabase yet),
// we export `null` rather than crashing. The public site falls back to
// hardcoded prices and the admin panel shows a clear "not configured"
// message — so the site keeps working out-of-the-box for anyone who clones
// the repo without secrets.
import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

export const supabase = isSupabaseConfigured
  ? createClient(url, anonKey, {
      auth: {
        // Keep the session in localStorage; long sessions are fine for an
        // internal admin panel and Supabase will refresh tokens silently.
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: false,
      },
    })
  : null;
