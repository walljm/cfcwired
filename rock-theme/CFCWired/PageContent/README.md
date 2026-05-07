# Rock Page Content Packages

These directories contain copy/paste-ready HTML Content block payloads for Rock.

For the ordered Rock admin import worksheet, use `../PAGE_IMPORT_MANIFEST.md`.

Each page package follows this pattern:

- `feature.html` -> HTML Content block in the page's `Feature` zone, except the homepage where it goes in `WelcomeVideo`
- `main.html` -> HTML Content block in the page's `MainContent` zone
- `notes.md` -> Rock page settings, route, layout, and follow-up notes

The homepage is the exception: it uses separate payload files instead of a single `main.html`, but all homepage blocks are stacked in the `MainContent` zone in order.

Generated image paths assume static image files are uploaded to `/Content/ExternalSite/Images/` in Rock. For example, `src/images/Preschool.jpg` is referenced as `/Content/ExternalSite/Images/Preschool.jpg`.

The homepage currently depends on these live-parity assets in that folder: `1920px-We-Over-Me-web.png`, `07-MWC-Front-Page-Worship.jpg`, `Wed-nights-02.jpg`, `GroupCommunity.jpg`, and `CFC-Roadmap_web-1.png`.

## Packages

| Rock Page | Suggested Route | Layout | Body Zone | Package |
|-----------|-----------------|--------|-----------|---------|
| Homepage | `/` | `Homepage.aspx` | `MainContent` | `home/` |
| About Us | `/about-us` | `FullWidth.aspx` | `MainContent` | `about-us/` |
| Statement of Faith | `/about-us/statement-of-faith` | `FullWidth.aspx` | `MainContent` | `about-us/statement-of-faith/` |
| Meet the Team | `/about-us/meet-the-team` | `FullWidth.aspx` | `MainContent` | `about-us/meet-the-team/` |
| Find Community | `/about-us/find-community` | `FullWidth.aspx` | `MainContent` | `about-us/find-community/` |
| Contact Us | `/about-us/contact-us` | `FullWidth.aspx` | `MainContent` | `about-us/contact-us/` |
| Come Visit | `/come-visit` | `FullWidth.aspx` | `MainContent` | `come-visit/` |
| Messages | `/watch-read/messages` | `FullWidth.aspx` | `MainContent` | `watch-read/messages/` |
| Core Classes | `/get-involved/core-classes` | `FullWidth.aspx` | `MainContent` | `get-involved/core-classes/` |
| Serve | `/get-involved/serve` | `FullWidth.aspx` | `MainContent` | `get-involved/serve/` |
| Children | `/for-my-family/children` | `FullWidth.aspx` | `MainContent` | `for-my-family/children/` |
| Middle School | `/for-my-family/middle-school` | `FullWidth.aspx` | `MainContent` | `for-my-family/middle-school/` |
| High School | `/for-my-family/high-school` | `FullWidth.aspx` | `MainContent` | `for-my-family/high-school/` |
| Request Prayer | `/request-prayer` | `FullWidth.aspx` | `MainContent` | `request-prayer/` |

## Notes

The packages intentionally exclude static page shell markup: doctype, head, header/nav, footer, CDN links, Bootstrap scripts, and `site.js`. Rock supplies those through `Site.Master`, site-level zones, and theme CSS.

Some pages have `Rock-Native Follow-Up` notes in their `notes.md` files. Those identify places where a static block should eventually become a native Rock block or content channel.
