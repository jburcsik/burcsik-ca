# burcsik.ca — Game Plan

## Vision

A minimal, sophisticated personal website that serves as Jesse Burcsik's professional calling card. The site communicates technical depth, leadership capability, civic character, and genuine humanity — all without overselling. Visitors leave with a clear picture of who Jesse is, what he has built, and why they should want to work with or alongside him.

Design ethos: restrained, typographically strong, unhurried. The site should feel like a well-tailored suit, not a trade show booth.

---

## Tech Stack

| Layer | Choice | Justification |
|---|---|---|
| Framework | Next.js 14+ (App Router) | Industry standard, excellent DX, SSG/ISR out of the box, Vercel-native |
| Language | TypeScript (strict) | Catches errors early, self-documenting, professional baseline |
| Styling | Tailwind CSS | Rapid iteration, consistent spacing/color system, no CSS bloat |
| UI Primitives | shadcn/ui | Accessible, unstyled-first, copy-into-repo model keeps full control |
| Animation | Framer Motion | Best-in-class React animation, used for subtle entrance/scroll effects |
| Hosting | Vercel (Hobby tier) | Free, zero-config Next.js deploys, preview URLs on every PR |
| Backend (future) | Supabase | Free tier sufficient for contact form; Postgres + Auth if needed later |
| Domain | burcsik.ca | Already owned; point DNS to Vercel |

---

## Hosting Cost Estimate

| Service | Cost |
|---|---|
| Vercel Hobby | Free |
| Supabase Free tier | Free |
| burcsik.ca domain renewal | ~$10–15 CAD/yr |
| **Total** | **~$10–15/yr** |

No paid tiers needed for a personal site at this traffic level.

---

## Phase Breakdown

### Phase 1 — Foundation
Repo scaffolded, deployed to Vercel, design system locked in. The "blank canvas" that every other phase builds on.

### Phase 2 — Core Sections: Hero + About + Skills
The above-the-fold identity. Gets the site to "first impression ready."

### Phase 3 — Track Record: Work/Career + Civic
The substantive proof. Roles, impact, community contributions.

### Phase 4 — Human Side: Hobbies
The texture. Signals a well-rounded person without being a personal blog.

### Phase 5 — Contact + Polish
Contact form wired up, SEO metadata, performance tuning, domain live.

---

## Chunk List

Each chunk is one focused working session (~30–90 min).

### Phase 1 — Foundation

- [ ] **1.1** Create GitHub repo, init Next.js 14 app (`create-next-app`, App Router, TypeScript strict, Tailwind)
- [ ] **1.2** Connect repo to Vercel, confirm preview deploy works on push
- [ ] **1.3** Install and configure shadcn/ui (`npx shadcn-ui@latest init`)
- [ ] **1.4** Install Framer Motion
- [ ] **1.5** Define design tokens: color palette in `tailwind.config.ts`, CSS variables for theme
- [ ] **1.6** Choose and configure typography: import fonts (Geist/Inter + display serif), set base styles in `globals.css`
- [ ] **1.7** Create base layout: `app/layout.tsx` with font classes, metadata, basic HTML structure
- [ ] **1.8** Create placeholder page structure: stub sections as empty components, confirm scroll works end-to-end
- [ ] **1.9** Set up `components/` and `lib/` folder conventions, add path aliases in `tsconfig.json`

### Phase 2 — Core Sections

- [ ] **2.1** Build `<Navbar>` component: sticky, transparent-to-solid on scroll, minimal links
- [ ] **2.2** Build `<Hero>` section: name, tagline, positioning statement, two CTAs
- [ ] **2.3** Add Framer Motion entrance animation to Hero text (staggered fade/slide)
- [ ] **2.4** Build `<About>` section: bio paragraph, philosophy statement, circular photo placeholder
- [ ] **2.5** Build `<Skills>` section: two-column keyword cluster layout (Technical / Leadership & Strategy)

### Phase 3 — Track Record

- [ ] **3.1** Build `<WorkTimeline>` or `<WorkCards>` component: 3–5 career highlights with placeholder content
- [ ] **3.2** Build `<CivicEngagement>` subsection: 2–4 community contributions with placeholder content
- [ ] **3.3** Populate both sections with real content

### Phase 4 — Human Side

- [ ] **4.1** Build `<Hobbies>` section: label/icon treatment, 3–6 items

### Phase 5 — Contact + Polish

- [ ] **5.1** Build `<Contact>` section: name + email form (static, no backend yet)
- [ ] **5.2** Build `<Footer>`: copyright, domain, minimal
- [ ] **5.3** Wire Supabase contact form submission (optional, can defer)
- [ ] **5.4** Add `<head>` metadata: title, description, OG tags, favicon
- [ ] **5.5** Lighthouse audit: target 95+ Performance, 100 Accessibility
- [ ] **5.6** Point burcsik.ca DNS to Vercel, confirm SSL
- [ ] **5.7** Final content review and copy polish
- [ ] **5.8** Smoke test on mobile (iOS Safari, Android Chrome) and desktop
