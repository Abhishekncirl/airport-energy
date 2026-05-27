// SVG illustration for the About section - stylised forecourt scene at night.
export default function AboutIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 700 520"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Stylised Airport Energy forecourt scene with a car and canopy"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#23272b" />
          <stop offset="100%" stopColor="#0f1113" />
        </linearGradient>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1d20" />
          <stop offset="100%" stopColor="#0f1113" />
        </linearGradient>
        <linearGradient id="canopy" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10843a" />
          <stop offset="100%" stopColor="#1aa64a" />
        </linearGradient>
        <radialGradient id="lamp" cx="50%" cy="0%" r="60%">
          <stop offset="0%" stopColor="#1aa64a" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#1aa64a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="car-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4f5f6" />
          <stop offset="100%" stopColor="#a4abb1" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="700" height="340" fill="url(#sky)" />

      {/* Stars / sparkle */}
      <g fill="#ffffff" opacity="0.7">
        <circle cx="80" cy="60" r="1.4" />
        <circle cx="180" cy="40" r="1" />
        <circle cx="240" cy="90" r="1.2" />
        <circle cx="540" cy="50" r="1.1" />
        <circle cx="620" cy="80" r="1.6" />
        <circle cx="420" cy="30" r="1" />
      </g>

      {/* Canopy lamp glow */}
      <ellipse cx="350" cy="200" rx="320" ry="120" fill="url(#lamp)" />

      {/* Ground */}
      <rect y="340" width="700" height="180" fill="url(#ground)" />

      {/* Lane markings */}
      <g stroke="#3d4348" strokeWidth="3" strokeDasharray="14 12">
        <line x1="20" y1="430" x2="680" y2="430" />
      </g>

      {/* Canopy structure */}
      <g>
        {/* Roof */}
        <rect x="120" y="120" width="460" height="40" rx="8" fill="url(#canopy)" />
        <rect x="120" y="160" width="460" height="14" fill="#0d6830" />
        {/* Pillars */}
        <rect x="138" y="174" width="14" height="180" rx="3" fill="#23272b" />
        <rect x="548" y="174" width="14" height="180" rx="3" fill="#23272b" />
        {/* Recessed lights */}
        <g fill="#65d28b" opacity="0.9">
          <circle cx="190" cy="167" r="4" />
          <circle cx="270" cy="167" r="4" />
          <circle cx="350" cy="167" r="4" />
          <circle cx="430" cy="167" r="4" />
          <circle cx="510" cy="167" r="4" />
        </g>
        {/* Wordmark on canopy */}
        <text
          x="350"
          y="148"
          textAnchor="middle"
          fontFamily="Inter, Helvetica, Arial, sans-serif"
          fontWeight="800"
          fontSize="22"
          fill="#ffffff"
          letterSpacing="2"
        >
          AIRPORT ENERGY
        </text>
      </g>

      {/* Two fuel pumps under canopy */}
      <g>
        {/* Pump 1 */}
        <rect x="225" y="240" width="40" height="110" rx="6" fill="#2f3439" />
        <rect x="230" y="252" width="30" height="22" rx="3" fill="#0f1113" stroke="#1aa64a" strokeOpacity="0.6" />
        <rect x="230" y="282" width="30" height="6" rx="2" fill="#1aa64a" />
        <rect x="230" y="294" width="22" height="4" rx="2" fill="#3d4348" />
        <rect x="230" y="302" width="18" height="4" rx="2" fill="#3d4348" />

        {/* Pump 2 */}
        <rect x="435" y="240" width="40" height="110" rx="6" fill="#2f3439" />
        <rect x="440" y="252" width="30" height="22" rx="3" fill="#0f1113" stroke="#1aa64a" strokeOpacity="0.6" />
        <rect x="440" y="282" width="30" height="6" rx="2" fill="#1aa64a" />
        <rect x="440" y="294" width="22" height="4" rx="2" fill="#3d4348" />
        <rect x="440" y="302" width="18" height="4" rx="2" fill="#3d4348" />
      </g>

      {/* Car (centred between pumps) */}
      <g>
        {/* Shadow */}
        <ellipse cx="350" cy="420" rx="120" ry="10" fill="#000" opacity="0.55" />

        {/* Body lower */}
        <path
          d="M250 400 L260 360 Q 270 340, 295 332 L 405 332 Q 430 340, 440 360 L 450 400 Z"
          fill="url(#car-body)"
        />
        {/* Body upper / cabin */}
        <path
          d="M285 332 Q 305 296, 350 294 Q 395 296, 415 332 Z"
          fill="#c9cdd1"
        />
        {/* Window */}
        <path
          d="M298 330 Q 312 304, 350 302 Q 388 304, 402 330 Z"
          fill="#23272b"
        />
        <line x1="350" y1="302" x2="350" y2="330" stroke="#3d4348" strokeWidth="2" />

        {/* Door line */}
        <line x1="350" y1="332" x2="350" y2="400" stroke="#a4abb1" strokeWidth="1.5" />

        {/* Headlight */}
        <circle cx="448" cy="380" r="6" fill="#1aa64a" />
        {/* Taillight */}
        <circle cx="252" cy="380" r="5" fill="#ff5252" opacity="0.85" />

        {/* Wheels */}
        <circle cx="290" cy="410" r="18" fill="#0f1113" />
        <circle cx="290" cy="410" r="8" fill="#3d4348" />
        <circle cx="410" cy="410" r="18" fill="#0f1113" />
        <circle cx="410" cy="410" r="8" fill="#3d4348" />
      </g>

      {/* Hose from pump 2 to car (charging gesture) */}
      <path
        d="M455 290 C 460 320, 450 340, 430 348"
        stroke="#1aa64a"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />

      {/* Floating WashPod badge */}
      <g transform="translate(490 380)">
        <rect width="160" height="56" rx="14" fill="#1a1d20" stroke="#1aa64a" strokeOpacity="0.5" />
        <circle cx="30" cy="28" r="14" fill="#1aa64a" />
        <path d="M30 18 C 24 26, 22 30, 22 34 a 8 8 0 0 0 16 0 c 0 -4 -2 -8 -8 -16 z" fill="#ffffff" />
        <text x="54" y="25" fontFamily="Inter, Helvetica, Arial, sans-serif" fontWeight="700" fontSize="11" fill="#ffffff">WashPod Carwash</text>
        <text x="54" y="40" fontFamily="Inter, Helvetica, Arial, sans-serif" fontWeight="600" fontSize="10" fill="#a4abb1">Touch-free • Valet</text>
      </g>

      {/* Leaf accent */}
      <g transform="translate(50 380)">
        <path d="M0 20 q 20 -22 44 -10 q -8 28 -44 24 z" fill="#1aa64a" opacity="0.85" />
        <path d="M6 22 q 16 -10 30 -6" stroke="#0d6830" strokeWidth="1.5" fill="none" />
      </g>
    </svg>
  );
}
