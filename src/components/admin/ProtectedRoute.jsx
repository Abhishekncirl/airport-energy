import { Loader2 } from 'lucide-react';
import { Navigate, useLocation } from 'react-router-dom';

import { isSupabaseConfigured } from '../../lib/supabase.js';
import { useSupabaseAuth } from '../../hooks/useSupabaseAuth.js';

// Wraps protected admin pages. Three possible states:
//   1. Supabase not configured  → friendly setup notice
//   2. Still checking session   → centered spinner
//   3. Not signed in            → redirect to /admin/login, preserving the
//                                 target so we can bounce back after login
//   4. Signed in                → render children
export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useSupabaseAuth();
  const location = useLocation();

  if (!isSupabaseConfigured) {
    return <NotConfiguredNotice />;
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-brand-700" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/admin/login"
        state={{ from: location.pathname + location.search }}
        replace
      />
    );
  }

  return children;
}

function NotConfiguredNotice() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6 pt-24">
      <div className="max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-brand-900">
          Admin panel not configured
        </h1>
        <p className="mt-3 text-slate-600">
          This deploy is missing Supabase credentials, so the admin panel is
          unavailable. To enable it, set <code>VITE_SUPABASE_URL</code> and{' '}
          <code>VITE_SUPABASE_ANON_KEY</code> as build-time environment
          variables (see the project README for full setup instructions).
        </p>
      </div>
    </div>
  );
}
