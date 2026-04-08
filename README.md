# My App

A Web2 application composed with [[N]skills](https://www.nskills.xyz).

## Blueprint: selected nodes

These components were included in this generation:

- **Web2 Frontend** — Next.js scaffold without Web3 dependencies
- **HTTP API** — Make external HTTP requests (GET, POST, PUT, DELETE)
- **Transform** — Map and transform data between blocks
- **If / Else** — Conditional branching based on expressions
- **Email** — Send emails via SMTP or services (SendGrid, Resend, SES)

## Project structure

```
my-app/
├── apps/
│   └── web/                    # Next.js app (install dependencies here)
│       ├── src/
│       ├── package.json
│       └── ...
├── docs/                       # Documentation
├── scripts/                     # Deploy / utility scripts (if generated)
├── .gitignore
└── README.md
```

## Quick start

### Prerequisites

- **Node.js** 18+ and **npm** (comes with Node.js)

### Step-by-step

1. **Clone and enter the project**

   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>
   ```

   ![Clone and enter the project](https://raw.githubusercontent.com/Cradle-app/NSkills/main/apps/web/public/clone-and-enter.png)

2. **Install dependencies** for the Next.js app (this project has no root `package.json`; dependencies live under `apps/web`):

   ```bash
   cd apps/web
   npm install
   ```

   ![Install dependencies](https://raw.githubusercontent.com/Cradle-app/NSkills/main/apps/web/public/install-dep.png)

3. **Environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and set:

   - `RESEND_API_KEY`: Resend API key for sending emails

   ![Environment variables](https://raw.githubusercontent.com/Cradle-app/NSkills/main/apps/web/public/env-var.png)

### Run the web app

```bash
cd apps/web && npm run dev
```

Open [http://localhost:3000](http://localhost:3000).


## Documentation

Check the `docs/` folder for guides that match your blueprint (e.g. frontend setup, API routes).

## License

MIT

---

Generated with [[N]skills](https://www.nskills.xyz)
