import type { HttpRequestConfig, HttpResponse } from '../types/types';

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function httpRequest<T = unknown>(
  config: HttpRequestConfig,
): Promise<HttpResponse<T>> {
  const { method, url, headers = {}, body, timeout = 30000, retries = 3 } = config;

  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= retries; attempt++) {
    if (attempt > 0) {
      await sleep(Math.min(1000 * Math.pow(2, attempt - 1), 10000));
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);
    const start = Date.now();

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', ...headers },
        body: body != null ? JSON.stringify(body) : undefined,
        signal: controller.signal,
      });

      clearTimeout(timer);

      const data = (await res.json().catch(() => null)) as T;
      const responseHeaders: Record<string, string> = {};
      res.headers.forEach((v, k) => { responseHeaders[k] = v; });

      if (!res.ok && attempt < retries) {
        lastError = new Error(`HTTP ${res.status}: ${res.statusText}`);
        continue;
      }

      return { data, status: res.status, statusText: res.statusText, headers: responseHeaders, duration: Date.now() - start };
    } catch (err) {
      clearTimeout(timer);
      lastError = err instanceof Error ? err : new Error(String(err));
      if (attempt >= retries) break;
    }
  }

  throw lastError ?? new Error('Request failed');
}
