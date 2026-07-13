# Airport Energy

A modern, fully responsive marketing website for **Airport Energy**, a petrol station serving travellers and locals with quality fuel, a WashPod carwash & valet service, a convenience store, and 24/7 opening.

Built with **React + Vite + Tailwind CSS** and styled with a deep-blue / white / fuel-orange brand palette. Icons from [Lucide](https://lucide.dev/).

---

## ✨ Features

- Sticky, scroll-aware navigation bar with mobile sheet
- Premium **Hero** section with gradient + grid backdrop, floating price chip, and animated stats
- **About Us** - story, mission and core values
- **Services** - Petrol & Diesel, WashPod Carwash, Valet Cleaning, Convenience Store, Air & Water, Café
- **Fuel Prices** - live-style price cards (Petrol, Diesel) with trend indicators and "last updated" timestamp
- **Location** - embedded Google Map, address, 24/7 hours, directions
- **Contact** - accessible form (logs to `console`), phone, email, social links
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

- **Brand blue** - `brand.50` → `brand.950` (deep navy gradients)
- **Accent orange** - `accent.50` → `accent.900` (CTA + highlights, fuel-pump feel)
- **Fuel green** - `fuel.green` (status / “open now” indicators)
- **Hero gradient** - `bg-hero-gradient` utility

Reusable component classes (`src/index.css`):

- `.btn-primary`, `.btn-ghost`, `.btn-outline`
- `.container-x`, `.section`, `.section-title`, `.eyebrow`, `.card`

---

## 🛡️ Admin Panel (Firebase-backed)

The site ships with an admin panel at **`/admin/login`** that lets authorised staff update the prices shown on the public *Live Fuel Prices* section. It uses [Firebase](https://firebase.google.com/) (Auth + Firestore) - no server backend, so it deploys to GitHub Pages alongside the static site, and the free Spark plan **never pauses for inactivity**.

### What's protected
- `/admin/login` - public, but redirects to dashboard once you're signed in
- `/admin` and `/admin/dashboard` - require a Firebase session (auto-redirect to login otherwise)

### Setup (one-time, ~10 minutes)

**1. Create a Firebase project** at https://console.firebase.google.com -> *Add project*. Free Spark plan is fine; Google Analytics can stay off.

**2. Enable email/password sign-in** at *Build -> Authentication -> Get started -> Sign-in method -> Email/Password -> Enable*.

**3. Add your staff users** at *Authentication -> Users -> Add user* (email + password each). There is no public sign-up flow in the app, so only users you create here can log in.

**4. Create the Firestore database** at *Build -> Firestore Database -> Create database -> Production mode* (pick the europe-west region for Ireland).

**5. Publish the security rules**: open *Firestore Database -> Rules*, replace the contents with the file `firestore.rules` from this repo, and click *Publish*. This gives the public read-only access to `fuel_prices` and staff-only, validated writes with an append-only `price_changes` audit log.

**6. Wire up the frontend**: in the Firebase console go to *Project settings -> General -> Your apps -> Add app -> Web*, register the app (no hosting needed), and copy the `firebaseConfig` values into `FIREBASE_CONFIG` in `src/lib/firebase.js`. The config is public by design - committing it is safe and expected.

**7. Push to `main`.** The site redeploys with Firebase wired in. The first price save in the admin dashboard creates the `fuel_prices` documents automatically - no manual seeding.

### Day-to-day use
- Staff visit `https://<your-site>/admin/login`
- They edit petrol/diesel prices on the dashboard and click *Save changes*
- The public *Live Fuel Prices* section updates the next time anyone loads or refreshes the homepage (it polls every 60 s)
- Every change is recorded in the `price_changes` collection (timestamp, old price, new price, staff email)

### Managing admins
- **Add** a staff member -> Firebase *Authentication -> Users -> Add user*
- **Remove** access -> delete or disable that user
- **Reset password** -> *Authentication -> Users -> (menu) -> Reset password*

### Security notes
- The Firebase web config is **public** by design - security lives in Firestore rules + Firebase Auth, not in hiding the config
- Price updates and their audit entries commit in a single atomic batch; the audit log is append-only (rules forbid update/delete)
- Rules validate writes server-side: only `petrol`/`diesel` docs, numeric price, sane range
- Sessions auto-refresh; sign-out is immediate

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

© Airport Energy - demo project.
