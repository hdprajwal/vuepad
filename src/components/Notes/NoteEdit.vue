<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { ChevronLeft } from 'lucide-vue-next'
import { useNotesStore } from '@/stores/Notes'
import { ref } from 'vue'

const route = useRoute()

const noteId = route.params.id

const notesStore = useNotesStore()

const note = ref()

onMounted(async () => {
    note.value = await notesStore.getNoteById(noteId as string)
    console.log(note.value)
})

</script>

<template>
    <div class="max-w-4xl mx-auto">
        <div class="mb-4">
            <RouterLink to="/notes" class="flex items-center gap-1 text-foreground text-sm">
                <ChevronLeft class="w-4 h-4" /> Notes
            </RouterLink>
        </div>
        <div v-if="note">
            <h1 class="text-2xl font-semibold">{{ note.title }}</h1>
            <p>{{ note.content }}</p>
        </div>
    </div>
</template>