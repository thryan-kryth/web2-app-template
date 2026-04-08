import type { EmailOptions, EmailResult } from '../types/types';

export async function sendEmail(options: EmailOptions): Promise<EmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { success: false, error: 'RESEND_API_KEY not configured' };

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: `${options.from?.name ?? 'App'} <${options.from?.email ?? 'noreply@example.com'}>`,
        to: Array.isArray(options.to) ? options.to : [options.to],
        subject: options.subject,
        [options.bodyFormat === 'text' ? 'text' : 'html']: options.body,
        reply_to: options.replyTo,
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return { success: false, error: (err as Record<string, string>).message ?? res.statusText };
    }

    const data = await res.json() as { id: string };
    return { success: true, messageId: data.id };
  } catch (err) {
    return { success: false, error: err instanceof Error ? err.message : 'Failed to send email' };
  }
}
