# Request Prayer Native Block

Replaces static prayer CTA content on `/request-prayer`.

## Rock Page

- Page: Request Prayer
- Route: `/request-prayer`
- Layout: `FullWidth.aspx`
- Static package: `PageContent/request-prayer/`

## Recommended Block

- Block type: Prayer Request Entry
- Zone: `Main` or `Section A`
- Placement: after the intro content from `main.html`

## Suggested Configuration

- Allow public prayer requests: confirm with ministry policy.
- Require first name, last name, and email.
- Include category if prayer team routing uses categories.
- Configure notification to prayer ministry staff or team lead.
- Add confirmation copy that tells the requester what happens next.

## Suggested Page Composition

1. `Feature`: `PageContent/request-prayer/feature.html`
2. `Main`: intro sections from `PageContent/request-prayer/main.html`
3. `Main` or `Section A`: Prayer Request Entry block

## QA

- Anonymous or public/private settings match church policy.
- Confirmation message appears after submission.
- Notification email is delivered to the right team.
- Request appears in Rock's prayer administration workflow.
- Form is usable on mobile.
