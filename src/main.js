import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import './style.css'  // Importa aquí

const app = createApp(App)

app.use(router)
app.use(PrimeVue, { unstyled: true })  // ← Solo esto
app.mount('#app')
