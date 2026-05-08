# Local Partners Import Notes

Source page: `src/get-involved/local-outreach/partners.html`

## Rock Page

- Page name: Local Partners
- Suggested route: `/get-involved/local-outreach/partners`
- Layout: `Homepage.aspx`
- Browser title: `Local Partners - Christian Fellowship Church`
- Meta description: `Organizations CFC partners with for local outreach in our community.`

## Blocks

| Zone | Block Type | File | Notes |
|------|------------|------|-------|
| `WelcomeVideo` | HTML Content | `feature.html` | Hero block only. Do not include page header, nav, footer, scripts, or nested `.container`. |
| `MainContent` | HTML Content | `main.html` | Page body content extracted from the converted static page. |

## Import Steps

1. Create or open the Rock page at `/get-involved/local-outreach/partners`.
2. Set the layout to `Homepage.aspx`.
3. Paste `feature.html` into an HTML Content block in the `WelcomeVideo` zone.
4. Paste `main.html` into an HTML Content block in the `MainContent` zone.
5. Verify image paths, links, page title/breadcrumb placement, mobile layout, and admin edit controls in Rock.

## Excluded Static Markup

The static page header, nav, footer, CDN links, and `site.js` script are intentionally excluded. Rock supplies these through `Site.Master`, the site-level zones, and the theme CSS.
