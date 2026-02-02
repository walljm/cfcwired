# AI Agent Guidelines

> **Project status:** [TODO.md](docs/TODO.md) for progress tracking and remaining work
> **Design specs:** [DESIGN_SPECIFICATIONS.md](docs/DESIGN_SPECIFICATIONS.md) for content and layouts
> **Project setup:** [README.md](README.md) for development commands

---

## Project Purpose

This is a **static HTML/CSS recreation** of [www.cfcwired.org](https://www.cfcwired.org) designed to be imported into **Rock RMS**. The site must be:

- Visually faithful to the original
- Clean and maintainable
- Easy to convert to Lava templates

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Bootstrap | 5.3.3 | UI framework (via CDN) |
| Bootstrap Icons | 1.11.3 | Icon library |
| LESS | 4.2.x | CSS preprocessing |
| Node.js | 18+ | Build tooling |

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
- Follow Bootstrap 5 conventions for classes and components
- Maintain accessibility (ARIA labels, proper heading hierarchy)

## CSS/LESS Standards

### Bootstrap First

Always check if Bootstrap already provides what you need:

```html
<!-- GOOD: Using Bootstrap utilities -->
<div class="py-5 bg-primary text-white text-center">

<!-- BAD: Custom CSS for what Bootstrap already does -->
<div class="custom-section custom-padding custom-bg custom-text">
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

## Build Commands

```bash
npm install          # Install dependencies
npm run build:css    # Compile LESS to CSS
npm run watch:css    # Watch and auto-compile
npx serve src        # Local dev server
```

## Page Development Workflow

1. **Read the specs** - Check [DESIGN_SPECIFICATIONS.md](docs/DESIGN_SPECIFICATIONS.md) for the page content
2. **Copy a similar page** - Don't start from scratch, copy an existing page as a template
3. **Use includes** - Header/footer are in `includes/` directory
4. **Check your work** - Run locally with `npx serve .`
5. **Compile CSS** - Run `npm run build:css` after any LESS changes

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

## Terminal Commands

**Never use heredoc syntax** (`<< EOF` or `<<-EOF`) - it doesn't work reliably in this environment.

Use:
- `create_file` tool for creating files with content
- `echo "content" > file` for simple writes
- Chain `echo` commands with `>>` for appending

## Resources

- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [LESS Documentation](https://lesscss.org/)
- [RockRMS Developer Docs](https://www.rockrms.com/Rock/Developer)
