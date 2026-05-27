import { useEffect, useState } from 'react';
import { AlertCircle, Eye, EyeOff, Loader2, Lock, LogIn } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

import Logo from '../../components/Logo.jsx';
import { isSupabaseConfigured, supabase } from '../../lib/supabase.js';
import { useSupabaseAuth } from '../../hooks/useSupabaseAuth.js';

export default function AdminLoginPage() {
  const { isAuthenticated, loading: sessionLoading } = useSupabaseAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Where to send the user after a successful login. Defaults to the
  // dashboard, but ProtectedRoute may pass a `from` we should bounce back to.
  const from = location.state?.from ?? '/admin/dashboard';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Already signed in? Skip the form.
  useEffect(() => {
    if (isAuthenticated && !sessionLoading) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, sessionLoading, navigate, from]);

  // Per-page title for the browser tab.
  useEffect(() => {
    const prev = document.title;
    document.title = 'Admin login - Airport Energy';
    return () => { document.title = prev; };
  }, []);

  // If the build was deployed without Supabase keys, render a clear notice
  // rather than letting users tap a button that does nothing.
  if (!isSupabaseConfigured) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <div className="max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
          <h1 className="text-2xl font-bold text-brand-900">
            Admin panel not configured
          </h1>
          <p className="mt-3 text-slate-600">
            This deploy is missing Supabase credentials. Set{' '}
            <code>VITE_SUPABASE_URL</code> and{' '}
            <code>VITE_SUPABASE_ANON_KEY</code> as build-time environment
            variables, then redeploy. See the project README for the full
            setup walkthrough.
          </p>
        </div>
      </div>
    );
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    setSubmitting(false);

    if (signInError) {
      // Supabase returns "Invalid login credentials" - keep the message
      // generic so we don't reveal which field was wrong.
      setError('Invalid username or password');
      return;
    }

    navigate(from, { replace: true });
  };

  return (
    <div className="relative isolate flex min-h-screen items-center justify-center bg-hero-gradient px-4 py-16">
      {/* Decorative grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl sm:p-10">
          <div className="flex flex-col items-center text-center">
            <Logo className="h-14 w-14" />
            <h1 className="mt-5 text-2xl font-extrabold tracking-tight text-brand-900">
              Admin Login
            </h1>
            <p className="mt-1 text-sm text-slate-500">Authorised staff only</p>
          </div>

          <form className="mt-8 space-y-5" onSubmit={onSubmit} noValidate>
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">
                Email
              </span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@airportenergy.ie"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm shadow-inner focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-700">
                Password
              </span>
              <div className="relative mt-2">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-200 bg-white p-3 pr-11 text-sm shadow-inner focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute inset-y-0 right-0 inline-flex items-center px-3 text-slate-500 hover:text-brand-700"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </label>

            {error && (
              <div
                role="alert"
                className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700"
              >
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Signing in…
                </>
              ) : (
                <>
                  <LogIn className="h-4 w-4" />
                  Sign in
                </>
              )}
            </button>
          </form>

          <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-slate-500">
            <Lock className="h-3 w-3" />
            Secured by Supabase Auth · sessions expire automatically
          </p>
        </div>
      </div>
    </div>
  );
}
