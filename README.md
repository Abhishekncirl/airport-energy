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

## 🛡️ Admin Panel (Supabase-backed)

The site ships with an admin panel at **`/admin/login`** that lets authorised staff update the prices shown on the public *Live Fuel Prices* section. It uses [Supabase](https://supabase.com/) for both authentication and storage - no Node/Express backend is needed, so it deploys to GitHub Pages alongside the static site.

### What's protected
- `/admin/login` - public, but redirects to dashboard once you're signed in
- `/admin` and `/admin/dashboard` - require a valid Supabase session (auto-redirect to login otherwise)

### Setup (one-time, ~10 minutes)

**1. Create a Supabase project** at https://supabase.com/dashboard → *New project*. Free tier is fine.

**2. Run the schema** at *SQL Editor → New query*. Paste the entire contents of `supabase/schema.sql` and click *Run*. This creates:
- `fuel_prices` table (seeded with €1.739 petrol / €1.689 diesel) - public READ
- `price_changes` audit table - authenticated READ only
- `update_fuel_price(text, numeric)` RPC - the only way to mutate prices, atomic with audit logging, RLS-checked

**3. Tighten authentication** at *Authentication → Providers → Email*:
- Make sure **Email** is enabled
- Turn **OFF** *Allow new users to sign up* (so only invited staff can log in)
- (Optional) *Email templates → Magic Link / Recovery* - customise with Airport Energy branding

**4. Add your admin users** at *Authentication → Users → Add user → Create new user*:
- Enter the staff email + a temporary password
- Tick *Auto Confirm User* so they can sign in immediately
- Repeat for every staff member who needs to update prices

**5. Wire up the frontend** with the two public keys from *Project Settings → API*:

```bash
cp .env.example .env.local
# then edit .env.local and paste the two values
```

```env
VITE_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOi...
```

Restart `npm run dev`, visit http://localhost:5173/admin/login, and sign in with one of the users you created in step 4. ✅

**6. Make it live** - open *GitHub repo → Settings → Secrets and variables → Actions → New repository secret* and add the same two values as repo secrets named `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`. The next push to `main` will redeploy with the keys baked in.

### Day-to-day use
- Staff visit `https://<your-site>/admin/login`
- They edit petrol/diesel prices on the dashboard and click *Save changes*
- The public *Live Fuel Prices* section updates the next time anyone loads or refreshes the homepage
- Every change is recorded in `price_changes` (timestamp, old price, new price, user email)

### Managing admins
- **Add** a new staff member → Supabase *Authentication → Users → Add user*
- **Remove** access → delete that user (or set them to *Banned*)
- **Reset password** → *Authentication → Users → (user) → Send password recovery*

### Security notes
- The Supabase URL + anon key are **public** by design - security lives in the database (RLS + the security-definer function), not in keeping the key secret
- All writes go through `update_fuel_price()`, which checks `auth.uid()` server-side and atomically appends to the audit log
- Sessions are stored in browser `localStorage` and auto-refresh; Supabase rotates the JWT
- For production: enable *MFA* in Supabase Auth settings, set a sensible *Password Policy*, and rotate the anon key if you suspect compromise (regenerates in Supabase → invalidates all old sessions)

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

© Airport Energy - demo project.
