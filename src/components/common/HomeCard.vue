<script setup>
import Button from "primevue/button";
import { ArrowUpRight } from 'lucide-vue-next';

defineProps({
  title: String,
  description: String,
  image: String,
  link: String,
  buttonText: { type: String, default: "Explorar ahora" },
  icon: Object // Pasaremos el componente del icono como prop
});
</script>

<template>
  <router-link :to="link" class="group no-underline block h-full">
    <div class="relative bg-white rounded-3xl shadow-sm border border-emerald-50 overflow-hidden flex flex-col h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
      
      <div class="relative aspect-video w-full overflow-hidden">
        <img
          :src="image"
          :alt="title"
          class="w-full h-full object-cover transform  transition-transform duration-700"
        />
        

      </div>

      <div class="p-8 pt-10 flex flex-col grow">
        <h3 class="text-2xl font-black text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
          {{ title }}
        </h3>
        <p class="text-gray-600 text-base leading-relaxed mb-8 grow">
          {{ description }}
        </p>

        <div class="flex items-center justify-between mt-auto">
          <span class="text-emerald-600 font-black text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2">
            {{ buttonText }}
          </span>
          
          <div class="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
             <ArrowUpRight :size="20" />
          </div>
        </div>
      </div>

      <div class="h-1.5 w-0  group-hover:w-full transition-all duration-700"></div>
    </div>
  </router-link>
</template>