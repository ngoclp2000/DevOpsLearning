# Vue 3 + Vite + GitHub Actions (Build & Pages)

Quick starter to build a Vue 3 app on every push and (optionally) deploy to GitHub Pages.

## Usage

1. Create a new repo and copy this folder structure.
2. Commit & push to `main`.
3. (Optional) Enable GitHub Pages: **Settings → Pages → Source: GitHub Actions**.
4. If deploying to Pages, set `base` in `vite.config.ts` to `/<REPO_NAME>/` or gate it with `GITHUB_PAGES` env.
5. Check the **Actions** tab to see the CI build, and the Pages deploy workflow.

### ENV variables
To expose env vars to Vite at build time, prefix them with `VITE_` and pass via workflow env:
```yaml
- name: Build
  env:
    VITE_API_URL: ${{ vars.VITE_API_URL }}
  run: npm run build
```
