# Find Community Import Notes

Source page: `src/about-us/find-community.html`

## Rock Page

- Page name: Find Community
- Suggested route: `/about-us/find-community`
- Layout: `Homepage.aspx`
- Browser title: `Find Community - Christian Fellowship Church`
- Meta description: `Find community through groups and connection opportunities at Christian Fellowship Church.`

## Blocks

| Zone | Block Type | File | Notes |
|------|------------|------|-------|
| `WelcomeVideo` | HTML Content | `feature.html` | Hero block only. Do not include page header, nav, footer, scripts, or nested `.container`. |
| `MainContent` | HTML Content | `main.html` | Page body content extracted from the converted static page. |

## Import Steps

1. Create or open the Rock page at `/about-us/find-community`.
2. Set the layout to `Homepage.aspx`.
3. Paste `feature.html` into an HTML Content block in the `WelcomeVideo` zone.
4. Paste `main.html` into an HTML Content block in the `MainContent` zone.
5. Verify image paths, links, page title/breadcrumb placement, mobile layout, and admin edit controls in Rock.

## Rock-Native Follow-Up

Consider replacing the group CTA with Rock Group Finder after the static import is verified.

## Visual Parity Notes (2026-05-08)

- Hero heading text now uses `Find Community` casing to match the live public page.
- Gallery image references now match live order: `Community.jpg`, `0338_jason_wall_untitled-shootIMG_8900-1-scaled.jpg`, `Community2.jpg`, `GroupCommunity.jpg`.
- The `Find a Group` section image now references `IMG_7052.jpg`.

### Required Rock Uploads

Upload these files to `/Content/ExternalSite/Images/` in Rock if they are not already present:

- `Community2.jpg`
- `IMG_7052-scaled-e1730162052377.jpg`

## Excluded Static Markup

The static page header, nav, footer, CDN links, and `site.js` script are intentionally excluded. Rock supplies these through `Site.Master`, the site-level zones, and the theme CSS.
