# ENVIRONMENT CONFIGURATION

All environment variables are documented in `.env.example`. Never commit `.env` or `.env.local` files to version control.

## Variables Reference

| Variable | Scope | Required | Description |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Public | Recommended | Canonical base URL used for sitemaps, canonical tags, and Open Graph metadata (defaults to `https://maldivia.mv`). |
| `NEXT_PUBLIC_DEFAULT_LOCALE` | Public | Optional | Default language (`en` or `zh`, defaults to `en`). |
| `NEXT_PUBLIC_SUPABASE_URL` | Public | Optional | Supabase project URL. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public | Optional | Supabase anonymous public key (protected by Row Level Security). |
| `SUPABASE_SERVICE_ROLE_KEY` | **Server-Only** | Optional | Server-side Supabase key used by `/api/enquiries` to insert enquiry records. **Never prefix with `NEXT_PUBLIC_`.** |
| `ENQUIRY_WEBHOOK_URL` | **Server-Only** | Optional | Webhook URL (e.g., Slack, WeCom/企业微信 bot, or email relay) notified when a new enquiry is submitted. |
| `NEXT_PUBLIC_OFFICIAL_WECHAT_ID` | Public | Optional | Official corporate WeChat service ID once verified by the business owner. |
| `NEXT_PUBLIC_OFFICIAL_WHATSAPP` | Public | Optional | Official WhatsApp business number once verified by the business owner. |
| `NEXT_PUBLIC_OFFICIAL_EMAIL` | Public | Optional | Official agency contact email address. |
