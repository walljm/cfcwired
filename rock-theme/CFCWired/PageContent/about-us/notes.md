# About Us Import Notes

Source page: `src/about-us/index.html`

## Rock Page

- Page name: About Us
- Suggested route: `/about-us`
- Layout: `Homepage.aspx`
- Browser title: `About Us - Christian Fellowship Church`
- Meta description: `Learn about Christian Fellowship Church, our mission, vision, values, and story.`

## Blocks

| Zone | Block Type | File | Notes |
|------|------------|------|-------|
| `WelcomeVideo` | HTML Content | `feature.html` | Hero block only. The homepage payload includes its own inner `.container` because the homepage layout leaves this zone full-width. |
| `MainContent` | HTML Content | `main.html` | Homepage body sections include their own `.container` wrappers so section backgrounds can span the viewport. |

## Import Steps

1. Create or open the Rock page at `/about-us`.
2. Set the layout to `Homepage.aspx`.
3. Paste `feature.html` into an HTML Content block in the `WelcomeVideo` zone.
4. Paste `main.html` into an HTML Content block in the `MainContent` zone.
5. Verify image paths, links, page title/breadcrumb placement, mobile layout, and admin edit controls in Rock.

## Excluded Static Markup

The static page header, nav, footer, CDN links, and `site.js` script are intentionally excluded. Rock supplies these through `Site.Master`, the site-level zones, and the theme CSS.
