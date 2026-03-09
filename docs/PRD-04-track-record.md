# PRD-04 — Track Record: Work/Career + Civic Engagement

## Purpose

This is the substance section. It answers: "What has Jesse actually done?"

Two subsections serve different aspects of that question:
- **Work/Career** — professional roles and impact
- **Civic Engagement** — community and public contributions

The tone is dignified and factual. This is not a resume — there are no dates of employment, no bullet lists of job duties, no keywords stuffed for ATS. It is a curated narrative of impact.

---

## Work / Career Section

### Section Anchor
`id="work"`

### Design Principle

3–5 curated career highlights. Each one tells a story in two sentences. The reader should come away knowing what Jesse built, led, or changed — not just where he worked.

### Content Structure Per Item

Each work highlight has these fields:

```ts
type WorkHighlight = {
  org: string           // Organization name
  role: string          // Title or role label
  period?: string       // Optional: "2019–2023" or just "Recent" — keep vague if preferred
  impact: string        // 1–2 sentences: what changed because Jesse was there
  tags?: string[]       // Optional: 1–3 short domain tags e.g. ["Engineering", "SaaS", "Team Leadership"]
}
```

**Placeholder content (replace with real):**

```
1. Org: [Tech Company A]
   Role: VP of Engineering
   Impact: Led a 40-person engineering organization through a platform re-architecture
   that reduced deployment time by 70% and enabled the product team to ship twice as fast.
   Tags: Engineering Leadership, Platform, Scale

2. Org: [Startup B]
   Role: Head of Product & Technology
   Impact: Built the technical foundation and product roadmap from zero to Series A.
   Wore both the CTO and CPO hat, which turned out to be a feature, not a bug.
   Tags: Product Strategy, Startups, Full-Stack

3. Org: [Organization C]
   Role: Senior Architect / Technical Lead
   Impact: Designed a data pipeline architecture that consolidated five legacy systems
   into a single source of truth, directly enabling a new analytics capability the
   business had been attempting for three years.
   Tags: Architecture, Data, Enterprise

4. Org: [Company D]
   Role: Engineering Manager
   Impact: Grew and managed a cross-functional team across two time zones. Introduced
   engineering practices that cut P1 incident rate by half within six months.
   Tags: Management, Process, Remote Teams
```

### Layout

Two options — choose one in implementation:

**Option A — Timeline (recommended for career narrative)**
- Vertical timeline with a thin left-border `border-l-2 border-border`
- Each item is a node on the timeline: small dot (`w-2 h-2 rounded-full bg-accent`) at the left edge
- Item content indented to the right: org/role as heading, impact as body, tags as chips below
- Clean, readable, implies progression

**Option B — Cards**
- `grid grid-cols-1 gap-6` (or `gap-8`)
- Each card: `bg-surface border border-border rounded-md p-6`
- Org + Role as card header, impact as body, tags as footer
- More visual weight, less narrative

**Recommendation:** Timeline for desktop, cards naturally degrade to a stacked list on mobile. Both approaches work — pick at implementation.

### Typography
- Org name: `text-subheading`, `font-semibold`, `font-display` (the serif), `text-primary`
- Role: `text-small`, `text-secondary`, regular weight
- Impact: `text-body`, `leading-relaxed`, `text-primary`
- Tags: same chip style as Skills section (`text-small`, `border-border`, `rounded-sm`)

---

## Civic Engagement Section

### Section Anchor
`id="civic"` (or as a subsection within `#work`)

### Design Principle

This section signals that Jesse is engaged beyond his day job — with community, with public institutions, with causes that matter. 2–4 items. Same dignity as the work section. Not a charity brochure.

### Content Structure Per Item

```ts
type CivicHighlight = {
  org: string           // Organization or initiative name
  role: string          // Board member, volunteer lead, etc.
  description: string   // 1–2 sentences: what the org does and what Jesse contributed
  domain?: string       // e.g. "Arts & Culture", "Tech Access", "Governance", "Environment"
}
```

**Placeholder content (replace with real):**

```
1. Org: [City/Community Board A]
   Role: Board Director
   Description: Served on the board of a community organization focused on [area].
   Contributed to governance, strategic direction, and [specific initiative].
   Domain: Civic Governance

2. Org: [Non-profit or Initiative B]
   Role: Volunteer Lead / Advisory Role
   Description: Led a working group that [achieved outcome] for [community].
   Brought technical expertise to a problem that had been addressed with
   purely human solutions until then.
   Domain: Tech for Good

3. Org: [Community Event / Campaign C]
   Role: Organizer / Advocate
   Description: Helped organize [event or initiative] that brought together
   [stakeholders] to [purpose]. Demonstrated that technology people can and
   should show up in civic spaces.
   Domain: Community Building

4. Org: [Academic / Mentorship Program D]
   Role: Mentor / Advisor
   Description: Mentored [number] of emerging professionals in [field].
   Focused on the kind of career advice that doesn't show up on job boards.
   Domain: Mentorship
```

### Visual Treatment

- Visually lighter than the Work section — this is supporting, not the main act
- Consider a two-column grid (`grid-cols-2` on desktop, `grid-cols-1` on mobile)
- Each item: no card border — use subtle left-accent line (`border-l-2 border-accent pl-4`) or plain list with domain tag
- Domain tag: `text-small`, `text-accent`, `font-medium`
- Org name: `text-subheading` but slightly smaller than Work entries
- Description: `text-body`, `text-secondary`

### Section Separation

Use a small section divider or a subsection label between Work and Civic. Suggestion:
- A thin `<hr class="border-border my-16">` with a centered label: `CIVIC ENGAGEMENT` in `text-small tracking-widest text-muted uppercase`

---

## Shared Section Details

### Section Heading (Work)
Label: `TRACK RECORD` or `WORK` — `text-small`, tracked uppercase, `text-muted`
Optional: larger `text-heading` in `font-display` (serif) if section needs more visual weight

### Section Heading (Civic)
Label: `CIVIC ENGAGEMENT` — same style as above

### Scroll Animations
Both sections: scroll-triggered entrance using `whileInView` + `viewport={{ once: true }}`. Stagger items with a 0.1s delay between cards/timeline nodes.

---

## Tasks Checklist

- [ ] Create `components/sections/Work.tsx`
- [ ] Decide on Timeline vs. Cards layout; implement chosen approach
- [ ] Define `WorkHighlight` type in `lib/types.ts` (or inline in component)
- [ ] Create `lib/data/work.ts` — export array of `WorkHighlight` placeholder objects
- [ ] Render work highlights from data array (not hardcoded JSX)
- [ ] Style org name, role, impact, and tags with correct tokens
- [ ] Create `components/sections/Civic.tsx`
- [ ] Define `CivicHighlight` type
- [ ] Create `lib/data/civic.ts` — export array of `CivicHighlight` placeholder objects
- [ ] Render civic highlights from data array
- [ ] Implement two-column grid for civic items with responsive collapse
- [ ] Add left-accent border treatment to civic items
- [ ] Add visual section divider with "CIVIC ENGAGEMENT" label between Work and Civic
- [ ] Add scroll-triggered entrance animations to both sections (staggered)
- [ ] Add section anchors (`id="work"`, `id="civic"`) to correct elements
- [ ] Confirm Navbar "Work" link scrolls correctly to `#work`
- [ ] Populate placeholder content — confirm layout holds with varying text lengths
