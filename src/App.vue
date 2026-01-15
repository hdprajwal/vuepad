<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ListCheck, Notebook, Sun, Moon } from 'lucide-vue-next'
import { useTheme } from './composables/useTheme'

const { theme, toggleTheme } = useTheme();
</script>

<template>
  <div class="flex h-screen w-full">
    <aside class="w-64 m-2 p-4 rounded-lg bg-secondary/50 border border-border flex flex-col justify-between">
      <div class="space-y-6">
        <div>
          <h1 class="text-2xl font-bold tracking-tight">Vuepad</h1>
          <p class="text-xs text-muted-foreground mt-1">Simple notepad application</p>
        </div>
        <nav>
          <ul class="flex flex-col gap-1">
            <li>
              <RouterLink to="/"
                class="flex items-center gap-2 p-2 rounded-md bg-secondary text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                active-class="bg-accent text-accent-foreground">
                <ListCheck class="h-4 w-4" />
                <span class="text-sm font-medium">Tasks</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/notes"
                class="flex items-center gap-2 p-2 rounded-md bg-secondary text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                active-class="bg-accent text-accent-foreground">
                <Notebook class="h-4 w-4" />
                <span class="text-sm font-medium">Notes</span>
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
      <button @click="toggleTheme"
        class="flex items-center justify-center p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors border border-border">
        <Sun v-if="theme === 'dark'" class="h-4 w-4" />
        <Moon v-else class="h-4 w-4" />
      </button>
    </aside>
    <main class="flex-1 overflow-y-auto p-6">
      <div class="">
        <section class="w-full">
          <RouterView />
        </section>
      </div>
    </main>
  </div>
</template>
