<script setup>
import { ref } from "vue"; // No hace falta importar Transition explícitamente en el script
import { Menu, X } from 'lucide-vue-next'; // He añadido 'X' para que cambie el icono al abrir
import SvgTracer from "../animations/SvgTracer.vue";

const menuItems = ref([
  { label: "Inicio", path: "/" },
  { label: "Equipo", path: "/equipo" },
  { label: "Rutas", path: "/rutas" },
  { label: "Comunidad", path: "/comunidad" },
]);

const isMobileMenuOpen = ref(false);
</script>

<template>
  <nav class="bg-emerald-600 shadow-lg sticky top-0 z-50 border-b border-emerald-500/30">
    
    <div class="relative z-20 bg-linear-to-r from-emerald-600 to-teal-700 backdrop-blur-sm px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto flex justify-between items-center h-16 lg:h-20">
        
        <router-link to="/" class="flex items-center gap-3 shrink-0">
          <img src="/images/logo.svg" alt="OnubHiking Logo" class="h-10 w-auto lg:h-12" />
          <h2 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl tracking-tight hidden sm:block">
            OnubHiking
          </h2>
        </router-link>
        
        <ul class="hidden lg:flex xl:w-1/3 place-content-around gap-2 xl:gap-8 list-none m-0 p-0 items-center">
          <li v-for="item in menuItems" :key="item.path">
            <router-link
              :to="item.path"
              class="relative pb-3 transition-transform duration-300 text-lg xl:text-2xl text-white/80 font-bold inline-block
                     after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-linear-to-r after:from-emerald-400 after:to-teal-400 after:transition-all after:duration-300"
              active-class="!text-white scale-110 after:!w-full after:h-1"
            >
              {{ item.label }}
            </router-link>
          </li>
        </ul>

        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 text-white"
        >
          <Menu v-if="!isMobileMenuOpen" :size="28" :stroke-width="1.25" />
          <X v-else :size="28" :stroke-width="1.25" />
        </button>
      </div>
    </div>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-full opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-full opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        class="absolute top-full left-0 w-full z-10 lg:hidden bg-emerald-800/80 backdrop-blur-md border-t border-emerald-500/50 px-4 py-6 shadow-2xl"
      >
        <ul class="flex flex-col gap-3">
          <li v-for="item in menuItems" :key="item.path">
            <router-link
              :to="item.path"
              @click="isMobileMenuOpen = false"
              class="block py-4 px-6 text-lg font-bold text-white/90 rounded-xl hover:bg-white/10 transition-all duration-300 border-l-4 border-transparent hover:border-emerald-300 hover:translate-x-2"
              active-class="!bg-white/20 !border-emerald-400 !translate-x-4 font-black"
            >
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>