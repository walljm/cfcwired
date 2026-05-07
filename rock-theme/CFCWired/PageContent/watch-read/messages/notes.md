# Messages Import Notes

Source page: `src/watch-read/messages.html`

## Rock Page

- Page name: Messages
- Suggested route: `/watch-read/messages`
- Layout: `FullWidth.aspx`
- Browser title: `Messages - Christian Fellowship Church`
- Meta description: `Watch messages from Christian Fellowship Church.`

## Blocks

| Zone | Block Type | File | Notes |
|------|------------|------|-------|
| `Feature` | HTML Content | `feature.html` | Hero block only. Do not include page header, nav, footer, scripts, or nested `.container`. |
| `Main` | HTML Content | `main.html` | Page body content extracted from the converted static page. |

## Import Steps

1. Create or open the Rock page at `/watch-read/messages`.
2. Set the layout to `FullWidth.aspx`.
3. Paste `feature.html` into an HTML Content block in the `Feature` zone.
4. Paste `main.html` into an HTML Content block in the `Main` zone.
5. Verify image paths, links, page title/breadcrumb placement, mobile layout, and admin edit controls in Rock.

## Rock-Native Follow-Up

The static Subsplash embed can later be replaced by Rock media or a Content Channel Dynamic block.

## Excluded Static Markup

The static page header, nav, footer, CDN links, and `site.js` script are intentionally excluded. Rock supplies these through `Site.Master`, the site-level zones, and the theme CSS.
