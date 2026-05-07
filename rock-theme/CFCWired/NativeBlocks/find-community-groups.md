# Find Community Group Finder

Potential replacement for static group CTA sections on `/about-us/find-community`.

## Rock Page

- Page: Find Community
- Route: `/about-us/find-community`
- Layout: `FullWidth.aspx`
- Static package: `PageContent/about-us/find-community/`

## Recommended Block

- Block type: Group Finder or Group List, depending on target Rock setup
- Zone: `Section A` after the static intro content, or `Main` if replacing most static content

## Group Type Assumptions

Group type likely maps to community groups, small groups, or group life.

Recommended exposed filters:

- Day of week
- Location or area
- Life stage
- Childcare availability
- Group type/category
- Open to new members

## Import Strategy

1. Import the static page first for parity.
2. Confirm Rock group data quality.
3. Add Group Finder below intro content.
4. Remove or reduce static group cards once the finder is usable.

## QA

- Only public/open groups appear.
- Group leader private information is not exposed.
- Filters work on mobile.
- CTA from group results routes to the correct inquiry or sign-up flow.
- Empty states are friendly and include a contact path.
