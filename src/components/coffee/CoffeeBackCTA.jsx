import { ArrowLeft, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Footer CTA on the Coffee & Snacks page — gives visitors a clear next step.
export default function CoffeeBackCTA() {
  return (
    <section className="section bg-brand-900">
      <div className="container-x">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Drop in for a cup today.
          </h2>
          <p className="mt-4 text-lg text-white/80">
            We’re right on the airport approach road, open every day of the
            year. The kettle’s already on.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/#location" className="btn-primary">
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
