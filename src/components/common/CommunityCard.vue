<script setup>
import { MoveRight, MapPin } from 'lucide-vue-next';
import ArrowAnimation from '../animations/ArrowAnimation.vue';

defineProps({
  image: {
    type: String,
    required: true,
    default: '/images/paisaje1.jpg'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: '#'
  },
  linkText: {
    type: String,
    // Usamos una clave de traducción para el valor por defecto si no se pasa la prop
    default: '' 
  }
});
</script>

<template>
  <div class="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row min-h-125 border border-emerald-50 hover:shadow-2xl transition-all duration-500 group">
    
    <div class="lg:w-1/2 w-full overflow-hidden relative">
      <img
        :src="image"
        :alt="title"
        class="w-full h-80 lg:h-full object-cover transform  transition-transform duration-700"
      />
      <div class="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
        <MapPin class="text-emerald-600" :size="18" />
        <span class="text-sm font-bold text-gray-800 tracking-tight">{{ $t('community_card.location') }}</span>
      </div>
    </div>

    <div class="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center bg-linear-to-br from-white to-emerald-50/30">
      <div class="mb-8 text-center lg:text-left">
        <span class="text-emerald-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block">{{ $t('community_card.badge') }}</span>
        
        <h3 class="text-3xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
          {{ title }}
        </h3>
        
        <p class="text-gray-600 text-lg lg:text-xl leading-relaxed font-medium">
          {{ description }}
        </p>
      </div>

      <div class="flex justify-center lg:justify-start">
        <a
          :href="link"
          class="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl text-lg font-bold bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-200 hover:shadow-emerald-300 hover:translate-x-1 active:scale-95 transition-all duration-300"
        >
          {{ linkText || $t('community_card.default_link_text') }}
          <div class="w-5 h-5 shrink-0">
            <ArrowAnimation />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>