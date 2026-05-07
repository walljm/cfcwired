# Announcement Block

## Rock Configuration

Preferred placement: direct markup in `Site.Master` above the navbar.

Alternative placement:

- Zone: `Header` or `Navigation`
- Block type: HTML Content
- Suggested block name: `External Site Announcement`
- Suggested context name: `external-site-announcement`
- Payload: `../Assets/Html/announcement-banner.html`

## Purpose

Displays the Sunday service/watch-online announcement above the main navbar.

## Checks After Import

- Announcement appears above the navbar without pushing content unpredictably.
- Link opens `https://live.cfcwired.org/`.
- Close button either works through theme JavaScript or is removed.
- `data-version` is changed whenever the announcement content changes and dismiss persistence is used.

## JavaScript Note

The static site used `site.js` to persist dismissal in `localStorage` and update the body offset. Rock does not automatically include that script in this scaffold. If dismissal is needed, port only the announcement-specific behavior into the Rock theme JavaScript instead of importing the full static `site.js`.
