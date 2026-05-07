# Core Classes and Serve Native Follow-Ups

Covers `/get-involved/core-classes` and `/get-involved/serve`.

## Core Classes

Static package: `PageContent/get-involved/core-classes/`

Use Rock Event Registration when classes have scheduled sessions and signups.

Recommended mapping:

| Static Content | Rock Target |
|----------------|-------------|
| Class description | Static HTML Content or content channel item |
| Scheduled offering | Event item occurrence |
| Registration CTA | Event Registration link |
| Capacity/waitlist | Rock registration settings |
| Reminders | Rock communications |

## Serve

Static package: `PageContent/get-involved/serve/`

Use static HTML if serving is category-level and stable. Use a content channel if opportunities change frequently.

Suggested content channel attributes for serve opportunities:

| Attribute | Type | Notes |
|-----------|------|-------|
| Title | Built-in title | Opportunity name. |
| Content | Built-in content | Description. |
| Category | Defined Value | On Campus, Local, Global. |
| Contact Email | Text | Ministry owner or routing inbox. |
| Link Url | URL | Signup or inquiry path. |
| Image | Image | Optional. |
| DisplayOrder | Integer | Sort order. |

## QA

- Registration links route to active Rock registration instances.
- Closed classes do not look open.
- Serve opportunities have clear owner/contact routing.
- Static descriptions do not contradict live Rock registration dates.
