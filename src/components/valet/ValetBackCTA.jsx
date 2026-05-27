import { ArrowLeft, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Closing CTA - neon-green primary button to stay on-theme for the page.
export default function ValetBackCTA() {
  return (
    <section className="section bg-black text-white">
      <div className="container-x">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Find the Valet Centre.
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Located on-site at Airport Energy - right next to the WashPod.
            Open every day, around the clock.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/#location"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-black shadow-lg transition hover:-translate-y-0.5"
              style={{
                backgroundColor: '#00FF66',
                boxShadow: '0 12px 32px -8px rgba(0,255,102,0.45)',
              }}
            >
              <MapPin className="h-4 w-4" />
              Find us
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
