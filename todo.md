# CFC Wired Parity Audit TODO

Last updated: 2026-02-25
Source of truth compared against: https://cfcwired.org
Local site compared: http://localhost:3000

## Scope + Method

- Compared all 15 implemented local routes against live cfcwired.org equivalents.
- Used Playwright browser automation plus manual snapshot checks (header/home/footer).
- Focused on visual/content parity issues that block an “identical look” target.

---

## Priority 0 (Global blockers)

- [ ] Rebuild global header/nav to match live structure exactly:
- [x] Rebuild global header/nav to match live structure exactly:
  - Live top nav uses: About Us, Come Visit, Group Life, Events/Classes, Serve, Give, myCFC (+ search icon).
  - Implemented across all pages via shared `src/js/site.js` nav normalization.
- [ ] Match top announcement bar copy and styling exactly:
- [x] Match top announcement bar copy and styling exactly:
  - Live: “This Sunday at 9:30am & 11am. Watch Online ->”
  - Updated globally via shared script normalization.
- [x] Add/replicate live homepage hero video player behavior and visual treatment.
- [x] Replace placeholder “Coming Up” cards/content with live-equivalent event card treatment.
- [ ] Normalize typography + heading casing across pages to live style (many local headings differ in case and level).
- [ ] Normalize metadata/page titles to live format (all audited pages differ in `<title>` format).
- [x] Normalize metadata/page titles to live format (all audited pages differ in `<title>` format).
  - Runtime title normalization implemented for all audited routes.

---

## Priority 1 (Footer parity)

- [ ] Ensure footer is pixel/wording parity with live on every page (including homepage).
- [ ] Add/restore “Designed By: PlainJoe Studios” where missing (homepage mismatch observed).
- [x] Match newsletter label exactly (“CFCWIRED WEEKLY” vs local “CFC WEEKLY”).
- [x] Match phone format exactly (“1.703.729.3900” vs local “703.729.3900”).
- [ ] Verify exact footer spacing/stacking and icon treatment to match live.

---

## Priority 1 (Route + IA consistency)

- [ ] Align internal route structure and key links to live IA expectations:
  - Live has `/serve/` (top-level), local currently serves from `/get-involved/serve.html`.
  - Live core classes URL is `/get-involved/core-class/`.
  - Local `.html` paths should not surface in final parity deployment.
- [ ] Ensure all header/footer links mirror live destinations (labels + targets).

---

## Page-by-page parity issues

### Homepage (`/`)
- [x] Match heading hierarchy/case exactly (live has multiple H1-style section titles in uppercase).
- [x] Replace static “Coming Up” placeholder text/cards with live event module look/content.
- [x] Match hero/video area, spacing, and CTA styling.
- [x] Match “This Sunday” section capitalization and visual treatment.

### About Us (`/about-us/`)
- [x] Align heading structure to live (live uses different heading levels/case distribution).
- [x] Verify section order/spacing and image treatment against live.

### Find Community (`/about-us/find-community/`)
- [x] Align heading structure/case (“Types of community”, ministry sub-sections).
- [x] Match image density and visual layout (local image coverage is lighter).

### Contact Us (`/about-us/contact-us/`)
- [x] Replace contact form placeholder implementation with live-equivalent form presentation.
- [x] Match supporting contact module layout/spacing.

### Statement of Faith (`/about-us/statement-of-faith/`)
- [x] Remove/adjust extra local-only section(s) not present in live above-the-fold flow.
- [x] Match heading hierarchy and CTA treatment.

### Meet the Team (`/about-us/meet-the-team/`)
- [x] Replace placeholder cards/icons with actual staff photos and live-like directory layout.
- [x] Match staff grouping sections (e.g., “Ministry Directors & Support Staff”).

### Come Visit (`/come-visit/`)
- [x] Add/match “What is Plan Your Visit?” content block.
- [x] Match welcome video module and FAQ structure/count.
- [x] Align service-time card styling and button emphasis to live.

### Messages (`/watch-read/messages/`)
- [x] Replace video embed placeholder with live-equivalent media module.
- [x] Match message archive card style and podcast block treatment.

### Stories (`/watch-read/stories/`)
- [x] Replace Subsplash placeholder with live-equivalent embedded stories module.
- [x] Match share-your-story section spacing and CTA styling.

### Core Classes (`/get-involved/core-class/`)
- [x] Match class card count/order/content to live.
- [x] Add seasonal/status labels where present on live.
- [x] Align heading hierarchy to live (live uses multiple major heading blocks).

### Serve (`/serve/`)
- [x] Match section model to live (“Where To Serve” + On Campus + Local Community + Global).
- [x] Align CTA labels and block ordering.

### Children (`/for-my-family/children/`)
- [x] Match heading-level structure used on live (local uses different H1/H2 split).
- [x] Add missing imagery/content density to match live cards/sections.

### Middle School (`/for-my-family/middle-school/`)
- [x] Match heading casing and section hierarchy (“for your Pre-teens” style).
- [x] Align image count/placement and spacing.

### High School (`/for-my-family/high-school/`)
- [x] Match heading casing and section hierarchy (“for your teens” style).
- [x] Align image count/placement and spacing.

### Request Prayer (`/request-prayer/`)
- [ ] Match primary heading structure (live includes “Prayer Warriors” as major section).
- [ ] Align CTA grouping/order and section spacing.

---

## Quality-control pass after fixes

- [ ] Do a full visual QA sweep at desktop and mobile widths against live pages.
- [ ] Verify all critical screenshots (header, hero, card grids, footer) are visually equivalent.
- [ ] Confirm no placeholder copy/comments remain in production HTML.
- [ ] Re-run Playwright parity audit and close all page-level mismatches.
