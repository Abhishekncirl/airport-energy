import OfferBanner from './OfferBanner.jsx';

// Single promo banner: Wacky Wednesdays. The taxi-driver discount used
// to live here too but has been removed at the client's request (kept
// as a word-of-mouth perk only).
const OFFERS = [
  {
    badge: 'Wednesdays only',
    emoji: '🚗💦',
    title: 'WACKY WEDNESDAYS',
    subtitle: 'Gold Wash for just €9 - every Wednesday!',
    body:
      'Every Wednesday, treat your car to our premium Gold Wash for only €9 (normally €14). Save €5 - no booking needed, just drive in.',
    finePrint: 'Available all day Wednesday. Limited to one wash per vehicle.',
    originalPrice: 14,
    discountPrice: 9,
    ribbon: 'Save €5',
    background:
      'linear-gradient(135deg, #fbbf24 0%, #f59e0b 45%, #ea580c 100%)',
    ribbonColor: 'rgba(120, 53, 15, 0.55)',
  },
];

export default function CarwashOffers() {
  return (
    <section className="section bg-slate-50">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Special offer</span>
          <h2 className="section-title mt-3">Save on your next wash.</h2>
        </div>

        {/* Single offer - centred and capped at ~720px so it doesn't
            stretch full-width on desktop now that we only have one card. */}
        <div className="mx-auto mt-12 grid max-w-2xl items-stretch gap-6">
          {OFFERS.map((o) => (
            <OfferBanner key={o.title} {...o} />
          ))}
        </div>
      </div>
    </section>
  );
}
