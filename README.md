# Pristine Styles

**Pristine Styles** is a small, reusable CSS foundation built around design tokens. It provides a modern browser reset, a stable color palette, semantic theme aliases, mobile-first responsive typography, and spacing, shadow, and transition tokens — all exposed as CSS custom properties.

It works as a plain CSS stylesheet you can drop into any project, or as a Sass source you can compose into your own build pipeline.

---

## Choose Your Integration Path

The right path depends on a single question: **does your project have a Sass build step?**

If you're working with plain HTML/CSS, or a framework where you just need a global stylesheet, use the **CSS path**. If you have a Sass pipeline and want compile-time utilities like the responsive breakpoint mixin, use the **Sass path**.

---

### Path A — Plain CSS

This is the zero-configuration option. Download or link `pristine-styles.css` and the reset and all tokens are immediately available as CSS custom properties.

```html
<link rel="stylesheet" href="pristine-styles.css">
```

Then use the tokens anywhere in your own styles:

```css
body {
  background-color: var(--color-background);
  color: var(--color-text);
  font-family: var(--font-family-sans);
}

.card {
  background-color: var(--color-surface-raised);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  box-shadow: var(--shadow-md);
}
```

---

### Path B — Sass Source

This path gives you everything from Path A, plus compile-time SCSS variables and the `breakpoint-up()` mixin you can call directly inside your own partials.

Install the package first:

```bash
pnpm add pristine-styles
# or: npm install pristine-styles
```

Then import the Sass entrypoint at the top of your main stylesheet. The `@use` rule compiles the reset and all token declarations into your output, and makes the SCSS utilities available in that file:

```scss
@use "pristine-styles/scss/index" as ps;
```

Now you can use the breakpoint mixin alongside your own rules:

```scss
@use "pristine-styles/scss/index" as ps;

.hero {
  font-size: var(--text-3xl);
  padding: var(--space-8);

  // Expands to: @media (min-width: 64rem) { ... }
  @include ps.breakpoint-up("md") {
    font-size: var(--text-5xl);
    padding: var(--space-16);
  }
}
```

If you want the SCSS utilities available across multiple partials without repeating the `@use`, forward the token module from your own index file instead:

```scss
// your-project/styles/_index.scss
@use "pristine-styles/scss/index";       // compiles reset + tokens into output
@use "pristine-styles/scss/tokens" as t; // makes mixins available to forward

@forward "pristine-styles/scss/tokens";  // re-exports mixins to your own partials
```

#### Available breakpoint keys

The `breakpoint-up()` mixin accepts the following size keys. All queries are `min-width`, reflecting the mobile-first approach.

| Key  | Value     | Approx. target               |
|------|-----------|------------------------------|
| `xs` | `30rem`   | Small phones (≥ 480px)       |
| `sm` | `48rem`   | Phones → tablets (≥ 768px)   |
| `md` | `64rem`   | Small tablets (≥ 1024px)     |
| `lg` | `67rem`   | Tablet → desktop (≥ 1072px)  |
| `xl` | `78.125rem` | Small desktops (≥ 1250px)  |

---

## Dark Mode

Pristine Styles ships with full dark mode support out of the box. It works two ways — you can use either or both.

**Automatic (OS preference):** The `@media (prefers-color-scheme: dark)` rule is already included. If the user's system is set to dark mode, all semantic tokens switch automatically without any extra markup.

**Manual (class or attribute):** If you want a toggle button in your UI, apply either a `.dark` class or a `data-theme="dark"` attribute to the root `<html>` element. Both selectors override the OS preference.

```html
<!-- Manual dark mode -->
<html class="dark">
  <!-- or -->
<html data-theme="dark">
```

All tokens that change between themes — backgrounds, surfaces, text, borders, links, shadows, and focus rings — are defined in `_semantic.scss` and respond to both signals.

---

## Token Reference

All tokens are CSS custom properties on `:root`. The table below lists each category, the file it lives in, and a short example of what you get.

| Category      | File                     | Example token                           |
|---------------|--------------------------|-----------------------------------------|
| Color palette | `tokens/_colors.scss`    | `--color-blue`, `--color-gray5`         |
| Semantic theme | `tokens/_semantic.scss` | `--color-text`, `--color-surface-raised` |
| Breakpoints   | `tokens/_breakpoints.scss` | `--breakpoint-md` (JS read-only)      |
| Typography    | `tokens/_typography.scss`| `--text-xl`, `--font-family-sans`       |
| Spacing       | `tokens/_box-model.scss` | `--space-4`, `--space-lg`               |
| Borders       | `tokens/_box-model.scss` | `--radius-md`, `--border-width-2`       |
| Positioning   | `tokens/_positioning.scss` | `--offset-md`, `--inset-full`         |
| Display       | `tokens/_display.scss`   | `--z-index-modal`, `--opacity-50`       |
| Effects       | `tokens/_others.scss`    | `--transition-fast`, `--shadow-lg`      |

> **Note on breakpoint tokens:** The `--breakpoint-*` custom properties are exposed for JavaScript to read (e.g. via `getComputedStyle`), so your scripts stay in sync with the SCSS values. They cannot be used inside `@media` queries — use the SCSS variables or `breakpoint-up()` mixin for that.

---

## Building Locally

Install dependencies and compile the distributed CSS:

```bash
pnpm install
pnpm build
```

The build writes `pristine-styles.css` from `scss/index.scss`. No source map is included in the output.

---

## Documentation Site

The demo and token reference live in a small Vue app under `docs-src/`. To run it locally:

```bash
pnpm dev:docs
```

To rebuild the compiled site into `docs/` for GitHub Pages:

```bash
pnpm build:docs
```

This rebuilds the stylesheet, bundles the Vue app, and writes the deployable output to `docs/`.

---

## License

MIT © [psi](https://github.com/cyril2day-uopeople)
