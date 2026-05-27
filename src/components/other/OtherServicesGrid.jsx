import ServiceCard from './ServiceCard.jsx';

const BASE = import.meta.env.BASE_URL;

// Single source of truth - easy to add or remove services later.
const SERVICES = [
  {
    id: 'washpod',
    emoji: '🧺',
    title: 'Self-Service Laundry - WashPod',
    image: `${BASE}images/other-services/washpod-laundry.jpg`,
    imageAlt:
      'WashPod self-service laundry facility with industrial washers and a dryer',
    description:
      'Need a quick wash on the go? Our 24-hour self-service WashPod is perfect for large volumes - duvets, cushions, curtains, sofa covers, and family laundry. Fully automated, easy to use, and open round the clock.',
    chips: ['Duvets', 'Cushions', 'Curtains', 'Sofa Covers', 'Family Laundry'],
    groups: [
      {
        heading: 'Three machines available',
        items: [
          { label: 'Machine No. 1 - 20 kg Dryer', subtitle: 'Drying instructions on-screen' },
          { label: 'Machine No. 2 - 20 kg Washer', subtitle: 'Ideal for large loads' },
          { label: 'Machine No. 3 - 10 kg Washer', subtitle: 'Smaller loads and quick washes' },
        ],
      },
      {
        heading: 'Features',
        items: [
          'Open 24 hours a day, 7 days a week',
          'Card and contactless payment accepted',
          'Touchscreen instructions on every machine',
          'Video surveillance for safety',
        ],
      },
    ],
    footer: 'No animal bedding or industrial laundry permitted.',
  },
  {
    id: 'atm',
    emoji: '💳',
    title: 'Free Cash Withdrawals & Balance Enquiries',
    image: `${BASE}images/other-services/atm.jpg`,
    imageAlt: 'CashLinks ATM on-site at Airport Energy',
    description:
      'Need cash on the go? Our on-site CashLinks ATM offers free cash withdrawals and balance enquiries - no fees, no hassle. Accepts all major cards.',
    groups: [
      {
        heading: 'Accepted cards',
        items: [
          'Mastercard',
          'Cirrus',
          'Maestro',
          'Visa',
          'Visa Electron',
          'Plus',
          'V Pay',
        ],
      },
      {
        heading: 'Features',
        items: [
          '100% free withdrawals and balance checks',
          '24/7 availability',
          'Dynamic currency conversion supported',
          'PIN management available',
          'Receipt printing',
          'NCR-secured terminal',
        ],
      },
    ],
  },
  {
    id: 'm50',
    emoji: '🛣️',
    title: 'Pay Your M50 Toll Here',
    description:
      'Skip the late fees - pay your M50 toll directly at Airport Energy. Our staff can process your toll payment quickly at the counter, so you stay on top of your road charges without the stress.',
    groups: [
      {
        heading: 'Features',
        items: [
          'Pay before 8 PM the next day to avoid penalties',
          'Cash and card payments accepted',
          'Quick over-the-counter service',
          'Receipt provided',
          'Multi-vehicle payments supported',
        ],
      },
    ],
    infoBox:
      'Tip: Keep your vehicle registration number handy for faster service.',
  },
  {
    id: 'quick-services',
    emoji: '🚗',
    title: 'Other Quick Services',
    description:
      'From phone top-ups to lottery tickets and bill payments - drop in for the little things that make your day easier.',
    groups: [
      {
        heading: 'Also available at the counter',
        items: [
          'Lottery & Scratch Cards',
          'Bill Payments (utilities, top-ups)',
          'Phone Top-Ups (all major networks)',
          'Postage Stamps',
        ],
      },
    ],
  },
];

export default function OtherServicesGrid() {
  return (
    <section id="services-grid" className="section bg-white">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">All services</span>
          <h2 className="section-title mt-3">
            Useful little extras under one roof.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We round out the forecourt with the everyday services you’d
            otherwise have to drive across town for.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          {SERVICES.map((s) => (
            <ServiceCard key={s.id} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
