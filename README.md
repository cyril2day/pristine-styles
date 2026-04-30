# Pristine Styles

Pristine Styles is a small SCSS and CSS foundation for reusable projects. It is built around design tokens, mobile-first responsive defaults, and theme-aware semantic aliases.

## What It Includes

- `normalize.css`-based reset via the main SCSS entrypoint.
- A stable color palette with neutral scale aliases.
- Semantic theme tokens for background, surface, text, links, borders, shadows, and focus states.
- Mobile-first breakpoint tokens exposed as SCSS variables and CSS custom properties.
- Typography, spacing, positioning, display, border, radius, opacity, shadow, and transition tokens.

## File Map

- `scss/index.scss`: main Sass entrypoint.
- `scss/_normalize.scss`: local normalize.css copy used by the build.
- `scss/tokens/_index.scss`: forwards the token modules.
- `scss/tokens/_colors.scss`: palette tokens.
- `scss/tokens/_semantic.scss`: theme-aware aliases and mode overrides.
- `scss/tokens/_breakpoints.scss`: mobile-first breakpoint tokens.
- `scss/tokens/_typography.scss`: font stacks, type scale, and responsive type steps.
- `scss/tokens/_box-model.scss`: spacing, border, and radius tokens.
- `scss/tokens/_positioning.scss`: offset and inset tokens that reuse spacing.
- `scss/tokens/_display.scss`: z-index and opacity tokens.
- `scss/tokens/_others.scss`: shadows and transitions.

## Usage

Use the compiled CSS when you want a drop-in base stylesheet:

```html
<link rel="stylesheet" href="pristine-styles.css">
```

Use the Sass entrypoint when you want to compose tokens into another stylesheet. In this repository, or in a project that adds the repository root to Sass load paths, the entrypoint is:

```scss
@use "scss/index";
```

If you want manual dark mode, add a `dark` class or `data-theme="dark"` to the root element.

## Build

Install dependencies and rebuild the distributed CSS:

```bash
pnpm install
pnpm build
```

The build writes `pristine-styles.css` from `scss/index.scss`.