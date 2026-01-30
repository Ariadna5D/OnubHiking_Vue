import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n' 
import PrimeVue from 'primevue/config'
import './style.css'  
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

const app = createApp(App)

app.component('Tabs', Tabs);
app.component('TabList', TabList);
app.component('Tab', Tab);
app.component('TabPanels', TabPanels);
app.component('TabPanel', TabPanel);

app.use(i18n) 
app.use(router)
app.use(PrimeVue, { unstyled: true }) 

app.mount('#app')