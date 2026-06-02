import WashPackageCard from './WashPackageCard.jsx';

// Tiers in merit order: Gold (highest) > Silver > Bronze.
// Gold is featured so it gets the "Most popular" ribbon AND remains the
// first card visitors see on every viewport.
const TIERS = [
  {
    tier: 'Gold',
    price: 14,
    accentColor: '#D4AF37',
    textColor: '#A88424',
    featured: true,
    includes: [
      'LED Foam Pre-Soak',
      'Alloy Wheel Foam Prep',
      'Full Contouring High-Pressure Wash',
      'Ultra Soft Brush Wash',
      'High Pressure Wheel Wash',
      'Premium Wax with Rain Shield Protection',
      'Premium Foam Polish with Soft Brush Buffing',
      'VIP Drying',
    ],
  },
  {
    tier: 'Silver',
    price: 12,
    accentColor: '#C0C0C0',
    textColor: '#5A6066',
    includes: [
      'LED Foam Pre-Soak',
      'Alloy Rim Prep',
      'Full Contouring High-Pressure Wash',
      'Ultra Soft Brush Wash',
      'High Pressure Wheel Wash',
      'Premium Wax with Rain Shield Protection',
      'Classic Drying',
    ],
  },
  {
    tier: 'Bronze',
    price: 10,
    accentColor: '#CD7F32',
    textColor: '#8B5A23',
    includes: [
      'LED Foam Pre-Soak',
      'Alloy Rim Prep',
      'Ultra Soft Brush Wash',
      'High Pressure Wheel Wash',
      'Premium Wax with Rain Shield Protection',
      'Classic Drying',
    ],
  },
];

export default function WashPackages() {
  return (
    <section id="packages" className="section bg-white">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Choose your wash</span>
          <h2 className="section-title mt-3">
            Three packages. Pick what your day needs.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Every package uses our ultra-soft brush technology
            with premium wax - the difference is how deep the clean goes.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {TIERS.map((t) => (
            <WashPackageCard key={t.tier} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
