import { useMemo } from 'react';
import { transform, type TransformOptions } from '../lib/transformer';

export function useTransform<T = unknown>(
  input: unknown,
  options?: Partial<TransformOptions>,
): T {
  const opts: TransformOptions = {
    type: options?.type ?? 'jsonpath',
    expression: options?.expression ?? `data.results`,
    outputFormat: options?.outputFormat ?? 'json',
  };

  return useMemo(() => transform(input, opts) as T, [input, opts.type, opts.expression, opts.outputFormat]);
}
