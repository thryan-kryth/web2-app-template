export type TransformType = 'jq' | 'jsonpath' | 'template' | 'javascript';
export type OutputFormat = 'json' | 'text' | 'csv';

export interface TransformOptions {
  type: TransformType;
  expression: string;
  outputFormat: OutputFormat;
}

export function getByPath(obj: unknown, path: string): unknown {
  if (!path) return obj;
  const parts = path.replace(/\[(d+)\]/g, '.$1').split('.');
  let current: unknown = obj;
  for (const part of parts) {
    if (current == null) return undefined;
    current = (current as Record<string, unknown>)[part];
  }
  return current;
}

export function templateReplace(template: string, data: Record<string, unknown>): string {
  return template.replace(/\{\{\s*([\w.\[\]]+)\s*\}\}/g, (_, path: string) => {
    const value = getByPath(data, path);
    return value != null ? String(value) : '';
  });
}

export function transform(input: unknown, options: TransformOptions): unknown {
  const { type, expression, outputFormat } = options;

  let result: unknown;

  switch (type) {
    case 'jsonpath':
      result = getByPath(input, expression);
      break;
    case 'template':
      result = templateReplace(expression, (input ?? {}) as Record<string, unknown>);
      break;
    case 'javascript':
      try {
        const fn = new Function('input', `return (${expression})`);
        result = fn(input);
      } catch (err) {
        result = { error: err instanceof Error ? err.message : 'Transform failed' };
      }
      break;
    default:
      result = input;
  }

  switch (outputFormat) {
    case 'text':
      return String(result ?? '');
    case 'csv':
      if (Array.isArray(result)) {
        if (result.length === 0) return '';
        const headers = Object.keys(result[0] as Record<string, unknown>);
        const rows = result.map((r) =>
          headers.map((h) => JSON.stringify((r as Record<string, unknown>)[h] ?? '')).join(','),
        );
        return [headers.join(','), ...rows].join('\n');
      }
      return String(result ?? '');
    default:
      return result;
  }
}
