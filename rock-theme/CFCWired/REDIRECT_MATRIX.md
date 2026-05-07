# URL Redirect Matrix

Use this matrix to redirect legacy static `.html` URLs to Rock routes after cutover.

## Redirect Rule Notes

- Use HTTP 301 permanent redirects.
- Keep query strings when possible.
- Treat trailing slash and non-trailing slash variants as equivalent.
- Apply parent-page redirects only if parent pages are not built as destination content pages.

## Canonical Redirects

| Legacy URL | Rock Route | Status |
|-----------|------------|--------|
| `/index.html` | `/` | 301 |
| `/about-us/index.html` | `/about-us` | 301 |
| `/about-us/statement-of-faith.html` | `/about-us/statement-of-faith` | 301 |
| `/about-us/meet-the-team.html` | `/about-us/meet-the-team` | 301 |
| `/about-us/find-community.html` | `/about-us/find-community` | 301 |
| `/about-us/contact-us.html` | `/about-us/contact-us` | 301 |
| `/come-visit/index.html` | `/come-visit` | 301 |
| `/watch-read/messages.html` | `/watch-read/messages` | 301 |
| `/get-involved/core-classes.html` | `/get-involved/core-classes` | 301 |
| `/get-involved/serve.html` | `/get-involved/serve` | 301 |
| `/for-my-family/children.html` | `/for-my-family/children` | 301 |
| `/for-my-family/middle-school.html` | `/for-my-family/middle-school` | 301 |
| `/for-my-family/high-school.html` | `/for-my-family/high-school` | 301 |
| `/request-prayer.html` | `/request-prayer` | 301 |

## Optional Parent Redirects

Use these only when parent pages are navigation containers without body content.

| Legacy URL | Rock Route | Status |
|-----------|------------|--------|
| `/watch-read/index.html` | `/watch-read/messages` | 301 |
| `/get-involved/index.html` | `/get-involved/core-classes` | 301 |
| `/for-my-family/index.html` | `/for-my-family/children` | 301 |

## Verification

1. Test each redirect from an incognito browser session.
2. Confirm each source returns one hop directly to destination.
3. Confirm UTM query strings survive redirect.
4. Confirm no redirect loops for slash and no-slash variants.
5. Confirm sitemap/canonical tags reference Rock routes only.
