# Glocal Stories Import Notes

Source page: `src/get-involved/global-outreach/glocal-stories.html`

## Rock Page

- Page name: Glocal Stories
- Suggested route: `/get-involved/global-outreach/glocal-stories`
- Layout: `Homepage.aspx`
- Browser title: `Glocal Stories - Christian Fellowship Church`
- Meta description: `Stories from CFC’s local and global outreach &mdash; better together, in close and far proximity.`

## Blocks

| Zone | Block Type | File | Notes |
|------|------------|------|-------|
| `WelcomeVideo` | HTML Content | `feature.html` | Hero block only. The homepage payload includes its own inner `.container` because the homepage layout leaves this zone full-width. |
| `MainContent` | HTML Content | `intro.html` | "Better Together" intro section. HTML Content block. |
| `MainContent` | Content Channel View | — | Glocal stories grid. Bind to the "Glocal Stories" content channel and use `NativeBlocks/glocal-stories.lava` as the Lava template — the Lava renders the entire section, no static HTML payload is produced. |

## Import Steps

1. Create or open the Rock page at `/get-involved/global-outreach/glocal-stories`.
2. Set the layout to `Homepage.aspx`.
3. Paste `feature.html` into an HTML Content block in the `WelcomeVideo` zone.
4. Paste `intro.html` into an HTML Content block in the `MainContent` zone.
5. Add a Content Channel View block in the `MainContent` zone and paste `rock-theme/CFCWired/NativeBlocks/glocal-stories.lava` as the block's Lava template. (No HTML payload is produced for this block; the Lava renders the section.)
6. Verify image paths, links, page title/breadcrumb placement, mobile layout, and admin edit controls in Rock.

## Excluded Static Markup

The static page header, nav, footer, CDN links, and `site.js` script are intentionally excluded. Rock supplies these through `Site.Master`, the site-level zones, and the theme CSS.
