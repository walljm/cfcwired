# Contact Us Workflow

Replaces static contact form/CTA behavior on `/about-us/contact-us`.

## Rock Page

- Page: Contact Us
- Route: `/about-us/contact-us`
- Layout: `FullWidth.aspx`
- Static package: `PageContent/about-us/contact-us/`

## Workflow Type

Name: `External Contact Form`

Recommended attributes:

| Attribute | Type | Required | Notes |
|-----------|------|----------|-------|
| First Name | Text | Yes | Submitter first name. |
| Last Name | Text | Yes | Submitter last name. |
| Email | Email | Yes | Used for reply. |
| Phone | Phone Number | No | Optional. |
| Topic | Single Select | Yes | General, Prayer, Groups, Serving, Events, Care, Other. |
| Message | Memo | Yes | Main message. |
| Source Page | Text | No | Default `/about-us/contact-us`. |

## Workflow Actions

1. Show entry form.
2. Send notification to the routed staff inbox.
3. Send confirmation email to submitter.
4. Assign follow-up activity to staff or ministry owner.
5. Mark complete when staff response is logged.

## Rock Block

- Block type: Workflow Entry
- Zone: `Main` or `Section A`
- Workflow Type: `External Contact Form`

## Routing Notes

Start with one staff inbox until ministry-specific routing is confirmed. Add topic-based routing after the basic workflow is tested.

## QA

- Required-field validation works.
- Submitter gets confirmation email.
- Staff notification contains all submitted fields.
- Workflow entry is visible in Rock for follow-up.
- Spam protection is enabled if available in the target Rock instance.
