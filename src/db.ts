import Dexie from 'dexie';

export const db = new Dexie('vuepad');

db.version(1).stores({
    tasks: '++id, title, completed, createdAt, updatedAt'
});