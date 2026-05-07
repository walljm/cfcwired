# Homepage Events

Replaces static homepage `Coming Up` tiles.

## Rock Page

- Page: Homepage
- Route: `/`
- Layout: `Homepage.aspx`
- Static package: `PageContent/home/`
- Zone: `MainContent`
- Generated Lava template: `PageContent/home/coming-up.html`

## Recommended Block

Use this when the tiles should reflect audience-filtered Rock event occurrences.

- Block type: Calendar Item Occurrence List by Audience Lava
- Zone: `MainContent`
- Data source: block-provided `EventItemOccurrences`
- Artwork source: event item image attributes named `Image`, `EventImage`, `Event Image`, or `Photo`, then event item `Photo`/`PhotoId` as fallback
- Event detail page setting: set `EventDetailPage` so links render as `{{ EventDetailPage }}?EventOccurrenceId={{ eventItemOccurrence.Id }}`
- Registration page setting: optional fallback when `EventDetailPage` is empty
- Count: 4 event artwork tiles

## Recommended First Pass

Place a Calendar Item Occurrence List by Audience Lava block in the homepage `MainContent` zone after the This Sunday block. Configure the audience filters and Event Detail Page, then paste `PageContent/home/coming-up.html` as the Lava template.

## QA

- Four artwork tiles render at desktop size when event images are configured.
- Tiles stack cleanly on mobile.
- Missing artwork falls back to the date/title card instead of rendering a broken image.
- Template renders a neutral empty state if no `EventItemOccurrences` are available.
- Date windows or event filters do not leave the section empty without fallback content.
- Tile links use `{{ EventDetailPage }}?EventOccurrenceId={{ eventItemOccurrence.Id }}` when `EventDetailPage` is configured.
