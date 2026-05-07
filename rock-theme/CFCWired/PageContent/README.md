# Rock Page Content Packages

These directories contain copy/paste-ready HTML Content block payloads for Rock.

For the ordered Rock admin import worksheet, use `../PAGE_IMPORT_MANIFEST.md`.

Each page package follows this pattern:

- `feature.html` -> HTML Content block in the `Feature` zone
- `main.html` -> HTML Content block in the page body zone listed in `notes.md`
- `notes.md` -> Rock page settings, route, layout, and follow-up notes

## Packages

| Rock Page | Suggested Route | Layout | Body Zone | Package |
|-----------|-----------------|--------|-----------|---------|
| Homepage | `/` | `Homepage.aspx` | `Sub Feature` | `home/` |
| About Us | `/about-us` | `FullWidth.aspx` | `Main` | `about-us/` |
| Statement of Faith | `/about-us/statement-of-faith` | `FullWidth.aspx` | `Main` | `about-us/statement-of-faith/` |
| Meet the Team | `/about-us/meet-the-team` | `FullWidth.aspx` | `Main` | `about-us/meet-the-team/` |
| Find Community | `/about-us/find-community` | `FullWidth.aspx` | `Main` | `about-us/find-community/` |
| Contact Us | `/about-us/contact-us` | `FullWidth.aspx` | `Main` | `about-us/contact-us/` |
| Come Visit | `/come-visit` | `FullWidth.aspx` | `Main` | `come-visit/` |
| Messages | `/watch-read/messages` | `FullWidth.aspx` | `Main` | `watch-read/messages/` |
| Core Classes | `/get-involved/core-classes` | `FullWidth.aspx` | `Main` | `get-involved/core-classes/` |
| Serve | `/get-involved/serve` | `FullWidth.aspx` | `Main` | `get-involved/serve/` |
| Children | `/for-my-family/children` | `FullWidth.aspx` | `Main` | `for-my-family/children/` |
| Middle School | `/for-my-family/middle-school` | `FullWidth.aspx` | `Main` | `for-my-family/middle-school/` |
| High School | `/for-my-family/high-school` | `FullWidth.aspx` | `Main` | `for-my-family/high-school/` |
| Request Prayer | `/request-prayer` | `FullWidth.aspx` | `Main` | `request-prayer/` |

## Notes

The packages intentionally exclude static page shell markup: doctype, head, header/nav, footer, CDN links, Bootstrap scripts, and `site.js`. Rock supplies those through `Site.Master`, site-level zones, and theme CSS.

Some pages have `Rock-Native Follow-Up` notes in their `notes.md` files. Those identify places where a static block should eventually become a native Rock block or content channel.
