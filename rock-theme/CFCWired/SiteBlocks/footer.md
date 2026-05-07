# Footer Block

## Rock Configuration

- Zone: `Footer`
- Block type: HTML Content
- Suggested block name: `External Site Footer`
- Suggested context name: `external-site-footer`
- Payload: `../Assets/Html/footer-zone.html`

## Purpose

Renders the global site footer with logo, address, contact links, social links, quick menu, office hours, newsletter CTA, app badges, and copyright.

## Checks After Import

- Logo and app badge images load.
- Address, phone, email, and social links open correctly.
- Internal footer links use Rock routes without `.html` suffixes.
- Footer columns stack cleanly on mobile.
- Footer does not duplicate any existing footer markup from the theme.
