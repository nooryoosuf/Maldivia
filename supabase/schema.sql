-- =============================================================================
-- MALDIVIA ATELIER — SUPABASE / POSTGRESQL SCHEMA
-- Prepared for Current CMS Content, Enquiries, and Future Booking/Payment Modules
-- =============================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. ATOLLS
CREATE TABLE IF NOT EXISTS atolls (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  administrative_code TEXT NOT NULL,
  official_name JSONB NOT NULL,      -- {"en": "...", "zh": "..."}
  traditional_name JSONB NOT NULL,
  description JSONB NOT NULL,
  coordinates JSONB NOT NULL,        -- {"lat": 3.94, "lng": 73.49}
  distance_from_male_km TEXT NOT NULL,
  known_for JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. DESTINATIONS (INHABITED LOCAL ISLANDS)
CREATE TABLE IF NOT EXISTS destinations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  atoll_id UUID REFERENCES atolls(id) ON DELETE RESTRICT,
  name JSONB NOT NULL,
  administrative_atoll TEXT NOT NULL,
  coordinates JSONB NOT NULL,
  island_dimensions JSONB NOT NULL,
  distance_from_airport JSONB NOT NULL,
  hero_image JSONB NOT NULL,
  gallery JSONB NOT NULL DEFAULT '[]'::jsonb,
  short_summary JSONB NOT NULL,
  editorial_description JSONB NOT NULL,
  transfer_options JSONB NOT NULL DEFAULT '[]'::jsonb,
  activities JSONB NOT NULL DEFAULT '{"en":[],"zh":[]}'::jsonb,
  attractions JSONB NOT NULL DEFAULT '[]'::jsonb,
  visitor_information JSONB NOT NULL,
  featured BOOLEAN NOT NULL DEFAULT true,
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. GUESTHOUSES (VERIFIED PROPERTIES)
CREATE TABLE IF NOT EXISTS guesthouses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  official_name TEXT NOT NULL,
  localized_subtitle JSONB NOT NULL,
  destination_slug TEXT NOT NULL REFERENCES destinations(slug) ON DELETE RESTRICT,
  island_name JSONB NOT NULL,
  atoll_name JSONB NOT NULL,
  coordinates JSONB NOT NULL,
  hero_image JSONB NOT NULL,
  gallery JSONB NOT NULL DEFAULT '[]'::jsonb,
  concise_description JSONB NOT NULL,
  editorial_overview JSONB NOT NULL,
  verified_highlights JSONB NOT NULL,
  property_category JSONB NOT NULL,
  total_rooms_info JSONB,
  room_types JSONB NOT NULL DEFAULT '[]'::jsonb,
  property_amenities JSONB NOT NULL,
  dining_information JSONB NOT NULL,
  accessibility_information JSONB NOT NULL,
  location_and_transfer JSONB NOT NULL,
  nearby_attractions JSONB NOT NULL DEFAULT '[]'::jsonb,
  important_guest_information JSONB NOT NULL,
  official_contact JSONB NOT NULL,
  featured BOOLEAN NOT NULL DEFAULT true,
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. EXPERIENCES
CREATE TABLE IF NOT EXISTS experiences (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL,
  title JSONB NOT NULL,
  subtitle JSONB NOT NULL,
  hero_image JSONB NOT NULL,
  description JSONB NOT NULL,
  relevant_islands TEXT[] NOT NULL DEFAULT '{}',
  relevant_islands_label JSONB NOT NULL,
  typical_duration JSONB,
  typically_included JSONB NOT NULL,
  important_requirements JSONB NOT NULL,
  sustainability_and_safety_note JSONB NOT NULL,
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5. TRAVEL GUIDES
CREATE TABLE IF NOT EXISTS travel_guides (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL,
  category_label JSONB NOT NULL,
  title JSONB NOT NULL,
  summary JSONB NOT NULL,
  hero_image JSONB NOT NULL,
  last_reviewed_date DATE NOT NULL,
  reading_time_minutes INTEGER NOT NULL DEFAULT 5,
  key_takeaways JSONB NOT NULL,
  sections JSONB NOT NULL,
  official_reference_url TEXT,
  official_reference_label JSONB,
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 6. ENQUIRIES & TRIP PLANNER SUBMISSIONS
CREATE TABLE IF NOT EXISTS enquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  reference_code TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  country_of_residence TEXT NOT NULL,
  preferred_language TEXT NOT NULL CHECK (preferred_language IN ('en', 'zh')),
  arrival_date DATE NOT NULL,
  departure_date DATE NOT NULL,
  adults INTEGER NOT NULL CHECK (adults >= 1 AND adults <= 20),
  children INTEGER NOT NULL DEFAULT 0 CHECK (children >= 0 AND children <= 20),
  preferred_destination_or_guesthouse TEXT,
  selected_guesthouses TEXT[] DEFAULT '{}',
  selected_destinations TEXT[] DEFAULT '{}',
  interested_experiences TEXT[] DEFAULT '{}',
  additional_requirements TEXT,
  privacy_consent BOOLEAN NOT NULL DEFAULT true,
  status TEXT NOT NULL DEFAULT 'received' CHECK (status IN ('received', 'in_review', 'quoted', 'archived')),
  ip_hash TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 7. POLICIES
CREATE TABLE IF NOT EXISTS policies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title JSONB NOT NULL,
  subtitle JSONB NOT NULL,
  last_reviewed DATE NOT NULL,
  requires_business_input_flags JSONB NOT NULL DEFAULT '{"en":[],"zh":[]}'::jsonb,
  sections JSONB NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- FUTURE-READY TABLES (CUSTOMER ACCOUNTS, AVAILABILITY, BOOKINGS, PAYMENTS)
-- Prepared per Section 22 & 24 without exposing unverified booking widgets
-- =============================================================================

CREATE TABLE IF NOT EXISTS customer_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  preferred_language TEXT DEFAULT 'en' CHECK (preferred_language IN ('en', 'zh')),
  country_of_residence TEXT,
  wechat_id TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS room_inventory_availability (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  guesthouse_id UUID NOT NULL REFERENCES guesthouses(id) ON DELETE CASCADE,
  room_category_name TEXT NOT NULL,
  calendar_date DATE NOT NULL,
  available_units INTEGER NOT NULL DEFAULT 0,
  verified_rate_usd NUMERIC(10, 2),
  green_tax_usd_per_person NUMERIC(6, 2),
  UNIQUE(guesthouse_id, room_category_name, calendar_date)
);

CREATE TABLE IF NOT EXISTS reservations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  reservation_code TEXT UNIQUE NOT NULL,
  enquiry_id UUID REFERENCES enquiries(id) ON DELETE SET NULL,
  customer_id UUID REFERENCES customer_profiles(id) ON DELETE SET NULL,
  guesthouse_id UUID REFERENCES guesthouses(id) ON DELETE RESTRICT,
  check_in_date DATE NOT NULL,
  check_out_date DATE NOT NULL,
  adults INTEGER NOT NULL,
  children INTEGER NOT NULL DEFAULT 0,
  reservation_status TEXT NOT NULL DEFAULT 'pending_confirmation'
    CHECK (reservation_status IN ('pending_confirmation', 'confirmed', 'deposit_paid', 'fully_paid', 'cancelled')),
  total_amount_usd NUMERIC(10, 2),
  deposit_amount_usd NUMERIC(10, 2),
  outstanding_balance_usd NUMERIC(10, 2),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS payment_records (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  reservation_id UUID NOT NULL REFERENCES reservations(id) ON DELETE RESTRICT,
  payment_provider TEXT NOT NULL CHECK (payment_provider IN ('bml_gateway', 'stripe', 'alipay_global', 'wechat_pay_global', 'bank_transfer')),
  external_transaction_id TEXT,
  currency TEXT NOT NULL DEFAULT 'USD',
  amount NUMERIC(10, 2) NOT NULL,
  payment_status TEXT NOT NULL CHECK (payment_status IN ('initiated', 'succeeded', 'failed', 'refunded')),
  recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Row Level Security (RLS)
ALTER TABLE atolls ENABLE ROW LEVEL SECURITY;
ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE guesthouses ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE travel_guides ENABLE ROW LEVEL SECURITY;
ALTER TABLE policies ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access for published content" ON atolls FOR SELECT USING (true);
CREATE POLICY "Public read access for destinations" ON destinations FOR SELECT USING (published = true);
CREATE POLICY "Public read access for guesthouses" ON guesthouses FOR SELECT USING (published = true);
CREATE POLICY "Public read access for experiences" ON experiences FOR SELECT USING (published = true);
CREATE POLICY "Public read access for travel_guides" ON travel_guides FOR SELECT USING (published = true);
CREATE POLICY "Public read access for policies" ON policies FOR SELECT USING (true);
-- Enquiries are insert-only via server-side API route with service role or anon insert policy:
CREATE POLICY "Insert enquiries only" ON enquiries FOR INSERT WITH CHECK (privacy_consent = true);
