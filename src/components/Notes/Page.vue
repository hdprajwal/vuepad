<script setup lang="ts">
import PageHeader from '@/components/ui/PageHeader.vue'
import NoteItem from './NoteItem.vue'
</script>

<template>
    <div>
        <PageHeader title="Notes" />
        <div class="flex flex-wrap gap-2">
            <NoteItem :isNewNote="true" />
            <NoteItem :note="{ id: 1, title: 'VuePad Notes', content: 'This is a note' }" />
        </div>
    </div>
</template>