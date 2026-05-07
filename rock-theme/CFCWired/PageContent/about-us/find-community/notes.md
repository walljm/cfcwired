# Find Community Import Notes

Source page: `src/about-us/find-community.html`

## Rock Page

- Page name: Find Community
- Suggested route: `/about-us/find-community`
- Layout: `FullWidth.aspx`
- Browser title: `Find Community - Christian Fellowship Church`
- Meta description: `Find community through groups and connection opportunities at Christian Fellowship Church.`

## Blocks

| Zone | Block Type | File | Notes |
|------|------------|------|-------|
| `Feature` | HTML Content | `feature.html` | Hero block only. Do not include page header, nav, footer, scripts, or nested `.container`. |
| `Main` | HTML Content | `main.html` | Page body content extracted from the converted static page. |

## Import Steps

1. Create or open the Rock page at `/about-us/find-community`.
2. Set the layout to `FullWidth.aspx`.
3. Paste `feature.html` into an HTML Content block in the `Feature` zone.
4. Paste `main.html` into an HTML Content block in the `Main` zone.
5. Verify image paths, links, page title/breadcrumb placement, mobile layout, and admin edit controls in Rock.

## Rock-Native Follow-Up

Consider replacing the group CTA with Rock Group Finder after the static import is verified.

## Excluded Static Markup

The static page header, nav, footer, CDN links, and `site.js` script are intentionally excluded. Rock supplies these through `Site.Master`, the site-level zones, and the theme CSS.
