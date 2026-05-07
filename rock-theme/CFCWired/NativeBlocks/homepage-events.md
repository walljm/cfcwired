# Homepage Events and Promotions

Replaces static homepage `Coming Up` tiles.

## Rock Page

- Page: Homepage
- Route: `/`
- Layout: `Homepage.aspx`
- Static package: `PageContent/home/`

## Options

### Option A: Event Calendar / Event Item Occurrences

Use this if the tiles should reflect real Rock event registrations.

- Block type: Event Calendar, Event Item List, or Content Channel Dynamic over event data
- Zone: `Sub Feature` or `Section A`
- Filter: public external events, audience All Church or relevant ministry
- Count: 4 featured items

### Option B: Website Promotions / Ads

Use this if staff need editorial control over four homepage promo tiles independent of event registration.

Suggested content channel attributes:

| Attribute | Type | Notes |
|-----------|------|-------|
| Image | Image | Tile artwork. |
| Link Url | URL | Destination. |
| Audience | Defined Value | Optional filter. |
| Starts On | Date | Optional display start. |
| Ends On | Date | Optional display end. |
| DisplayOrder | Integer | Sort order. |

## Recommended First Pass

Keep static tiles for launch parity. Move to Website Promotions if staff want simple editorial control, or Event Calendar if every tile should represent a real Rock event.

## QA

- Four tiles render at desktop size.
- Tiles stack cleanly on mobile.
- Date windows or event filters do not leave the section empty without fallback content.
- Links go to Rock event detail or intended external registration pages.
