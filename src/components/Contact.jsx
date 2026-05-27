import { useState } from 'react';
import {
  Mail,
  Phone,
  MessageCircle,
  Send,
  CheckCircle2,
  Facebook,
  Instagram,
  Twitter,
} from 'lucide-react';

const INITIAL = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [sent, setSent] = useState(false);

  const onChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // No backend - log the submission and show a confirmation state.
    console.log('Airport Energy contact form submission:', form);
    setSent(true);
    setForm(INITIAL);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        {/* Left: info */}
        <div className="reveal">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title mt-3">
            Questions? We're here, around the clock.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Reach out about fleet accounts, carwash & valet bookings, lost
            items or just to say hi.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex items-start gap-4">
              <div className="rounded-xl bg-brand-900 p-3 text-white">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Call
                </p>
                <a
                  href="tel:+35318060538"
                  className="text-base font-semibold text-brand-900 hover:text-accent"
                >
                  (01) 806 0538
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="rounded-xl bg-accent p-3 text-white">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Email
                </p>
                <a
                  href="mailto:airportmotorsholdingsltd@gmail.com"
                  className="break-all text-base font-semibold text-brand-900 hover:text-accent"
                >
                  airportmotorsholdingsltd@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="rounded-xl bg-fuel-green p-3 text-white">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Live support
                </p>
                <p className="text-base font-semibold text-brand-900">
                  Chat available on the forecourt and in-store, 24/7.
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Follow us
            </p>
            <div className="mt-3 flex gap-3">
              {[
                { Icon: Facebook, href: '#', label: 'Facebook', external: false },
                {
                  Icon: Instagram,
                  href:
                    'https://www.instagram.com/airport_energy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
                  label: 'Instagram',
                  external: true,
                },
                { Icon: Twitter, href: '#', label: 'Twitter / X', external: false },
              ].map(({ Icon, href, label, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(external && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-accent hover:bg-accent hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: form */}
        <form
          onSubmit={onSubmit}
          className="reveal rounded-3xl border border-slate-200 bg-slate-50/60 p-6 shadow-sm sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Your name"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Jane Driver"
              required
            />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="jane@example.com"
              required
            />
          </div>

          <label className="mt-5 block">
            <span className="text-sm font-semibold text-slate-700">
              Message
            </span>
            <textarea
              name="message"
              required
              value={form.message}
              onChange={onChange}
              rows={5}
              placeholder="How can we help?"
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm shadow-inner focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
            />
          </label>

          <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
            {sent ? (
              <>
                <CheckCircle2 className="h-4 w-4" />
                Message sent - thanks!
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send message
              </>
            )}
          </button>

          <p className="mt-4 text-xs text-slate-500">
            We typically respond within one business day.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', value, onChange, placeholder, required }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm shadow-inner focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
      />
    </label>
  );
}
