# Statement of Faith Import Notes

Source page: `src/about-us/statement-of-faith.html`

## Rock Page

- Page name: Statement of Faith
- Suggested route: `/about-us/statement-of-faith`
- Layout: `FullWidth.aspx`
- Browser title: `Statement of Faith - Christian Fellowship Church`
- Meta description: `Statement of Faith - Christian Fellowship Church's core beliefs and doctrinal statements`

## Blocks

| Zone | Block Type | File | Notes |
|------|------------|------|-------|
| `Feature` | HTML Content | `feature.html` | Hero block only. Do not include page header, nav, footer, scripts, or nested `.container`. |
| `Main` | HTML Content | `main.html` | Primary page content. Uses the layout's existing container and a BS3 centered column. |

## Import Steps

1. Create or open the Rock page under About Us.
2. Set the layout to `FullWidth.aspx`.
3. Paste `feature.html` into an HTML Content block in the `Feature` zone.
4. Paste `main.html` into an HTML Content block in the `Main` zone.
5. Confirm the page title and breadcrumbs are acceptable above the hero. If not, move the hero content into `Section A` or use a custom no-title layout.
6. Verify the `Articles of Faith` link target is still correct after launch.

## Excluded Static Markup

The static page header, nav, footer, CDN links, and `site.js` script are intentionally excluded. Rock supplies these through `Site.Master`, the site-level zones, and the theme CSS.
