# Contact Workflow Build Sheet

This is the execution sheet for building the `External Contact Form` workflow referenced in `contact-workflow.md`.

## Workflow Summary

- Workflow Type Name: `External Contact Form`
- Trigger: Workflow Entry block on `/about-us/contact-us`
- Block Zone: `Main` (preferred) or `Section A`

## Attributes (Exact)

| Key | Label | Field Type | Required | Default | Notes |
|-----|-------|------------|----------|---------|-------|
| `FirstName` | First Name | Text | Yes | | |
| `LastName` | Last Name | Text | Yes | | |
| `Email` | Email | Email | Yes | | Used for confirmations. |
| `Phone` | Phone | Phone Number | No | | |
| `Topic` | Topic | Single Select | Yes | General | Values: General, Prayer, Groups, Serving, Events, Care, Other |
| `Message` | Message | Memo | Yes | | |
| `SourcePage` | Source Page | Text | No | /about-us/contact-us | Keep for auditing/reporting. |
| `SubmittedOn` | Submitted On | Date Time | No | Current Date/Time | Optional audit field. |

## Topic Routing Matrix

Replace placeholder inboxes before launch.

| Topic | Destination Team | Notification Address | Follow-up SLA |
|------|------------------|----------------------|---------------|
| General | Front Office | office@example.org | 2 business days |
| Prayer | Prayer Team | prayer@example.org | 1 business day |
| Groups | Groups Team | groups@example.org | 2 business days |
| Serving | Volunteer Coordinator | serve@example.org | 2 business days |
| Events | Events Team | events@example.org | 2 business days |
| Care | Care Team | care@example.org | 1 business day |
| Other | Front Office | office@example.org | 2 business days |

## Workflow Action Sequence

1. Entry Form action captures all fields.
2. Route Decision action evaluates `Topic`.
3. Send Notification action sends to routed team inbox.
4. Send Confirmation action sends submitter email.
5. Create Follow-Up action assigns owner/activity.
6. Complete action closes workflow when follow-up is recorded.

## Staff Notification Email Template

Subject:
`New Contact Form Submission: {{ Workflow | Attribute:'Topic' }} - {{ Workflow | Attribute:'FirstName' }} {{ Workflow | Attribute:'LastName' }}`

Body:
`A new contact form submission was received.`

`Name: {{ Workflow | Attribute:'FirstName' }} {{ Workflow | Attribute:'LastName' }}`
`Email: {{ Workflow | Attribute:'Email' }}`
`Phone: {{ Workflow | Attribute:'Phone' }}`
`Topic: {{ Workflow | Attribute:'Topic' }}`
`Source Page: {{ Workflow | Attribute:'SourcePage' }}`

`Message:`
`{{ Workflow | Attribute:'Message' }}`

## Submitter Confirmation Email Template

Subject:
`We received your message - Christian Fellowship Church`

Body:
`Thank you for contacting Christian Fellowship Church.`

`Our team has received your message and will follow up soon.`

`Summary:`
`Topic: {{ Workflow | Attribute:'Topic' }}`
`Submitted By: {{ Workflow | Attribute:'FirstName' }} {{ Workflow | Attribute:'LastName' }}`

`If you need immediate assistance, please call the church office.`

## Validation Checklist

- Required fields block submission when empty.
- Invalid email formats are rejected.
- Topic routes to expected inbox per matrix.
- Staff notification contains all submitted fields.
- Submitter confirmation email is delivered.
- Workflow entries are visible to assigned teams.
