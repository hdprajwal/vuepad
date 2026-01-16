import { defineStore } from 'pinia'
import { db, type Task } from '@/db'

export const useTaskStore = defineStore('tasks',{
    state: () => ({
        tasks: [] as Task[],
    }),
    actions: {
        async fetchTasks() {
            this.tasks = await db.tasks.toArray()
        },
        async addTask(task: Task) {
            this.tasks.push(task)

            try {
                await db.tasks.add(task)
            } catch (error) {
                console.error('Failed to add task to DB:', error)
            }
        },
        async deleteTask(id: number) {
            this.tasks = this.tasks.filter((task) => task.id !== id)

            try {
                await db.tasks.delete(id)
            } catch (error) {
                console.error('Failed to delete task from DB:', error)
            }
        },
        async toogleTask(id: number) {
            const task = this.tasks.find((task) => task.id === id)

            if (!task) return

            task.completed = !task.completed

            try {
                await db.tasks.update(id, { completed: task.completed })
            } catch (error) {
                console.error('Failed to toggle task in DB:', error)
            }
        },
    },
})