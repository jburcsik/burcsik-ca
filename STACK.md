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
| Supabase | Contact form message storage | supabase.com |
| Resend | Transactional email delivery | resend.com |
| Rebel.ca | Domain registrar / DNS | rebel.ca |

## Environment Variables

| Variable | What it is | Where to find it |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Project Settings → API |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY` | Supabase client-side key | Project Settings → API Keys |
| `SUPABASE_SECRET_DEFAULT_KEY` | Supabase server-side key (legacy service role JWT) | Project Settings → API Keys |
| `RESEND_API_KEY` | Resend email delivery key | resend.com → API Keys |

All secrets stored in 1Password.

## Contact Form Flow

1. User submits form → POST `/api/contact`
2. Message saved to Supabase `contact_messages` table
3. Email sent via Resend from `contact@burcsik.ca` to `jesse@burcsik.ca`
4. Reply-To set to the sender so replying goes directly to them

## Deployment

Autodeploys from `main` branch via Vercel. No staging environment.

## DNS (Rebel.ca)

- Vercel: A / CNAME records for burcsik.ca
- Gmail: MX records for jesse@burcsik.ca
- Resend: `resend._domainkey` TXT record for DKIM (sending from contact@burcsik.ca)
