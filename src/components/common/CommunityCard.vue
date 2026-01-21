<script setup>
defineProps({
  image: {
    type: String,
    required: true
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
    default: 'Ver rutas disponibles'
  }
});
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col lg:flex-row h-full border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
    <!-- Imagen izquierda -->
    <div class="lg:w-1/2 w-full overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="w-full h-64 lg:h-full object-cover transform hover:scale-105 transition-transform duration-500"
      />
    </div>
    <!-- Contenido derecho -->
    <div class="lg:w-1/2 p-8 flex flex-col justify-between text-center lg:text-left">
      <div>
        <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {{ title }}
        </h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm lg:text-base leading-relaxed">
          {{ description }}
        </p>
      </div>
      <a
        :href="link"
        class="mt-6 inline-flex items-center justify-center px-8 py-3 rounded-lg text-lg font-semibold bg-primary text-white hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/50 transition-all duration-200"
      >
        {{ linkText }}
      </a>
    </div>
  </div>
</template>
