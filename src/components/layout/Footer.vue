<template>
    <footer class="bg-gray-50 dark:bg-gray-950 text-gray-700 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 p-10">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            
            <div class="flex flex-col gap-4">
                <img src="/images/logo.svg" alt="Logo" class="h-8 w-fit" />
                <p class="text-sm leading-relaxed">
                    Este es un texto placeholder para describir brevemente tu proyecto o empresa. Construido con pasión usando Vue y PrimeVue.
                </p>
            </div>

            <div class="flex flex-col gap-4">
                <h3 class="font-bold text-gray-900 dark:text-white uppercase text-sm tracking-wider">Síguenos</h3>
                <div class="flex gap-4">
                    <i class="pi pi-facebook text-xl cursor-pointer hover:text-blue-600 transition-colors"></i>
                    <i class="pi pi-twitter text-xl cursor-pointer hover:text-blue-400 transition-colors"></i>
                    <i class="pi pi-instagram text-xl cursor-pointer hover:text-pink-500 transition-colors"></i>
                    <i class="pi pi-github text-xl cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors"></i>
                </div>
            </div>

            <div class="flex flex-col gap-2">
                <h3 class="font-bold text-gray-900 dark:text-white uppercase text-sm tracking-wider">Legal</h3>
                <a href="#" class="hover:underline">Política de Privacidad</a>
                <a href="#" class="hover:underline">Términos de Servicio</a>
            </div>
        </div>

        <div class="text-center mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 text-xs">
            © 2024 Tu Marca. Todos los derechos reservados.
        </div>
    </footer>
</template>