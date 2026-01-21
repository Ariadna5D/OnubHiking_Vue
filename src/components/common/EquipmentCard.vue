<script setup>
defineProps({
  title: String,
  description: String,
  image: String
});
</script>

<template>
  <div class="h-full bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
    <!-- Imagen -->
    <div class="w-full overflow-hidden">
      <img :src="image" :alt="title" class="w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-500" />
    </div>

    <div class="p-4 sm:p-6 flex items-center gap-4">
      <div class="w-12 h-12 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center rounded-lg  p-2">
        <slot></slot>
      </div>
      
      <h5 class="text-lg sm:text-xl font-bold text-gray-900 dark:text-white grow text-left leading-tight">
        {{ title }}
      </h5>
    </div>

    <div class="px-4 sm:px-6 pb-6">
      <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        {{ description }}
      </p>
    </div>
  </div>
</template>
