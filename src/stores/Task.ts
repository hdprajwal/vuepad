import { defineStore } from 'pinia'

export interface Task {
    id: number;
    title: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}   

export const useTaskStore = defineStore('tasks',{
    state: () => ({
        tasks: [] as Task[],
    }),
    actions: {
        async fetchTasks() {
            this.tasks = await this.db.tasks.toArray()
        },
        addTask(task: Task) {
            this.tasks.push(task)
            this.db.tasks.add(task)
        },
        deleteTask(id: number) {
            this.tasks = this.tasks.filter((task) => task.id !== id)
            this.db.tasks.delete(id)
        },
        toogleTask(id: number) {
            const task = this.tasks.find((task) => task.id === id)
            if (!task) return
            task.completed = !task.completed
            this.db.tasks.update(id, { completed: task.completed })
        },
    },
})