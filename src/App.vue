<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { ListCheck, Notebook, Sun, Moon, Menu, X } from 'lucide-vue-next'
import { useTheme } from './composables/useTheme'

const { theme, toggleTheme } = useTheme();
const sidebarOpen = ref(false);

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

const closeSidebar = () => {
  sidebarOpen.value = false;
};
</script>

<template>
  <div class="flex h-screen w-full">
    <header
      class="md:hidden fixed top-0 left-0 right-0 z-30 flex items-center gap-3 p-4 bg-background border-b border-border">
      <button @click="toggleSidebar"
        class="p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors" aria-label="Toggle menu">
        <Menu v-if="!sidebarOpen" class="h-5 w-5" />
        <X v-else class="h-5 w-5" />
      </button>
      <h1 class="text-xl font-bold tracking-tight">Vuepad</h1>
    </header>

    <div v-if="sidebarOpen" class="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" @click="closeSidebar">
    </div>

    <aside :class="[
      'fixed md:relative z-50 md:z-auto',
      'w-64 h-screen md:h-auto',
      'top-0 left-0',
      'm-0 md:m-2 p-4 md:rounded-lg bg-secondary/95 md:bg-secondary/50 border-r md:border border-border',
      'flex flex-col justify-between',
      'transform transition-transform duration-300 ease-in-out',
      'md:transform-none md:translate-x-0',
      sidebarOpen ? 'translate-x-0' : '-translate-x-full'
    ]">
      <div class="space-y-6">
        <div class="flex items-center justify-between md:block">
          <div>
            <h1 class="text-2xl font-bold tracking-tight">Vuepad</h1>
            <p class="text-xs text-muted-foreground mt-1">Simple notepad application</p>
          </div>
          <button @click="closeSidebar"
            class="md:hidden p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Close menu">
            <X class="h-5 w-5" />
          </button>
        </div>
        <nav>
          <ul class="flex flex-col gap-1">
            <li>
              <RouterLink to="/"
                class="flex items-center gap-2 p-2 rounded-md bg-secondary text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                active-class="bg-accent text-accent-foreground" @click="closeSidebar">
                <ListCheck class="h-4 w-4" />
                <span class="text-sm font-medium">Tasks</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/notes"
                class="flex items-center gap-2 p-2 rounded-md bg-secondary text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                active-class="bg-accent text-accent-foreground" @click="closeSidebar">
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

    <main class="flex-1 overflow-y-auto p-6 pt-20 md:pt-6">
      <div class="">
        <section class="w-full">
          <RouterView v-slot="{ Component }">
            <Transition name="page" mode="out-in">
              <component :is="Component" />
            </Transition>
          </RouterView>
        </section>
      </div>
    </main>
  </div>
</template>
