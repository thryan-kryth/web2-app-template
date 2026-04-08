# HTTP API Block

# HTTP API Block

Makes external HTTP requests with retry logic and optional proxy.

## Configuration
- **Method**: GET
- **URL**: https://api.example.com/data
- **Timeout**: 30000ms
- **Retries**: 3
- **Auth**: none
- **Proxy**: Enabled (server-side at /api/proxy-7618fbd0)

## Usage

```typescript
import { useHttpApi } from '@/lib/http-api/hooks/useHttpApi';

function MyComponent() {
  const { data, loading, error, execute } = useHttpApi();

  useEffect(() => { execute(); }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```
