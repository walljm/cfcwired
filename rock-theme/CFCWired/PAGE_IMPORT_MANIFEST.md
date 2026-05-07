# Rock Page Import Manifest

Use this manifest as the working sheet while creating pages and HTML Content blocks in Rock. It consolidates the per-page `notes.md` files into one ordered import list.

## Navigation Parent Pages

The static site has dropdown groups that may need parent pages in the Rock page tree even when they do not have imported content packages.

| Parent Page | Suggested Route | Purpose | Recommended Setup |
|-------------|-----------------|---------|-------------------|
| Watch & Read | `/watch-read` | Parent for Messages | Create as a navigation parent; redirect to `/watch-read/messages` if users can land on it. |
| Get Involved | `/get-involved` | Parent for Core Classes and Serve | Create as a navigation parent; redirect to `/get-involved/core-classes` or build a future landing page. |
| For My Family | `/for-my-family` | Parent for Children, Middle School, and High School | Create as a navigation parent; redirect to `/for-my-family/children` or build a future landing page. |

## Page Creation Order

| Order | Rock Page | Parent | Route | Layout | Browser Title |
|-------|-----------|--------|-------|--------|---------------|
| 1 | Homepage | Site root | `/` | `Homepage.aspx` | `Christian Fellowship Church` |
| 2 | About Us | Site root | `/about-us` | `FullWidth.aspx` | `About Us - Christian Fellowship Church` |
| 3 | Statement of Faith | About Us | `/about-us/statement-of-faith` | `FullWidth.aspx` | `Statement of Faith - Christian Fellowship Church` |
| 4 | Meet the Team | About Us | `/about-us/meet-the-team` | `FullWidth.aspx` | `Meet the Team - Christian Fellowship Church` |
| 5 | Find Community | About Us | `/about-us/find-community` | `FullWidth.aspx` | `Find Community - Christian Fellowship Church` |
| 6 | Contact Us | About Us | `/about-us/contact-us` | `FullWidth.aspx` | `Contact Us - Christian Fellowship Church` |
| 7 | Come Visit | Site root | `/come-visit` | `FullWidth.aspx` | `Come Visit - Christian Fellowship Church` |
| 8 | Watch & Read | Site root | `/watch-read` | Optional parent | Optional redirect parent |
| 9 | Messages | Watch & Read | `/watch-read/messages` | `FullWidth.aspx` | `Messages - Christian Fellowship Church` |
| 10 | Get Involved | Site root | `/get-involved` | Optional parent | Optional redirect parent |
| 11 | Core Classes | Get Involved | `/get-involved/core-classes` | `FullWidth.aspx` | `Core Classes - Christian Fellowship Church` |
| 12 | Serve | Get Involved | `/get-involved/serve` | `FullWidth.aspx` | `Serve - Christian Fellowship Church` |
| 13 | For My Family | Site root | `/for-my-family` | Optional parent | Optional redirect parent |
| 14 | Children | For My Family | `/for-my-family/children` | `FullWidth.aspx` | `Children - Christian Fellowship Church` |
| 15 | Middle School | For My Family | `/for-my-family/middle-school` | `FullWidth.aspx` | `Middle School - Christian Fellowship Church` |
| 16 | High School | For My Family | `/for-my-family/high-school` | `FullWidth.aspx` | `High School - Christian Fellowship Church` |
| 17 | Request Prayer | Site root | `/request-prayer` | `FullWidth.aspx` | `Request Prayer - Christian Fellowship Church` |

## HTML Content Blocks

Create two HTML Content blocks for each imported page: one in the `Feature` zone and one in the listed body zone.

| Rock Page | Feature Zone Payload | Body Zone | Body Payload |
|-----------|----------------------|-----------|--------------|
| Homepage | `PageContent/home/feature.html` | `Sub Feature` | `PageContent/home/main.html` |
| About Us | `PageContent/about-us/feature.html` | `Main` | `PageContent/about-us/main.html` |
| Statement of Faith | `PageContent/about-us/statement-of-faith/feature.html` | `Main` | `PageContent/about-us/statement-of-faith/main.html` |
| Meet the Team | `PageContent/about-us/meet-the-team/feature.html` | `Main` | `PageContent/about-us/meet-the-team/main.html` |
| Find Community | `PageContent/about-us/find-community/feature.html` | `Main` | `PageContent/about-us/find-community/main.html` |
| Contact Us | `PageContent/about-us/contact-us/feature.html` | `Main` | `PageContent/about-us/contact-us/main.html` |
| Come Visit | `PageContent/come-visit/feature.html` | `Main` | `PageContent/come-visit/main.html` |
| Messages | `PageContent/watch-read/messages/feature.html` | `Main` | `PageContent/watch-read/messages/main.html` |
| Core Classes | `PageContent/get-involved/core-classes/feature.html` | `Main` | `PageContent/get-involved/core-classes/main.html` |
| Serve | `PageContent/get-involved/serve/feature.html` | `Main` | `PageContent/get-involved/serve/main.html` |
| Children | `PageContent/for-my-family/children/feature.html` | `Main` | `PageContent/for-my-family/children/main.html` |
| Middle School | `PageContent/for-my-family/middle-school/feature.html` | `Main` | `PageContent/for-my-family/middle-school/main.html` |
| High School | `PageContent/for-my-family/high-school/feature.html` | `Main` | `PageContent/for-my-family/high-school/main.html` |
| Request Prayer | `PageContent/request-prayer/feature.html` | `Main` | `PageContent/request-prayer/main.html` |

## Meta Descriptions

| Rock Page | Meta Description |
|-----------|------------------|
| Homepage | `Christian Fellowship Church - A Spirit-directed church discipling people to know Jesus as Lord` |
| About Us | `Learn about Christian Fellowship Church, our mission, vision, values, and story.` |
| Statement of Faith | `Statement of Faith - Christian Fellowship Church's core beliefs and doctrinal statements` |
| Meet the Team | `Meet the staff team at Christian Fellowship Church.` |
| Find Community | `Find community through groups and connection opportunities at Christian Fellowship Church.` |
| Contact Us | `Contact Christian Fellowship Church.` |
| Come Visit | `Plan your visit to Christian Fellowship Church in Ashburn, Virginia.` |
| Messages | `Watch messages from Christian Fellowship Church.` |
| Core Classes | `Core classes and spiritual formation opportunities at Christian Fellowship Church.` |
| Serve | `Find ways to serve at Christian Fellowship Church.` |
| Children | `Children ministry at Christian Fellowship Church.` |
| Middle School | `Middle school ministry at Christian Fellowship Church.` |
| High School | `High school ministry at Christian Fellowship Church.` |
| Request Prayer | `Request prayer from Christian Fellowship Church.` |

## Block Naming Convention

Suggested block names:

- `CFC <Page Name> Feature`
- `CFC <Page Name> Main`

Example: `CFC Request Prayer Feature` and `CFC Request Prayer Main`.

## Import Notes

- Do not paste page package files into `Header`, `Navigation`, or `Footer`; those are handled by `SiteBlocks/`.
- Do not create body blocks for optional navigation parent pages unless you are building a real landing page for that route.
- Keep static imports in place until each native replacement in `NativeBlocks/` is configured and verified.
- After every few pages, browse as an anonymous user and as a Rock admin to make sure the public layout and admin toolbar both remain usable.
