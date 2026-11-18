# MAINTENANCE & FACT-CHECKING SCHEDULE

Because Maldivian maritime transport, tax regulations, and immigration portals evolve, follow this regular maintenance schedule:

## 1. Quarterly Travel Guide Audit

Every 90 days, verify the following facts in `src/data/travelGuides.ts` and update `lastReviewedDate`:

1. **Maldives Immigration (IMUGA):**
   - Confirm that the electronic Traveller Declaration URL remains `https://imuga.immigration.gov.mv` and that the submission window (currently within 96 hours prior to arrival) has not changed.
2. **MIRA Tourism Taxes & Green Tax:**
   - Verify current Tourism Goods and Services Tax (TGST, currently 17%), Service Charge (10%), and Green Tax rates (USD 6/person/night for guesthouses with ≤50 rooms; USD 12/person/night for >50 rooms) via the Maldives Inland Revenue Authority (`https://www.mira.gov.mv`).
3. **MTCC Public Ferry & Speedboat Schedules:**
   - Review MTCC Routes 306, 309, and 303 (`https://mtcc.mv`) and partner speedboat departure times from Velana International Airport (MLE).
4. **Island ATM Availability:**
   - Check Bank of Maldives (`https://www.bankofmaldives.com.mv`) ATM directory for any new ATM installations on Vaavu Atoll islands (such as Fulidhoo).

## 2. Semi-Annual Guesthouse Dossier Review

Every 6 months, contact or review the official channels of the 6 featured properties (`Kaani Palm Beach`, `Bliss Dhigurah`, `Kinan Retreat`, `Karaa Village`, `Coral Reef View Inn`, `Reveries Diving Village`) to verify room configurations, dining plans, and official phone/email details in `src/data/guesthouses.ts`.
