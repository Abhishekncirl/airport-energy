# Airport Energy

A modern, fully responsive marketing website for **Airport Energy**, a petrol station serving travellers and locals with premium fuel, EV fast charging, a convenience store, and 24/7 service.

Built with **React + Vite + Tailwind CSS** and styled with a deep-blue / white / fuel-orange brand palette. Icons from [Lucide](https://lucide.dev/).

---

## ✨ Features

- Sticky, scroll-aware navigation bar with mobile sheet
- Premium **Hero** section with gradient + grid backdrop, floating price chip, and animated stats
- **About Us** — story, mission and core values
- **Services** — Petrol/Diesel, Premium Fuels, Convenience Store, Air & Water, EV Fast Charging, Café
- **Fuel Prices** — live-style price cards with trend indicators and "last updated" timestamp
- **Location** — embedded Google Map, address, 24/7 hours, directions
- **Contact** — accessible form (logs to `console`), phone, email, social links
- Footer with quick links, contact info and social icons
- Smooth scrolling, reveal-on-scroll animations, hover micro-interactions
- Fully responsive: mobile, tablet, desktop

---

## 🧱 Tech Stack

| Layer        | Choice                              |
| ------------ | ----------------------------------- |
| Framework    | React 18                            |
| Build tool   | Vite 5                              |
| Styling      | Tailwind CSS 3                      |
| Icons        | lucide-react                        |
| Fonts        | Inter (via Google Fonts)            |
| Images       | Unsplash (hot-linked placeholders)  |

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

The site will be available at **http://localhost:5173**.

### 3. Build for production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
Airport Energy/
├── index.html                  # Vite entry HTML
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.svg             # Brand favicon
└── src/
    ├── main.jsx                # React entry
    ├── App.jsx                 # Page composition + reveal observer
    ├── index.css               # Tailwind layers + utility classes
    └── components/
        ├── Logo.jsx
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Services.jsx
        ├── FuelPrices.jsx
        ├── Location.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

---

## 🎨 Brand System

Defined in `tailwind.config.js`:

- **Brand blue** — `brand.50` → `brand.950` (deep navy gradients)
- **Accent orange** — `accent.50` → `accent.900` (CTA + highlights, fuel-pump feel)
- **Fuel green** — `fuel.green` (status / “open now” indicators)
- **Hero gradient** — `bg-hero-gradient` utility

Reusable component classes (`src/index.css`):

- `.btn-primary`, `.btn-ghost`, `.btn-outline`
- `.container-x`, `.section`, `.section-title`, `.eyebrow`, `.card`

---

## 🔮 Future Enhancements

- Hook the contact form to a real backend (Resend / Formspree / a Next.js API route)
- Live fuel pricing fed from a CMS or pricing API (Contentful, Sanity, or a simple JSON feed)
- Multi-language support (English / Irish) with `react-i18next`
- Loyalty programme microsite + customer login
- Dark mode using Tailwind's `dark:` variant
- SEO upgrade: migrate to **Next.js App Router** for SSR, structured data (LocalBusiness JSON-LD), and an XML sitemap
- Real Google Maps embed with API key + custom-styled map
- Image optimisation with `@unpic/react` or a local asset pipeline
- Analytics (Plausible / GA4) and consent banner

---

© Airport Energy — demo project.
