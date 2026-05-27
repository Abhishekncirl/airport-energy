import CategoryCard from './CategoryCard.jsx';

const BASE = import.meta.env.BASE_URL;

const CATEGORIES = [
  {
    image: `${BASE}images/convenience-store/carparts.png`,
    alt: 'Engine oils, screen wash and car care products on shelves',
    title: 'Car Care & Engine Oils',
    description:
      'Engine oils (5W/30, 10W/40 and more), screen wash, petrol & diesel system cleaners, power steering fluid, antifreeze, WD-40, polishes, air fresheners, cleaning sprays and kits. Everything to keep your car running smoothly.',
  },
  {
    image: `${BASE}images/convenience-store/sandwich.png`,
    alt: 'Premium Viand sandwiches displayed in the chiller',
    title: 'Fresh Sandwiches',
    description:
      "Premium Viand sandwiches made fresh daily - Egg Salad on Malted Brown Bread, The Ultimate BLT, Ploughman's, Cheese Delight and more. Deliciously fresh, perfect for a quick lunch on the go.",
  },
  {
    image: `${BASE}images/convenience-store/roll.png`,
    alt: 'Selection of Viand wraps and rolls ready to grab',
    title: 'Wraps & Rolls',
    description:
      'Freshly prepared Viand wraps and rolls - Chicken Tikka, Chicken & Bacon, Chicken Stuffing and more. Kept chilled and ready to grab.',
  },
  {
    image: `${BASE}images/convenience-store/drinks.png`,
    alt: 'Refrigerated wall of cold drinks, energy drinks and water',
    title: 'Cold Drinks & Energy',
    description:
      'Full range of Monster Energy (Ultra Zero, Juiced, Mango Loco, Ultra Blue), soft drinks, juices, and bottled water. Whatever fuels your day.',
  },
  {
    image: `${BASE}images/convenience-store/sweets.png`,
    alt: 'Chocolate, sweets and mints display',
    title: 'Chocolate, Sweets & Mints',
    description:
      'Cadbury Dairy Milk, KitKat Chunky, Snickers, Kinder Bueno, Lindor, Aero, Mentos, Polos, Halls, Strepsils and a huge selection of confectionery and mints.',
  },
];

export default function StoreCategories() {
  return (
    <section id="categories" className="section bg-white">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">What we stock</span>
          <h2 className="section-title mt-3">
            Stocked for every kind of stop.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From a top-up of engine oil to a fresh BLT, our shelves are
            curated to get you what you need quickly - and back on the
            road.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <CategoryCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
