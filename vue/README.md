# Vue + Tailwind Interview Starter

A blank frontend starter built with `Vue 3`, `Vite`, and `Tailwind CSS`, formatted with `Prettier`.

## Tech stack

- Vue 3 (`<script setup>` SFCs)
- Vite
- Tailwind CSS v4
- Prettier (with `prettier-plugin-tailwindcss`)

## Getting started

### 1) Install dependencies

```bash
npm install
```

### 2) Start the dev server

```bash
npm run dev
```

Default URL: `http://localhost:5173`

## Scripts

- `npm run dev` / `npm start` - start the Vite dev server
- `npm run build` - build for production into `dist/`
- `npm run preview` - preview the production build
- `npm run format` - format files with Prettier
- `npm run format:check` - check formatting without writing

## Project structure

```text
index.html            # app entry HTML
src/
  main.js             # Vue bootstrap
  App.vue             # root component (start here)
  index.css           # Tailwind entry (@import "tailwindcss")
vite.config.js        # Vite + Vue + Tailwind plugins
.prettierrc.json      # Prettier config
```

## Notes

- Tailwind is wired up through the official Vite plugin (`@tailwindcss/vite`); there is no
  `tailwind.config.js` needed for v4. Add utility classes directly in your templates.

## License

Private interview starter. Update as needed for your team or candidate instructions.
