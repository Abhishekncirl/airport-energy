import { LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

import Logo from '../Logo.jsx';
import { supabase } from '../../lib/supabase.js';
import { useSupabaseAuth } from '../../hooks/useSupabaseAuth.js';

// Top bar for every authenticated admin screen.
// Keeps the chrome consistent and gives the user a single, obvious logout.
export default function AdminLayout({ children }) {
  const { user } = useSupabaseAuth();
  const navigate = useNavigate();

  const onLogout = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
    navigate('/admin/login', { replace: true });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container-x flex h-16 items-center justify-between">
          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3"
            aria-label="Airport Energy admin"
          >
            <Logo className="h-9 w-9" />
            <span className="text-lg font-extrabold tracking-tight text-brand-900">
              Airport<span className="text-accent">Energy</span>
              <span className="ml-2 rounded-md bg-brand-900 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-white">
                Admin
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <div className="hidden text-right sm:block">
              <p className="text-xs text-slate-500">Signed in as</p>
              <p className="text-sm font-semibold text-brand-900">
                {user?.email ?? 'staff'}
              </p>
            </div>
            <button
              type="button"
              onClick={onLogout}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-accent hover:text-accent"
            >
              <LogOut className="h-4 w-4" />
              Log out
            </button>
          </div>
        </div>
      </header>

      <main className="container-x py-10 sm:py-12">{children}</main>
    </div>
  );
}
