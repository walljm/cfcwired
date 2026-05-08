# Living on Mission Story Import Notes

Source page: `src/community/welcome-new-neighbor.html`

## Rock Page

- Page name: Living on Mission Story
- Suggested route: `/community/{Item}`
- Layout: `Homepage.aspx`
- Browser title: `Living on Mission Story - Christian Fellowship Church`
- Meta description: `A Living on Mission story from Christian Fellowship Church.`

## Blocks

| Zone | Block Type | File | Notes |
|------|------------|------|-------|
| `WelcomeVideo` | HTML Content | `feature.html` | Hero block only. Do not include page header, nav, footer, scripts, or nested `.container`. |
| `MainContent` | HTML Content | `main.html` | Page body content extracted from the converted static page. |

## Import Steps

1. Create or open the Rock page at `/community/{Item}`.
2. Set the layout to `Homepage.aspx`.
3. Paste `feature.html` into an HTML Content block in the `WelcomeVideo` zone.
4. Paste `main.html` into an HTML Content block in the `MainContent` zone.
5. Verify image paths, links, page title/breadcrumb placement, mobile layout, and admin edit controls in Rock.

## Rock-Native Follow-Up

Replace the static page payload with a Content Channel Item View block bound to the "Living on Mission Stories" channel using `NativeBlocks/living-on-mission-story-detail.lava`. The route segment `{Item}` resolves by `StorySlug` first, then item id. See `NativeBlocks/living-on-mission-stories.md` (Detail Page section). The static HTML is one example for visual parity preview only; Rock renders all stories from the channel.

## Excluded Static Markup

The static page header, nav, footer, CDN links, and `site.js` script are intentionally excluded. Rock supplies these through `Site.Master`, the site-level zones, and the theme CSS.
