import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Task {
    id: number;
    title: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}   


export const useTaskStore = defineStore('tasks',()=>{
    const tasks = ref<Task[]>([])

    function addTask(task: Task) {
        tasks.value.push(task)
    }

    function deleteTask(id: number) {
        tasks.value = tasks.value.filter((task) => task.id !== id)
    }

    function toogleTask(id: number) {
        tasks.value = tasks.value.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        )
    }

    return {
        tasks,
        addTask,
        deleteTask,
        toogleTask
    }
})