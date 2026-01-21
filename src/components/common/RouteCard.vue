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

<div class=" bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row h-full border border-gray-100 
            translate-y-0 transition-all duration-300 
            hover:-translate-y-4 hover:shadow-xl">
    <div class="md:w-2/3 w-full overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover transform  transition-transform duration-500"
      />
    </div>

    <div class="p-6 flex flex-col grow md:w-2/3">
      <h3 class="text-xl font-bold text-gray-900  mb-2">
        {{ title }}
      </h3>
      
<div 
    class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-2 gap-1"
    :class="{
        'bg-green-100 text-green-800': difficulty === 'Dificultad fácil',
        'bg-yellow-100 text-yellow-800': difficulty === 'Dificultad moderada',
        'bg-orange-100 text-orange-800': difficulty === 'Dificultad moderada-alta',
        'bg-red-100 text-red-800': difficulty === 'Dificultad alta'
    }"
>
    <span class="w-2 h-2 rounded-full" 
          :class="{
              'bg-green-500': difficulty === 'Dificultad fácil',
              'bg-yellow-500': difficulty === 'Dificultad moderada',
              'bg-orange-500': difficulty === 'Dificultad moderada-alta',
              'bg-red-500': difficulty === 'Dificultad alta'
          }"
    ></span>
    {{ distance }} · {{ difficulty }}
</div>


      <p class="text-sm text-gray-600  mb-4">
        {{ audience }}
      </p>

      <p v-if="description" class="text-sm text-gray-600  mb-4">
        {{ description }}
      </p>

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
