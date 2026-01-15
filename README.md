# Vuepad

A demo app built to fiddle around with and learn **Vue 3**.

## Overview
This is a playground project focused on exploring Vue's core concepts, composition API.

## Current Features
- **Task Management**: Create and manage your daily tasks.
- **State Handling**: Currently uses component-level state (no external store like Pinia/Vuex yet).
- **Modern Stack**: Built with Vue 3, Vite, and Tailwind CSS.

## Tech Stack
- **Framework:** [Vue 3](https://vuejs.org/) (Composition API)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide Vue Next](https://lucide.dev/guide/packages/lucide-vue-next)
- **Linting:** ESLint & Prettier

## Project Structure
```text
src/
├── components/
│   └── Tasks/        # All task-related logic
│       ├── AddTask.vue
│       ├── Page.vue
│       ├── TaskItem.vue
│       └── types.ts  # Shared TypeScript interfaces
├── views/            # Route pages
├── App.vue           # Main Entry
└── main.ts
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
- [ ] **Notes**: Add the ability to create and organize rich-text notes.
- [ ] **Local Persistence**: Full browser storage support using **Dexie DB** (IndexedDB).
- [ ] **State Management**: Explore global state patterns.
