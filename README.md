# MALDIVIA (马尔代夫雅途) — Curated Maldives Local Island & Guesthouse Travel Platform

An editorial-grade international travel agency platform focused on verified inhabited islands, licensed local guesthouses, inter-atoll speedboat/domestic flight logistics, and marine conservation experiences across the Republic of Maldives.

Built with **English** as the default language and full **Simplified Chinese (简体中文)** support (`src/i18n/en.json`, `src/i18n/zh.json`, and bilingual domain data).

---

## Key Features & Strict Authenticity Standards

- **Zero Placeholder Content:** No Lorem Ipsum, no fictional properties, no fabricated testimonials, no fake review counts or star ratings, and no simulated payment widgets.
- **Six Verified Maldivian Guesthouses Across Four Atolls:**
  1. **Kaani Palm Beach** — Maafushi Island, Kaafu Atoll (South Malé Atoll)
  2. **Bliss Dhigurah** — Dhigurah Island, Alif Dhaal Atoll (South Ari Atoll)
  3. **Kinan Retreat** — Fulidhoo Island, Vaavu Atoll (Felidhoo Atoll)
  4. **Karaa Village** — Thoddoo Island, Alif Alif Atoll (North Ari Atoll)
  5. **Coral Reef View Inn** — Ukulhas Island, Alif Alif Atoll (North Ari Atoll)
  6. **Reveries Diving Village** — Gan Island, Laamu Atoll (Haddhunmathi Atoll)
- **Interactive Maldives Archipelago & Transfer Map:** Built with native SVG and verified geographic coordinates (`src/components/InteractiveMaldivesMap.tsx`), ensuring instant loading for visitors worldwide including mainland China without relying on blocked external map tiles.
- **11 Fact-Checked Maldives Travel Guide Briefings:** Covering Velana International Airport (MLE) arrival, IMUGA electronic declaration, 30-day visa-free entry, speedboat schedules, MTCC public ferries, domestic flights, MVR/USD currency & Green Tax rules, island customs, Bikini Beaches, weather seasons, and emergency numbers (`119`, `102`, `191`, `1478`).
- **Validated Enquiry System & Trip Planner:** Client-side and server-side validated via Zod (`src/lib/validation.ts`, `src/app/api/enquiries/route.ts`) with honeypot spam protection, IP-hashed rate limiting, Supabase integration, and durable local JSON persistence (`data/enquiries-store.json`).

---

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

Copy `.env.example` to `.env.local` and configure optional Supabase/webhook variables:

```bash
cp .env.example .env.local
```

### 3. Run Development Server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### 4. Production Build & Type Check

```bash
npm run typecheck
npm run build
npm run start
```

---

## Documentation Index

- [PROJECT.md](./PROJECT.md) — Architecture, design tokens, and domain structure
- [CONTENT_GUIDELINES.md](./CONTENT_GUIDELINES.md) — Strict editorial verification rules & Chinese localisation standards
- [DATABASE.md](./DATABASE.md) — Supabase / PostgreSQL schema & future booking/payment readiness
- [ENVIRONMENT.md](./ENVIRONMENT.md) — Environment variables and security rules
- [DEPLOYMENT.md](./DEPLOYMENT.md) — Production deployment & mainland China performance considerations
- [MAINTENANCE.md](./MAINTENANCE.md) — Regular verification schedule for transfers, taxes, and IMUGA rules
- [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md) — Pre-launch checklist & items awaiting business owner input
- [CHANGELOG.md](./CHANGELOG.md) — Release history
