<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import { useNotesStore } from '@/stores/Notes'
import TipTapEditor from '@/components/ui/TipTapEditor.vue'
import { Trash } from 'lucide-vue-next'

const router = useRouter()
const notesStore = useNotesStore()

const props = defineProps({
    isNewNote: {
        type: Boolean,
        default: false
    },
    note: {
        type: Object,
        default: () => ({})
    }
})

const addNote = async () => {
    const note = await notesStore.addNote({ title: 'Untitled', content: '' })
    router.push(`/note/${note.id}`)
}

const deleteNote = async (noteId: string) => {
    await notesStore.deleteNote(noteId)
}

</script>

<template>
    <div v-if="isNewNote" @click="addNote"
        class="p-2 flex items-center justify-center border-2 border-dashed rounded-lg w-full h-[250px] md:w-[250px] md:h-[300px] text-muted-foreground font-medium hover:border-primary/50 hover:text-primary cursor-pointer capitalize">
        + New Note
    </div>
    <RouterLink :to="`/note/${note.id}`" v-else
        class="p-4 border rounded-lg bg-card w-full h-[250px] md:w-[250px] md:h-[300px] relative overflow-hidden flex flex-col group">
        <div class="flex-1 relative overflow-hidden">
            <h1 v-if="note.title" class="text-xl font-bold text-foreground mb-4">
                {{ note.title }}
            </h1>

            <div class="space-y-4 text-xs text-muted-foreground/80 leading-relaxed">
                <p v-if="note.content" class="">
                    <TipTapEditor :modelValue="note.content" :editable="false" />
                </p>
            </div>

            <div
                class="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card via-card/80 to-transparent pointer-events-none">
                <button @click.stop.prevent="deleteNote(note.id)"
                    class="absolute bottom-1 right-1 inline-flex md:hidden pointer-events-auto group-hover:inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-destructive hover:text-destructive-foreground h-8 w-8 text-destructive">
                    <Trash class="w-4 h-4" />
                </button>
            </div>
        </div>
    </RouterLink>
</template>