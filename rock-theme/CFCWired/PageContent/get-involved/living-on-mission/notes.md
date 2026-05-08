# Living on Mission Import Notes

Source page: `src/get-involved/living-on-mission.html`

## Rock Page

- Page name: Living on Mission
- Suggested route: `/get-involved/living-on-mission`
- Layout: `Homepage.aspx`
- Browser title: `Living on Mission - Christian Fellowship Church`
- Meta description: `Living on Mission at Christian Fellowship Church.`

## Blocks

| Zone | Block Type | File | Notes |
|------|------------|------|-------|
| `WelcomeVideo` | HTML Content | `feature.html` | Hero block only. The homepage payload includes its own inner `.container` because the homepage layout leaves this zone full-width. |
| `MainContent` | HTML Content | `intro.html` | "I Love My Neighborhood" intro copy. HTML Content block. |
| `MainContent` | Content Channel View | — | "How to Live on Mission" stories grid. Bind to the "Living on Mission Stories" content channel and use `NativeBlocks/living-on-mission-stories.lava` as the Lava template — the Lava renders the entire section, no static HTML payload is produced. |
| `MainContent` | HTML Content | `cta.html` | "Get Involved" CTA. HTML Content block. |

## Import Steps

1. Create or open the Rock page at `/get-involved/living-on-mission`.
2. Set the layout to `Homepage.aspx`.
3. Paste `feature.html` into an HTML Content block in the `WelcomeVideo` zone.
4. Paste `intro.html` into an HTML Content block in the `MainContent` zone.
5. Add a Content Channel View block in the `MainContent` zone and paste `rock-theme/CFCWired/NativeBlocks/living-on-mission-stories.lava` as the block's Lava template. (No HTML payload is produced for this block; the Lava renders the section.)
6. Paste `cta.html` into an HTML Content block in the `MainContent` zone.
7. Verify image paths, links, page title/breadcrumb placement, mobile layout, and admin edit controls in Rock.

## Page-Specific Note

Living on Mission uses three body blocks: an HTML intro, a Content Channel View for the stories grid, and an HTML CTA. See `NativeBlocks/living-on-mission-stories.md` for the Content Channel View configuration.

## Excluded Static Markup

The static page header, nav, footer, CDN links, and `site.js` script are intentionally excluded. Rock supplies these through `Site.Master`, the site-level zones, and the theme CSS.
