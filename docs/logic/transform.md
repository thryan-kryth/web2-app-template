# Transform Block

# Transform Block

Maps and transforms data between workflow blocks.

## Configuration
- **Transform Type**: jsonpath
- **Output Format**: json

## Usage

```typescript
import { transform } from '@/lib/transform/lib/transformer';

const result = transform(inputData, {
  type: 'jsonpath',
  expression: 'data.items',
  outputFormat: 'json',
});
```
