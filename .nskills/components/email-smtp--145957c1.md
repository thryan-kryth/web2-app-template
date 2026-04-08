# Email

| Field | Value |
|-------|-------|
| Type | `email-smtp` |
| ID | `145957c1` |
| Category | logic |
| Tags | email, smtp, sendgrid, resend, notification, web2 |
| Description | Send emails via SMTP or services (SendGrid, Resend, SES) |

## Configuration

| Setting | Value |
|---------|-------|
| Provider | resend |
| To |  |
| Subject | Workflow Results |
| Body Template |  |
| Body Format | html |
| From Name |  |
| From Email |  |

## Environment Variables

| Key | Description | Required | Secret | Default |
|-----|-------------|----------|--------|---------|
| `RESEND_API_KEY` | Resend API key for sending emails | Yes | No |  |

## Scripts

| Name | Command |
|------|---------|
| `email:test` | `tsx src/lib/email/test-send.ts` |

## Documentation

### Email Block

# Email Block

Send emails using resend.

## Configuration
- **Provider**: resend
- **Format**: html
- **API Route**: `/api/email-send-145957c1`

## Setup

1. Set the required environment variable(s) for your provider.
2. Use the `sendEmail` function or hit the `/api/email-send-145957c1` endpoint.

## Usage

```typescript
import { sendEmail } from '@/lib/email-smtp/lib/email-sender';

const result = await sendEmail({
  to: 'user@example.com',
  subject: 'Hello',
  body: '<h1>Hello World</h1>',
  bodyFormat: 'html',
});
```


## File Structure

This component would generate the following files:

- `email-sender.ts` (frontend-lib)
- `types.ts` (frontend-types)
- `email-send-145957c1/route.ts` (backend-routes)

## Integration Points

**Depends on:**
- If-else (`29273b02`)

