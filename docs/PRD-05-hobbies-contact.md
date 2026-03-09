# PRD-05 — Hobbies + Contact + Footer

## Purpose

The final stretch of the page. These sections serve different roles:

- **Hobbies** — humanizes Jesse; signals a well-rounded, curious person with depth beyond the resume
- **Contact** — converts interest into a conversation; clean and frictionless
- **Footer** — closes the page cleanly; nothing unnecessary

---

## Hobbies Section

### Section Anchor
`id="hobbies"`

### Design Principle

The goal is not to list activities. It is to create a texture — a sense that this is a person with genuine interests, intellectual curiosity, and life outside of work. The treatment should feel like a sidebar conversation, not a LinkedIn endorsement section.

3–6 items. Each is a short label or phrase, optionally paired with a minimal icon. No paragraphs. The brevity is intentional — it invites questions rather than answering them.

### Content Spec

**Placeholder hobbies (replace with Jesse's actual interests):**

| Label | Icon suggestion |
|---|---|
| Amateur astronomy | Telescope / stars (lucide: `Telescope` or `Star`) |
| Competitive chess | Knight piece (lucide: `Crown` or custom SVG) |
| Woodworking | Wood / tools (lucide: `Hammer`) |
| Trail running | Mountains (lucide: `Mountain`) |
| Coffee obsessive | Coffee (lucide: `Coffee`) |
| Reading — history & biography | Book (lucide: `BookOpen`) |

These are illustrative — the point is items that suggest depth, craft, and intellectual engagement. Not a list of generic activities.

**Important:** Replace with real hobbies. The specific choices matter a lot here — they are a character signal.

### Layout

- Horizontal flex/grid of items on desktop; wraps on mobile
- Each item: small icon (20–24px) + label in `text-body` or `text-small`
- Visual treatment: very light — no cards, no borders. Items can be separated by a middot `·` or just spacing (`gap-8`)
- Color: `text-secondary` default, `text-primary` on hover
- Icon color: `text-muted` default, `text-accent` on hover

Alternative treatment (if icon sourcing feels heavy): render items as a spaced inline list with a small decorative separator:
```
Amateur astronomy  ·  Competitive chess  ·  Woodworking  ·  Trail running
```
Simple, editorial, elegant.

### Section Heading
Label: `OUTSIDE THE OFFICE` or `INTERESTS` — `text-small`, tracked uppercase, `text-muted`

### Scroll Animation
Subtle: items enter as a group with a single `FadeIn` rather than staggered. This section is light — it doesn't need drama.

### Background (Optional)
This section can use a very subtle background differentiation — `bg-surface` instead of `bg-background` — to visually signal a shift in register before the contact section. Use sparingly; only if it looks right.

---

## Contact Section

### Section Anchor
`id="contact"`

### Design Principle

Minimal friction. Most people who get to the Contact section are already interested. Don't get in their way with a long form or a complex layout.

For now: a static form (no backend). The form captures name + email + message but submits nowhere yet. Phase 5 adds Supabase integration.

### Content Spec

**Heading:**
```
Get in touch
```
Or a more direct variant:
```
Let's talk.
```
Set in `font-display` (serif), `text-heading` size. One of the only places on the site where the serif heading is used at a smaller scale.

**Subtext:**
A brief, human line before the form. Placeholder:
```
Whether you have a project in mind, a question, or just want to connect —
I'd love to hear from you.
```
`text-body`, `text-secondary`, max ~60ch.

**Form fields:**
- Name (text input, required)
- Email (email input, required)
- Message (textarea, required, ~4 rows)
- Submit button: "Send message" — filled `Button` with `bg-accent text-white` (this is the one place for a filled button on the page)

**Form state (Phase 5):**
- Idle: form visible
- Submitting: button shows loading spinner, inputs disabled
- Success: form replaced with a brief thank-you message
- Error: inline error message

**External links:**
Below the form, a clean row of profile links:
- LinkedIn
- GitHub

Rendered as simple text links with an icon, `text-small`, `text-muted` default, `text-primary` on hover. No social media wall. Just these two.

```tsx
// Example link row
<a href="https://linkedin.com/in/jesseburcsik">LinkedIn ↗</a>
<a href="https://github.com/jesseburcsik">GitHub ↗</a>
```

Use `lucide-react` icons: `Linkedin`, `Github` (16px, inline).

### Layout

- Two-column layout on desktop: form on the left (~60% width), empty space or a brief aside on the right
  - The aside (if used) could contain: "Prefer email? [hello@burcsik.ca]" or a short availability note
- Single column on mobile
- Form inputs: use shadcn/ui `Input` and `Textarea` components, styled to match design system
- Input style: `border-border`, `bg-surface`, `text-primary`, `focus:border-accent focus:ring-accent`

### Form Behavior (Static Phase)
- Client-side validation: required fields, valid email format
- On submit: prevent default, log to console, show mock success state
- Supabase wiring is deferred to Phase 5 chunk 5.3 — leave a clear `TODO` comment in the handler

---

## Footer

### Design Principle
The footer is a period at the end of a sentence. It confirms the site is done. Nothing more.

### Content
```
© 2025 Jesse Burcsik  ·  burcsik.ca
```
- Year: use `new Date().getFullYear()` dynamically
- Optional: "Built with Next.js" attribution — only if Jesse wants it
- No nav links repeated. No social icons duplicated. No "Back to top" button (the browser handles that).

### Style
- `py-8`, `text-small`, `text-muted`, centered
- Thin `border-t border-border` at the top
- Same `bg-background` as the page — no dark footer

---

## Tasks Checklist

### Hobbies
- [ ] Create `components/sections/Hobbies.tsx`
- [ ] Define hobby items as a typed array in `lib/data/hobbies.ts`
- [ ] Install `lucide-react` if not already present: `npm install lucide-react`
- [ ] Implement icon + label layout with correct spacing and color tokens
- [ ] Decide on icon treatment vs. plain text list — implement chosen approach
- [ ] Add section label ("OUTSIDE THE OFFICE") with tracked uppercase style
- [ ] Add single `FadeIn` scroll-triggered entrance animation
- [ ] Test layout wrapping on narrow viewports

### Contact
- [ ] Create `components/sections/Contact.tsx` — mark as `"use client"`
- [ ] Build form with Name, Email, Message fields using shadcn/ui `Input` and `Textarea`
- [ ] Style inputs with design system tokens (`border-border`, `focus:border-accent`)
- [ ] Build submit `Button` with `bg-accent` fill style
- [ ] Implement client-side validation (required fields, email format)
- [ ] Implement mock submit handler with `TODO` comment for Supabase wiring
- [ ] Implement success state (replace form with thank-you message)
- [ ] Implement error state (inline error message)
- [ ] Add LinkedIn and GitHub links below the form with lucide icons
- [ ] Set real URLs for LinkedIn and GitHub profiles
- [ ] Confirm `id="contact"` is on the section element for scroll targeting
- [ ] Test form on mobile — ensure keyboard doesn't obscure inputs

### Footer
- [ ] Create `components/layout/Footer.tsx`
- [ ] Implement dynamic year with `new Date().getFullYear()`
- [ ] Add `border-t border-border` top rule
- [ ] Keep copy minimal: copyright + domain only
- [ ] Confirm footer is included in `app/layout.tsx` or `app/page.tsx`

### Final Integration
- [ ] Confirm all section anchors are correct and Navbar links scroll accurately
- [ ] Confirm page scroll order: Hero → About → Skills → Work → Civic → Hobbies → Contact
- [ ] Add `id` attributes to all sections: `hero`, `about`, `skills`, `work`, `civic`, `hobbies`, `contact`
- [ ] Review full page scroll on mobile — check for overflow issues, text truncation
- [ ] Verify all external links open in `target="_blank"` with `rel="noopener noreferrer"`
