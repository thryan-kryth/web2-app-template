import { useMemo } from 'react';
import { evaluateCondition, type ConditionConfig } from '../lib/condition-evaluator';

export function useCondition(value: unknown, config?: Partial<ConditionConfig>) {
  const resolvedConfig: ConditionConfig = {
    conditionType: config?.conditionType ?? 'value-compare',
    condition: config?.condition ?? '',
    compareOperator: config?.compareOperator ?? 'gt',
    compareValue: config?.compareValue ?? '0',
  };

  const result = useMemo(
    () => evaluateCondition(value, resolvedConfig),
    [value, resolvedConfig.condition, resolvedConfig.compareOperator, resolvedConfig.compareValue],
  );

  return { result, isTrue: result, isFalse: !result };
}
