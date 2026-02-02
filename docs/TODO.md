# Project Status & Todo List

> Last updated: 2026-02-02

---

## Completed Pages

All pages are in `src/`:

- [x] **Homepage** (`src/index.html`) - Hero, This Sunday, Coming Up, Experience CFC, Discipleship Pathway sections
- [x] **About Us** (`src/about-us/index.html`) - Mission, Vision, Values (5 cards), History section
- [x] **Come Visit** (`src/come-visit/index.html`) - Hero with PYV button, service times cards (Sun/Wed/Online/Hispana), welcome message, FAQ accordion (6 items), What About My Kids
- [x] **Find Community** (`src/about-us/find-community.html`) - Importance of community, Types of community (4 cards), Find a Group CTA, Men's/Women's ministry
- [x] **Contact Us** (`src/about-us/contact-us.html`) - Form placeholder, contact info cards
- [x] **Messages** (`src/watch-read/messages.html`) - Live stream CTA, video placeholder, message cards, podcast section
- [x] **Core Classes** (`src/get-involved/core-classes.html`) - Spiritual Growth, The Essentials (Square One, Rooted), Bible study classes, Following God's Voice, Living on Mission
- [x] **Request Prayer** (`src/request-prayer.html`) - Intro text, CTAs to Rock RMS (prayer request, prayer wall, care request), prayer warriors section
- [x] **Children** (`src/for-my-family/children.html`) - Programs (Nursery/K, KidsZone, Route 54), Check-in, Wednesday nights, Baptism & Dedication, Wellness policy
- [x] **Middle School** (`src/for-my-family/middle-school.html`) - MSU, Mid-Nite, U-Lead, For Your Pre-Teens
- [x] **High School** (`src/for-my-family/high-school.html`) - HSU, U-Nite, U-Lead, For Your Teens
- [x] **Statement of Faith** (`src/about-us/statement-of-faith.html`) - Core beliefs, Essential for Salvation, welcome statement
- [x] **Meet the Team** (`src/about-us/meet-the-team.html`) - Staff directory with 27 members
- [x] **Stories** (`src/watch-read/stories.html`) - Testimonies page with Subsplash placeholder, Share Your Story CTA
- [x] **Serve** (`src/get-involved/serve.html`) - Why Serve, Where to Serve (On Campus, Local, Global)

## Completed Components

- [x] Header with announcement banner (dismissible with localStorage)
- [x] Navigation with dropdowns and mobile offcanvas
- [x] Footer with all sections (contact, quick menu, hours, newsletter, app downloads)
- [x] CSS/LESS styling with brand colors
- [x] Responsive design

---

## Bugs to Fix

- [x] `core-classes.html` - Duplicated navigation HTML (fixed)
- [x] `messages.html` - Duplicated navigation HTML (fixed)
- [x] Inconsistent footer implementations across pages (standardized with logo and local app store images)
- [x] Image path errors in some pages (fixed `../../images` to `../images` in for-my-family and about-us pages)
- [x] Pages referencing `logo-white.svg` (updated to use `CFC_Logo_White.png`)
- [x] "F and S: Closed" vs "F & S: Closed" inconsistency (standardized to "F & S: Closed")
- [x] Service times format inconsistency (standardized to "Sunday: In Person: 9:30a & 11:00a" and "Watch from Anywhere Online: 9:30 & 11:00a")
- [x] App Store alt text inconsistency (standardized to "App Store" and "Google Play")
- [x] "CFCWired Weekly" vs "CFC Weekly" (standardized to "CFC Weekly")
- [x] Phone number format in index.html (fixed "1.703.729.3900" to "703.729.3900")
- [x] "Quick Menu:" with colon in index.html (removed colon for consistency)

---

## Pages Not Yet Built

All main pages have been built! The following pages from cfcwired.org are now complete:

- [x] Statement of Faith - Done
- [x] Meet the Team - Done
- [x] Stories - Done
- [x] Serve - Done

---

## Improvements Needed

- [x] Standardize footer across all pages (logo, app store images, office hours, service times - all consistent)
- [x] Standardized includes templates (`includes/header.html`, `includes/footer.html`) - ready for Rock RMS Lava conversion
- [x] Add missing images (Mid-Nite and U-Nite images added)
- [x] Simplify Request Prayer page to match live site (now has intro text + CTAs to Rock RMS)
- [x] Add proper meta tags and Open Graph images (added to all 15 pages)
- [x] Add favicon (using cfc-logo-light.png)
- [ ] Add staff photos to Meet the Team page (requires actual photo files - currently using placeholder icons)

---

## Navigation Structure

**Current Implementation (Complete):**

```
├── About Us → About Us, Statement of Faith, Meet the Team, Find Community, Contact Us
├── Come Visit (no dropdown)
├── Watch/Read → Messages, Stories
├── Get Involved → Core Classes, Serve
├── For My Family → Children, Middle School, High School
└── [Plan Your Visit] button
```

**Links to Rock RMS (no page needed, just nav link):**

```
└── Give → rock.cfcwired.org/give
```

---

## Pages Handled by Rock RMS

These redirect to Rock RMS or external sites - don't build, just link to them:

| Feature             | URL                                 |
| ------------------- | ----------------------------------- |
| Give                | `rock.cfcwired.org/give`            |
| Hispana CFC         | `hispanacfc.com`                    |
| Group Finder        | `myrock.cfcwired.org/groupfinder`   |
| Events              | `myrock.cfcwired.org/events`        |
| Plan Your Visit     | `myrock.cfcwired.org/pyv`           |
| Prayer Wall         | `myrock.cfcwired.org/PrayerWall`    |
| Mobile Check-in     | `myrock.cfcwired.org/mobilecheckin` |
| Prayer Request Form | `myrock.cfcwired.org/prayerrequest` |
| Care Request        | `myrock.cfcwired.org/carerequest`   |

---

## Pages That Don't Exist (skip)

These were in navigation analysis but return 404:

- Hospital Visitation
- Weddings
- Congregacion Hispana page (use hispanacfc.com link instead)
- Local Outreach
- Global Outreach

---

## RockRMS Integration Notes

All forms and dynamic content have placeholder notes for RockRMS integration:

| Feature             | Rock Block                 |
| ------------------- | -------------------------- |
| Contact form        | Workflow Entry block       |
| Prayer request form | Workflow                   |
| Events section      | Event Calendar             |
| Messages            | Content Channel View block |
| Group finder        | Group Finder block         |
