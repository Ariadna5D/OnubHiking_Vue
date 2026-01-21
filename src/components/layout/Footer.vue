<template>
    <footer class="bg-teal-950 text-gray-300 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 p-8 md:p-12">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
            
            <!-- Brand Section -->
            <div class="flex flex-col gap-6 lg:col-span-1">
                <img src="/images/logo.svg" alt="OnubHike Logo" class="h-10 w-fit" />
                <p class="text-sm leading-relaxed max-w-md">
                    OnubHike te guía por las mejores rutas de senderismo en Huelva y Andalucía. Descubre senderos, tracks GPS y comunidades de excursionistas apasionados.
                </p>
                <div class="flex gap-3">
                    <a href="#" class="p-2 rounded-lg bg-teal-900/50 hover:bg-teal-800/50 transition-all duration-200">
                        <i class="pi pi-facebook text-xl"></i>
                    </a>
                    <a href="#" class="p-2 rounded-lg bg-teal-900/50 hover:bg-teal-800/50 transition-all duration-200">
                        <i class="pi pi-twitter text-xl"></i>
                    </a>
                    <a href="#" class="p-2 rounded-lg bg-teal-900/50 hover:bg-teal-800/50 transition-all duration-200">
                        <i class="pi pi-instagram text-xl"></i>
                    </a>
                    <a href="#" class="p-2 rounded-lg bg-teal-900/50 hover:bg-teal-800/50 transition-all duration-200">
                        <i class="pi pi-github text-xl"></i>
                    </a>
                </div>
            </div>

            <div class="flex flex-col gap-6">
                <h3 class="font-bold text-white uppercase text-sm tracking-wider border-b border-teal-800/50 pb-2">Explora</h3>
                <ul class="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition-colors duration-200 hover:underline">Rutas Populares</a></li>
                    <li><a href="#" class="hover:text-white transition-colors duration-200 hover:underline">Huelva</a></li>
                    <li><a href="#" class="hover:text-white transition-colors duration-200 hover:underline">Sierra de Aracena</a></li>
                    <li><a href="#" class="hover:text-white transition-colors duration-200 hover:underline">Costa de la Luz</a></li>
                </ul>
            </div>

            <div class="flex flex-col gap-6">
                <h3 class="font-bold text-white uppercase text-sm tracking-wider border-b border-teal-800/50 pb-2">Comunidad</h3>
                <ul class="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition-colors duration-200 hover:underline">Subir Ruta</a></li>
                    <li><a href="#" class="hover:text-white transition-colors duration-200 hover:underline">Mi Perfil</a></li>
                    <li><a href="#" class="hover:text-white transition-colors duration-200 hover:underline">Mis Rutas</a></li>
                    <li><a href="#" class="hover:text-white transition-colors duration-200 hover:underline">Eventos</a></li>
                </ul>
            </div>

            <div class="flex flex-col gap-6 lg:justify-self-end">
                <h3 class="font-bold text-white uppercase text-sm tracking-wider border-b border-teal-800/50 pb-2">Legal</h3>
                <ul class="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition-colors duration-200 hover:underline">Política de Privacidad</a></li>
                    <li><a href="#" class="hover:text-white transition-colors duration-200 hover:underline">Términos de Servicio</a></li>
                    <li><a href="#" class="hover:text-white transition-colors duration-200 hover:underline">Aviso Legal</a></li>
                    <li><a href="#" class="hover:text-white transition-colors duration-200 hover:underline">Cookies</a></li>
                </ul>
            </div>
        </div>

        <div class="border-t border-teal-900/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>&copy; 2026 OnubHike. Hecho con Vue 3, Tailwind CSS v4 y PrimeVue.</p>
            <div class="flex gap-6 mt-4 md:mt-0">
                <a href="#" class="hover:text-white transition-colors">info@onubhike.com</a>
                <span>|</span>
                <a href="#" class="hover:text-white transition-colors">Huelva, España</a>
            </div>
        </div>
    </footer>
</template>
