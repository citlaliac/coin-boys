# Website CI and deploy status

## This repo (`coin-boys`)

- **GitHub Actions:** There is **no** `.github/workflows/` directory here. CI for automated deploy does **not** run from this repository.
- **Publishing the web build:** Run `npm run build:web` locally, then upload the **`dist/`** folder to your host (or automate that from your **website** repo).

## Your separate website repository

Because hosting lives outside this project, check CI and deploy **there**:

1. On GitHub, open your **website** repository → **Actions** tab. Note the latest workflow runs (green/red) and which branch triggers them.
2. Locally (or on GitHub), open **`.github/workflows/*.yml`** and confirm:
   - **Triggers:** `push`, `pull_request`, `workflow_dispatch`, schedule, etc.
   - **Deploy steps:** FTP, SSH/rsync, GitHub Pages, Netlify/Vercel CLI, etc.
   - **Secrets:** Names like `FTP_*`, `SSH_*`, `TOKEN` — those define how “posting” to production works.
3. If **no** deploy workflow exists, posting is probably **manual** (FTP, cPanel file manager, host dashboard).

Use this file as a checklist whenever you forget where deploy is configured.
