import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const targetUrl = 'https://api.example.com/data';
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };

    
    

    

    const res = await fetch(targetUrl, {
      method: 'GET',
      headers,
      
    });

    const data = await res.json().catch(() => ({}));
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Proxy request failed' },
      { status: 500 },
    );
  }
}
