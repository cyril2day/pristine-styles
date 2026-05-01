---
name: Extract documentation site
about: Steps taken to extract docs into a separate repository
---

I extracted the `docs-src/` source, `docs/` build output, Vite and Vitest configs, and build script
into a new scaffold at `pristine-styles-docs/`.

Next steps:

- Move the real `docs-src/` and `docs/` directories into `pristine-styles-docs/`.
- Update the remote repository (create a new GitHub repo) and push the `pristine-styles-docs/` contents.
- Update README in core repo to reference the new docs repo.
