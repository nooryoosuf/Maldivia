# DEPLOYMENT GUIDE

## 1. Pre-Deployment Verification

Before deploying to production, run:

```bash
npm run typecheck
npm run build
```

Verify that all static and dynamic routes compile cleanly without TypeScript or Next.js build errors.

## 2. Recommended Hosting & Mainland China Accessibility

To ensure reliable, fast loading for both international travellers and visitors in mainland China:

1. **Zero Blocked Dependencies:**
   - The platform does **not** load Google Maps iframes, Google Fonts runtime CSS from `fonts.googleapis.com`, or reCAPTCHA scripts that block page rendering in mainland China.
   - The Interactive Maldives Map (`src/components/InteractiveMaldivesMap.tsx`) is a self-contained SVG nautical chart.
2. **Image CDN:**
   - Next.js Image Optimization and standard `<img>` tags are configured for `upload.wikimedia.org` and `thumb.wikimedia.org`. For production deployment serving high traffic in East Asia, mirror verified property photographs to your Supabase Storage bucket or a global CDN with Asia-Pacific edge nodes (e.g., Cloudflare / Vercel Edge / Alibaba Cloud OSS).
3. **HTTPS & Security Headers:**
   - `next.config.ts` automatically sets `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, and `Permissions-Policy`.
   - Always enforce HTTPS on the custom domain (`NEXT_PUBLIC_SITE_URL`).
