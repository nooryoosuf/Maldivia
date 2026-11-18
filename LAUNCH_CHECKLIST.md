# LAUNCH CHECKLIST — ITEMS REQUIRING BUSINESS OWNER INPUT

In strict compliance with **Section 2 (Strict Content Requirements)** and **Section 16 (Legal and Policy Pages)**—which prohibit inventing corporate registration numbers, company addresses, unverified testimonials, or unconfirmed refund periods—the platform is completely functional and uses this checklist to identify the exact business-specific items the owner must supply prior to commercial launch.

---

## 1. Corporate & Legal Registration Details (Required for Policy Pages)

Populate the following verified business details in `src/data/policies.ts` once legal registration is finalised:

- [ ] **Official Legal Entity Name** (as registered with the Maldives Ministry of Economic Development).
- [ ] **Maldives Ministry of Tourism Travel Agency Licence Number** and **MIRA Tax Identification Number (TIN)**.
- [ ] **Registered Physical Office Address** (e.g., Malé / Hulhumalé, Republic of Maldives) and **Designated Data Protection / Privacy Contact Email**.
- [ ] **Governing Jurisdiction & Dispute Resolution Clause** approved by legal counsel for `Terms and Conditions` and `Disclaimer`.
- [ ] **Standard Agency Deposit Percentage, Balance Due Window, and Refund Processing Days** for `Booking Policy` and `Cancellation and Refund Policy`.

## 2. Official Agency Contact & WeChat Channels (Environment Variables)

Set the following variables in `.env.local` / production hosting environment once official corporate accounts are active:

- [ ] `NEXT_PUBLIC_OFFICIAL_WECHAT_ID` — Official WeChat Service Account or Travel Concierge ID (企业微信号 / 微信公众号).
- [ ] `NEXT_PUBLIC_OFFICIAL_WHATSAPP` — Official agency WhatsApp / Maldives duty phone number.
- [ ] `NEXT_PUBLIC_OFFICIAL_EMAIL` — Official customer enquiries email address.
- [ ] `ENQUIRY_WEBHOOK_URL` — Webhook endpoint to alert staff immediately when a new enquiry is logged.

## 3. Database & Production Domain Setup

- [ ] Execute `supabase/schema.sql` in your production Supabase project.
- [ ] Configure `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY`.
- [ ] Set `NEXT_PUBLIC_SITE_URL` to your production domain.

## 4. Optional Post-Launch Content Additions

- [ ] **Attributable Customer Testimonials:** The homepage Testimonials section has been intentionally omitted per Section 8.G ("If no verified reviews are available, omit the section until genuine content is supplied"). Only add customer reviews once written permission and verified attribution from real guests are obtained.
- [ ] **Direct High-Resolution Property Photo Licensing:** All current photographs are verified authentic Maldives photographs from Wikimedia Commons with proper attribution. As direct commercial contracting is completed with each guesthouse, upload their high-resolution room interior portfolios to Supabase Storage.
- [ ] **BML Payment Gateway / Alipay / WeChat Pay Integration:** Once the Maldivian corporate bank account and Bank of Maldives (BML) Merchant Gateway are approved, connect the `reservations` and `payment_records` tables in `supabase/schema.sql`.
