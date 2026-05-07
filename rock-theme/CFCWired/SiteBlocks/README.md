# Site-Level Rock Blocks

These files describe the global blocks configured once for the external site theme. The payload files live in `../Assets/` so they can be pasted directly into Rock blocks or used as template source.

## Block Map

| Site.Master Zone | Rock Block Type | Payload | Notes |
|------------------|-----------------|---------|-------|
| `Header` | HTML Content | `../Assets/Html/header-logo.html` | Logo and homepage link shown in the navbar header. |
| `Navigation` | Page Menu | `../Assets/Lava/page-menu.lava` | Main external site navigation. Configure the Page Menu block to use this Lava template. |
| `Footer` | HTML Content | `../Assets/Html/footer-zone.html` | Full footer content, including address, social links, newsletter, app badges, and copyright. |
| Header or Site.Master | HTML Content or direct master markup | `../Assets/Html/announcement-banner.html` | Optional announcement bar. Best placement is direct `Site.Master` markup above the navbar if it needs to be structural. |

## Recommended Context Names

| Block | Context Name |
|-------|--------------|
| Header Logo | `external-site-header-logo` |
| Footer | `external-site-footer` |
| Announcement | `external-site-announcement` |

## Shared Setup Notes

- These blocks assume `Site.Master` exposes the `Header`, `Login`, `Navigation`, and `Footer` zones.
- Upload image assets from `src/images/` to the Rock path used by the theme, or keep `/images/...` available in the external site root.
- The Page Menu block should output Bootstrap 3 navbar markup: `ul.nav.navbar-nav.navbar-right`, `li.dropdown`, `a.dropdown-toggle`, `ul.dropdown-menu`.
- If the announcement close button is used, add the close/dismiss behavior to the theme JavaScript or remove the close button from the HTML block.

## Import Order

1. Header logo
2. Navigation Page Menu
3. Footer
4. Announcement, if wanted for launch
