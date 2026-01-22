<script setup>
import { Map, Zap, Users, ArrowRight } from 'lucide-vue-next';
import ArrowAnimation from '../animations/ArrowAnimation.vue';

defineProps({
  title: String,
  description: String,
  image: String,
  distance: String,
  difficulty: String,
  audience: String,
  link: {
    type: String,
    default: '#'
  },
  linkText: {
    type: String,
    default: 'Ver detalles de la ruta'
  }
});
</script>

<template>
  <div class="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row h-full border border-gray-100 
              transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group">
    
    <div class="md:w-2/5 w-full overflow-hidden relative">
      <img
        :src="image"
        :alt="title"
        class="w-full h-64 md:h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      <div class="absolute inset-0 bg-linear-to-t from-black/20 to-transparent md:hidden"></div>
    </div>

    <div class="p-8 flex flex-col grow md:w-3/5">
      
      <div class="flex flex-wrap gap-2 mb-4">
        <div 
          class="inline-flex items-center px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider gap-2 shadow-sm"
          :class="{
              'bg-emerald-100 text-emerald-800': difficulty?.includes('fácil'),
              'bg-amber-100 text-amber-800': difficulty?.includes('moderada'),
              'bg-orange-100 text-orange-800': difficulty?.includes('moderada-alta'),
              'bg-red-100 text-red-800': difficulty?.includes('alta')
          }"
        >
          <Zap :size="14" fill="currentColor" />
          {{ difficulty }}
        </div>

        <div class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-700 gap-2 border border-gray-200">
          <Map :size="14" />
          {{ distance }}
        </div>
      </div>

      <h3 class="text-2xl font-black text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors leading-tight">
        {{ title }}
      </h3>
      
      <div class="flex items-center gap-2 text-emerald-700 font-bold text-xs mb-4">
        <Users :size="16" />
        {{ audience }}
      </div>

      <p v-if="description" class="text-gray-600 text-sm lg:text-base leading-relaxed mb-6 line-clamp-3">
        {{ description }}
      </p>

      <a
        :href="link"
        class="mt-auto inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl text-sm font-black uppercase tracking-widest
               bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-100 
               hover:shadow-emerald-200 transition-all duration-300 group/btn"
      >
        {{ linkText }}
        <div class="w-5 h-5 shrink-0">
          <ArrowAnimation />
        </div>
      </a>
    </div>
  </div>
</template>