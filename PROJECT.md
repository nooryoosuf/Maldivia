# PROJECT ARCHITECTURE — MALDIVIA

## 1. Technology Stack

- **Framework:** Next.js 15 (App Router) + React 19
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 with custom editorial design tokens (`src/app/globals.css`)
- **Database & Storage Readiness:** Supabase (`@supabase/supabase-js`) + PostgreSQL schema (`supabase/schema.sql`) with automatic fallback to typed repository modules (`src/data/*`) and durable server-side file storage (`data/enquiries-store.json`).
- **Validation:** Zod (`src/lib/validation.ts`) shared between client and server API routes.

## 2. Brand Palette & Design Tokens

| Token | Hex | Purpose |
| :--- | :--- | :--- |
| `--color-orange` | `#F47732` | Primary buttons, active navigation states, key highlights, visible focus rings |
| `--color-ocean` | `#123B4A` | Deep Ocean Blue for headers, editorial contrast sections, footer, and headings |
| `--color-aqua` | `#EAF3F2` | Soft Aqua for secondary surfaces, callout boxes, and subtle badges |
| `--color-ivory` | `#F8F6F0` | Warm Ivory main page canvas |
| `--color-charcoal` | `#252B2D` | High-contrast body copy |
| `--color-white` | `#FFFFFF` | Card surfaces and structured forms |

## 3. Directory Structure

```text
├── supabase/
│   └── schema.sql                 # Full PostgreSQL schema + RLS policies + future booking tables
├── src/
│   ├── app/
│   │   ├── api/enquiries/route.ts # Validated POST/GET endpoint with rate-limiting & persistence
│   │   ├── about/page.tsx         # Editorial About Us page
│   │   ├── contact/page.tsx       # Contact & Enquiry page with verified property contacts
│   │   ├── destinations/          # Destination index & [slug] island detail pages
│   │   ├── experiences/           # Experience index & [slug] activity detail pages
│   │   ├── guesthouses/           # Guesthouse directory & [slug] property dossier pages
│   │   ├── policies/[slug]/       # 10 dedicated legal & policy pages + Cookie Preferences UI
│   │   ├── search/page.tsx        # Site-wide search across all verified entities
│   │   ├── sitemap-page/page.tsx  # Human-readable HTML Sitemap
│   │   ├── travel-guide/          # 11 Maldives Travel Guide briefings
│   │   ├── trip-planner/page.tsx  # Interactive itinerary builder
│   │   ├── sitemap.ts             # Dynamic XML sitemap
│   │   └── robots.ts              # Search engine robots.txt
│   ├── components/                # Navbar, Footer, EnquiryForm, InteractiveMaldivesMap, etc.
│   ├── context/                   # LanguageContext (EN/ZH), TripPlannerContext, CookieConsentContext
│   ├── data/                      # Verified bilingual datasets (destinations, guesthouses, guides, etc.)
│   ├── i18n/                      # UI translation dictionaries (en.json, zh.json)
│   ├── lib/                       # Validation (Zod), SEO/Schema.org JSON-LD, Supabase client
│   └── types/domain.ts            # Centralised TypeScript interfaces
```
