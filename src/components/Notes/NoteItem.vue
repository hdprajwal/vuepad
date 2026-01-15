<script setup lang="ts">
import { RouterLink } from 'vue-router'

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

</script>

<template>
    <div v-if="isNewNote"
        class="p-2 flex items-center justify-center border-2 border-dashed rounded-lg w-[250px] h-[300px] text-muted-foreground font-medium hover:border-primary/50 hover:text-primary cursor-pointer capitalize">
        + New Note
    </div>
    <RouterLink :to="`/note/${note.id}`" v-else
        class="p-4 border rounded-lg bg-card w-[250px] h-[300px] relative overflow-hidden flex flex-col">
        <div class="flex-1 relative overflow-hidden">
            <h1 v-if="note.title" class="text-xl font-bold text-foreground mb-4">
                {{ note.title }}
            </h1>

            <div class="space-y-4 text-xs text-muted-foreground/80 leading-relaxed">
                <p v-if="note.content">
                    {{ note.content }}
                </p>
            </div>

            <div
                class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-card via-card/80 to-transparent pointer-events-none">
            </div>
        </div>
    </RouterLink>
</template>