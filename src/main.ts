import './assets/main.css'

import 'primevue/resources/themes/aura-light-green/theme.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { defaultConfig, plugin } from '@formkit/vue'
import config from './formkit.config.ts'
import PrimeVue from 'primevue/config'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.use(plugin, defaultConfig(config))
app.mount('#app')
