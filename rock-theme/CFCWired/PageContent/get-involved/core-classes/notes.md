# Core Classes Import Notes

Source page: `src/get-involved/core-classes.html`

## Rock Page

- Page name: Core Classes
- Suggested route: `/get-involved/core-classes`
- Layout: `FullWidth.aspx`
- Browser title: `Core Classes - Christian Fellowship Church`
- Meta description: `Core classes and spiritual formation opportunities at Christian Fellowship Church.`

## Blocks

| Zone | Block Type | File | Notes |
|------|------------|------|-------|
| `Feature` | HTML Content | `feature.html` | Hero block only. Do not include page header, nav, footer, scripts, or nested `.container`. |
| `MainContent` | HTML Content | `main.html` | Page body content extracted from the converted static page. |

## Import Steps

1. Create or open the Rock page at `/get-involved/core-classes`.
2. Set the layout to `FullWidth.aspx`.
3. Paste `feature.html` into an HTML Content block in the `Feature` zone.
4. Paste `main.html` into an HTML Content block in the `MainContent` zone.
5. Verify image paths, links, page title/breadcrumb placement, mobile layout, and admin edit controls in Rock.

## Rock-Native Follow-Up

If class registration is managed in Rock, replace static CTAs with Rock event or registration links.

## Excluded Static Markup

The static page header, nav, footer, CDN links, and `site.js` script are intentionally excluded. Rock supplies these through `Site.Master`, the site-level zones, and the theme CSS.
