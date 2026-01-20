<script setup>
import { ref } from 'vue';

const menuItems = ref([
    { label: 'Inicio', path: '/' },
    { label: 'Equipo', path: '/equipo' },
    { label: 'Rutas', path: '/rutas' },
    { label: 'Comunidad', path: '/comunidad' }
]);
</script>

<template>
    <nav class="flex items-center justify-between px-8 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <router-link to="/" class="flex items-center gap-3">
            <img src="/images/logo.svg" alt="Logo" class="h-10 w-auto" />
            <h2 class="text-white font-bold text-3xl">OnubHiking</h2>
        </router-link>

        <ul class="flex gap-8 list-none m-0 p-0">
            <li v-for="item in menuItems" :key="item.path">
                <router-link 
                    :to="item.path"
                    class=" text-2xl text-gray-600 dark:text-gray-300 font-bold  no-underline pb-2 transition-all duration-200 border-b-2 border-transparent hover:text-primary"
                    active-class="text-primary! border-primary!"
                >
                    {{ item.label }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>
