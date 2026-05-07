# Request Prayer Import Notes

Source page: `src/request-prayer.html`

## Rock Page

- Page name: Request Prayer
- Suggested route: `/request-prayer`
- Layout: `FullWidth.aspx`
- Browser title: `Request Prayer - Christian Fellowship Church`
- Meta description: `Request prayer from Christian Fellowship Church.`

## Blocks

| Zone | Block Type | File | Notes |
|------|------------|------|-------|
| `Feature` | HTML Content | `feature.html` | Hero block only. Do not include page header, nav, footer, scripts, or nested `.container`. |
| `MainContent` | HTML Content | `main.html` | Page body content extracted from the converted static page. |

## Import Steps

1. Create or open the Rock page at `/request-prayer`.
2. Set the layout to `FullWidth.aspx`.
3. Paste `feature.html` into an HTML Content block in the `Feature` zone.
4. Paste `main.html` into an HTML Content block in the `MainContent` zone.
5. Verify image paths, links, page title/breadcrumb placement, mobile layout, and admin edit controls in Rock.

## Rock-Native Follow-Up

Replace the static prayer CTA with Rock Prayer Request Entry after the content import is verified.

## Excluded Static Markup

The static page header, nav, footer, CDN links, and `site.js` script are intentionally excluded. Rock supplies these through `Site.Master`, the site-level zones, and the theme CSS.
