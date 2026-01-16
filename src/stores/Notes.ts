import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'
import { db, type Note } from '@/db'


export const useNotesStore = defineStore('notes',{
    state: () => ({
        notes: [] as Note[],
    }),
    actions: {
        async fetchNotes() {
            this.notes = await db.notes.toArray()
        },
        async getNoteById(id: string){
            let note = this.notes.find((n) => n.id === id)

            if (!note) {
                try {
                    note = await db.notes.get(id)
                    if (note) {
                        this.notes.push(note)
                    }
                } catch (error) {
                    console.error('Failed to get note from DB:', error)
                }
            }
            
            return note || null
        },
        async addNote({title,content}:{title:string,content:string}) {
            const note = {id:nanoid(8),title,content,createdAt:new Date(),updatedAt:new Date()}
            
            this.notes.push(note)
            
            try {
                await db.notes.add(note)
            } catch (error) {
                console.error('Failed to add note to DB:', error)
            }

            return note
        },
        async updateNoteTitle(id: string, title: string) {
            const note = this.notes.find((note) => note.id === id)

            if (!note || note.title === title) return

            note.title = title  
            note.updatedAt = new Date()

            try {
                console.log("Updating note title in DB...")
                await db.notes.update(id, { title, updatedAt: note.updatedAt })
            } catch (error) {
                console.error('Failed to update note title in DB:', error)
            }
        },
        async updateNoteContent(id: string, content: string) {
            const note = this.notes.find((n) => n.id === id)

            if (!note || note.content === content) return

            note.content = content
            note.updatedAt = new Date()

            try {
                await db.notes.update(id, { 
                    content, 
                    updatedAt: note.updatedAt 
                })
            } catch (error) {
                console.error('Dexie Update Error:', error)
            }
        },
        async deleteNote(id: string) {
            this.notes = this.notes.filter((note) => note.id !== id)

            try {
                await db.notes.delete(id)
            } catch (error) {
                console.error('Failed to delete note from DB:', error)
            }
        },
    },
})