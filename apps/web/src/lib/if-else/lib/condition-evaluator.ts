export type CompareOperator = 'eq' | 'neq' | 'gt' | 'lt' | 'gte' | 'lte' | 'contains' | 'startsWith';

export interface ConditionConfig {
  conditionType: 'expression' | 'value-compare' | 'exists';
  condition: string;
  compareOperator: CompareOperator;
  compareValue: string;
}

export function evaluateCondition(
  value: unknown,
  config: ConditionConfig,
): boolean {
  if (config.conditionType === 'exists') {
    return value !== undefined && value !== null && value !== '';
  }

  if (config.conditionType === 'expression') {
    try {
      return Boolean(config.condition);
    } catch {
      return false;
    }
  }

  const strValue = String(value ?? '');
  const compare = config.compareValue;

  switch (config.compareOperator) {
    case 'eq': return strValue === compare;
    case 'neq': return strValue !== compare;
    case 'gt': return Number(strValue) > Number(compare);
    case 'lt': return Number(strValue) < Number(compare);
    case 'gte': return Number(strValue) >= Number(compare);
    case 'lte': return Number(strValue) <= Number(compare);
    case 'contains': return strValue.includes(compare);
    case 'startsWith': return strValue.startsWith(compare);
    default: return false;
  }
}
