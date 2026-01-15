<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ListCheck } from 'lucide-vue-next'
</script>

<template>
  <div class="flex h-screen w-full">
    <aside class="w-64 m-2 p-2 rounded bg-gray-100">
      <div class="">
        <h1 class="text-2xl font-bold">Vuepad</h1>
        <span class="text-sm text-body">Simple notepad application</span>
      </div>
      <nav class="mt-4">
        <ul class="flex flex-col gap-2">
          <li class="p-2 bg-gray-200 hover:bg-gray-300 rounded">
            <RouterLink to="/" class="flex items-center gap-2 text-body">
              <ListCheck class="h-5" />
              <span>
                Tasks
              </span>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </aside>
    <main class="flex-1 overflow-y-auto p-6">
      <div class="max-w-4xl mx-auto">
        <section class="w-full">
          <RouterView />
        </section>
      </div>
    </main>
  </div>
</template>
