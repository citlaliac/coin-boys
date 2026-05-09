# Using Coin Boys on your website

**Source repo:** [github.com/citlaliac/coin-boys](https://github.com/citlaliac/coin-boys)

## Build the static web app

From this project:

```bash
npm install
npm run build:web
```

Output is in **`dist/`** (HTML, JS, assets). Upload **everything inside `dist/`** to your web server or static host.

## Ways to incorporate it

Pick one (depends on your site):

| Approach | What you do |
|----------|-------------|
| **Subfolder** | Upload `dist/` contents to e.g. `yoursite.com/coin/`. If assets break, you may need an Expo `baseUrl` for that path—see [Expo static hosting](https://docs.expo.dev/guides/publishing-websites/). |
| **Separate subdomain** | Point `coin.yoursite.com` at a folder or host that only serves the `dist/` files. |
| **Link only** | Add a button that opens the deployed URL; no embed. |
| **iframe** | Host the `dist/` build somewhere, then `<iframe src="https://…">` from your main site (check HTTPS and `X-Frame-Options` on the host). |

## Cursor: two folders at once

In Cursor / VS Code: **File → Add Folder to Workspace** and add both this repo and your **website** repo. Search and chat can target either tree; reference this file or the README when asking how to wire the embed.

You can copy this file into your website repo as `INTEGRATION.md` and adjust URLs to match your production paths.
