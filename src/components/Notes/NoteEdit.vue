<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, onUnmounted } from 'vue'
import { ChevronLeft } from 'lucide-vue-next'
import { useNotesStore } from '@/stores/Notes'
import { ref, watch } from 'vue'
import TipTapEditor from '@/components/ui/TipTapEditor.vue'
import { debounce } from '@/utils/Debounce'

const route = useRoute()

const noteId = route.params.id

const notesStore = useNotesStore()

const note = ref()
const noteContent = ref("")

const isInitialLoad = ref(true)
const isSaving = ref(false)

onMounted(async () => {
    const fetchedNote = await notesStore.getNoteById(noteId as string)
    if (fetchedNote) {
        note.value = fetchedNote
        noteContent.value = fetchedNote.content
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    setTimeout(() => {
        isInitialLoad.value = false
    }, 100)
})

const saveNote = async () => {
    if (note.value && !isSaving.value) {
        isSaving.value = true
        try {
            await notesStore.updateNoteContent(note.value.id, noteContent.value)
        } finally {
            isSaving.value = false
        }
    }
}

const debouncedSaveNote = debounce(saveNote, 1000)

watch(() => noteContent.value, (newContent, oldContent) => {
    if (!isInitialLoad.value && oldContent !== undefined && newContent !== oldContent) {
        debouncedSaveNote()
    }
})

const handleBeforeUnload = () => {
    saveNote()
}

onUnmounted(() => {
    window.removeEventListener('beforeunload', handleBeforeUnload)
    debouncedSaveNote.cancel()
    saveNote()
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
            <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">{{ note.title }}</h1>
            <TipTapEditor v-model="noteContent" :editable="true" />
        </div>
    </div>
</template>