import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'

export interface Note {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}   

export const useNotesStore = defineStore('notes',{
    state: () => ({
        notes: [] as Note[],
    }),
    actions: {
        async fetchNotes() {
            this.notes = await this.db.notes.toArray()
        },
        async getNoteById(id: string){
            const tmp_note = this.notes.find((note) => note.id === id)
            console.log(tmp_note)
            if (!tmp_note) return null
            return tmp_note
        },
        addNote({title,content}:{title:string,content:string}) {
            const note = {id:nanoid(8),title,content,createdAt:new Date(),updatedAt:new Date()}
            this.notes.push(note)
            this.db.notes.add(note)
            console.log(note)
            return note
        },
        updateNoteTitle(id: string, title: string) {
            const note = this.notes.find((note) => note.id === id)
            if (!note) return
            note.title = title
            this.db.notes.update(id, { title })
        },
        updateNoteContent(id: string, content: string) {
            const note = this.notes.find((note) => note.id === id)
            if (!note) return
            note.content = content
            this.db.notes.update(id, { content })
        },
        deleteNote(id: string) {
            this.notes = this.notes.filter((note) => note.id !== id)
            this.db.notes.delete(id)
        },
    },
})