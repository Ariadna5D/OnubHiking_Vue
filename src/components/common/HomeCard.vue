<script setup>
import Button from "primevue/button";

defineProps({
  title: String,
  description: String,
  image: String,
  link: String,
  buttonText: { type: String, default: "Ver más" },
});
</script>

<template>
  <div
    class="bg-white rounded-xl shadow-md  overflow-hidden flex flex-col h-Full border border-gray-100 hover:shadow-lg transition-shadow duration-300"
  >
    <div class="aspect-video w-full overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
      />
    </div>

    <div class="p-6 flex flex-col grow text-center">
      <h3 class="text-xl font-bold text-gray-900 mb-2">{{ title }}</h3>
      <p class="text-gray-600 mb-6 grow">
        {{ description }}
      </p>

      <router-link :to="link" class="no-underline">
        <Button
          class="w-full px-15 bg-emerald-500 hover:bg-emerald-400 rounded-lg font-bold h-12 text-white transition-all duration-200 hover:scale-105 active:scale-95"
          raised
        >
          <span
            class="hover:border-b-2 text-xl border-white transition-all duration-100"
          >
            {{ buttonText }}
          </span>
        </Button>
      </router-link>
    </div>
  </div>
</template>
