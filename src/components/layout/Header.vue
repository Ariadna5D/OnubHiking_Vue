<script setup>
import { ref } from 'vue';

const menuItems = ref([
    { label: 'Inicio', path: '/' },
    { label: 'Equipo', path: '/equipo' },
    { label: 'Rutas', path: '/rutas' },
    { label: 'Comunidad', path: '/comunidad' }
]);

const isMobileMenuOpen = ref(false);
</script>

<template>
    <nav
        class="bg-linear-to-r from-emerald-700  to-teal-800 shadow-lg sticky top-0 z-50 border-b border-emerald-500/30 backdrop-blur-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16 lg:h-20">

                <!-- Logo -->
                <router-link to="/" class="flex items-center gap-3 shrink-0">
                    <img src="/images/logo.svg" alt="OnubHiking Logo" class="h-10 w-auto lg:h-12" />
                    <h2 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl tracking-tight hidden sm:block">
                        OnubHiking
                    </h2>
                </router-link>

                <!-- Desktop Menu -->
                <ul class="hidden lg:flex gap-2 xl:gap-8 list-none m-0 p-0 items-center">
                    <li v-for="item in menuItems" :key="item.path">
<router-link :to="item.path"
  class="relative pb-3 transition-all duration-300 text-lg xl:text-2xl text-white/80 font-semibold inline-block
         after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 
         after:w-0 hover:after:w-full active:after:w-full!
         after:bg-linear-to-r after:from-emerald-400 after:to-teal-400 
         after:transition-all after:duration-300"
  active-class="!text-white xl:text-[1.7rem] font-black after:!w-full after:h-1">
  {{ item.label }}
</router-link>
                    </li>

                </ul>

                <!-- Mobile menu button -->
                <button @click="isMobileMenuOpen = !isMobileMenuOpen"
                    class="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 text-white"
                    aria-label="Toggle menu">
                    <i class="pi pi-bars text-xl" v-if="!isMobileMenuOpen"></i>
                    <i class="pi pi-times text-xl" v-else></i>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div v-if="isMobileMenuOpen"
            class="lg:hidden bg-emerald-800/95 backdrop-blur-md border-t border-emerald-500/50 px-4 py-4 animate-in slide-in-from-top-4 duration-300">
            <ul class="flex flex-col gap-3">
                <li v-for="item in menuItems" :key="item.path">
                    <router-link :to="item.path" @click="isMobileMenuOpen = false"
                        class="block py-3 px-4 text-lg font-bold text-white/90 rounded-xl hover:bg-white/20 transition-all duration-300 border-l-4 border-transparent hover:border-emerald-300 hover:translate-x-2"
                        active-class="!bg-white/30 !border-emerald-400 !translate-x-4 font-black shadow-inner">
                        {{ item.label }}
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
