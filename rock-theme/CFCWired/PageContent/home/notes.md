# Homepage Import Notes

Source page: `src/index.html`

## Rock Page

- Page name: Homepage
- Suggested route: `/`
- Layout: `Homepage.aspx`
- Browser title: `Christian Fellowship Church`
- Meta description: `Christian Fellowship Church - A Spirit-directed church discipling people to know Jesus as Lord`

## Blocks

| Zone | Block Type | File | Notes |
|------|------------|------|-------|
| `WelcomeVideo` | HTML Content | `feature.html` | Hero block only. The homepage payload includes its own inner `.container` because the homepage layout leaves this zone full-width. |
| `MainContent` | HTML Content | `vision.html` | Opening vision statement. |
| `MainContent` | HTML Content | `this-sunday.html` | This Sunday copy and weekly resource links. |
| `MainContent` | Calendar Item Occurrence List by Audience Lava | `coming-up.html` | Lava template for four audience-filtered EventItemOccurrences artwork tiles. |
| `MainContent` | HTML Content | `experience-cfc.html` | Experience CFC unframed columns. |
| `MainContent` | HTML Content | `discipleship-pathway.html` | Discipleship Pathway live-parity spacing and CTA. |

## Import Steps

1. Create or open the Rock page at `/`.
2. Set the layout to `Homepage.aspx`.
3. Paste `feature.html` into an HTML Content block in the `WelcomeVideo` zone.
4. Paste `vision.html` into an HTML Content block in the `MainContent` zone.
5. Paste `this-sunday.html` into an HTML Content block in the `MainContent` zone.
6. Add a Calendar Item Occurrence List by Audience Lava block in the `MainContent` zone and paste `coming-up.html` as the Lava template.
7. Paste `experience-cfc.html` into an HTML Content block in the `MainContent` zone.
8. Paste `discipleship-pathway.html` into an HTML Content block in the `MainContent` zone.
9. Verify image paths, links, page title/breadcrumb placement, mobile layout, and admin edit controls in Rock.

## Page-Specific Note

Homepage uses the Homepage.aspx layout. Put feature.html in the WelcomeVideo zone, then stack each body section payload in the MainContent zone in the order listed above.

## Excluded Static Markup

The static page header, nav, footer, CDN links, and `site.js` script are intentionally excluded. Rock supplies these through `Site.Master`, the site-level zones, and the theme CSS.
