<script setup>
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
    default: 'Más información'
  }
});
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row h-full border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
  >
    <!-- Imagen izquierda -->
    <div class="md:w-2/3 w-full overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
      />
    </div>

    <!-- Contenido derecha -->
    <div class="p-6 flex flex-col flex-grow md:w-2/3">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {{ title }}
      </h3>

      <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
        {{ distance }} · {{ difficulty }}
      </p>

      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {{ audience }}
      </p>

      <p v-if="description" class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {{ description }}
      </p>

      <!-- Botón "Más información" -->
      <a
        :href="link"
        class="mt-auto inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold
               bg-primary text-white hover:bg-primary/90 focus:outline-none focus:ring-2 
               focus:ring-primary focus:ring-offset-2 focus:ring-offset-white
               dark:focus:ring-offset-gray-900 transition-colors"
      >
        {{ linkText }}
      </a>
    </div>
  </div>
</template>
