import { ArrowDown, Sparkles } from 'lucide-react';

// Hero banner for the Valet Cleaning page.
// Uses the actual Valet Centre photo as the backdrop with a dark overlay
// + neon-green accent (#00FF66) to match the centre's branding.
export default function ValetHero() {
  const scrollToMachines = () => {
    const el = document.getElementById('machines');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative isolate w-full overflow-hidden bg-black">
      <div className="relative h-[40vh] w-full sm:h-[55vh] lg:h-[65vh]">
        {/* Background photo */}
        <img
          src={`${import.meta.env.BASE_URL}images/valet/valet-hero.jpg`}
          alt="The Self-Service Valet Centre at Airport Energy"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />

        {/* Dark gradient overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/30"
        />

        {/* Neon-green glow accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(700px 280px at 12% 100%, rgba(0,255,102,0.35), transparent 60%)',
          }}
        />

        <div className="absolute inset-x-0 bottom-0">
          <div className="container-x pb-10 sm:pb-14">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur"
              style={{
                borderColor: 'rgba(0,255,102,0.5)',
                backgroundColor: 'rgba(0,255,102,0.08)',
              }}
            >
              <Sparkles className="h-3.5 w-3.5" style={{ color: '#00FF66' }} />
              Self-Service · Pro-Grade
            </span>

            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
              Self-Service{' '}
              <span style={{ color: '#00FF66' }}>Valet Centre.</span>
            </h1>

            <p className="mt-4 max-w-2xl text-base text-white/85 drop-shadow sm:text-lg">
              Premium self-service detailing — pro-grade machines, just{' '}
              <span className="font-semibold text-white">€1 per use.</span>
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={scrollToMachines}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-black shadow-lg transition hover:-translate-y-0.5"
                style={{
                  backgroundColor: '#00FF66',
                  boxShadow: '0 12px 32px -8px rgba(0,255,102,0.55)',
                }}
              >
                See What’s Available
                <ArrowDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
