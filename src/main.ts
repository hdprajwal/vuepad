import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import {dexiePlugin} from './plugins/dexieplugin'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()

pinia.use(dexiePlugin)

app.use(pinia)
app.use(router)

app.mount('#app')
