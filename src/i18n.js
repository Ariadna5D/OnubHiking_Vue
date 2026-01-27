import { createI18n } from 'vue-i18n';
import es from './locales/es.json';
import en from './locales/en.json';

const i18n = createI18n({
  legacy: false,          // Obligatorio para Composition API
  globalInjection: true,  // Permite usar $t en el template sin importar nada
  locale: 'es', 
  fallbackLocale: 'en', 
  messages: {
    es,
    en
  }
});

export default i18n;