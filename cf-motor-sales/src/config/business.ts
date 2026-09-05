/**
 * Central business/contact configuration.
 *
 * Values marked `[CONFIRM]` are placeholders awaiting client confirmation.
 * Anything editable by the owner at runtime (opening hours, hero image, social
 * links) is ALSO stored in Firestore `site_settings` and, where present, that
 * live value overrides the static default here. These constants are the
 * build-time fallback and the source for compile-time links (tel:, wa.me).
 */

export const BUSINESS = {
  name: 'CF Motor Sales Ltd',
  tagline: 'UK & Japanese Imports',
  // Phone shown to users, and the machine form used for tel: links.
  phoneDisplay: '087 410 6028',
  phoneTel: '+353874106028',
  // WhatsApp deep-link number in wa.me format (no plus, no spaces).
  whatsapp: '353874106028',
  email: 'info@cfmotorsales.ie', // [CONFIRM]
  address: {
    line1: '[CONFIRM address line 1]',
    line2: '[CONFIRM town/county]',
    eircode: '[CONFIRM Eircode]',
    country: 'Ireland',
  },
  // Local SEO targeting - fill the town/county once the address is confirmed.
  locality: {
    town: '[CONFIRM Town]',
    county: '[CONFIRM County]',
  },
  social: {
    facebook: 'https://facebook.com/', // [CONFIRM URL]
    tiktok: 'https://www.tiktok.com/', // [CONFIRM URL]
  },
  // Opening hours - overridden by site_settings when the owner edits them.
  openingHours: [
    { day: 'Monday', hours: '09:00 - 18:00' },
    { day: 'Tuesday', hours: '09:00 - 18:00' },
    { day: 'Wednesday', hours: '09:00 - 18:00' },
    { day: 'Thursday', hours: '09:00 - 18:00' },
    { day: 'Friday', hours: '09:00 - 18:00' },
    { day: 'Saturday', hours: '10:00 - 16:00' },
    { day: 'Sunday', hours: 'By appointment' },
  ],
  // Does the client offer finance? [CONFIRM] - controls the /finance page copy.
  offersFinance: true,
  // Canonical site URL for SEO/JSON-LD (override via VITE_SITE_URL).
  siteUrl:
    (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') ||
    'https://www.cfmotorsales.ie',
} as const;

/** Build a WhatsApp deep link with a prefilled message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Build a tel: link. */
export function telLink(): string {
  return `tel:${BUSINESS.phoneTel}`;
}
