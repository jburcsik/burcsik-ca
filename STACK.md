# burcsik.ca — Stack & Services

Personal portfolio / calling card site.

## Tech

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |

## Services

| Service | Purpose | Dashboard |
|---|---|---|
| Vercel | Hosting & deployment | vercel.com |
| Rebel.ca | Domain registrar / DNS | rebel.ca |

## Environment Variables

No environment variables are required. The site is fully static with no backend dependencies.

## Deployment

Autodeploys from `main` branch via Vercel. No staging environment.

## DNS (Rebel.ca)

- Vercel: A / CNAME records for burcsik.ca
- Gmail: MX records for jesse@burcsik.ca

## Removed Services (2026-04-14)

The following services were previously used for the contact form and have been fully disconnected:

| Service | Was used for | Status |
|---|---|---|
| Supabase | Contact form message storage (`contact_messages` table) | Disconnected — no code references remain |
| Resend | Transactional email from `contact@burcsik.ca` | Disconnected — npm package removed |
| Cloudflare Turnstile | Bot protection on contact form | Disconnected — npm package removed |

**What was removed:**
- `components/Contact.tsx` — contact form UI with Turnstile widget and honeypot
- `app/api/contact/route.ts` — API route that verified Turnstile, saved to Supabase, sent email via Resend
- npm packages: `@supabase/supabase-js`, `@marsidev/react-turnstile`, `resend`
- Environment variables: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY`, `SUPABASE_SECRET_DEFAULT_KEY`, `RESEND_API_KEY`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`

**"Get in touch" CTAs** in Nav and Hero now link to `mailto:jesse@burcsik.ca` instead of `#contact`.

DNS DKIM record (`resend._domainkey`) for Resend can be removed from Rebel.ca when ready.
