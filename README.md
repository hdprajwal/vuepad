# Vuepad

A demo app built to fiddle around with and learn **Vue 3**.

## Overview
This is a playground project focused on exploring Vue's core concepts, composition API, and state management with persistent storage.

## Current Features
- **Task Management**: Create and manage your daily tasks.
- **State Management**: Uses **Pinia** for state management across components.
- **Local Persistence**: Full browser storage support using **Dexie.js** (IndexedDB) via a custom Pinia plugin.

## Tech Stack
- **Framework:** [Vue 3](https://vuejs.org/) (Composition API)
- **State Management:** [Pinia](https://pinia.vuejs.org/)
- **Database (Local):** [Dexie.js](https://dexie.org/) (IndexedDB wrapper)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide Vue Next](https://lucide.dev/guide/packages/lucide-vue-next)
- **Linting:** ESLint & Prettier

## Project Structure
```text
src/
├── components/       # UI Components (Tasks, etc.)
├── router/           # Vue Router configuration
├── stores/           # Pinia state stores
├── plugins/          # Pinia plugins (Dexie integration)
├── types/            # TypeScript type definitions & augmentations
├── views/            # Main page views
├── db.ts             # Dexie database configuration
├── App.vue           # Main Entry
└── main.ts           # App initialization
```

## Project Setup

```sh
# Install dependencies
pnpm install

# Compile and Hot-Reload for Development
pnpm dev

# Type-Check, Build
pnpm build

# Lint with ESLint
pnpm lint
```

## TODO
Check out the [TODO.md](./TODO.md) file for the TODO list and progress.