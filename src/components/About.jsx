import { Target, HeartHandshake, Leaf, ShieldCheck } from 'lucide-react';
import AboutIllustration from './AboutIllustration.jsx';

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Quality fuel',
    body: 'Every litre meets EN-228 / EN-590 standards.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer-first',
    body: 'Quick service, fair pricing and friendly faces - day or night.',
  },
  {
    icon: Leaf,
    title: 'Spotless cars',
    body: 'Our car wash and valet team keep your vehicle clean inside and out.',
  },
];

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div className="reveal">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-brand-50" />
            <AboutIllustration className="block h-[420px] w-full rounded-3xl shadow-xl" />
          </div>
        </div>

        <div className="reveal">
          <span className="eyebrow">About Us</span>
          <h2 className="section-title mt-3">
            A fuel stop, reimagined for the modern traveller.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Founded by a family of road-trippers, Airport Energy began as a
            single forecourt next to the airport and has grown into a
            community fixture. We blend the speed travellers need with the
            warmth locals expect - premium fuel, fresh coffee, and a
            convenience store stocked for the journey ahead.
          </p>

          <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50/60 p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-brand-700 p-3 text-white">
                <Target className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-900">
                  Our mission
                </h3>
                <p className="mt-1 text-slate-600">
                  To make every stop quick, safe, and genuinely pleasant -
                  whether you're catching a flight or running errands across
                  town.
                </p>
              </div>
            </div>
          </div>

          <ul className="mt-8 grid gap-5 sm:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <li
                key={title}
                className="rounded-xl border border-slate-200 p-4 transition hover:border-accent hover:shadow-md"
              >
                <Icon className="h-5 w-5 text-accent" />
                <p className="mt-3 text-sm font-semibold text-brand-900">
                  {title}
                </p>
                <p className="mt-1 text-sm text-slate-600">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
