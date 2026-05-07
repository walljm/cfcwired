# Navigation Block

## Rock Configuration

- Zone: `Navigation`
- Block type: Page Menu
- Suggested block name: `External Site Navigation`
- Lava template: `../Assets/Lava/page-menu.lava`

## Suggested Page Tree

- About Us
  - Statement of Faith
  - Meet the Team
  - Find Community
  - Contact Us
- Come Visit
- Watch/Read
  - Messages
- Get Involved
  - Core Classes
  - Serve
- For My Family
  - Children
  - Middle School
  - High School

## Checks After Import

- Top-level links render as `li` elements inside `ul.nav.navbar-nav.navbar-right`.
- Pages with children render Bootstrap 3 dropdown markup.
- Mobile collapse opens and closes from the `Site.Master` navbar toggle.
- Active/current page classes do not break navbar spacing.
- Plan Your Visit CTA appears at the end of the nav.

## Caveat

Rock Page Menu Lava variables can vary by block configuration. If `Pages` is not the exposed collection name in the target block, adjust `page-menu.lava` after checking the block's available merge fields in Rock.
