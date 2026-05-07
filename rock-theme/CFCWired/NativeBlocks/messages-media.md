# Messages and Media Strategy

Potential replacement for the static Subsplash embed on `/watch-read/messages`.

## Rock Page

- Page: Messages
- Route: `/watch-read/messages`
- Layout: `FullWidth.aspx`
- Static package: `PageContent/watch-read/messages/`

## Options

### Option A: Keep Subsplash Embed

Best when Subsplash remains the source of truth for video hosting, series artwork, and message metadata.

- Keep the static embed block in `main.html`.
- QA iframe responsiveness and privacy settings.

### Option B: Rock Media Features

Best when Rock should become the source of truth for message archive content.

Recommended fields:

- Series
- Title
- Speaker
- Date
- Scripture
- Video URL or file
- Audio URL or file
- Description
- Thumbnail

## Recommendation

Keep Subsplash for the first Rock launch unless CFC is ready to migrate the full archive. A partial media migration risks inconsistent archives and staff confusion.

## QA

- Current/latest message is easy to find.
- Iframe or media block works on mobile.
- Page load is acceptable.
- Search/filter expectations are documented before moving away from Subsplash.
