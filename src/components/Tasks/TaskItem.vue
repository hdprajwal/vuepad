<script setup lang="ts">
import { computed } from 'vue'
import { Trash } from 'lucide-vue-next'
import { type Task } from '@/db'

const props = defineProps<{ task: Task }>();

const emit = defineEmits<{ (e: 'taskToggled', id: number): void, (e: 'taskDeleted', id: number): void }>();

const completed = computed(() => props.task.completed)

</script>

<template>
    <div
        :class="['flex items-center justify-between gap-2 p-3 border border-border rounded-lg bg-card text-card-foreground transition-all', completed ? 'opacity-60 grayscale-[0.5]' : '']">
        <div class="flex items-center gap-3">
            <input class="w-4 h-4 rounded-full border-primary text-primary focus:ring-primary" type="checkbox"
                :checked="completed" @change="emit('taskToggled', props.task.id)" />
            <span :class="[completed ? 'line-through text-muted-foreground' : 'font-medium']">
                {{ props.task.title }}
            </span>
        </div>
        <div class="flex items-center gap-1">
            <button @click="emit('taskDeleted', props.task.id)"
                class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-destructive hover:text-destructive-foreground h-8 w-8 text-destructive">
                <Trash class="w-4 h-4" />
            </button>
        </div>
    </div>
</template>