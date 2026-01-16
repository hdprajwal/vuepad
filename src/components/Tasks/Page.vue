<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useTaskStore } from '@/stores/Task'
import PageHeader from '@/components/ui/PageHeader.vue'

import AddTask from './AddTask.vue'
import TaskItem from './TaskItem.vue'

const taskStore = useTaskStore()

const addTask = (taskTitle: string) => {
    taskStore.addTask({
        id: Date.now(),
        title: taskTitle,
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
    })
}

const deleteTask = (id: number) => {
    taskStore.deleteTask(id)
}



const toogleTask = (id: number) => {
    taskStore.toogleTask(id)
}

const activeTasks = computed(() => taskStore.tasks.filter((task) => !task.completed))
const completedTasks = computed(() => taskStore.tasks.filter((task) => task.completed))

onMounted(() => {
    taskStore.fetchTasks()
})

</script>

<template>
    <div class="w-full">
        <PageHeader title="Tasks" />
        <div class="flex flex-col gap-2 max-w-4xl mx-auto">
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