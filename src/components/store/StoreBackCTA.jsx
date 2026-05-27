import { ArrowLeft, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Closing CTA on the Convenience Store page - mirrors CoffeeBackCTA so the
// two product pages share their footer behaviour.
export default function StoreBackCTA() {
  return (
    <section className="section bg-brand-900">
      <div className="container-x">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Drop by any time.
          </h2>
          <p className="mt-4 text-lg text-white/80">
            We’re right on Old Airport Road in Collinstown - open 24 hours,
            every day of the year.
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
