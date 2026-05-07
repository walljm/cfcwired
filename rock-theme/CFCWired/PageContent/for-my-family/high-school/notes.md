# High School Import Notes

Source page: `src/for-my-family/high-school.html`

## Rock Page

- Page name: High School
- Suggested route: `/for-my-family/high-school`
- Layout: `FullWidth.aspx`
- Browser title: `High School - Christian Fellowship Church`
- Meta description: `High school ministry at Christian Fellowship Church.`

## Blocks

| Zone | Block Type | File | Notes |
|------|------------|------|-------|
| `Feature` | HTML Content | `feature.html` | Hero block only. Do not include page header, nav, footer, scripts, or nested `.container`. |
| `MainContent` | HTML Content | `main.html` | Page body content extracted from the converted static page. |

## Import Steps

1. Create or open the Rock page at `/for-my-family/high-school`.
2. Set the layout to `FullWidth.aspx`.
3. Paste `feature.html` into an HTML Content block in the `Feature` zone.
4. Paste `main.html` into an HTML Content block in the `MainContent` zone.
5. Verify image paths, links, page title/breadcrumb placement, mobile layout, and admin edit controls in Rock.

## Excluded Static Markup

The static page header, nav, footer, CDN links, and `site.js` script are intentionally excluded. Rock supplies these through `Site.Master`, the site-level zones, and the theme CSS.
