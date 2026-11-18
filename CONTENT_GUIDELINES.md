# CONTENT & EDITORIAL GUIDELINES

## 1. Zero-Placeholder & Verification Policy

Every contributor and content editor must adhere to the following non-negotiable standards:

1. **No Unverified Properties:** Only add licensed Maldivian guesthouses, hotels, or resorts whose island location, atoll, room categories, and transfer corridors from Velana International Airport (MLE) have been verified.
2. **No Fabricated Social Proof:** Never publish invented guest testimonials, unverified star ratings, or fake review counts in UI components or Schema.org `LodgingBusiness` JSON-LD.
3. **No Simulated Availability or Fake Pricing:** Because Maldivian guesthouse rates fluctuate by season (Low Season May–Nov vs High Season Dec–Apr), meal plan (BB/HB/FB), and statutory taxes (17% TGST, 10% Service Charge, USD 6/12 Green Tax), never display invented nightly rates unless connected to a live, verified inventory feed.
4. **Authentic Maldives Photography Only:**
   - Every photograph must depict the Republic of Maldives.
   - Never use stock images from Thailand, Seychelles, Bora Bora, or the Philippines and pass them off as the Maldives.
   - Never use AI-generated property renders as representations of actual guesthouses.
   - Always include descriptive `alt` text in both English (`alt.en`) and Simplified Chinese (`alt.zh`), along with photographer/source attribution where applicable.

## 2. Simplified Chinese (简体中文) Localisation Standards

- Every data entity in `src/data/` uses typed `LocalizedText` (`{ en: string; zh: string }`) and `LocalizedStringArray` (`{ en: string[]; zh: string[] }`).
- Ensure Chinese terminology reflects standard mainland Chinese travel usage:
  - Velana International Airport → 维拉纳国际机场 (MLE)
  - Inhabited Local Island → 居民岛
  - Bikini Beach → 比基尼海滩 (Bikini Beach)
  - House Reef → 房礁 (House Reef)
  - Speedboat Transfer → 定期快艇接驳
  - Green Tax → 政府绿色税 (Green Tax)
  - IMUGA Traveller Declaration → IMUGA 官方免费电子入境申报
- All Chinese copy must be reviewed for natural fluency and factual precision before publication.
