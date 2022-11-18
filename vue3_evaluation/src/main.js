import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/main.css'
import '@/assets/css/fontawesome-all.min.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
