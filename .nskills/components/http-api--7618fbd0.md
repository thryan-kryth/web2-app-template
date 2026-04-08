# HTTP API

| Field | Value |
|-------|-------|
| Type | `http-api` |
| ID | `7618fbd0` |
| Category | logic |
| Tags | http, api, rest, fetch, request, web2, integration |
| Description | Make external HTTP requests (GET, POST, PUT, DELETE) |

## Configuration

| Setting | Value |
|---------|-------|
| Method | GET |
| Url | https://api.example.com/data |
| Headers | (none) |
| Body Type | none |
| Body |  |
| Timeout | 30000 |
| Retries | 3 |
| Auth Type | none |
| Response Mapping |  |
| Generate Proxy | Enabled |

## Documentation

### HTTP API Block

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


## File Structure

This component would generate the following files:

- `http-client.ts` (frontend-lib)
- `types.ts` (frontend-types)
- `useHttpApi.ts` (frontend-hooks)
- `proxy-7618fbd0/route.ts` (backend-routes)

## Integration Points

**Depends on:**
- Web2-frontend-scaffold (`c11d4402`)

**Provides to:**
- Transform (`f241c118`)

