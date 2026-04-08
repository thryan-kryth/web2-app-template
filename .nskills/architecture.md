# Architecture

## Dependency Graph

```mermaid
graph TD
  c11d4402["Web2-frontend-scaffold (web2-frontend-scaffold)"]
  7618fbd0["Http-api (http-api)"]
  f241c118["Transform (transform)"]
  29273b02["If-else (if-else)"]
  145957c1["Email-smtp (email-smtp)"]
  c11d4402 --> 7618fbd0
  7618fbd0 --> f241c118
  f241c118 --> 29273b02
  29273b02 --> 145957c1
```

## Execution / Implementation Order

1. **Web2-frontend-scaffold** (`c11d4402`)
2. **Http-api** (`7618fbd0`)
3. **Transform** (`f241c118`)
4. **If-else** (`29273b02`)
5. **Email-smtp** (`145957c1`)
