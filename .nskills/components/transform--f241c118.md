# Transform

| Field | Value |
|-------|-------|
| Type | `transform` |
| ID | `f241c118` |
| Category | logic |
| Tags | transform, map, data, convert, json, web2 |
| Description | Map and transform data between blocks |

## Configuration

| Setting | Value |
|---------|-------|
| Transform Type | jsonpath |
| Input Mapping | response.data |
| Output Format | json |
| Transform Expression | data.results |

## Documentation

### Transform Block

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


## File Structure

This component would generate the following files:

- `transformer.ts` (frontend-lib)
- `useTransform.ts` (frontend-hooks)

## Integration Points

**Depends on:**
- Http-api (`7618fbd0`)

**Provides to:**
- If-else (`29273b02`)

