<script setup lang="ts">
import { ref, computed } from 'vue'

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

const activeTasks = computed(() => tasks.value.filter((task) => !task.completed))
const completedTasks = computed(() => tasks.value.filter((task) => task.completed))


</script>

<template>
    <div class="w-full">
        <div class="flex flex-col gap-2">
            <AddTask @taskAdded="addTask" />
            <div v-if="activeTasks.length === 0" class="text-center">
                No active tasks
            </div>
            <div v-for="task in activeTasks" :key="task.id" class="flex flex-col gap-2">
                <TaskItem :task="task" @taskToggled="toogleTask" @taskDeleted="deleteTask" />
            </div>
            <div v-if="completedTasks.length > 0" class="mt-4">
                Completed Tasks
            </div>
            <div v-for="task in completedTasks" :key="task.id" class="flex flex-col gap-2">
                <TaskItem :task="task" @taskToggled="toogleTask" @taskDeleted="deleteTask" />
            </div>
        </div>
    </div>
</template>