# Staff Members Import Guide

Use this guide with `staff-members-import-template.csv` when entering or bulk-loading staff records for the `Staff Members` channel.

## CSV Template

- Template file: `staff-members-import-template.csv`
- One row = one staff profile card
- Keep `DisplayOrder` unique and spaced by 10 so inserts are easy

## Field Mapping

| CSV Column | Rock Field | Required | Notes |
|-----------|------------|----------|-------|
| `Title` | Item Title | Yes | Staff full name shown on card. |
| `Role` | Attribute: Role | Yes | Ministry role text on card. |
| `Department` | Attribute: Department | No | Must match a defined value when used. |
| `DisplayOrder` | Attribute: DisplayOrder | Yes | Numeric sort, ascending. |
| `Email` | Attribute: Email | No | Public-facing contact only. |
| `PhotoFileName` | Attribute: Photo | No | Upload image first, then attach per item. |
| `Content` | Item Content | No | Optional short bio paragraph. |

## Image Naming Convention

Use lowercase kebab-case and `.jpg` for all headshots:

- Pattern: `first-last.jpg`
- Examples: `john-doe.jpg`, `mary-ann-jones.jpg`
- Recommended dimensions: 600x600 or 800x800 square
- Crop face-centered to support circular display in `staff-grid.lava`

## Import Process

1. Create Content Channel Type and Channel from `staff-members.md`.
2. Create all Department defined values before loading staff.
3. Upload staff images to Rock image storage first.
4. Create each Content Channel Item using the CSV row as source.
5. Set the `Photo` attribute to uploaded image for each item.
6. Publish all active staff items.

## QA

- Sort order follows `DisplayOrder`.
- Missing photo shows fallback icon (not broken image).
- Names and roles match approved staff list.
- Bios render without layout breaks on mobile.
- Inactive staff are unpublished, not deleted.
