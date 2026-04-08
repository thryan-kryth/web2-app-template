# Integration Map

How components connect and what data flows between them.

### Web2-frontend-scaffold --> Http-api

- **Source**: Web2-frontend-scaffold (`c11d4402`)
  - Output ports: Frontend App (config)
- **Target**: Http-api (`7618fbd0`)
  - Input ports: Request Input (config)

### Http-api --> Transform

- **Source**: Http-api (`7618fbd0`)
  - Output ports: Response (config)
- **Target**: Transform (`f241c118`)
  - Input ports: Input (config)

### Transform --> If-else

- **Source**: Transform (`f241c118`)
  - Output ports: Output (config)
- **Target**: If-else (`29273b02`)
  - Input ports: Input (config)

### If-else --> Email-smtp

- **Source**: If-else (`29273b02`)
  - Output ports: True Branch (config), False Branch (config)
- **Target**: Email-smtp (`145957c1`)
  - Input ports: Trigger (config)
