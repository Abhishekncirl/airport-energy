import MachineCard from './MachineCard.jsx';

const BASE = import.meta.env.BASE_URL;

const MACHINES = [
  {
    emoji: '🚗',
    title: 'Vacuum, Water, Air & Fragrance Station',
    image: `${BASE}images/valet/vacuum-station.jpg`,
    imageAlt: 'All-in-one self-service vehicle care station',
    description:
      'Our all-in-one self-service vehicle care station - everything you need for a spotless interior and a perfectly maintained exterior.',
    groups: [
      {
        heading: 'Four functions',
        items: [
          {
            emoji: '🔌',
            text:
              'Vacuum Cleaner - powerful suction to remove dirt, dust and crumbs from seats, floors, and boot.',
          },
          {
            emoji: '💧',
            text:
              'Water Service - high-pressure water for quick exterior rinse and spot cleaning.',
          },
          {
            emoji: '💨',
            text:
              'Air Service - precision tyre inflation with digital pressure gauge and Gripper system.',
          },
          {
            emoji: '🌸',
            text:
              "Fragrance Dispenser - refresh your car's interior with a long-lasting fragrance spray.",
          },
        ],
      },
      {
        heading: 'How to use',
        kind: 'numbered',
        items: [
          'Insert €1 (or tap card / contactless / mobile)',
          'Select the service you need from the touchscreen',
          '€1 = 5 minutes of use',
        ],
      },
    ],
    footer:
      'Accepted payment: Coins (50c, €1, €2), Visa, Mastercard, Apple Pay, Google Pay.',
  },
  {
    emoji: '🧽',
    title: 'Mat Cleaner',
    image: `${BASE}images/valet/mat-cleaner.jpg`,
    imageAlt: 'Steam-jet mat cleaning machine',
    description:
      'Professional-grade mat cleaning in seconds - say goodbye to dirty floor mats with our automated steam-jet mat cleaner.',
    groups: [
      {
        heading: 'How to use',
        kind: 'numbered',
        items: [
          'Tap card or mobile device to start the machine (€1 = 5 minutes credit).',
          'Push the blue button to turn the steam jet on or off.',
          'Insert the mat with the side you want to clean facing down. Hold firmly with both hands and feed it into the roller.',
          'Slowly move the mat back and forth for 30–40 seconds, or until desired results are achieved.',
          'Release the mat when finished and repeat with any remaining mats.',
        ],
      },
      {
        heading: 'Features',
        items: [
          'Powerful steam-jet cleaning system',
          'Works on all standard car mats',
          'No detergent or pre-treatment needed',
          'Quick, hygienic, and easy to operate',
        ],
      },
    ],
    footer:
      'Accepted payment: Contactless card, Apple Pay, Google Pay, mobile wallets.',
  },
  {
    emoji: '✨',
    title: 'Self-Service Detailing Bay',
    description:
      'A clean, well-lit, premium environment designed for serious car care - neon-lit, weather-protected, and equipped with everything you need.',
    groups: [
      {
        heading: 'Features',
        items: [
          'Bright hex-LED ceiling lighting for full visibility, even at night',
          'Anti-slip checkered flooring',
          'Wet floor signage and bins for clean operation',
          'Open access - no booking, no appointment needed',
          'Multiple stations to avoid waiting in queue',
        ],
      },
    ],
    footer: 'On-site at Airport Energy, right next to the car wash.',
  },
];

export default function ValetMachines() {
  return (
    <section id="machines" className="section bg-white">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our machines</span>
          <h2 className="section-title mt-3">
            What’s inside the Valet Centre.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Three stations, one bay - vacuum your interior, jet-clean your
            mats, inflate your tyres, and freshen up before hitting the road
            again.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {MACHINES.map((m) => (
            <MachineCard key={m.title} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}
