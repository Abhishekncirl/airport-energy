import { useEffect, useState } from 'react';
import {
  Menu,
  X,
  Phone,
  Coffee,
  ShoppingBag,
  Lock,
  Droplets,
  Sparkles,
  LayoutGrid,
} from 'lucide-react';
import Logo from './Logo.jsx';
import SmartLink from './SmartLink.jsx';

// `kind: 'hash'` → in-page anchor on the home page.
// `kind: 'route'` → dedicated page route.
// `icon`         → optional Lucide icon shown before the label (route links).
const NAV_LINKS = [
  { to: '#home', label: 'Home', kind: 'hash' },
  { to: '#prices', label: 'Prices', kind: 'hash' },
  { to: '/carwash', label: 'Wash', kind: 'route', icon: Droplets },
  { to: '/valet-cleaning', label: 'Valet', kind: 'route', icon: Sparkles },
  { to: '/convenience-store', label: 'Store', kind: 'route', icon: ShoppingBag },
  { to: '/coffee-snacks', label: 'Coffee', kind: 'route', icon: Coffee },
  { to: '/other-services', label: 'More', kind: 'route', icon: LayoutGrid },
  { to: '#location', label: 'Location', kind: 'hash' },
  { to: '#contact', label: 'Contact', kind: 'hash' },
];

// Visually separated from the main nav - it's a staff entry point, not a
// content link. Rendered after a small divider.
const ADMIN_LINK = {
  to: '/admin/login',
  label: 'Admin',
  icon: Lock,
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between sm:h-20">
        <SmartLink
          to="#home"
          className="flex items-center gap-3"
          aria-label="Airport Energy - back to top"
        >
          <Logo className="h-9 w-9 sm:h-10 sm:w-10" />
          <span
            className={`text-lg font-extrabold tracking-tight sm:text-xl ${
              scrolled ? 'text-brand-900' : 'text-white'
            }`}
          >
            Airport<span className="text-accent">Energy</span>
          </span>
        </SmartLink>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-5 lg:flex xl:gap-6">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.to}>
                <SmartLink
                  to={link.to}
                  className={`inline-flex items-center gap-1.5 text-sm font-medium transition hover:text-accent ${
                    scrolled ? 'text-slate-700' : 'text-white/90'
                  }`}
                >
                  {Icon && <Icon className="h-3.5 w-3.5" />}
                  {link.label}
                </SmartLink>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          {/* Staff entry - lower visual weight than the main "Get in Touch" CTA */}
          <SmartLink
            to={ADMIN_LINK.to}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
              scrolled
                ? 'border-slate-200 text-slate-600 hover:border-accent hover:text-accent'
                : 'border-white/20 text-white/80 hover:border-accent hover:text-accent'
            }`}
            aria-label="Admin login"
          >
            <ADMIN_LINK.icon className="h-3.5 w-3.5" />
            {ADMIN_LINK.label}
          </SmartLink>

          <SmartLink to="#contact" className="btn-primary">
            <Phone className="h-4 w-4" />
            Get in Touch
          </SmartLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex items-center justify-center rounded-md p-2 lg:hidden ${
            scrolled ? 'text-brand-900' : 'text-white'
          }`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`lg:hidden ${open ? 'block' : 'hidden'} border-t border-slate-200 bg-white shadow-lg`}
      >
        <ul className="container-x flex flex-col py-4">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.to}>
                <SmartLink
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-md px-2 py-3 text-base font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                >
                  {Icon && <Icon className="h-4 w-4 text-accent" />}
                  {link.label}
                </SmartLink>
              </li>
            );
          })}
          <li className="border-t border-slate-100 pt-2">
            <SmartLink
              to={ADMIN_LINK.to}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-md px-2 py-3 text-sm font-semibold text-slate-500 hover:bg-brand-50 hover:text-brand-700"
            >
              <ADMIN_LINK.icon className="h-4 w-4" />
              {ADMIN_LINK.label}
            </SmartLink>
          </li>
          <li className="px-2 pb-2 pt-3">
            <SmartLink
              to="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              <Phone className="h-4 w-4" />
              Get in Touch
            </SmartLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
