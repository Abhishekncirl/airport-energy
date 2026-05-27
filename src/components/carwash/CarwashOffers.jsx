import OfferBanner from './OfferBanner.jsx';

// Two side-by-side promo banners. Wacky Wednesdays uses warm yellow/orange
// (matches the in-store posters); Taxi Driver Special uses Insomnia red
// to stay visually consistent with the Coffee page's taxi promo.
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
  {
    badge: 'Taxi drivers only',
    emoji: '🚕',
    title: 'TAXI DRIVER SPECIAL',
    subtitle: 'Gold Wash for €9 - every day.',
    body:
      'Show your taxi licence and get our premium Gold Wash for just €9, any day of the week. Our way of saying thanks to the drivers who keep Ireland moving.',
    finePrint:
      'Valid taxi licence must be presented at the WashPod kiosk. One discounted wash per visit.',
    originalPrice: 14,
    discountPrice: 9,
    ribbon: 'Driver reward',
    background:
      'linear-gradient(135deg, #E30613 0%, #b8050f 45%, #7a0008 100%)',
    ribbonColor: 'rgba(0, 0, 0, 0.45)',
  },
];

export default function CarwashOffers() {
  return (
    <section className="section bg-slate-50">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Special offers</span>
          <h2 className="section-title mt-3">Save on your next wash.</h2>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
          {OFFERS.map((o) => (
            <OfferBanner key={o.title} {...o} />
          ))}
        </div>
      </div>
    </section>
  );
}
