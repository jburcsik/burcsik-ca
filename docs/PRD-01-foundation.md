# PRD-01 — Foundation

## Goal

Stand up a working Next.js 14 application with a locked design system, deployed to Vercel with automatic preview deploys on every push. By the end of this phase, nothing is visible to users yet — but the "rails" are in place for every subsequent phase to move fast.

---

## Success Criteria

- `main` branch deploys to `burcsik.vercel.app` (or similar) without errors
- Push to any branch creates a Vercel preview URL
- TypeScript strict mode passes with zero errors
- Tailwind design tokens are defined and applied
- Fonts load correctly; base typography renders as specified
- shadcn/ui is initialized and at least one component (`Button`) renders correctly
- Folder structure matches the conventions below

---

## Tech Decisions

### Next.js 14 — App Router
- Use the App Router (`app/` directory), not the Pages Router
- `"use client"` directive only on components that require client-side interactivity (animations, forms)
- Server Components are the default

### TypeScript — Strict Mode
```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true
  }
}
```
No `any` types. Use `unknown` and narrow properly.

### Tailwind CSS
- Config lives in `tailwind.config.ts`
- All custom design tokens (colors, font sizes, spacing extensions) defined here
- Do not use inline `style={}` for values that belong in the design system

### shadcn/ui
- Run `npx shadcn-ui@latest init` to scaffold
- Components are copied into `components/ui/` — they are owned code, not a dependency
- Use as a baseline for `Button`, `Input`, etc. Restyle to match design system

### Framer Motion
- Install: `npm install framer-motion`
- Wrap animated sections in a `"use client"` component
- Create a shared `<FadeIn>` wrapper component in `components/motion/` to keep animation logic centralized

---

## File Structure

```
burcsik.ca/
├── app/
│   ├── layout.tsx          # Root layout: fonts, metadata, html/body
│   ├── page.tsx            # Single page: imports all section components
│   └── globals.css         # Base styles, CSS custom properties, Tailwind directives
├── components/
│   ├── ui/                 # shadcn/ui components (Button, Input, etc.)
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Hero, About, Skills, Work, Civic, Hobbies, Contact
│   └── motion/             # Reusable Framer Motion wrappers (FadeIn, SlideUp)
├── lib/
│   ├── utils.ts            # cn() utility from shadcn, other helpers
│   └── constants.ts        # Site metadata, nav links, any static config
├── public/
│   ├── favicon.ico
│   └── og-image.png        # Open Graph image (add in Phase 5)
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## Design System

### Color Palette

A sophisticated neutral base with a single warm accent. No more than 5–6 named roles.

| Token | Value | Usage |
|---|---|---|
| `background` | `#F8F6F2` | Off-white page background |
| `surface` | `#FFFFFF` | Cards, elevated surfaces |
| `border` | `#E2DDD6` | Dividers, card borders |
| `text-primary` | `#1C1917` | Headings, primary copy (near-black, warm) |
| `text-secondary` | `#6B6560` | Subheadings, supporting copy (warm gray) |
| `text-muted` | `#A8A09A` | Labels, captions, placeholder text |
| `accent` | `#B45309` | Copper/amber — links, highlights, active states |
| `accent-light` | `#FEF3C7` | Accent tint for backgrounds |

Dark mode (optional, Phase 5):
- `background` → `#0F0E0D`
- `text-primary` → `#F5F2EE`
- `surface` → `#1A1917`

Define these as CSS custom properties in `globals.css` and reference them in `tailwind.config.ts` via `hsl(var(--token))` or direct hex.

### Typography

**Body — Geist Sans** (or Inter as fallback)
- Clean, geometric, highly legible at all sizes
- Available via `next/font/google` or Vercel's Geist package
- Use for all body copy, UI labels, navigation

**Display/Headings — Playfair Display** (or DM Serif Display)
- Characterful serif with elegance at large sizes
- Use for `h1`, `h2`, section titles only
- Contrast with the geometric sans creates visual hierarchy without decoration

```ts
// app/layout.tsx — example font setup
import { GeistSans } from 'geist/font/sans'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600'],
})
```

**Type scale (Tailwind custom):**

| Name | Size | Usage |
|---|---|---|
| `text-display` | 4.5rem / 72px | Hero name |
| `text-heading` | 2.25rem / 36px | Section headings |
| `text-subheading` | 1.25rem / 20px | Subsection titles |
| `text-body` | 1rem / 16px | Body copy |
| `text-small` | 0.875rem / 14px | Labels, captions |

Line height: `leading-tight` (1.2) for display/headings, `leading-relaxed` (1.7) for body.

### Spacing Scale

Stick to Tailwind's default scale. Use consistent section padding:
- Section top/bottom padding: `py-24` (6rem) on desktop, `py-16` on mobile
- Max content width: `max-w-5xl mx-auto px-6`

---

## Tasks Checklist

- [ ] Initialize repo: `npx create-next-app@latest burcsik.ca --typescript --tailwind --app --no-src-dir`
- [ ] Set TypeScript strict mode and `noUncheckedIndexedAccess` in `tsconfig.json`
- [ ] Connect GitHub repo to Vercel project, confirm auto-deploy on push to `main`
- [ ] Run `npx shadcn-ui@latest init`, configure with project's color tokens
- [ ] Install Framer Motion: `npm install framer-motion`
- [ ] Install Geist font: `npm install geist` (or configure via `next/font/google`)
- [ ] Configure Playfair Display via `next/font/google`
- [ ] Define color tokens in `globals.css` as CSS custom properties
- [ ] Extend Tailwind config with color tokens, font families, and custom type scale
- [ ] Create `lib/utils.ts` with `cn()` helper (from shadcn init)
- [ ] Create `lib/constants.ts` with site name, tagline, nav links
- [ ] Create `components/motion/FadeIn.tsx` — reusable entrance animation wrapper
- [ ] Create `app/layout.tsx` with font classes, base metadata, html lang="en"
- [ ] Create `app/page.tsx` with stubbed section imports (empty components)
- [ ] Create empty component files for all sections (Hero, About, Skills, Work, Civic, Hobbies, Contact)
- [ ] Create `components/layout/Navbar.tsx` and `components/layout/Footer.tsx` stubs
- [ ] Configure `next.config.ts` (image domains if needed later)
- [ ] Add `.gitignore`, confirm `.env.local` is excluded
- [ ] Confirm Vercel preview deploy builds clean with zero TS errors
