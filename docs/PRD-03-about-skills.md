# PRD-03 — About + Skills Sections

## Purpose

These two sections answer the natural question that follows the Hero: "OK, but who actually is this person?"

- **About** provides the human context — biography, voice, philosophy
- **Skills** provides the professional inventory — without the gimmickry of bar charts or self-rating widgets

Together they complete the picture: capable technologist, effective leader, thoughtful person.

---

## About Section

### Section Anchor
`id="about"`

### Content Spec

**Short bio paragraph (placeholder — replace with real content):**
```
I've spent my career building at the intersection of technology and
organizations — leading engineering teams, shaping strategy, and shipping
products that matter. I'm as comfortable in a technical architecture
review as I am in a board presentation, and I believe the best outcomes
happen when those two worlds actually talk to each other.

Outside the office, I'm actively involved in my community, drawn to
civic problems where technology and human judgment can both play a role.
```

**Photo (optional):**
- Circular crop, ~160px diameter on desktop, ~120px on mobile
- Positioned to the right of the bio on desktop (float or flex layout); above bio on mobile
- Placeholder: use a neutral gray circle with initials "JB" in the center (`bg-border text-muted`)
- When real photo is added: should be professional but not stiff — natural light preferred

**Philosophy / Approach statement:**
A shorter, more declarative block that captures Jesse's working philosophy. Visually separated from the bio — could be set in a slightly larger size, italicized, or in the `accent` color as a pull-quote style. Placeholder:
```
"I think the most important skill in any complex role is knowing which
problem you're actually solving."
```
Or a non-quote format, e.g.:
```
Approach: Start with the problem. Build with the people.
Measure what matters.
```

### Design

- Section padding: `py-24`
- Two-column layout on desktop (bio left, photo right), single column on mobile
- Bio text: `text-body`, `leading-relaxed`, `text-primary`, max ~65ch
- Philosophy statement: visually distinct — consider `border-l-2 border-accent pl-4` pull-quote treatment, or italic `text-subheading` in `text-secondary`
- No background color change — stays on the base `background`
- Section heading ("About" or left as implicit) — optional. Could use a small label (`text-small`, `tracking-widest`, `text-muted`, uppercase: "ABOUT") rather than a large heading. Keeps the section feeling editorial.

---

## Skills Section

### Section Anchor
`id="skills"`

### Design Philosophy

No bar charts. No percentage ratings. No "JavaScript: 92%" nonsense.

Skills are shown as curated keyword clusters — short phrases grouped by domain. The reader scans them and builds their own impression. This is more honest and more interesting than a fake numerical scale.

### Content Spec

Two columns, each with a heading and a list of skill phrases:

**Column 1 — Technical**

Placeholder cluster (replace/refine with real content):
- Full-Stack Development
- Cloud Architecture
- Data Pipelines & Analytics
- API Design
- Systems Thinking
- Developer Tooling
- DevOps & CI/CD
- Database Design

**Column 2 — Leadership & Strategy**

Placeholder cluster (replace/refine with real content):
- Engineering Leadership
- Product Strategy
- Stakeholder Alignment
- Cross-Functional Teams
- Organizational Design
- Executive Communication
- Civic & Community Strategy
- Program Delivery

### Layout

- Two equal columns side by side on desktop (`grid grid-cols-2 gap-12`)
- Single column stacked on mobile
- Each column:
  - Column heading: small, tracked uppercase label (e.g., "TECHNICAL" / "LEADERSHIP & STRATEGY"), `text-small`, `text-muted`
  - Skill phrases: displayed as a clean list of tags or inline phrases, not bullet points
  - Tag treatment: `inline-block`, `text-small`, `text-secondary`, `border border-border rounded-sm px-3 py-1 mr-2 mb-2` — subtle pill/chip style
  - No hover effects needed unless very subtle (e.g., `border-accent` on hover)

### Optional Divider Between Columns
A thin vertical line (`border-l border-border`) between the two columns on desktop. Adds structure without adding weight.

---

## Section Spacing and Flow

The About and Skills sections can either be:
- **Continuous** — no hard visual break between them, just spacing
- **Divided** — a thin `<hr>` (`border-border`) between them

Continuous is preferred to keep the page feeling like one flowing document.

---

## Tasks Checklist

- [ ] Create `components/sections/About.tsx`
- [ ] Implement two-column layout (bio + photo) with responsive collapse to single column
- [ ] Build circular photo placeholder (gray circle + "JB" initials)
- [ ] Write placeholder bio copy and apply correct typography tokens
- [ ] Implement pull-quote/philosophy statement with left border accent treatment
- [ ] Add section label ("ABOUT") using small tracked uppercase style
- [ ] Wrap section content in `<FadeIn>` or use `motion.div` with scroll-triggered entrance (`whileInView`, `viewport: { once: true }`)
- [ ] Create `components/sections/Skills.tsx`
- [ ] Implement two-column grid layout with responsive single-column on mobile
- [ ] Build skill tag/chip component (inline, bordered, subtle)
- [ ] Populate both columns with placeholder skill phrases
- [ ] Add column headings ("TECHNICAL" / "LEADERSHIP & STRATEGY") with correct label style
- [ ] Add optional vertical divider between columns on desktop
- [ ] Add scroll-triggered entrance animation to Skills section
- [ ] Confirm both sections use consistent `max-w-5xl mx-auto px-6` container
- [ ] Verify readable line length on all breakpoints (bio text ~65ch max)
