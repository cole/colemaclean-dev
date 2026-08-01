# colemaclean.dev

Fall 2022 revision, using [Astro](https://astro.build).

## Deploy

Static build, served by a Cloudflare Workers assets-only Worker
(`wrangler.jsonc`). CI deploys `main` on every push (`.github/workflows/deploy.yml`).

The following is dashboard/API state that `wrangler deploy` won't recreate:

- Repo secrets `CLOUDFLARE_API_TOKEN` (Edit Cloudflare Workers template,
  scoped to the account and the `colemaclean.dev` zone) and
  `CLOUDFLARE_ACCOUNT_ID`.
- `www` is a proxied (orange-cloud) `CNAME` to `colemaclean.dev`, redirected
  to the apex via a Cloudflare Single Redirect rule (`http.host eq
  "www.colemaclean.dev"` → `concat("https://colemaclean.dev",
  http.request.uri.path)`, 301, preserve query string). The Worker's
  `custom_domain` route only attaches to the apex.
