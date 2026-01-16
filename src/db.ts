import Dexie, { type Table } from 'dexie';

export interface Task {
    id: number;
    title: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface Note {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

class VuePadDatabase extends Dexie {
    notes!: Table<Note, string>;
    tasks!: Table<Task, number>;

    constructor() {
        super('vuepad');
        this.version(1).stores({
            tasks: 'id, title, completed, createdAt, updatedAt',
            notes: 'id, title, createdAt, updatedAt'
        });
    }
}

export const db = new VuePadDatabase();