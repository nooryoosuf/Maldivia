# DATABASE & FUTURE BOOKING ARCHITECTURE

The complete SQL schema is maintained in [`supabase/schema.sql`](./supabase/schema.sql).

## 1. Core Content & Enquiry Tables

1. **`atolls`**: Stores administrative codes (`Kaafu`, `Alif Dhaal`, `Vaavu`, `Alif Alif`, `Laamu`), bilingual names, geographic coordinates, and highlights.
2. **`destinations`**: Stores inhabited local island profiles, island dimensions, transfer options from Velana International Airport (MLE), visitor information (Bikini Beach, House Reef, ATM, Medical), and gallery references.
3. **`guesthouses`**: Stores verified property dossiers, room categories, amenities, dining and Halal notes, accessibility notes, transfer methods, and official contact metadata.
4. **`experiences`**: Stores curated Maldivian activities, relevant island slugs, durations, inclusions, and marine conservation requirements.
5. **`travel_guides`**: Stores bilingual editorial travel briefings, review dates, and official government portal references.
6. **`enquiries`**: Stores validated customer itinerary & quotation requests with unique reference codes (`MV-YYYYMMDD-XXXX`), guest counts, arrival/departure dates, and status (`received`, `in_review`, `quoted`, `archived`).
7. **`policies`**: Stores legal and policy documents alongside pre-launch review flags.

## 2. Future Booking, Inventory & Payment Readiness (Section 22 & 24)

`supabase/schema.sql` also prepares four future-ready tables without exposing fake payment buttons on the public frontend:

- **`customer_profiles`**: Linked to `auth.users` for future customer accounts, storing preferred language (`en`/`zh`) and optional WeChat ID.
- **`room_inventory_availability`**: Tracks daily room category allocation (`available_units`), verified USD rate, and statutory Green Tax per person.
- **`reservations`**: Links a confirmed `enquiry_id` and `customer_id` to a `guesthouse_id` with status tracking (`pending_confirmation`, `confirmed`, `deposit_paid`, `fully_paid`, `cancelled`), deposit amount, and outstanding balance.
- **`payment_records`**: Prepared to record verified transactions once merchant eligibility is established with supported Maldivian payment gateways (e.g., **Bank of Maldives BML Payment Gateway** which supports Visa, Mastercard, UnionPay, Alipay, and WeChat Pay for licensed Maldivian tourism merchants).
