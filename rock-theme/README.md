# Rock Theme Scaffold

This directory contains the first-pass Rock RMS theme scaffold for the converted CFC Wired static site.

Target platform:

- Rock RMS v16
- Bootstrap 3.4.1
- Font Awesome 4.7
- jQuery 3.5.1

## What This Is

These files are staging artifacts for building or updating the Rock theme. They are not used by the static `src/` site directly.

The intended Rock theme path is:

```text
/Themes/CFCWired/
```

If the existing Rock instance keeps the live theme as `CFCv2External`, merge these files into that theme instead of creating a second public theme.

## Files

| File | Purpose |
|------|---------|
| `CFCWired/Site.Master` | Existing Rock master page shell with Header, Login, Navigation, Footer, `feature`, and `main` placeholders |
| `CFCWired/IMPORT_CHECKLIST.md` | Operational checklist for moving the scaffold into Rock |
| `CFCWired/PAGE_IMPORT_MANIFEST.md` | Ordered Rock page creation and HTML Content block import worksheet |
| `CFCWired/REDIRECT_MATRIX.md` | Redirect mapping from legacy `.html` URLs to Rock routes |
| `CFCWired/QA_PAGE_SCRIPT.md` | Page-by-page pass/fail QA script for imported Rock pages |
| `CFCWired/Layouts/Homepage.aspx` | Homepage layout using a single full-width `MainContent` zone |
| `CFCWired/Layouts/FullWidth.aspx` | Standard full-width content layout |
| `CFCWired/Layouts/FullWidthnarrow.aspx` | Narrow main-column variant using `col-md-8 col-md-offset-2` |
| `CFCWired/Layouts/LeftsSideBar.aspx` | Left sidebar layout with `Sidebar 1` and `Main` zones |
| `CFCWired/Layouts/RightSidebar.aspx` | Right sidebar layout with `Main` and `Sidebar 1` zones |
| `CFCWired/Layouts/ThreeColumn.aspx` | Three-column layout with `Sidebar 1`, `Main`, and `Sidebar 2` zones |
| `CFCWired/Assets/Html/header-logo.html` | Site-level HTML Content block for the logo/header zone |
| `CFCWired/Assets/Html/announcement-banner.html` | Announcement markup for the layout or a site-level HTML Content block |
| `CFCWired/Assets/Html/footer-zone.html` | Site-level HTML Content block for the footer zone |
| `CFCWired/Assets/Lava/page-menu.lava` | Starter Lava template for a Rock Page Menu block |
| `CFCWired/SiteBlocks/` | Site-level block package notes for Header, Navigation, Footer, and Announcement |
| `CFCWired/PageContent/` | Rock page import packages with `Feature`, body block HTML, and notes for every converted static page |
| `CFCWired/NativeBlocks/` | Specs for second-pass native Rock blocks, workflows, content channels, and dynamic templates |
| `CFCWired/Styles/theme.less` | Rock theme LESS entry point for the CFC public subsite |
| `CFCWired/Styles/_cfc-site.less` | Local converted CFC site styles imported by `theme.less` |
| `CFCWired/Styles/_variables.less` | CFC/Rock theme variables used by `theme.less` and optional `bootstrap.less` |
| `CFCWired/Styles/_css-overrides.less` | Safe no-op import target; old broad overrides were intentionally removed |

## Rock Layout Conventions

The layout files intentionally match the existing Rock theme pattern:

- `Site.Master` owns the global `<head>`, header/nav shell, `feature` placeholder, `main` placeholder, footer, ScriptManager, and UpdateProgress markup.
- `MasterPageFile="Site.Master"`
- `Inherits="Rock.Web.UI.RockPage"`
- `ctMain` renders into `ContentPlaceHolderID="main"`
- `Homepage.aspx` uses one full-width `MainContent` zone; stack homepage section blocks there in order.
- Standard content-page layouts use a full-width `Feature` zone for heroes and a full-width `MainContent` zone for body content; generated payloads avoid nested `.container` wrappers and rely on theme CSS for section widths and responsive grids.

`Site.Master` exposes these site-level zones: `Header`, `Login`, `Navigation`, and `Footer`.

Use the actual Rock zone names when placing blocks. The homepage hero uses `WelcomeVideo`; standard full-width page heroes use `Feature`; body blocks use `MainContent`.

## Install Notes

1. Copy `CFCWired/` into Rock under `/Themes/CFCWired/`, or merge its files into `/Themes/CFCv2External/`.
2. Copy `Site.Master` to the target theme root if you are replacing the theme shell. If the target theme already has this master page, merge carefully instead of overwriting live customizations.
3. Copy the layout files into the target theme's `Layouts/` directory.
4. Compile `CFCWired/Styles/theme.less` to the theme CSS path used by the Rock instance. The theme styles are self-contained under `CFCWired/Styles/` and no longer depend on `src/less/`.
   - If Rock remains on `/Themes/CFCv2External/`, merge or append the compiled `CFCWired/Styles/cfc-site-overrides.css` into `/Themes/CFCv2External/Styles/theme.css`, or load it after `theme.css`.
   - Generate that standalone override artifact with `npm run build:rock-css`.
5. Upload static images from `src/images/` to `/Content/ExternalSite/Images/`. Generated page payloads reference images there by filename.
6. Configure site-level blocks:
   - Header/logo: `Assets/Html/header-logo.html`
   - Navigation: Page Menu block using `Assets/Lava/page-menu.lava`
   - Footer: `Assets/Html/footer-zone.html`

Rock's theme LESS compiler may not support the CSS background shorthand form that combines position and size with `/`, such as `center center / cover`. In theme LESS files, use separate `background-position`, `background-size`, and `background-repeat` declarations instead.

## Next Step

Use `CFCWired/IMPORT_CHECKLIST.md` as the operational checklist for loading the theme, assets, site-level blocks, and page packages into Rock.

Import pages into Rock using `CFCWired/PageContent/`. Each page directory contains:

- `feature.html` -> HTML Content block in `Feature` (`WelcomeVideo` on the homepage)
- `main.html` -> HTML Content block in `MainContent`
- `notes.md` -> route, layout, block mapping, and follow-up notes

Regenerate these packages after static page edits with:

```bash
node scripts/package-rock-page-content.mjs
```

Use `CFCWired/PAGE_IMPORT_MANIFEST.md` as the operator worksheet when creating Rock pages and pasting generated HTML Content block payloads. After static parity is imported, use `CFCWired/NativeBlocks/` to replace selected static sections with Rock-native behavior.