<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  category: {
    type: String,
    // Usamos la clave de traducción para el valor por defecto
    default: '' 
  }
});
</script>

<template>
  <div class="group h-full bg-white rounded-2xl shadow-sm border border-emerald-50 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl flex flex-col">
    
    <div class="relative w-full h-full overflow-hidden">
      <img 
        :src="image" 
        :alt="title" 
        class="w-full h-full object-cover transition-transform duration-700" 
      />
      <div class="absolute top-4 left-4 bg-emerald-600/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-lg">
        {{ category || $t('equipment_card.default_category') }}
      </div>
    </div>

    <div class="p-8 pt-10 grow">
      <h3 class="text-xl font-black text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
        {{ title }}
      </h3>
      
      <p class="text-gray-600 text-sm leading-relaxed font-medium">
        {{ description }}
      </p>
    </div>

    <div class="px-8 pb-6">
      <div class="h-1 w-12 bg-emerald-300 rounded-full group-hover:w-full transition-all duration-500"></div>
    </div>
  </div>
</template>