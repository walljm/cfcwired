# Glocal Stories Content Channel

Replaces the static stories grid on `/get-involved/global-outreach/glocal-stories` with a Rock-managed content channel so staff can add, edit, and order glocal (local + global) outreach stories without touching HTML.

## Rock Page

- Page: Glocal Stories
- Route: `/get-involved/global-outreach/glocal-stories`
- Layout: `Homepage.aspx`
- Zone: `MainContent` (replaces the `stories-grid` section in the static import)
- Static package to replace: `PageContent/get-involved/global-outreach/glocal-stories/stories.html` (the stories grid section only — produced as Lava-only, no HTML payload)

## Content Channel Type

Name: `Glocal Story`

Recommended item attributes (mirrors `Living on Mission Story`):

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Title | Built-in item title | Yes | Story title (e.g., "2024 Ghana Kids Camp"). |
| Content | Built-in item content | Yes | Full story HTML/Markdown. Excerpt is generated from this. |
| Image | Image | Yes | Card thumbnail. Saved to `/Content/ExternalSite/Images/`. Suggested 1200x1200 (cards crop to square). |
| Excerpt | Memo | No | Optional plain-text excerpt override. Falls back to first ~240 chars of `Content`. |
| StorySlug | Text | No | URL slug for the detail page (e.g., `2024-fall-festival`). Used to build the Read More link when stories live in Rock. |
| ExternalUrl | URL | No | Optional external link override (used during migration while detail pages still live on `cfcwired.org/community/...`). |
| DisplayOrder | Integer | Yes | Lower numbers appear first. Use 10/20/30 spacing for easy reorders. |

## Content Channel

Name: `Glocal Stories`

Configuration notes:

- Item ordering: by `DisplayOrder` ascending, then `Created Date Time` descending as tiebreak.
- Items publish immediately by default; use the standard `StartDateTime` / `ExpireDateTime` fields if a story should be time-bound.
- `EnableRSS`: not required.
- `RequiresApproval`: optional; recommended off for trusted staff editors.
- Item URL: `/get-involved/global-outreach/glocal-stories/story-detail/{{ Item | Attribute:'StorySlug' }}`. The Lava listing template builds this URL automatically; `ExternalUrl` is used as a fallback during migration for stories that still live on `cfcwired.org/community/...`.

## Block

- Block type: **Content Channel View**
- Zone: `MainContent`
- Channel: `Glocal Stories`
- Item Cache Duration: 600 seconds
- Output Cache Duration: 0 (per-page chrome differs)
- Template: `glocal-stories.lava`
- Pagination: enabled, page size 12 (covers current 6 + headroom).

The Lava template renders the entire stories grid section as one unit. The "Better Together" intro stays in a separate HTML Content block above it.

## Detail Page

Each story has a dedicated detail page driven by the same content channel.

- Page name: Glocal Story Detail
- Layout: `Homepage.aspx`
- Route: `/get-involved/global-outreach/glocal-stories/story-detail/{Item}` — `{Item}` accepts the story slug or item id.
- Zone: `MainContent`
- Block type: Content Channel Item View (Lava)
- Channel: `Glocal Stories`
- Template: `glocal-story-detail.lava`
- Page parameter binding: bind the `{Item}` route segment to the block's item lookup. Configure the block to resolve by `StorySlug` first, then by item id as a fallback.

The listing Lava (`glocal-stories.lava`) builds the detail URL from this route. `ExternalUrl` is only used when a story has no `StorySlug` (e.g. legacy items still hosted on `cfcwired.org`).

## Migration

Bulk-load the existing 6 stories from `glocal-stories-import-template.csv`. Image filenames in the CSV match the images already uploaded to `/Content/ExternalSite/Images/` by the static import.

After load:

1. Verify card order matches the live `cfcwired.org/glocal-stories/` ordering.
2. Spot-check 2–3 cards on mobile, tablet, and desktop widths.
3. Confirm Read More links resolve (will go to `cfcwired.org/community/<slug>/` until those detail pages are migrated; revisit when they are).

## QA

- Cards render in 3 columns ≥992px, 2 columns ≥768px, 1 column on mobile (matches the static parity preview).
- Image fallback: if `Image` is empty, the card hides the image area cleanly without breaking layout.
- Excerpt truncates to roughly 240 characters with an ellipsis; full story available behind Read More.
- Staff can add a story without an HTML edit and see it appear on the page within the cache window.
- Read More opens in a new tab when `ExternalUrl` is used.
