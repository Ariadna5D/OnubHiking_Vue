import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import './style.css'; 

const app = createApp(App);

app.use(PrimeVue, { 
    unstyled: true // Clave para la integración con Tailwind
});

app.mount('#app');