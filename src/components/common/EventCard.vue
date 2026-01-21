<script setup>
defineProps({
  date: String,
  title: String,
  description: String,
  participants: String,
  linkText: {
    type: String,
    default: 'Unirme'
  }
});
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 h-full overflow-hidden">
    <div class="p-6">
      <!-- Icono animado y badge -->
      <div class="flex items-center mb-4">
        <div class="w-6 h-6 bg-orange-400 rounded-full relative mr-3 animate-ping">
          <div class="w-4 h-4 bg-orange-500 rounded-full absolute inset-0 m-auto"></div>
        </div>
        <span class="bg-amber-400 text-black px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wide ">EVENTO</span>
      </div>
      <small class="text-gray-500 dark:text-gray-400 block mb-3">{{ date }}</small>
      <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">{{ title }}</h4>
      <p class="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3">{{ description }}</p>
      <div class="flex justify-between items-center">
        <span class="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">{{ participants }}</span>
        <a
          href="#"
          class="px-4 py-2 border border-primary text-primary bg-white hover:bg-primary hover:text-white rounded-lg text-sm font-semibold transition-colors duration-200"
        >
          {{ linkText }}
        </a>
      </div>
    </div>
  </div>
</template>
