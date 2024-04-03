import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// \/ FIXME - Cannot pass a custom config to formkit for some reason.
// import config from 'formkit.config.ts'
import App from './App.vue'
import router from './router'
import { defaultConfig, plugin } from '@formkit/vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(plugin, defaultConfig /*(config)*/)

app.mount('#app')
