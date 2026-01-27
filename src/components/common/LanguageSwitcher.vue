<script setup>
import { useI18n } from 'vue-i18n';
import { Languages } from 'lucide-vue-next';

const { locale } = useI18n();

const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es';
};
</script>

<template>
  <button 
    @click="toggleLanguage"
    class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-white border border-white/20 font-medium text-sm"
  >
    <Languages :size="28" />
    <span class="uppercase text-2xl">{{ locale }}</span>
  </button>
</template>