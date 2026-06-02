import { ArrowDown } from 'lucide-react';

const BASE = import.meta.env.BASE_URL;

// Netflix/Prime-style full-bleed video banner.
//
// Notes for autoplay-on-mobile:
//   - `muted` + `playsInline` + `autoPlay` are ALL required for iOS Safari
//   - the `poster` shows instantly while the video is still buffering
//   - `preload="auto"` lets the browser start fetching the file early
//   - the video has no audio track at all (stripped during encode) so
//     even if the browser ignores `muted`, nothing will play
export default function CarwashHero() {
  // Smooth-scroll handler so the "See Wash Packages" button feels native
  // (we can't use a plain hash link because the header is fixed and would
  // hide the top of the section).
  const scrollToPackages = () => {
    const el = document.getElementById('packages');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative isolate w-full overflow-hidden">
      {/* Video layer */}
      <div className="relative h-[40vh] w-full bg-black sm:h-[55vh] lg:h-[65vh]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={`${BASE}images/carwash-poster.jpg`}
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src={`${BASE}videos/carwash-hero.mp4`} type="video/mp4" />
        </video>

        {/* Dark gradient overlay so text stays readable */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20"
        />

        {/* Bottom-left text block */}
        <div className="absolute inset-x-0 bottom-0 pt-32">
          <div className="container-x pb-10 sm:pb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
              Car Wash · Open daily
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
              Airport Energy{' '}
              <span className="bg-gradient-to-r from-accent-300 via-accent to-accent-600 bg-clip-text text-transparent">
                Car Wash.
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/85 drop-shadow sm:text-lg">
              Brush-and-jet wash - your car spotless in minutes.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={scrollToPackages}
                className="btn-primary"
              >
                See Wash Packages
                <ArrowDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
