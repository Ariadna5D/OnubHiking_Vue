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
    required: true,
    default: 'Únete a la Familia OnubHiking'
  },
  description: {
    type: String,
    required: true,
    default: 'Explora los senderos más espectaculares de Huelva. No importa tu nivel o tu edad, nuestra comunidad se basa en el compañerismo y el amor por la naturaleza. ¡Prepara tus botas y ven a descubrir tesoros ocultos con nosotros!'
  },
  link: {
    type: String,
    default: '#'
  },
  linkText: {
    type: String,
    default: 'Explorar rutas disponibles'
  }
});
</script>

<template>
  <div class="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row min-h-125 border border-emerald-50 hover:shadow-2xl transition-all duration-500 group">
    
    <div class="lg:w-1/2 w-full overflow-hidden relative">
      <img
        :src="image"
        :alt="title"
        class="w-full h-80 lg:h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      <div class="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
        <MapPin class="text-emerald-600" :size="18" />
        <span class="text-sm font-bold text-gray-800 tracking-tight">Huelva, España</span>
      </div>
    </div>

    <div class="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center bg-linear-to-br from-white to-emerald-50/30">
      <div class="mb-8 text-center lg:text-left">
        <span class="text-emerald-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block">Nuestra Comunidad</span>
        
        <h3 class="text-3xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
          {{ title }}
        </h3>
        
        <p class="text-gray-600 text-lg lg:text-xl leading-relaxed font-medium">
          {{ description }}
        </p>
      </div>

      <div class="flex justify-center lg:justify-start">
        <a
          href=""
          class="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl text-lg font-black bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-200 hover:shadow-emerald-300 hover:-translate-y-1 active:scale-95 transition-all duration-300"
        >
          {{ linkText }}
          <div class="w-5 h-5 shrink-0">
          <ArrowAnimation />
        </div>
        </a>
      </div>
    </div>
  </div>
</template>