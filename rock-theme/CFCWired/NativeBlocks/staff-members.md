# Staff Members Content Channel

Replaces the static staff grid on `/about-us/meet-the-team`.

## Rock Page

- Page: Meet the Team
- Route: `/about-us/meet-the-team`
- Layout: `FullWidth.aspx`
- Zone: `Main`
- Static package to replace: `PageContent/about-us/meet-the-team/main.html`

## Content Channel Type

Name: `Staff Directory`

Recommended item fields:

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Title | Built-in item title | Yes | Staff member name. |
| Content | Built-in item content | No | Optional bio. |
| Role | Text | Yes | Job title or ministry role. |
| Photo | Image | No | Headshot. |
| Department | Defined Value | No | Pastoral, Admin, Family, Worship, etc. |
| DisplayOrder | Integer | Yes | Controls card order. |
| Email | Text | No | Only use if public contact is desired. |

## Content Channel

Name: `Staff Members`

Configuration notes:

- Enable item ordering by `DisplayOrder` ascending.
- Keep future/inactive staff unpublished rather than deleting immediately.
- Use the same image dimensions where possible to keep the grid stable.

## Block

- Block type: Content Channel Dynamic
- Zone: `Main`
- Channel: `Staff Members`
- Template: `staff-grid.lava`

## QA

- Staff cards render in the same visual style as static import.
- Missing photo fallback renders a user icon.
- Sort order matches church preference.
- Mobile grid stacks cleanly.
- Admins can update staff without editing HTML.
