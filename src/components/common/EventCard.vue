<script setup>
import { Users, ChevronRight } from 'lucide-vue-next';

defineProps({
  date: String,
  title: String,
  description: String,
  participants: String
});
</script>

<template>
  <div
    class="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">

<div class="absolute top-6 right-6 flex items-center gap-2 bg-amber-100/60 px-3 py-1.5 rounded-full border border-amber-200 shadow-sm backdrop-blur-xs">
  <span class="relative flex h-5 w-5 items-center justify-center">
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-80"></span>
    
    <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-600 shadow-[0_0_5px_rgba(217,119,6,0.6)]"></span>
  </span>
  
  <span class="text-xs font-black text-amber-900 uppercase tracking-tighter">Nuevo</span>
</div>

    <div class="flex items-center gap-2 mb-4">
      <span class="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest">
        Próximamente
      </span>
      <span class="text-emerald-700 text-xs font-bold uppercase tracking-wider">{{ date }}</span>
    </div>

    <h3 class="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
      {{ title }}
    </h3>

    <p class="text-gray-600 text-sm leading-relaxed mb-6">
      {{ description }}
    </p>

    <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
      <div class="flex items-center text-emerald-700 font-bold text-xs">
        <Users :size="16" class="mr-1.5 opacity-70" />
        {{ participants }}
      </div>

      <button
        class="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white text-small font-bold py-2 px-4 rounded-lg transition-colors shadow-md shadow-emerald-200">
        Unirme
        <ChevronRight :size="14" />
      </button>
    </div>
  </div>
</template>