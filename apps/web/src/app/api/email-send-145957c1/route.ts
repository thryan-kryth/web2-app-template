import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ success: false, error: 'RESEND_API_KEY not configured' }, { status: 500 });
    }

    const body = await request.json() as {
      to: string | string[];
      subject: string;
      body: string;
      bodyFormat?: 'html' | 'text' | 'markdown';
    };

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'App <noreply@example.com>',
        to: Array.isArray(body.to) ? body.to : [body.to],
        subject: body.subject,
        [(body.bodyFormat ?? 'html') === 'text' ? 'text' : 'html']: body.body,
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return NextResponse.json({ success: false, error: (err as Record<string, string>).message ?? res.statusText }, { status: 500 });
    }

    const data = await res.json() as { id: string };
    return NextResponse.json({ success: true, messageId: data.id });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err instanceof Error ? err.message : 'Internal error' },
      { status: 500 },
    );
  }
}
