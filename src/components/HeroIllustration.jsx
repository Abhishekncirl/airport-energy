// Custom SVG hero illustration - guaranteed to render and stays on-brand.
// Stylised fuel pump with EV-charge and leaf accents.
//
// `petrolPrice` (optional) - live Unleaded 95 price. When supplied the
// pump's centre display shows the live value so the artwork can't drift
// out of sync with the floating chip + the Live Fuel Prices section.
// Falls back to a static "€1.74" if omitted (keeps Storybook-style usage
// working).
export default function HeroIllustration({ className = '', petrolPrice }) {
  // Format to 2 decimals so the SVG text stays compact (€1.74 vs €1.739).
  const priceLabel =
    typeof petrolPrice === 'number'
      ? `€${petrolPrice.toFixed(2)}`
      : '€1.74';

  return (
    <svg
      viewBox="0 0 720 540"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Stylised illustration of an Airport Energy fuel pump"
    >
      <defs>
        <radialGradient id="bg-glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#1aa64a" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#0f1113" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pump-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3d4348" />
          <stop offset="100%" stopColor="#1a1d20" />
        </linearGradient>
        <linearGradient id="screen-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f1113" />
          <stop offset="100%" stopColor="#23272b" />
        </linearGradient>
        <linearGradient id="hose-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1aa64a" />
          <stop offset="100%" stopColor="#10843a" />
        </linearGradient>
        <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
          <feOffset dy="6" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.45" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Backdrop glow */}
      <rect width="720" height="540" fill="#0f1113" />
      <rect width="720" height="540" fill="url(#bg-glow)" />

      {/* Floor */}
      <ellipse cx="360" cy="480" rx="240" ry="22" fill="#000" opacity="0.6" />
      <line x1="80" y1="470" x2="640" y2="470" stroke="#2f3439" strokeWidth="2" />

      {/* Grid lines (perspective floor) */}
      <g stroke="#23272b" strokeWidth="1" opacity="0.7">
        <line x1="80" y1="470" x2="200" y2="540" />
        <line x1="200" y1="470" x2="260" y2="540" />
        <line x1="360" y1="470" x2="360" y2="540" />
        <line x1="520" y1="470" x2="460" y2="540" />
        <line x1="640" y1="470" x2="520" y2="540" />
      </g>

      {/* Pump base */}
      <rect x="270" y="440" width="180" height="36" rx="6" fill="#1a1d20" />

      {/* Pump body */}
      <g filter="url(#soft-shadow)">
        <rect x="285" y="120" width="150" height="324" rx="18" fill="url(#pump-body)" />

        {/* Top header strip */}
        <rect x="285" y="120" width="150" height="44" rx="18" fill="#1aa64a" />
        <rect x="285" y="148" width="150" height="16" fill="#1aa64a" />
        <text
          x="360"
          y="151"
          textAnchor="middle"
          fontFamily="Inter, Helvetica, Arial, sans-serif"
          fontWeight="800"
          fontSize="18"
          fill="#ffffff"
        >
          AIRPORT ENERGY
        </text>

        {/* Screen */}
        <rect x="300" y="180" width="120" height="86" rx="8" fill="url(#screen-grad)" stroke="#1aa64a" strokeOpacity="0.4" />
        <text
          x="360"
          y="208"
          textAnchor="middle"
          fontFamily="Inter, Helvetica, Arial, sans-serif"
          fontWeight="700"
          fontSize="11"
          fill="#65d28b"
          letterSpacing="2"
        >
          UNLEADED 95
        </text>
        <text
          x="360"
          y="243"
          textAnchor="middle"
          fontFamily="Inter, Helvetica, Arial, sans-serif"
          fontWeight="800"
          fontSize="30"
          fill="#ffffff"
        >
          {priceLabel}
        </text>
        <text
          x="360"
          y="260"
          textAnchor="middle"
          fontFamily="Inter, Helvetica, Arial, sans-serif"
          fontWeight="600"
          fontSize="10"
          fill="#a4abb1"
          letterSpacing="2"
        >
          PER LITRE
        </text>

        {/* Brand block under screen */}
        <rect x="300" y="280" width="120" height="6" rx="3" fill="#1aa64a" />
        <rect x="300" y="292" width="80" height="4" rx="2" fill="#3d4348" />
        <rect x="300" y="300" width="60" height="4" rx="2" fill="#3d4348" />

        {/* Buttons row */}
        <g>
          <circle cx="315" cy="340" r="10" fill="#23272b" stroke="#3d4348" />
          <circle cx="345" cy="340" r="10" fill="#23272b" stroke="#3d4348" />
          <circle cx="375" cy="340" r="10" fill="#23272b" stroke="#3d4348" />
          <circle cx="405" cy="340" r="10" fill="#1aa64a" />
        </g>

        {/* Card slot */}
        <rect x="305" y="370" width="110" height="22" rx="4" fill="#23272b" stroke="#3d4348" />
        <rect x="315" y="378" width="40" height="6" rx="2" fill="#3d4348" />

        {/* Nozzle holster */}
        <rect x="300" y="410" width="120" height="22" rx="6" fill="#23272b" stroke="#3d4348" />
      </g>

      {/* Hose curving out to the right */}
      <path
        d="M425 420 C 520 420, 560 360, 565 280"
        stroke="url(#hose-grad)"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />

      {/* Nozzle */}
      <g transform="translate(548 240) rotate(20)">
        <rect x="0" y="0" width="60" height="22" rx="6" fill="#10843a" />
        <rect x="56" y="6" width="22" height="10" rx="3" fill="#0d6830" />
        <rect x="-6" y="22" width="16" height="26" rx="4" fill="#10843a" />
      </g>

      {/* Floating Car Wash badge */}
      <g transform="translate(110 160)" filter="url(#soft-shadow)">
        <rect width="120" height="64" rx="14" fill="#1a1d20" stroke="#1aa64a" strokeOpacity="0.5" />
        <circle cx="32" cy="32" r="16" fill="#1aa64a" />
        {/* Water droplet icon */}
        <path
          d="M32 20 C 26 28, 24 32, 24 36 a 8 8 0 0 0 16 0 c 0 -4 -2 -8 -8 -16 z"
          fill="#ffffff"
        />
        <text x="58" y="29" fontFamily="Inter, Helvetica, Arial, sans-serif" fontWeight="700" fontSize="11" fill="#ffffff">Car Wash</text>
        <text x="58" y="44" fontFamily="Inter, Helvetica, Arial, sans-serif" fontWeight="600" fontSize="9" fill="#a4abb1" letterSpacing="1">Touch-Free</text>
      </g>

      {/* Floating "24/7" badge */}
      <g transform="translate(500 90)" filter="url(#soft-shadow)">
        <rect width="100" height="58" rx="14" fill="#ffffff" />
        <circle cx="28" cy="29" r="14" fill="#1aa64a" />
        <text x="28" y="33" textAnchor="middle" fontFamily="Inter, Helvetica, Arial, sans-serif" fontWeight="800" fontSize="11" fill="#ffffff">24/7</text>
        <text x="48" y="26" fontFamily="Inter, Helvetica, Arial, sans-serif" fontWeight="700" fontSize="11" fill="#1a1d20">Always</text>
        <text x="48" y="40" fontFamily="Inter, Helvetica, Arial, sans-serif" fontWeight="600" fontSize="10" fill="#525a61">open</text>
      </g>

      {/* Tiny leaf accents */}
      <g opacity="0.9">
        <path d="M620 380 q 18 -10 30 -2 q -8 16 -30 14 z" fill="#1aa64a" />
        <path d="M90 410 q 14 -8 24 -2 q -6 12 -24 10 z" fill="#1aa64a" opacity="0.7" />
      </g>
    </svg>
  );
}
