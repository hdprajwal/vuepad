<script setup lang="ts">
import { ref } from 'vue'

import type { Task } from './types'

import AddTask from './AddTask.vue'
import TaskItem from './TaskItem.vue'

const tasks = ref<Task[]>([])

const addTask = (taskTitle: string) => {
    tasks.value.push({
        id: Date.now(),
        title: taskTitle,
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
    })
}

const deleteTask = (id: number) => {
    tasks.value = tasks.value.filter((task) => task.id !== id)
}

const toogleTask = (id: number) => {
    tasks.value = tasks.value.map((task) => {
        if (task.id === id) {
            task.completed = !task.completed
        }
        return task
    })
}

</script>

<template>
    <div class="w-full">
        <div class="flex flex-col gap-2">
            <AddTask @taskAdded="addTask" />
            <div v-for="task in tasks" :key="task.id" class="flex flex-col gap-2">
                <TaskItem :task="task" @taskToggled="toogleTask" @taskDeleted="deleteTask" />
            </div>
        </div>
    </div>
</template>