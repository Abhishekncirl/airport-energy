import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import Logo from './Logo.jsx';
import SmartLink from './SmartLink.jsx';

const LINKS = [
  { to: '#home', label: 'Home' },
  { to: '#about', label: 'About' },
  { to: '#services', label: 'Services' },
  { to: '#prices', label: 'Fuel Prices' },
  { to: '/carwash', label: 'Car Wash' },
  { to: '/valet-cleaning', label: 'Valet Centre' },
  { to: '/convenience-store', label: 'Convenience Store' },
  { to: '/coffee-snacks', label: 'Coffee & Snacks' },
  { to: '/other-services', label: 'Other Services' },
  { to: '#location', label: 'Location' },
  { to: '#contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-slate-300">
      <div className="container-x grid gap-10 py-14 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-10" />
            <span className="text-xl font-extrabold tracking-tight text-white">
              Airport<span className="text-accent">Energy</span>
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
            Quality fuel, a touch-free car wash, full valet service and a
            convenience store open 7 days a week - designed for travellers
            and locals on the move.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              {
                Icon: Facebook,
                label: 'Facebook',
                href:
                  'https://www.facebook.com/p/Airport-Energy-Service-Station-61561695792654/',
              },
              {
                Icon: Instagram,
                label: 'Instagram',
                href:
                  'https://www.instagram.com/airport_energy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
              },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-accent hover:bg-accent hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Quick links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {LINKS.map((l) => (
              <li key={l.to}>
                <SmartLink to={l.to} className="hover:text-accent">
                  {l.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <a href="tel:+35318060538" className="hover:text-accent">
                (01) 806 0538
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a
                href="mailto:airportmotorsholdingsltd@gmail.com"
                className="break-all hover:text-accent"
              >
                airportmotorsholdingsltd@gmail.com
              </a>
            </li>
            <li className="text-slate-400">
              Old Airport Road, Collinstown,<br />
              Swords, Co. Dublin, K67 C5F3
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
          <p>© {year} Airport Energy. All rights reserved.</p>
          <p>
            Made for the road -{' '}
            <SmartLink to="#home" className="hover:text-accent">
              back to top ↑
            </SmartLink>
          </p>
        </div>
      </div>
    </footer>
  );
}
