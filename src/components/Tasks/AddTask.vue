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
    <div class="">
        <form @submit.prevent="addTask" class="flex items-center justify-between gap-2">
            <input v-model="newTask" type="text"
                class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded focus:ring-brand focus:border-brand block flex-1 px-2.5 py-2 shadow-xs placeholder:text-body"
                placeholder="Add a new task" />
            <button type="submit"
                class="text-white box-border border border-transparent bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-sm px-2.5 py-2 focus:outline-none">
                + Add Task</button>
        </form>
    </div>
</template>
