# AI Agent Guidelines

> **Design specs:** [DESIGN_SPECIFICATIONS.md](docs/DESIGN_SPECIFICATIONS.md) for page content and target layouts
> **Project setup:** [README.md](README.md) for development commands

---

## Project Purpose

This is a **static HTML/CSS recreation** of [www.cfcwired.org](https://www.cfcwired.org) designed to be imported into **Rock RMS**. The site must be:

- Visually faithful to the original
- Clean and maintainable
- Easy to convert to Lava templates

The public comparator is `https://cfcwired.org/`. The Rock staging/rendered site is `https://rock.cfcwired.org/`. Always verify against the rendered Rock page when fixing visual issues.

## Rock Staging Route Map

Use these paths when comparing rendered pages. Public base URL: `https://cfcwired.org`. Rock base URL: `https://rock.cfcwired.org`.

| Page               | Public Path                        | Rock Staging Path                 | Current Local Source                                                                                          |
| ------------------ | ---------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Home               | `/`                                | `/page/1018`                      | `src/index.html`                                                                                              |
| About Us           | `/about-us/`                       | `/about-us`                       | `src/about-us/index.html`                                                                                     |
| Statement of Faith | `/about-us/statement-of-faith/`    | `/about-us/statement-of-faith`    | `src/about-us/statement-of-faith.html`                                                                        |
| Meet the Team      | `/about-us/meet-the-team/`         | `/about-us/meet-the-team/`        | `src/about-us/meet-the-team.html`                                                                             |
| Contact Us         | `/about-us/contact-us/`            | `/about-us/contact-us/`           | `src/about-us/contact-us.html`                                                                                |
| Come Visit         | `/come-visit/`                     | `/come-visit`                     | `src/come-visit/index.html`                                                                                   |
| For My Family      | `/for-my-family/`                  | `/for-my-family`                  | no generated static payload yet                                                                               |
| Children           | `/for-my-family/children/`         | `/for-my-family/children/`        | `src/for-my-family/children.html`                                                                             |
| High School        | `/for-my-family/high-school/`      | `/for-my-family/high-school`      | `src/for-my-family/high-school.html`                                                                          |
| Middle School      | `/for-my-family/middle-school/`    | `/for-my-family/middle-school`    | `src/for-my-family/middle-school.html`                                                                        |
| Request Prayer     | `/request-prayer/`                 | `/request-prayer`                 | `src/request-prayer.html`                                                                                     |
| Get Involved       | `/get-involved/`                   | `/get-involved`                   | no generated static payload yet                                                                               |
| Take a Class       | `/get-involved/take-a-class/`      | `/get-involved/take-a-class/`     | likely maps to `src/get-involved/core-classes.html`; generator currently outputs `/get-involved/core-classes` |
| Global Outreach    | `/get-involved/global/`            | `/get-involved/global-outreach/`  | `src/get-involved/global-outreach.html`                                                                       |
| Serve              | `/get-involved/serve/`             | `/get-involved/serve`             | `src/get-involved/serve.html`                                                                                 |
| Care               | `/get-involved/care/`              | `/get-involved/care`              | no generated static payload yet                                                                               |
| Local Outreach     | `/get-involved/local-outreach/`    | `/get-involved/local-outreach/`   | `src/get-involved/local-outreach.html`                                                                        |
| Living on Mission  | `/get-involved/living-on-mission/` | `/get-involved/living-on-mission` | `src/get-involved/living-on-mission.html`                                                                     |
| Messages           | `/messages/`                       | `/messages`                       | likely maps to `src/watch-read/messages.html`; generator currently outputs `/watch-read/messages`             |

When a staging path differs from the generator route, inspect the Rock page directly before changing source routing. The live Rock route is the source of truth for visual QA.

## Tech Stack

| Technology   | Version   | Purpose                         |
| ------------ | --------- | ------------------------------- |
| Rock RMS     | 1.16.11.1 | Rendered staging/runtime target |
| Bootstrap    | 3.4.1     | Rock-rendered grid/components   |
| Font Awesome | 4.7.0     | Rock/static icon font           |
| jQuery       | 3.5.1     | Rock/static JavaScript runtime  |
| LESS         | 4.2.x     | CSS preprocessing               |
| Node.js      | 18+       | Build tooling                   |

Base frontend dependency assumptions on what Rock RMS `1.16.11.1` ships or expects. Static pages can look correct while Rock renders incorrectly because Rock wraps block output and applies Bootstrap 3 row/floating styles.

## Common Workflows

### Visual Parity Fixes

1. Open the public page and matching Rock page.
2. Check at multiple widths: desktop, tablet, narrow tablet, and mobile. Use widths around `1440`, `1024`, `768`, and `390` unless the bug calls for others.
3. Compare actual rendered dimensions: hero height, section width, row width, image rects, spacing, and horizontal overflow.
4. Inspect the Rock DOM before editing. HTML Content blocks may render as `main .zone-instance .block-content > div > .py-5`, not as direct `.py-5` children.
5. Patch source LESS or generated page content, then verify again in Rock at the same widths.

### CSS Changes

1. Edit `src/less/*.less` for the static site and `rock-theme/CFCWired/Styles/_cfc-site.less` for Rock theme styling.
2. Never edit `src/css/styles.css` directly; regenerate it with `npm run build:css`.
3. After Rock LESS changes, run `npx lessc rock-theme/CFCWired/Styles/_cfc-site.less >/dev/null`.
4. If a fix only works after browser-injected CSS, make sure the same selector exists permanently in Rock LESS.

### Rock Page Packaging

1. Use `scripts/package-rock-page-content.mjs` for generated Rock page payloads under `rock-theme/CFCWired/PageContent/`.
2. Non-home public content pages that need the hero/feature zone should use `Homepage.aspx`, `WelcomeVideo`, and `MainContent`.
3. Keep page payload HTML clean and block-friendly; avoid inline styles and unnecessary wrappers.
4. Normalize imported image paths to `/Content/ExternalSite/Images/...`.
5. Do not spend time updating import docs or removed documentation unless the user explicitly asks for docs.

## HTML Standards

### Keep It Clean

```html
<!-- GOOD: Flat, semantic, readable -->
<section class="py-5 bg-light">
  <div class="container">
    <h2 class="text-center mb-4">Section Title</h2>
    <p class="lead text-center">Description text here.</p>
  </div>
</section>

<!-- BAD: Over-nested, unnecessary wrappers -->
<section>
  <div class="section-wrapper">
    <div class="section-inner">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="title-wrapper">
              <h2>Section Title</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Guidelines

- Use semantic HTML5 elements (`section`, `article`, `nav`, `header`, `footer`)
- Minimize nesting - if a wrapper div isn't needed, don't add it
- Use Bootstrap's grid only when you need columns
- Follow Bootstrap 3 conventions for grid and components, then verify actual behavior in Rock
- Maintain accessibility (ARIA labels, proper heading hierarchy)

## Decision Tables

| Task               | Edit                                                           | Verify                                                                          |
| ------------------ | -------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Static page markup | `src/**/*.html`                                                | Browser at multiple widths                                                      |
| Static styling     | `src/less/*.less`                                              | `npm run build:css`                                                             |
| Rock theme styling | `rock-theme/CFCWired/Styles/_cfc-site.less`                    | `npx lessc rock-theme/CFCWired/Styles/_cfc-site.less >/dev/null`                |
| Rock page payload  | `src/**/*.html` and/or `scripts/package-rock-page-content.mjs` | `node --check scripts/package-rock-page-content.mjs`, then regenerate if needed |

| Rock Layout Need                      | Use                                                 | Do Not Use                    |
| ------------------------------------- | --------------------------------------------------- | ----------------------------- |
| Public page with hero/feature content | `Homepage.aspx` with `WelcomeVideo` + `MainContent` | `FullWidth.aspx`              |
| Main body content only                | `MainContent` zone                                  | Ad hoc feature block names    |
| Homepage events                       | Lava template generated for Rock                    | Static event text assumptions |

## CSS/LESS Standards

### Bootstrap/Rock First

Always check whether Bootstrap 3 or an existing project class already provides what you need:

```html
<!-- GOOD: Using Bootstrap 3 grid/components -->
<div class="row">
  <div class="col-sm-6">
    <h2>Section Title</h2>
  </div>
</div>

<!-- BAD: Custom grid for what Bootstrap/Rock already does -->
<div class="custom-two-column-layout">
```

### When to Write Custom CSS

Only write custom LESS when:
1. Bootstrap doesn't have a utility for it
2. You need a reusable component pattern
3. You're defining brand-specific values (colors, fonts)

### File Structure

```
src/
├── less/
│   ├── styles.less      # Main file - imports others
│   ├── variables.less   # Brand colors, typography, spacing
│   └── mixins.less      # Reusable patterns
├── css/
│   └── styles.css       # Compiled (don't edit)
├── images/
├── includes/            # Reusable HTML fragments
└── [page folders & html files]
```

**Always edit LESS files, never `src/css/styles.css` directly.**

### Avoid Duplication

Before adding a new class, check:
1. Does Bootstrap have a utility for this?
2. Did we already define this in `variables.less`?
3. Is there a similar class in `styles.less` we can reuse?

### Rock Wrapper Selectors

When styling imported page sections in Rock, include both direct and update-panel-wrapped paths where appropriate:

```less
main .zone-instance .block-content > .py-5,
main .zone-instance .block-content > div > .py-5 {
  // section rules
}
```

Rock's Bootstrap 3 row behavior can interfere with modern grid/flex layouts. For imported content sections, reset row floats and pseudo-elements in the Rock stylesheet before applying CSS grid.

## Build Commands

```bash
npm install          # Install dependencies
npm run build:css    # Compile LESS to CSS
npm run watch:css    # Watch and auto-compile
npx serve src        # Local dev server
```

## Page Development Workflow

1. **Read the specs** - Check [DESIGN_SPECIFICATIONS.md](docs/DESIGN_SPECIFICATIONS.md) for page content when needed
2. **Copy a similar page** - Don't start from scratch, copy an existing page as a template
3. **Use includes** - Header/footer are in `includes/` directory
4. **Check locally** - Run locally with `npx serve src` for static work
5. **Check Rock** - Compare the matching Rock URL to the public page at multiple widths
6. **Compile CSS** - Run `npm run build:css` after any static LESS changes

## Common Patterns

### Hero Sections

```html
<section class="hero-section py-5">
  <div class="container text-center text-white">
    <h1 class="display-4 fw-bold mb-3">PAGE TITLE</h1>
    <p class="lead mb-4">Optional tagline or description.</p>
    <a href="#" class="btn btn-primary btn-lg">Call to Action</a>
  </div>
</section>
```

### Content Sections

```html
<section class="py-5">
  <div class="container">
    <h2 class="text-center mb-4">Section Heading</h2>
    <!-- Content here -->
  </div>
</section>
```

### Card Grids

```html
<div class="row g-4">
  <div class="col-md-4">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Title</h5>
        <p class="card-text">Description</p>
      </div>
    </div>
  </div>
  <!-- More cards -->
</div>
```

## RockRMS Integration Notes

When this code is imported into Rock RMS:
- HTML will be converted to Lava templates
- CSS should work with Rock's theme system
- Avoid inline styles - use classes for Rock's content blocks
- Forms will be replaced with Rock workflow forms
- Rock may wrap block output in an extra `div`; inspect live DOM before assuming selectors match source HTML
- Some images are linked correctly but hidden by sizing/layout rules; check computed rects and natural image sizes before changing paths
- Width, spacing, and image behavior must expand/contract smoothly between desktop and mobile

## Terminal Commands

**Never use heredoc syntax** (`<< EOF` or `<<-EOF`) - it doesn't work reliably in this environment.

Use:
- `create_file` tool for creating files with content
- `apply_patch` for editing existing files
- shell commands only for running commands, builds, searches, and checks
