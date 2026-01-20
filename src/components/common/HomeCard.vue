<script setup>
import Button from 'primevue/button';

defineProps({
    title: String,
    description: String,
    image: String,
    link: String,
    buttonText: { type: String, default: 'Ver más' }
});
</script>

<template>
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col h-full border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
        <div class="aspect-video w-full overflow-hidden">
            <img :src="image" :alt="title" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
        </div>

        <div class="p-6 flex flex-col flex-grow text-center">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ title }}</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                {{ description }}
            </p>
            
            <router-link :to="link" class="no-underline">
                <Button :label="buttonText" class="w-full font-bold" raised />
            </router-link>
        </div>
    </div>
</template>