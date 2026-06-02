import { useState } from 'react';
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Facebook,
  Instagram,
} from 'lucide-react';

const INITIAL = { name: '', email: '', message: '' };

// Where contact form messages get sent. Change here if the business email
// ever moves.
const TO_EMAIL = 'airportmotorsholdingsltd@gmail.com';

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [sent, setSent] = useState(false);

  const onChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // No backend on GitHub Pages — instead we open the user's default mail
  // app with a pre-filled message addressed to the business. They just have
  // to hit Send in their own mail client. This works on every device that
  // has a mail app configured (most do, by default).
  const onSubmit = (e) => {
    e.preventDefault();

    const subject = `Website enquiry from ${form.name || 'a visitor'}`;
    const body = [
      `Name: ${form.name}`,
      `Reply to: ${form.email}`,
      '',
      form.message,
      '',
      '---',
      'Sent from airportenergy.ie',
    ].join('\n');

    const mailto = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Triggers the OS mail handler — Gmail / Apple Mail / Outlook etc.
    window.location.href = mailto;

    setSent(true);
    setTimeout(() => setSent(false), 6000);
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
          </ul>

          <div className="mt-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Follow us
            </p>
            <div className="mt-3 flex gap-3">
              {[
                {
                  Icon: Facebook,
                  href:
                    'https://www.facebook.com/p/Airport-Energy-Service-Station-61561695792654/',
                  label: 'Facebook',
                },
                {
                  Icon: Instagram,
                  href:
                    'https://www.instagram.com/airport_energy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
                  label: 'Instagram',
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
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
                Opening your email app…
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send message
              </>
            )}
          </button>

          <p className="mt-4 text-xs text-slate-500">
            Clicking Send opens your email app with the message pre-filled
            so you can review it before sending. We typically respond within
            one business day.
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
