# If/Else Conditional Block

# If/Else Conditional Block

Evaluates conditions and branches execution accordingly.

## Configuration
- **Condition Type**: value-compare
- **Operator**: gt

## Usage

```typescript
import { evaluateCondition } from '@/lib/if-else/lib/condition-evaluator';

const result = evaluateCondition(myValue, {
  conditionType: 'value-compare',
  condition: '',
  compareOperator: 'eq',
  compareValue: 'expected',
});

if (result) {
  // true branch
} else {
  // false branch
}
```
