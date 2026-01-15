<script setup lang="ts">
import PageHeader from '@/components/ui/PageHeader.vue'
import NoteItem from './NoteItem.vue'

import { onMounted } from 'vue'
import { useNotesStore } from '@/stores/Notes'

const notesStore = useNotesStore()

onMounted(() => {
    notesStore.fetchNotes()
})

</script>

<template>
    <div>
        <PageHeader title="Notes" />
        <div class="flex flex-wrap gap-2">
            <NoteItem :isNewNote="true" />
            <NoteItem v-for="note in notesStore.notes" :key="note.id" :note="note" />
        </div>
    </div>
</template>