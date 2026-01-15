import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotesView from '@/views/Notes/NotesView.vue'
import NoteEditView from '@/views/Notes/NoteEditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/notes',
      name: 'notes',
      component: NotesView,
    },
    {
      path: '/note/:id',
      name: 'note',
      component: NoteEditView,
    },
  ],
})

export default router
