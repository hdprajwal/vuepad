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
const noteTitle = ref("")

const isInitialLoad = ref(true)
const isSaving = ref(false)

onMounted(async () => {
    const fetchedNote = await notesStore.getNoteById(noteId as string)
    if (fetchedNote) {
        note.value = fetchedNote
        noteContent.value = fetchedNote.content
        noteTitle.value = fetchedNote.title
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

const updateNoteTitle = async () => {
    if (note.value && !isSaving.value) {
        isSaving.value = true
        try {
            await notesStore.updateNoteTitle(note.value.id, noteTitle.value)
        } finally {
            isSaving.value = false
        }
    }
}

const debouncedUpdateNoteTitle = debounce(updateNoteTitle, 1000)

const debouncedSaveNote = debounce(saveNote, 1000)

watch(() => noteContent.value, (newContent, oldContent) => {
    if (!isInitialLoad.value && oldContent !== undefined && newContent !== oldContent) {
        debouncedSaveNote()
    }
})

watch(() => noteTitle.value, (newTitle, oldTitle) => {
    if (!isInitialLoad.value && oldTitle !== undefined && newTitle !== oldTitle) {
        debouncedUpdateNoteTitle()
    }
})


const handleBeforeUnload = () => {
    updateNoteTitle()
    saveNote()
}

onUnmounted(() => {
    window.removeEventListener('beforeunload', handleBeforeUnload)
    debouncedSaveNote.cancel()
    saveNote()
    debouncedUpdateNoteTitle.cancel()
    updateNoteTitle()
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
            <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
                <input v-model="noteTitle" type="text"
                    class="text-4xl font-extrabold tracking-tight lg:text-5xl outline-none" />
            </h1>
            <TipTapEditor v-model="noteContent" :editable="true" />
        </div>
    </div>
</template>