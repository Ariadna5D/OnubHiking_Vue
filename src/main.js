import { createApp } from 'vue';
import App from './App.vue'; // Aquí sí funciona ./ porque App.vue está al lado de main.js
import router from './router'; 
import PrimeVue from 'primevue/config';
import './style.css'; 
import Aura from '@primevue/themes/aura';
const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      cssLayer: {
        name: 'primevue',
        order: 'base, primevue, components, utilities'  // Orden correcta Tailwind v4
      },
      darkModeSelector: '.my-app-dark'  // Coincide con tailwind.config.js
    }
  }
})


app.mount('#app');