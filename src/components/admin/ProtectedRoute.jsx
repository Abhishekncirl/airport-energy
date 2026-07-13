import { Loader2 } from 'lucide-react';
import { Navigate, useLocation } from 'react-router-dom';

import { isFirebaseConfigured } from '../../lib/firebase.js';
import { useFirebaseAuth } from '../../hooks/useFirebaseAuth.js';

// Wraps protected admin pages. Four possible states:
//   1. Firebase not configured    -> friendly setup notice
//   2. Still checking auth state  -> centered spinner
//   3. Not signed in              -> redirect to /admin/login, preserving
//                                    the target so we bounce back after login
//   4. Signed in                  -> render children
export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useFirebaseAuth();
  const location = useLocation();

  if (!isFirebaseConfigured) {
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
          This build is missing the Firebase project config, so the admin
          panel is unavailable. Fill in <code>FIREBASE_CONFIG</code> in{' '}
          <code>src/lib/firebase.js</code> and redeploy (see the project
          README for the full setup walkthrough).
        </p>
      </div>
    </div>
  );
}
