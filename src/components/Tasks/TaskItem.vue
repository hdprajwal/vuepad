<script setup lang="ts">
import type { Task } from './types'
import { Trash } from 'lucide-vue-next'

const props = defineProps<{ task: Task }>();

const emit = defineEmits<{ (e: 'taskToggled', id: number): void, (e: 'taskDeleted', id: number): void }>();
</script>

<template>
    <div class="flex items-center justify-between gap-2 p-2 border rounded">
        <div class="flex items-center gap-2">
            <input class="w-4 h-4" type="checkbox" :checked="props.task.completed"
                @change="emit('taskToggled', props.task.id)" />
            <span>{{ props.task.title }}</span>
        </div>
        <div>
            <button @click="emit('taskDeleted', props.task.id)"
                class="p-2 hover:bg-red-500 hover:text-white rounded text-red-500 hover:text-white">
                <Trash class="w-4 h-4" />
            </button>
        </div>
    </div>
</template>