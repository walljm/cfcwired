# Page-by-Page QA Script

Use this pass/fail script after page imports in Rock.

## Scoring

- Pass: behavior and content match expected output.
- Fail: mismatch, broken behavior, or missing content.
- Blocker: issue prevents launch for that page.

## Global Checks (Run On Every Page)

- [ ] Header, navigation, and footer render correctly.
- [ ] Hero/content blocks display with expected spacing.
- [ ] No broken images.
- [ ] No broken internal links.
- [ ] Mobile layout works at 375px width.
- [ ] Admin toolbar remains usable while logged in.
- [ ] Browser title matches manifest.
- [ ] Meta description is set and page-specific.

## Per-Page Checks

| Page | Route | Layout | Feature Block | Body Block | Native Follow-up | Result |
|------|-------|--------|---------------|------------|------------------|--------|
| Homepage | `/` | `Homepage.aspx` | [ ] | [ ] | Events tiles strategy chosen | [ ] Pass [ ] Fail [ ] Blocker |
| About Us | `/about-us` | `FullWidth.aspx` | [ ] | [ ] | None required | [ ] Pass [ ] Fail [ ] Blocker |
| Statement of Faith | `/about-us/statement-of-faith` | `FullWidth.aspx` | [ ] | [ ] | None required | [ ] Pass [ ] Fail [ ] Blocker |
| Meet the Team | `/about-us/meet-the-team` | `FullWidth.aspx` | [ ] | [ ] | Staff channel plan confirmed | [ ] Pass [ ] Fail [ ] Blocker |
| Find Community | `/about-us/find-community` | `FullWidth.aspx` | [ ] | [ ] | Group Finder decision recorded | [ ] Pass [ ] Fail [ ] Blocker |
| Contact Us | `/about-us/contact-us` | `FullWidth.aspx` | [ ] | [ ] | Workflow plan confirmed | [ ] Pass [ ] Fail [ ] Blocker |
| Come Visit | `/come-visit` | `FullWidth.aspx` | [ ] | [ ] | None required | [ ] Pass [ ] Fail [ ] Blocker |
| Messages | `/watch-read/messages` | `FullWidth.aspx` | [ ] | [ ] | Subsplash vs Rock media decision recorded | [ ] Pass [ ] Fail [ ] Blocker |
| Core Classes | `/get-involved/core-classes` | `FullWidth.aspx` | [ ] | [ ] | Registration mapping confirmed | [ ] Pass [ ] Fail [ ] Blocker |
| Serve | `/get-involved/serve` | `FullWidth.aspx` | [ ] | [ ] | Serve content channel decision recorded | [ ] Pass [ ] Fail [ ] Blocker |
| Children | `/for-my-family/children` | `FullWidth.aspx` | [ ] | [ ] | None required | [ ] Pass [ ] Fail [ ] Blocker |
| Middle School | `/for-my-family/middle-school` | `FullWidth.aspx` | [ ] | [ ] | None required | [ ] Pass [ ] Fail [ ] Blocker |
| High School | `/for-my-family/high-school` | `FullWidth.aspx` | [ ] | [ ] | None required | [ ] Pass [ ] Fail [ ] Blocker |
| Request Prayer | `/request-prayer` | `FullWidth.aspx` | [ ] | [ ] | Prayer Entry block plan confirmed | [ ] Pass [ ] Fail [ ] Blocker |

## Navigation Parent Checks

- [ ] `/watch-read` parent behaves as expected (redirect or landing page).
- [ ] `/get-involved` parent behaves as expected (redirect or landing page).
- [ ] `/for-my-family` parent behaves as expected (redirect or landing page).

## Sign-off

- QA Date:
- QA Owner:
- Blockers Remaining:
- Launch Recommendation: [ ] Go [ ] No-Go
