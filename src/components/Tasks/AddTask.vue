<script setup lang="ts">
import { ref } from 'vue';
const newTask = ref('');

const emit = defineEmits<{ (e: 'taskAdded', taskTitle: string): void }>();

const addTask = () => {
    if (newTask.value.trim()) {
        emit('taskAdded', newTask.value.trim())
        newTask.value = ''
    }
}

</script>

<template>
    <div class="mb-4">
        <form @submit.prevent="addTask" class="flex items-center gap-2">
            <input v-model="newTask" type="text"
                class="flex h-9 w-full rounded border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Add a new task..." />
            <button type="submit"
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground h-9 px-3 py-1">
                Add Task
            </button>
        </form>
    </div>
</template>
