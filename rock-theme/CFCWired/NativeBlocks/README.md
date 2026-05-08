# Native Rock Block Specs

These specs describe the second pass after static parity is imported: replacing static HTML sections with native Rock blocks, workflows, content channels, and dynamic Lava templates.

## Recommended Order

1. Request Prayer: use Rock's Prayer Request Entry block.
2. Contact Us: create a Contact Us workflow and Workflow Entry block.
3. Meet the Team: create Staff Members content channel and dynamic Lava grid.
4. Find Community: evaluate Group Finder configuration.
5. Homepage Events: configure Calendar Item Occurrence List by Audience Lava in homepage `MainContent`.
6. Messages: decide whether to keep Subsplash embed or move to Rock media.
7. Core Classes and Serve: wire static CTAs to Rock registrations or content channels.

## Specs

| Area | Spec |
|------|------|
| Staff content channel | `staff-members.md` |
| Staff import guide | `staff-members-import-guide.md` |
| Staff CSV template | `staff-members-import-template.csv` |
| Staff grid Lava | `staff-grid.lava` |
| Request Prayer | `prayer-request.md` |
| Contact workflow | `contact-workflow.md` |
| Contact workflow build sheet | `contact-workflow-build-sheet.md` |
| Group Finder | `find-community-groups.md` |
| Homepage events/promotions | `homepage-events.md` |
| Messages/media | `messages-media.md` |
| Core Classes and Serve | `classes-and-serve.md` |
| Living on Mission stories | `living-on-mission-stories.md` |
| Living on Mission Lava | `living-on-mission-stories.lava` |
| Living on Mission detail Lava | `living-on-mission-story-detail.lava` |
| Living on Mission CSV | `living-on-mission-stories-import-template.csv` |

## Scope

These are implementation specs, not live Rock exports. Use them while configuring the Rock admin UI after the static page packages are loaded.
