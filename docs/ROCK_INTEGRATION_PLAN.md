# Rock RMS Integration Plan

> **Target:** Rock v16 (v1.16.x) | Bootstrap 3.4.1 | Font Awesome | jQuery 3.5.1
> **Current Theme:** CFCv2External
> **Source Site:** 14 static HTML pages built with Bootstrap 5.3.3

---

## 1. What Your Rock Theme Already Provides

The CFCv2External theme uses `Site.Master` plus layout `.aspx` files. `Site.Master` owns the global shell, and each layout supplies only the page content zones.

`Site.Master` provides:

- Rock's jQuery bundle and theme CSS includes
- Header/nav shell using `.navbar.navbar-inverse.navbar-static-top`
- Site-level zones: `Header`, `Login`, `Navigation`, `Footer`
- Content placeholders: `feature` and `main`
- Rock `ScriptManager` and `UpdateProgress`

The actual layout files provided for this migration are:

| Layout File | Use |
|-------------|-----|
| `Homepage.aspx` | Homepage with a `WelcomeVideo` feature zone and full-width `MainContent` zone |
| `FullWidth.aspx` | Standard full-width content pages with `Feature` and `MainContent` zones |
| `FullWidthnarrow.aspx` | Narrow text-heavy pages |
| `LeftsSideBar.aspx` | Pages needing left navigation or filters |
| `RightSidebar.aspx` | Pages needing right sidebar content |
| `ThreeColumn.aspx` | Three-column content pages |

The common zone names are:

- `Feature`
- `Main`
- `Sidebar 1`
- `Sidebar 2`
- `Section A`
- `Section B`
- `Section C`
- `Section D`

The homepage uses one full-width zone:

- `MainContent`

The standard full-width layout used for this import gives you this content skeleton:

```
<main>
  <Rock:PageIcon /> <h1 class="pagetitle"><Rock:PageTitle /></h1>
  <Rock:PageBreadCrumbs />
  <Rock:Zone Name="MainContent" />
</main>
```

**Key implications:**
- Header, navigation, and footer belong in `Site.Master` and site-level blocks, not in page HTML Content blocks.
- `Feature` HTML payloads are represented by each package's `feature.html` and belong in the layout's full-width `Feature` zone.
- Body payloads go in `MainContent` and intentionally omit their original `.container`; theme CSS scopes fluid widths and responsive grids to `.block-content > .py-5`.
- `Homepage.aspx` places all homepage section blocks in the full-width `MainContent` zone inside `main`.

---

## 2. Bootstrap 5 → 3 Conversion Reference

### Grid Classes

| BS5 | BS3 |
|-----|-----|
| `col-lg-6` | `col-lg-6` (same) |
| `col-md-4` | `col-md-4` (same) |
| `col-*` (no breakpoint) | `col-xs-*` |
| `g-4` (gutter) | No equivalent — use padding/margin in CSS |
| `g-5` (gutter) | No equivalent — use padding/margin in CSS |
| `row g-4` | `row` (add custom gutter CSS) |
| `order-lg-1` / `order-lg-2` | `col-lg-push-*` / `col-lg-pull-*` |

### Components

| BS5 | BS3 |
|-----|-----|
| `btn-close` | `<button class="close">&times;</button>` |
| `btn-outline-primary` | No built-in — add custom CSS or use `btn-default` |
| `btn-outline-light` | No built-in — add custom CSS |
| `card`, `card-body`, `card-title`, `card-text` | `panel panel-default`, `panel-body` or `thumbnail` |
| `card-img-top` | `<img class="img-responsive">` inside thumbnail |
| `accordion`, `accordion-item` | `panel-group`, `panel` with collapse |
| `offcanvas` | Not available — use `navbar-collapse` |
| `navbar-expand-lg` | `navbar-static-top` or `navbar-fixed-top` |
| `navbar-toggler` | `navbar-toggle` |
| `data-bs-toggle` | `data-toggle` |
| `data-bs-target` | `data-target` |

### Utilities

| BS5 | BS3 | CSS Workaround |
|-----|-----|----------------|
| `d-flex` | — | `.display-flex { display: flex; }` |
| `d-block` | — | `.display-block { display: block; }` |
| `d-inline-flex` | — | Custom CSS |
| `gap-3` | — | Custom CSS with margins |
| `justify-content-center` | — | `.flex-center { justify-content: center; }` |
| `align-items-center` | — | `.flex-align-center { align-items: center; }` |
| `flex-wrap` | — | Custom CSS |
| `text-center` | `text-center` (same) |
| `text-uppercase` | `text-uppercase` (same) |
| `text-muted` | `text-muted` (same) |
| `fw-bold` | — | `.font-bold { font-weight: 700; }` |
| `fw-semibold` | — | `.font-semibold { font-weight: 600; }` |
| `fs-1` through `fs-6` | — | Custom LESS classes |
| `lead` | `lead` (same) |
| `mb-3`, `mt-4`, `py-5`, `px-4` | — | Rock has `margin-t-lg`, `margin-b-md`, etc. and you add custom utility classes |
| `bg-light` | `bg-default` or custom |
| `bg-dark` | Custom CSS |
| `text-white` | Custom CSS |
| `shadow`, `shadow-sm` | Custom CSS |
| `rounded` | Custom CSS |
| `img-fluid` | `img-responsive` |
| `ratio ratio-16x9` | `embed-responsive embed-responsive-16by9` |
| `display-4` | Custom CSS (BS3 doesn't have display utilities) |
| `h-100` | Custom CSS |
| `w-100` | Custom CSS |
| `overflow-hidden` | Custom CSS |
| `position-relative` | Custom CSS |

### Icons

| BS5 (Bootstrap Icons) | BS3 (Font Awesome) |
|-----------------------|-------------------|
| `bi-arrow-right` | `fa fa-arrow-right` |
| `bi-x` | `fa fa-times` |
| `bi-telephone` | `fa fa-phone` |
| `bi-envelope` | `fa fa-envelope` |
| `bi-facebook` | `fa fa-facebook` |
| `bi-twitter-x` | `fa fa-twitter` |
| `bi-youtube` | `fa fa-youtube` |
| `bi-instagram` | `fa fa-instagram` |
| `bi-search` | `fa fa-search` |
| `bi-book` | `fa fa-book` |
| `bi-heart` | `fa fa-heart` |
| `bi-music-note-beamed` | `fa fa-music` |
| `bi-palette` | `fa fa-paint-brush` |
| `bi-chat-heart` | `fa fa-comments` |
| `bi-person` | `fa fa-user` |
| `bi-file-pdf` | `fa fa-file-pdf-o` |
| `bi-chevron-right` | `fa fa-chevron-right` |

---

## 3. Custom Utility CSS to Add to Theme

Since BS3 lacks many BS5 utilities, add these to the theme's `theme.less`:

```less
// =============================================
// Custom Utilities (BS5 parity for CFC content)
// =============================================

// Display
.d-flex         { display: flex; }
.d-block        { display: block; }
.d-none         { display: none; }
.d-inline-flex  { display: inline-flex; }

// Flexbox
.flex-wrap             { flex-wrap: wrap; }
.flex-column           { flex-direction: column; }
.justify-content-center { justify-content: center; }
.justify-content-between { justify-content: space-between; }
.align-items-center    { align-items: center; }
.align-items-start     { align-items: start; }
.gap-2  { gap: 10px; }
.gap-3  { gap: 15px; }
.gap-4  { gap: 20px; }

// Font weight
.fw-bold      { font-weight: 700; }
.fw-semibold  { font-weight: 600; }
.fw-medium    { font-weight: 500; }
.fw-light     { font-weight: 300; }

// Font size
.fs-1 { font-size: 2.5rem; }
.fs-2 { font-size: 2rem; }
.fs-3 { font-size: 1.75rem; }
.fs-4 { font-size: 1.5rem; }
.fs-5 { font-size: 1.25rem; }
.fs-6 { font-size: 1rem; }

// Display headings
.display-4 { font-size: 3.5rem; font-weight: 300; line-height: 1.2; }
.display-6 { font-size: 2.5rem; font-weight: 300; line-height: 1.2; }

// Spacing (BS5-style: m/p + t/b/l/r/x/y + 0-5)
.mt-1 { margin-top: 5px; }    .mt-2 { margin-top: 10px; }
.mt-3 { margin-top: 15px; }   .mt-4 { margin-top: 20px; }
.mt-5 { margin-top: 30px; }
.mb-0 { margin-bottom: 0; }   .mb-1 { margin-bottom: 5px; }
.mb-2 { margin-bottom: 10px; } .mb-3 { margin-bottom: 15px; }
.mb-4 { margin-bottom: 20px; } .mb-5 { margin-bottom: 30px; }
.ms-2 { margin-left: 10px; }       // ms = margin-start
.me-2 { margin-right: 10px; }      // me = margin-end
.mx-auto { margin-left: auto; margin-right: auto; }
.py-2 { padding-top: 10px; padding-bottom: 10px; }
.py-3 { padding-top: 15px; padding-bottom: 15px; }
.py-4 { padding-top: 20px; padding-bottom: 20px; }
.py-5 { padding-top: 30px; padding-bottom: 30px; }
.px-3 { padding-left: 15px; padding-right: 15px; }
.px-4 { padding-left: 20px; padding-right: 20px; }
.pt-4 { padding-top: 20px; } .pt-5 { padding-top: 30px; }
.pb-3 { padding-bottom: 15px; } .pb-4 { padding-bottom: 20px; }
.p-3 { padding: 15px; } .p-4 { padding: 20px; } .p-5 { padding: 30px; }

// Sizing
.h-100 { height: 100%; }
.w-100 { width: 100%; }

// Borders & Shadows
.rounded        { border-radius: 4px; }
.rounded-circle { border-radius: 50%; }
.border-0       { border: 0; }
.shadow-sm      { box-shadow: 0 1px 3px rgba(0,0,0,0.12); }
.shadow         { box-shadow: 0 2px 8px rgba(0,0,0,0.15); }

// Background & Text
.bg-light  { background-color: #f8f9fa; }
.bg-dark   { background-color: #262626; }
.text-white { color: #fff; }
.text-white-50 { color: rgba(255,255,255,0.5); }
.text-decoration-none { text-decoration: none; }

// Buttons (BS5 outline variants)
.btn-outline-primary {
  color: @brand-primary;
  border: 1px solid @brand-primary;
  background: transparent;
  &:hover { background: @brand-primary; color: #fff; }
}
.btn-outline-light {
  color: #fff;
  border: 1px solid #fff;
  background: transparent;
  &:hover { background: #fff; color: @brand-dark; }
}

// Cards (BS3 has panels, but we want card-like styling)
.card { background: #fff; border-radius: 4px; border: 1px solid #ddd; }
.card-body { padding: 15px; }
.card-title { margin-bottom: 10px; font-weight: 600; }
.card-text { color: #666; }
.card-img-top { width: 100%; border-radius: 4px 4px 0 0; }

// Responsive embed (BS3 syntax for video iframes)
// Already exists in BS3 as .embed-responsive.embed-responsive-16by9

// Overflow
.overflow-hidden { overflow: hidden; }

// Position
.position-relative { position: relative; }
.position-absolute { position: absolute; }
```

---

## 4. Page-by-Page Integration Plan

### Approach

Each page becomes a Rock page with blocks in zones. The pattern is:

1. **Feature** → Hero section (HTML Content block with custom HTML)
2. **Main** or **Section A** → Main page content (one or more HTML Content blocks)
3. **Footer** → Shared footer (HTML Content block, site-level)
4. **Header** → Logo (HTML Content block, site-level)
5. **Navigation** → Page Menu block (site-level)

For pages with lots of sections, stack multiple HTML Content blocks in `Section A`. On the homepage, use the named section zones so each homepage band is independently editable.

### Content That Should Use Content Channels

| Content | Why | Content Channel Type |
|---------|-----|---------------------|
| **Staff Directory** (Meet the Team) | 27 staff members, changes regularly | Custom: "Staff Members" |
| **Sermon/Messages** | Already using Subsplash embed, but Rock has built-in media support | Use existing Rock media features or embed |
| **Events/Classes** | Already linking to Rock events | Use Rock's Event Calendar blocks |
| **Serve Opportunities** | Changes periodically, 3+ categories | Custom: "Serve Opportunities" or HTML Content |

### Content That Should Use HTML Content Blocks

Everything else — hero sections, about text, faith statements, ministry descriptions, etc. These are relatively static and benefit from Rock's built-in versioning, scheduling, and approval workflow.

---

### Page: Homepage (`/`)

**Rock Page:** External Homepage (already exists as page 1018)
**Layout:** Homepage (the one with `section.main-feature`)

| Zone | Block Type | Content |
|------|-----------|---------|
| Header | HTML Content (site) | CFC logo linked to homepage |
| Navigation | Page Menu (site) | Main nav: myCFC, About Us, Come Visit, etc. |
| WelcomeVideo | HTML Content | Full-width background video hero with overlaid welcome heading and CTA buttons |
| MainContent | HTML Content | Opening vision statement |
| MainContent | HTML Content | "This Sunday" copy and weekly resource links |
| MainContent | Calendar Item Occurrence List by Audience Lava | Coming Up Lava template rendering four event artwork tiles |
| MainContent | HTML Content | Sunday, Wednesday, and Community Groups unframed columns |
| MainContent | HTML Content | Large reserved visual area, copy, and Core Classes CTA |
| Footer | HTML Content (site) | Full footer: logo, address, social, quick menu, office hours, newsletter, app badges |

**Key conversion notes:**
- The homepage hero is a background video with overlaid content. Keep it in the `WelcomeVideo` feature zone.
- The Coming Up section should use **Calendar Item Occurrence List by Audience Lava**. The template reads `EventItemOccurrences`, renders event item artwork when available, and links through the configured `EventDetailPage`.
- The announcement banner is NOT in a dedicated zone in the supplied `Site.Master` — it would need to go in `Site.Master` directly or in the `Header`/`Navigation` block HTML.

---

### Page: About Us (`/about-us`)

**Rock Page:** New page under External Homepage
**Layout:** FullWidth

| Zone | Block Type | Content |
|------|-----------|---------|
| Feature | HTML Content | Hero banner: "ABOUT US" title |
| Section A | HTML Content | Mission statement, Vision section (2-col text+image), Values (5 cards) |

---

### Page: Meet the Team (`/about-us/meet-the-team`)

**Rock Page:** Child of About Us
**Layout:** FullWidth

| Zone | Block Type | Content |
|------|-----------|---------|
| Feature | HTML Content | Hero banner: "MEET THE TEAM" |
| Section A | **Content Channel Dynamic** | Pulls from "Staff Members" content channel. Lava template renders the card grid. |

**Content Channel: "Staff Members"**
- Channel Type: Custom "Staff Directory"
- Item Attributes: Name, Title, Photo (Image), Bio (optional), Display Order
- Lava template renders as a BS3 grid of cards with photos

This means staff changes are managed in Rock's content management UI, not by editing HTML.

---

### Page: Contact Us (`/about-us/contact-us`)

**Rock Page:** Child of About Us
**Layout:** FullWidth

| Zone | Block Type | Content |
|------|-----------|---------|
| Feature | HTML Content | Hero banner: "CONTACT US" |
| Section A | HTML Content | Contact info, embedded map, etc. |
| Section A | **Workflow Entry** block | Contact form powered by a Rock Workflow — submissions go to staff inbox, tracked in Rock |

**Note:** Don't use a static HTML form. Use a Rock Workflow form so submissions are tracked, routable, and integrated with Rock's communication tools.

---

### Page: Find Community (`/about-us/find-community`)

**Rock Page:** Child of About Us
**Layout:** FullWidth

| Zone | Block Type | Content |
|------|-----------|---------|
| Feature | HTML Content | Hero banner: "FIND COMMUNITY" |
| Section A | HTML Content | Importance of community section, Types of community (4 cards) |
| Section A | HTML Content or **Group Finder** block | "Find a Group" CTA — potentially use Rock's Group Finder block for live group search |

---

### Page: Statement of Faith (`/about-us/statement-of-faith`)

**Rock Page:** Child of About Us
**Layout:** FullWidth

| Zone | Block Type | Content |
|------|-----------|---------|
| Feature | HTML Content | Hero banner with tagline |
| Section A | HTML Content | Full statement text, "Essential for Salvation" section |

This is purely static content — HTML Content block is ideal.

---

### Page: Come Visit (`/come-visit`)

**Rock Page:** New page under External Homepage
**Layout:** FullWidth

| Zone | Block Type | Content |
|------|-----------|---------|
| Feature | HTML Content | Hero banner with "Plan Your Visit" CTA |
| Section A | HTML Content | Welcome video embed, plan your visit explainer |
| Section A | HTML Content | Service times cards (Sun/Wed/Online/Hispana) |

Service times could alternatively be **Global Attributes** so they're editable from one place and reused in the footer, homepage, etc. The Lava in the HTML Content block would reference `{{ 'Global' | Attribute:'ServiceTimes' }}`.

---

### Page: Messages (`/watch-read/messages`)

**Rock Page:** New page (or under a Watch/Read parent)
**Layout:** FullWidth

| Zone | Block Type | Content |
|------|-----------|---------|
| Feature | HTML Content | Hero banner: "MESSAGES" |
| Section A | HTML Content | Subsplash embed iframe (using Rock's `embed-responsive` BS3 classes) |

If you eventually move sermon hosting to Rock's content channels, replace the embed with a **Content Channel Dynamic** block.

---

### Page: Core Classes (`/get-involved/core-classes`)

**Rock Page:** Under Get Involved parent
**Layout:** FullWidth

| Zone | Block Type | Content |
|------|-----------|---------|
| Feature | HTML Content | Hero banner: "CORE CLASSES" |
| Section A | HTML Content | All class descriptions (Square One, Rooted, Bible studies, etc.) |

This is detailed descriptive content — keep as HTML Content. If classes are managed through Rock's Event Registration, link buttons to those registration pages.

---

### Page: Serve (`/get-involved/serve`)

**Rock Page:** Under Get Involved parent
**Layout:** FullWidth

| Zone | Block Type | Content |
|------|-----------|---------|
| Feature | HTML Content | Hero banner: "SERVE" |
| Section A | HTML Content | "Why Serve" section |
| Section A | HTML Content or **Content Channel Dynamic** | "Where to Serve" cards (On Campus, Local, Global) |

If serve opportunities change frequently, use a Content Channel. If they're stable categories, HTML Content is simpler.

---

### Page: Request Prayer (`/request-prayer`)

**Rock Page:** Top-level or under About Us
**Layout:** FullWidth

| Zone | Block Type | Content |
|------|-----------|---------|
| Feature | HTML Content | Hero banner with prayer image |
| Section A | HTML Content | Intro text, prayer info |
| Section A | **Prayer Request Entry** block | Rock's built-in prayer request block (replaces the CTA link) |

Use Rock's native Prayer Request system — this is one of Rock's strongest features.

---

### Pages: Children, Middle School, High School

**Rock Pages:** Under a "For My Family" parent
**Layout:** FullWidth

| Zone | Block Type | Content |
|------|-----------|---------|
| Feature | HTML Content | Hero banner with ministry-specific image |
| Section A | HTML Content | All ministry description sections (programs, schedules, etc.) |

These are descriptive ministry pages — HTML Content blocks. Link registration buttons to Rock Event Registration or Group Registration pages.

---

## 5. Content Channels to Create

### 5.1 Staff Members

**Purpose:** Powers the Meet the Team page
**Channel Type:** Custom "Staff Directory"

| Attribute | Type | Notes |
|-----------|------|-------|
| Title (built-in) | Text | Person's name |
| Content (built-in) | HTML | Bio/description |
| Role | Text | Job title (e.g., "Lead Pastor") |
| Photo | Image | Headshot |
| DisplayOrder | Integer | Sort order on page |
| Department | Defined Value | For filtering (Pastoral, Admin, etc.) |

**Lava Template:**
```html
<div class="row">
{% for item in Items %}
  <div class="col-md-4 col-sm-6">
    <div class="card text-center mb-4">
      {% if item | Attribute:'Photo' != '' %}
        <img src="{{ item | Attribute:'Photo','RawValue' | ImageUrl }}" 
             class="img-responsive" alt="{{ item.Title }}"
             style="width:150px;height:150px;object-fit:cover;border-radius:50%;margin:20px auto 0;">
      {% else %}
        <div style="width:150px;height:150px;border-radius:50%;background:#f0f0f0;margin:20px auto 0;"
             class="d-flex align-items-center justify-content-center">
          <i class="fa fa-user fa-3x" style="color:#ccc;"></i>
        </div>
      {% endif %}
      <div class="card-body p-4">
        <h5 class="fw-bold mb-1">{{ item.Title }}</h5>
        <p class="text-muted small">{{ item | Attribute:'Role' }}</p>
      </div>
    </div>
  </div>
{% endfor %}
</div>
```

### 5.2 Events/Promotions (Optional)

If you want the homepage "Coming Up" tiles managed in Rock rather than hard-coded:

**Channel Type:** Website Promotions (Rock ships this)

Use Rock's built-in Website Ads or a custom promotion channel. The Lava template would render 4 cards in a row.

---

## 6. Site-Level Blocks (Configure Once)

These blocks are added at the **master/site** level (not page level), so they appear on every page:

### Header (Site.Master zone)
```html
<a href="/">
  <img style="width: 120px;" src="/Content/ExternalSite/Media/cfc-logo-light.png" 
       alt="Christian Fellowship Church logo">
</a>
```

### Navigation (Site.Master zone)
Use the **Page Menu** block. Configure its Lava template to render a `<ul class="nav navbar-nav">` with your pages.

### Footer (Site.Master zone)
One large HTML Content block with the full footer markup (converted to BS3), or split into multiple blocks for maintainability. Using a **Context Name** like "website-footer" allows editing from any page.

### Announcement Banner
This doesn't fit in a standard zone. Options:
1. Add it to `Site.Master` directly (requires theme file edit)
2. Include it as part of the `Header` or `Navigation` block's HTML
3. Use a Lava Shortcode that can be placed in the Page Header Content field

Recommended: **Option 1** — add it to the layout file. It's structural.

---

## 7. Custom Layout Considerations

The homepage layout includes a feature placeholder for the `WelcomeVideo` zone and a full-width `MainContent` zone. The homepage hero payload owns its inner `.container`, matching the original static structure:

```html
<div class="hero-section ...">
  <div class="container ...">
    ...hero content...
  </div>
</div>
```

The homepage uses one full-width `MainContent` zone. Each generated homepage section payload owns its inner `.container`, so section backgrounds can span the viewport while content remains aligned.

Standard content-page payloads continue to avoid nested `.container` wrappers. The theme applies the content width, grid, media/text row, and card image behavior to imported body sections through `.block-content > .py-5`, so Rock's Bootstrap 3 fixed container and floated-column behavior does not reappear on smaller desktop and tablet widths.

---

## 8. Migration Steps (Execution Order)

### Phase 1: Theme Setup
1. Add custom utility CSS classes to `theme.less` (the BS5 parity utilities from Section 3)
2. Add CFC brand colors, typography, and custom component styles to `theme.less`
3. Compile and test on a staging page

### Phase 2: Site-Level Blocks  
4. Import site-level block payloads from `rock-theme/CFCWired/SiteBlocks/`.
5. Update the logo HTML Content block in `Header`.
6. Configure the Page Menu block in `Navigation` with the Lava template from `rock-theme/CFCWired/Assets/Lava/page-menu.lava`.
7. Create the footer HTML Content block in `Footer` and set Context Name `external-site-footer`.

The operational checklist for the full import is `rock-theme/CFCWired/IMPORT_CHECKLIST.md`. Use `rock-theme/CFCWired/PAGE_IMPORT_MANIFEST.md` as the page creation and block payload worksheet.

### Phase 3: Content Channels
8. Create "Staff Directory" Content Channel Type and Channel
9. Enter all 27 staff members
10. Create the Lava template for the staff grid

### Phase 4: Pages (one at a time)
11. Create pages in the order listed in `rock-theme/CFCWired/PAGE_IMPORT_MANIFEST.md`.
12. Import page payloads from `rock-theme/CFCWired/PageContent/`. Each package contains `feature.html`, `main.html`, and `notes.md`.
13. Paste hero markup into the `Feature` HTML Content block, except homepage hero markup which goes in `WelcomeVideo`.
14. Paste body content into the `MainContent` block listed in the manifest and each package's `notes.md`.
15. Repeat for each page in order of complexity:
    - Statement of Faith (simplest — just text)
    - About Us
    - Come Visit
    - Find Community
    - Core Classes
    - Serve
    - Request Prayer (uses Prayer Request block)
    - Children / Middle School / High School
    - Messages
    - Contact Us (uses Workflow form)
    - Meet the Team (uses Content Channel)
    - Homepage (most complex — hero video, event tiles)

### Phase 5: Rock-Native Features
16. Use `rock-theme/CFCWired/NativeBlocks/` as the implementation spec source for native replacements.
17. Wire up Prayer Request Entry block on Request Prayer page.
18. Create Contact Us workflow and Workflow Entry block.
19. Replace Meet the Team with Staff Members content channel and `staff-grid.lava`.
20. Configure the homepage Coming Up Calendar Item Occurrence List by Audience Lava block.
21. Set up Group Finder on Find Community page, if desired.

### Phase 6: QA & Launch
22. Run `rock-theme/CFCWired/QA_PAGE_SCRIPT.md` and capture pass/fail per page.
23. Verify admin toolbar and block editing work
24. Test page caching settings
25. Apply `rock-theme/CFCWired/REDIRECT_MATRIX.md` and verify 301 behavior.
26. Update DNS / site configuration to point to Rock-hosted pages

---

## 9. Files to Convert

For each static HTML page, you'll extract the content sections (everything between header and footer) and convert to BS3. The converted markup goes into Rock HTML Content blocks.

| Source File | Rock Page | Priority |
|-------------|-----------|----------|
| `src/about-us/statement-of-faith.html` | /about-us/statement-of-faith | 1 (simplest) |
| `src/about-us/index.html` | /about-us | 2 |
| `src/come-visit/index.html` | /come-visit | 3 |
| `src/about-us/find-community.html` | /about-us/find-community | 4 |
| `src/get-involved/core-classes.html` | /core-classes | 5 |
| `src/get-involved/serve.html` | /serve | 6 |
| `src/request-prayer.html` | /request-prayer | 7 |
| `src/for-my-family/children.html` | /for-my-family/children | 8 |
| `src/for-my-family/middle-school.html` | /for-my-family/middle-school | 9 |
| `src/for-my-family/high-school.html` | /for-my-family/high-school | 10 |
| `src/watch-read/messages.html` | /messages | 11 |
| `src/about-us/contact-us.html` | /contact-us | 12 |
| `src/about-us/meet-the-team.html` | /meet-the-team | 13 |
| `src/index.html` | / (homepage) | 14 (most complex) |

---

## 10. What You Can Drop

These parts of the static site are unnecessary in Rock:

| Static Site Component | Rock Replacement |
|----------------------|------------------|
| `includes/header.html` | `Site.Master` provides header shell; `Header` and `Navigation` provide content |
| `includes/footer.html` | `Footer` HTML Content block (site-level) |
| `includes/head.html` | Layout provides `<head>` with Rock's CSS/JS |
| `js/site.js` (nav normalization, title mapping, announcement dismiss) | Rock handles nav via Page Menu block, titles via page properties |
| Bootstrap 5 CDN link | Rock includes BS3 via theme |
| Bootstrap Icons CDN | Font Awesome is included by Rock |
| Google Fonts link | Add to theme's layout `<head>` or Page Header Content |
| `css/styles.css` | Converted styles are localized as `rock-theme/CFCWired/Styles/_cfc-site.less` and imported by `theme.less` |

### What to Keep / Port
| Keep | Where It Goes |
|------|---------------|
| Brand colors from `variables.less` | Theme `_variables.less` |
| Custom component styles from `styles.less` | Theme `_cfc-site.less` imported by `theme.less` |
| Page hero styling | Theme `_cfc-site.less` imported by `theme.less` |
| Google Fonts (Poppins) | Theme layout `<head>` or `theme.less` `@import` |
| Images | Upload to Rock's `/Content/ExternalSite/Media/` |
