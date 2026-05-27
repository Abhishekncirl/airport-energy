import { ArrowLeft, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Closing CTA - mirrors the other product detail pages so the bottom of
// every dedicated page feels consistent.
export default function OtherServicesBackCTA() {
  return (
    <section className="section bg-brand-900">
      <div className="container-x">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Discover more at Airport Energy.
          </h2>
          <p className="mt-4 text-lg text-white/80">
            From fuel to fresh coffee to laundry - everything you need is
            right here, all in one stop.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn-primary">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <Link
              to="/#location"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <MapPin className="h-4 w-4" />
              Find Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
