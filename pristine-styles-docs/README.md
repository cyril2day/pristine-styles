# pristine-styles-docs

This repository contains the documentation site for `pristine-styles`.

What I moved here (next steps):

- `docs-src/` (site source)
- `docs/` (built site)
- `vite.config.mjs`, `vitest.config.ts`, and `scripts/build-docs.mjs`

For now this is a scaffold. To complete the extraction, move the files listed above into this folder and run:

```bash
pnpm install
pnpm dev
```

After verifying the site runs, you can publish this repository separately and update the core repo README to point to it.
