import { useState, useCallback } from 'react';
import { httpRequest } from '../lib/http-client';
import type { HttpResponse } from '../types/types';

export function useHttpApi<T = unknown>() {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(async (options?: {
    url?: string;
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    body?: unknown;
    headers?: Record<string, string>;
  }): Promise<HttpResponse<T> | null> => {
    setLoading(true);
    setError(null);

    try {
      const result = await httpRequest<T>({
        method: options?.method ?? 'GET',
        url: options?.url ?? '/api/proxy-7618fbd0',
        headers: options?.headers,
        body: options?.body,
        timeout: 30000,
        retries: 3,
      });
      setData(result.data);
      return result;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Request failed';
      setError(message);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, execute };
}
