<script setup>
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Github, 
  Mail, 
  MapPin 
} from 'lucide-vue-next';
</script>

<template>
    <footer class="bg-teal-950 text-gray-300 border-t border-teal-900/50 p-8 md:p-12 mt-auto">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
            
            <div class="flex flex-col gap-6 lg:col-span-1">
                <img src="/images/logo.svg" alt="OnubHiking Logo" class="h-10 w-fit" />
                <p class="text-sm leading-relaxed max-w-md">
                    OnubHiking te guía por las mejores rutas de senderismo en Huelva y Andalucía. Descubre senderos, tracks GPS y comunidades de excursionistas apasionados.
                </p>
                <div class="flex gap-3">
                    <a href="#" class="p-2 rounded-lg bg-teal-900/30 hover:bg-emerald-600 hover:text-white transition-all duration-300 group">
                        <Facebook :size="20" :stroke-width="1.5" />
                    </a>
                    <a href="#" class="p-2 rounded-lg bg-teal-900/30 hover:bg-emerald-600 hover:text-white transition-all duration-300 group">
                        <Twitter :size="20" :stroke-width="1.5" />
                    </a>
                    <a href="#" class="p-2 rounded-lg bg-teal-900/30 hover:bg-emerald-600 hover:text-white transition-all duration-300 group">
                        <Instagram :size="20" :stroke-width="1.5" />
                    </a>
                    <a href="#" class="p-2 rounded-lg bg-teal-900/30 hover:bg-emerald-600 hover:text-white transition-all duration-300 group">
                        <Github :size="20" :stroke-width="1.5" />
                    </a>
                </div>
            </div>

            <div class="flex flex-col gap-6">
                <h3 class="font-bold text-white uppercase text-sm tracking-widest border-b border-teal-800/50 pb-2">Explora</h3>
                <ul class="space-y-3 text-sm">
                    <li><a href="#" class="hover:text-emerald-400 transition-colors duration-200">Rutas Populares</a></li>
                    <li><a href="#" class="hover:text-emerald-400 transition-colors duration-200">Huelva</a></li>
                    <li><a href="#" class="hover:text-emerald-400 transition-colors duration-200">Sierra de Aracena</a></li>
                    <li><a href="#" class="hover:text-emerald-400 transition-colors duration-200">Costa de la Luz</a></li>
                </ul>
            </div>

            <div class="flex flex-col gap-6">
                <h3 class="font-bold text-white uppercase text-sm tracking-widest border-b border-teal-800/50 pb-2">Comunidad</h3>
                <ul class="space-y-3 text-sm">
                    <li><a href="#" class="hover:text-emerald-400 transition-colors duration-200">Subir Ruta</a></li>
                    <li><a href="#" class="hover:text-emerald-400 transition-colors duration-200">Mi Perfil</a></li>
                    <li><a href="#" class="hover:text-emerald-400 transition-colors duration-200">Mis Rutas</a></li>
                    <li><a href="#" class="hover:text-emerald-400 transition-colors duration-200">Eventos</a></li>
                </ul>
            </div>

            <div class="flex flex-col gap-6 lg:justify-self-end w-full lg:w-fit">
                <h3 class="font-bold text-white uppercase text-sm tracking-widest border-b border-teal-800/50 pb-2">Legal</h3>
                <ul class="space-y-3 text-sm">
                    <li><a href="#" class="hover:text-emerald-400 transition-colors duration-200">Política de Privacidad</a></li>
                    <li><a href="#" class="hover:text-emerald-400 transition-colors duration-200">Términos de Servicio</a></li>
                    <li><a href="#" class="hover:text-emerald-400 transition-colors duration-200">Aviso Legal</a></li>
                    <li><a href="#" class="hover:text-emerald-400 transition-colors duration-200">Cookies</a></li>
                </ul>
            </div>
        </div>

        <div class="border-t border-teal-900/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-6">
            <p>&copy; 2026 OnubHiking. Hecho con Vue 3, Tailwind CSS v4 y PrimeVue.</p>
            
            <div class="flex flex-wrap justify-center gap-6">
                <a href="mailto:info@onubhike.com" class="flex items-center gap-2 hover:text-white transition-colors">
                    <Mail :size="14" class="text-emerald-500" />
                    info@onubhike.com
                </a>
                <span class="hidden md:inline text-teal-800">|</span>
                <p class="flex items-center gap-2">
                    <MapPin :size="14" class="text-emerald-500" />
                    Huelva, España
                </p>
            </div>
        </div>
    </footer>
</template>