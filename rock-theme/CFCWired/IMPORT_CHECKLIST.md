# Rock Import Checklist

Use this checklist to move the converted CFC Wired static site into Rock RMS.

## 1. Theme Files

- [ ] Back up the current Rock theme directory before copying files.
- [ ] Copy or merge `Site.Master` into the target theme root.
- [ ] Copy layout files into the target theme `Layouts/` directory:
  - [ ] `Homepage.aspx`
  - [ ] `FullWidth.aspx`
  - [ ] `FullWidthnarrow.aspx`
  - [ ] `LeftsSideBar.aspx`
  - [ ] `RightSidebar.aspx`
  - [ ] `ThreeColumn.aspx`
- [ ] Compile `Styles/theme.less` into the CSS file loaded by `Site.Master`.
- [ ] Confirm Rock still loads its own Bootstrap 3 CSS and jQuery bundles.
- [ ] Confirm the theme CSS loads after Rock Bootstrap CSS.

## 2. Assets

- [ ] Upload or copy images from `src/images/` to the path expected by the theme.
- [ ] Confirm `/images/CFC_Logo_White.png` resolves, or update block payloads to the Rock media path.
- [ ] Confirm footer app badge images resolve:
  - [ ] `/images/app-store.png`
  - [ ] `/images/google-play.png`
- [ ] Confirm page background/card images resolve after import.

## 3. Site-Level Blocks

Use `SiteBlocks/` for details.

- [ ] Create Header HTML Content block in `Header`.
  - Payload: `Assets/Html/header-logo.html`
  - Suggested context name: `external-site-header-logo`
- [ ] Configure Navigation Page Menu block in `Navigation`.
  - Lava: `Assets/Lava/page-menu.lava`
  - Confirm the Page Menu merge field collection name in Rock.
- [ ] Create Footer HTML Content block in `Footer`.
  - Payload: `Assets/Html/footer-zone.html`
  - Suggested context name: `external-site-footer`
- [ ] Decide whether to import the announcement banner.
  - Preferred placement: `Site.Master` above the navbar.
  - Payload: `Assets/Html/announcement-banner.html`
  - If the close button stays, port only the announcement dismissal JavaScript.

## 4. Rock Page Creation

Use `PAGE_IMPORT_MANIFEST.md` as the working import sheet and `PageContent/README.md` as the package index.

- [ ] Create or confirm page tree:
  - [ ] Homepage `/`
  - [ ] About Us `/about-us`
  - [ ] Statement of Faith `/about-us/statement-of-faith`
  - [ ] Meet the Team `/about-us/meet-the-team`
  - [ ] Find Community `/about-us/find-community`
  - [ ] Contact Us `/about-us/contact-us`
  - [ ] Come Visit `/come-visit`
  - [ ] Messages `/watch-read/messages`
  - [ ] Core Classes `/get-involved/core-classes`
  - [ ] Serve `/get-involved/serve`
  - [ ] Children `/for-my-family/children`
  - [ ] Middle School `/for-my-family/middle-school`
  - [ ] High School `/for-my-family/high-school`
  - [ ] Request Prayer `/request-prayer`
- [ ] Set each page layout according to its package `notes.md`.
- [ ] Paste each `feature.html` into the listed `Feature` zone.
- [ ] Paste each `main.html` into the listed body zone.
- [ ] Set each page browser title and meta description from `notes.md`.
- [ ] Confirm optional navigation parent pages from `PAGE_IMPORT_MANIFEST.md` are redirected or given landing-page content.

## 5. Native Rock Follow-Ups

These can happen after static parity is imported.

- [ ] Meet the Team: replace static staff grid with Staff Members content channel. See `NativeBlocks/staff-members.md`.
- [ ] Request Prayer: replace static CTA with Prayer Request Entry block. See `NativeBlocks/prayer-request.md`.
- [ ] Contact Us: replace static form/CTA with Workflow Entry block. See `NativeBlocks/contact-workflow.md`.
- [ ] Find Community: evaluate replacing static CTA with Group Finder. See `NativeBlocks/find-community-groups.md`.
- [ ] Homepage events: replace static event tiles with Event Calendar or Content Channel Dynamic. See `NativeBlocks/homepage-events.md`.
- [ ] Messages: evaluate replacing Subsplash embed with Rock media/content channel strategy. See `NativeBlocks/messages-media.md`.
- [ ] Core Classes and Serve: wire CTAs to Rock Event Registration or content channels if managed in Rock. See `NativeBlocks/classes-and-serve.md`.

## 6. QA Pass

- [ ] Run page-by-page checks from `QA_PAGE_SCRIPT.md` and mark pass/fail per page.
- [ ] Desktop homepage visual pass.
- [ ] Mobile homepage visual pass.
- [ ] Navbar dropdowns work on desktop.
- [ ] Navbar collapse works on mobile.
- [ ] Footer stacks correctly on mobile.
- [ ] Page title and breadcrumb placement is acceptable on content pages.
- [ ] All images load.
- [ ] All internal links route to Rock pages.
- [ ] External links open as expected.
- [ ] Admin toolbar and block editing controls remain usable.
- [ ] Ajax/update progress spinner still behaves correctly.
- [ ] Rock page cache settings are appropriate for public pages.

## 7. Launch Readiness

- [ ] Apply redirects from `REDIRECT_MATRIX.md`.
- [ ] Confirm redirects from old `.html` URLs to new Rock routes if needed.
- [ ] Confirm analytics/tracking requirements.
- [ ] Confirm SEO metadata on each page.
- [ ] Confirm social share image path.
- [ ] Confirm DNS or site binding cutover plan.
- [ ] Take a final backup before launch changes.
