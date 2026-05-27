import { Lightbulb } from 'lucide-react';

const TIPS = [
  'Remove large items from your car before vacuuming for the best suction.',
  'Use the mat cleaner first, then vacuum the interior — saves you a second pass.',
  'Check tyre pressure when the tyres are cold for the most accurate reading.',
  'Apply fragrance under the seat — not directly on fabric — so it lasts longer.',
];

// Compact tip-list block. Slate background so it doesn't compete visually
// with the bigger sections around it.
export default function ValetProTips() {
  return (
    <section className="section bg-slate-50">
      <div className="container-x">
        <div className="reveal mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="flex items-center gap-3">
            <div
              className="rounded-xl p-3"
              style={{ backgroundColor: '#0f1113', color: '#00FF66' }}
            >
              <Lightbulb className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Pro tips
              </p>
              <h2 className="text-xl font-bold text-brand-900">
                Get the most out of your visit
              </h2>
            </div>
          </div>

          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            {TIPS.map((tip) => (
              <li key={tip} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: '#00FF66' }}
                />
                <span className="leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
