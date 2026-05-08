# Living on Mission Stories Content Channel

Replaces the static "How to Live on Mission" card grid on `/get-involved/living-on-mission` with a Rock-managed content channel so staff can add, edit, and order neighborhood stories without touching HTML.

## Rock Page

- Page: Living on Mission
- Route: `/get-involved/living-on-mission`
- Layout: `Homepage.aspx`
- Zone: `MainContent` (replaces the `lom-resources-grid` section in the static import)
- Static package to replace: `PageContent/get-involved/living-on-mission/main.html` (the resources grid section only)

## Content Channel Type

Name: `Living on Mission Story`

Recommended item attributes:

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Title | Built-in item title | Yes | Card type / category label (e.g., "Welcome a New Neighbor"). |
| Content | Built-in item content | Yes | Full story HTML/Markdown. Excerpt is generated from this. |
| Image | Image | Yes | Card thumbnail. Saved to `/Content/ExternalSite/Images/`. Suggested 800x600. |
| Excerpt | Memo | No | Optional plain-text excerpt override. Falls back to first 200 chars of `Content`. |
| StorySlug | Text | No | URL slug for the detail page (e.g., `welcome-new-neighbor`). Used to build the Read More link when stories live in Rock. |
| ExternalUrl | URL | No | Optional external link override (used during migration while detail pages still live on `cfcwired.org/community/...`). |
| DisplayOrder | Integer | Yes | Lower numbers appear first. Use 10/20/30 spacing for easy reorders. |

## Content Channel

Name: `Living on Mission Stories`

Configuration notes:

- Item ordering: by `DisplayOrder` ascending, then `Created Date Time` descending as tiebreak.
- Items publish immediately by default; use the standard `StartDateTime` / `ExpireDateTime` fields if a story should be time-bound.
- `EnableRSS`: not required.
- `RequiresApproval`: optional; recommended off for trusted staff editors.
- Item URL: `/community/{{ Item | Attribute:'StorySlug' }}` once detail pages are migrated; until then the Lava template falls back to `ExternalUrl` then to the `cfcwired.org` legacy URL.

## Block

- Block type: **Content Channel Item Personal List Lava**
- Zone: `MainContent`
- Channel: `Living on Mission Stories`
- Item Cache Duration: 600 seconds
- Output Cache Duration: 0 (per-page chrome differs)
- Template: `living-on-mission-stories.lava`
- Pagination: enabled, page size 12 (covers current 9 + headroom).

The Lava template renders the full `How to Live on Mission` intro heading + cards as one unit. Do not also embed a separate static intro section — the block owns the entire region.

## Detail Page

Each story has a dedicated detail page driven by the same content channel.

- Page name: Living on Mission Story
- Layout: `Homepage.aspx`
- Route: `/community/{Item}` — `{Item}` accepts the story slug or item id.
- Zone: `MainContent`
- Block type: Content Channel Item View (Lava)
- Channel: `Living on Mission Stories`
- Template: `living-on-mission-story-detail.lava`
- Page parameter binding: bind the `{Item}` route segment to the block's item lookup. Configure the block to resolve by `StorySlug` first, then by item id as a fallback.
- Static parity preview: `src/community/welcome-new-neighbor.html` (one example; the block renders all stories).

The listing Lava (`living-on-mission-stories.lava`) prefers the internal slug route once detail pages exist; the `ExternalUrl` attribute remains available as a per-item override during cutover or for stories that should permanently point off-site.

## Migration

Bulk-load the existing 9 stories from `living-on-mission-stories-import-template.csv`. Image filenames in the CSV match the images already uploaded to `/Content/ExternalSite/Images/` by the static import.

After load:

1. Verify card order matches the live `cfcwired.org/neighborhood/cfc/` ordering.
2. Spot-check 2–3 cards on mobile, tablet, and desktop widths.
3. Confirm Read More links resolve (will go to `cfcwired.org/community/<slug>/` until those detail pages are migrated; revisit when they are).

## QA

- Cards render in 4 columns ≥1200px, 3 columns ≥992px, 2 columns ≥768px, 1 column on mobile.
- Image fallback: if `Image` is empty, the card hides the image area cleanly without breaking layout.
- Excerpt truncates to roughly 200 characters with an ellipsis; full story available behind Read More.
- Staff can add a story without an HTML edit and see it appear on the page within the cache window.
- Read More opens in a new tab when `ExternalUrl` is used.
