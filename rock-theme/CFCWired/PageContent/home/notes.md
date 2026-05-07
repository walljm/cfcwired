# Homepage Import Notes

Source page: `src/index.html`

## Rock Page

- Page name: Homepage
- Suggested route: `/`
- Layout: `Homepage.aspx`
- Browser title: `Christian Fellowship Church`
- Meta description: `Christian Fellowship Church - A Spirit-directed church discipling people to know Jesus as Lord`

## Blocks

| Zone | Block Type | File | Notes |
|------|------------|------|-------|
| `Feature` | HTML Content | `feature.html` | Hero block only. The homepage payload includes its own inner `.container` because the homepage layout leaves this zone full-width. |
| `Sub Feature` | HTML Content | `main.html` | Homepage body sections include their own `.container` wrappers so section backgrounds can span the viewport. |

## Import Steps

1. Create or open the Rock page at `/`.
2. Set the layout to `Homepage.aspx`.
3. Paste `feature.html` into an HTML Content block in the `Feature` zone.
4. Paste `main.html` into an HTML Content block in the `Sub Feature` zone.
5. Verify image paths, links, page title/breadcrumb placement, mobile layout, and admin edit controls in Rock.

## Page-Specific Note

Homepage uses the Homepage.aspx layout. Put the hero in Feature and the remaining sections in Sub Feature.

## Excluded Static Markup

The static page header, nav, footer, CDN links, and `site.js` script are intentionally excluded. Rock supplies these through `Site.Master`, the site-level zones, and the theme CSS.
