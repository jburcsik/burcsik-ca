# PRD-02 — Hero Section

## Purpose

The Hero is the first thing every visitor sees. It must do three things instantly:

1. Establish who Jesse Burcsik is
2. Signal the tone of the entire site (sophisticated, confident, unhurried)
3. Give the visitor a clear next action

This section is text-driven. No hero image, no gradient blobs, no stock photography. Typography and whitespace do the work.

---

## Content Spec

### Name
```
Jesse Burcsik
```
Rendered at display size (`text-display`, ~72px), Playfair Display or chosen serif. This is the visual anchor of the page.

### Tagline (one line)
A single, punchy line that captures the dual nature of Jesse's profile — technical depth + human leadership. Placeholder:
```
Builder. Leader. Civic actor.
```
or
```
Technology leader with a bias for impact.
```
Rendered smaller than the name but still prominent. Geometric sans, medium weight, tracked slightly (`tracking-wide`), `text-subheading` or slightly larger.

### Positioning Statement (2–3 sentences)
A short paragraph that expands on the tagline. Should communicate:
- What Jesse does professionally
- The range of his capability (tech + people)
- A hint at values or approach

Placeholder:
```
I work at the intersection of technology and leadership — building systems,
leading teams, and engaging with the communities that matter.
With a track record across engineering, strategy, and civic life,
I bring both the technical fluency and the human judgment that complex
challenges require.
```
Rendered in body font, `text-body`, `text-secondary` color, `leading-relaxed`, max-width ~60ch to keep line length readable.

### Primary CTA
```
See my work  →
```
Scrolls down to the Work/Track Record section. `Button` component, outlined or ghost style (not filled — the filled style is reserved for high-contrast moments). Uses `accent` color on hover.

### Secondary CTA
```
Get in touch
```
Scrolls down to the Contact section. Text link style, `text-muted` default, `text-primary` on hover.

---

## Design Spec

### Layout
- Full viewport height: `min-h-screen`
- Content vertically centered or positioned at ~40% from top (slightly above center — feels intentional, not lazy)
- Left-aligned text (not centered) — more editorial, less brochure
- Maximum content width: `max-w-3xl`
- Generous left padding on desktop; full-width with `px-6` on mobile

### Visual Hierarchy (top to bottom)
1. Tagline (small, tracked, muted — set the stage)
2. Name (large, bold, primary — the anchor)
3. Positioning statement (body, relaxed, secondary — the explanation)
4. CTAs (spaced below, breathing room)

Optionally: a thin horizontal rule or subtle decorative element between tagline and name. Keep it restrained — one element max.

### Animation (Framer Motion)
Staggered fade + subtle upward slide on page load. Each element enters sequentially with a small delay:

```tsx
// Suggested stagger: 0.15s between each element
// Each element: opacity 0→1, y: 16px→0, duration: 0.6s, ease: easeOut
// Total entrance duration: ~1.2s
```

Use the shared `<FadeIn>` wrapper from `components/motion/`. Do not over-animate — this is a whisper, not a shout.

No looping animations. No parallax on scroll. No particle effects.

### Background
`background` color (`#F8F6F2`). Plain. The content is the design.

Optionally: a very subtle full-bleed typographic watermark (e.g., large "JB" initials at low opacity behind the content). Only if it reads as elegant, not as noise. Evaluate in implementation.

---

## Navbar

The Navbar lives within this PRD since it first appears over the Hero.

### Content
- Left: "Jesse Burcsik" or "JB" monogram (small, no logo)
- Right: navigation links — About · Work · Contact (3 links max)

### Behavior
- Sticky (`position: sticky; top: 0`)
- On load: transparent background, text matches hero background (`text-primary`)
- On scroll past ~80px: transition to `surface` background with a soft `border-bottom` and `backdrop-blur-sm`
- Transition: smooth, `transition-all duration-300`
- Mobile: hamburger menu or collapse to icon — keep it simple

### Design
- Height: `h-16`
- Font: geometric sans, `text-small`, `tracking-widest`, uppercase for links (restrained — fits the tone)
- Active link: `accent` color underline

---

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile (`< 640px`) | `text-display` scales down to ~2.5rem; tagline at `text-body`; CTAs stack vertically; full-width padding `px-6` |
| Tablet (`640px–1024px`) | `text-display` at ~3.5rem; layout stays left-aligned |
| Desktop (`> 1024px`) | Full `text-display` size; max-width container centers content with padding |

Use Tailwind responsive prefixes (`sm:`, `lg:`) on font size and padding classes. Do not use JS for responsive behavior here.

---

## Tasks Checklist

- [ ] Create `components/sections/Hero.tsx` — mark as `"use client"` (Framer Motion)
- [ ] Implement name, tagline, positioning statement, and CTA layout
- [ ] Apply display font to name (`font-display` class)
- [ ] Apply correct color tokens (`text-primary`, `text-secondary`, `text-muted`)
- [ ] Wire primary CTA scroll: smooth scroll to `#work` section anchor
- [ ] Wire secondary CTA scroll: smooth scroll to `#contact` section anchor
- [ ] Implement Framer Motion stagger entrance animation using `<FadeIn>` wrapper
- [ ] Create `components/layout/Navbar.tsx` — mark as `"use client"` (scroll listener)
- [ ] Implement scroll-aware Navbar background transition (`useScroll` or `window.scrollY` listener)
- [ ] Implement Navbar mobile collapse behavior
- [ ] Confirm Hero is `min-h-screen` and content is vertically positioned correctly
- [ ] Test responsive scaling across mobile, tablet, desktop
- [ ] Check animation `prefers-reduced-motion` — disable or reduce animation for accessibility
- [ ] Confirm no layout shift (CLS) on load
