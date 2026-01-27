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
                    {{ $t('footer.description') }}
                </p>
                <div class="flex gap-3">
                    <a href="#" class="p-2 rounded-lg bg-teal-900/30 hover:bg-emerald-600 hover:text-white transition-all duration-300 group">
                        <Facebook :size="20" :stroke-width="1.5" />
                    </a>
                    <a href="#" class="p-2 rounded-lg bg-teal-900/30 hover:bg-emerald-600 hover:text-white transition-all duration-300">
                        <Twitter :size="20" :stroke-width="1.5" />
                    </a>
                    <a href="#" class="p-2 rounded-lg bg-teal-900/30 hover:bg-emerald-600 hover:text-white transition-all duration-300">
                        <Instagram :size="20" :stroke-width="1.5" />
                    </a>
                    <a href="#" class="p-2 rounded-lg bg-teal-900/30 hover:bg-emerald-600 hover:text-white transition-all duration-300">
                        <Github :size="20" :stroke-width="1.5" />
                    </a>
                </div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 lg:col-span-3 gap-8">
                <div class="flex flex-col gap-4">
                    <h3 class="text-white font-bold text-lg border-b border-teal-800/50 pb-2">{{ $t('footer.explore') }}</h3>
                    <ul class="space-y-3 text-sm">
                        <li><router-link to="/rutas" class="hover:text-emerald-400 transition-colors duration-200">{{ $t('footer.popular_routes') }}</router-link></li>
                        <li><router-link to="/comunidad" class="hover:text-emerald-400 transition-colors duration-200">{{ $t('footer.community') }}</router-link></li>
                        <li><a href="#" class="hover:text-emerald-400 transition-colors duration-200">{{ $t('footer.upload_route') }}</a></li>
                    </ul>
                </div>

                <div class="flex flex-col gap-4">
                    <h3 class="text-white font-bold text-lg border-b border-teal-800/50 pb-2">{{ $t('footer.community') }}</h3>
                    <ul class="space-y-3 text-sm">
                        <li><a href="#" class="hover:text-emerald-400 transition-colors duration-200">{{ $t('footer.my_profile') }}</a></li>
                        <li><a href="#" class="hover:text-emerald-400 transition-colors duration-200">{{ $t('footer.my_routes') }}</a></li>
                        <li><a href="#" class="hover:text-emerald-400 transition-colors duration-200">{{ $t('footer.events') }}</a></li>
                    </ul>
                </div>

                <div class="flex flex-col gap-4">
                    <h3 class="text-white font-bold text-lg border-b border-teal-800/50 pb-2">{{ $t('footer.legal') }}</h3>
                    <ul class="space-y-3 text-sm">
                        <li><a href="#" class="hover:text-emerald-400 transition-colors duration-200">{{ $t('footer.privacy') }}</a></li>
                        <li><a href="#" class="hover:text-emerald-400 transition-colors duration-200">{{ $t('footer.terms') }}</a></li>
                        <li><a href="#" class="hover:text-emerald-400 transition-colors duration-200">{{ $t('footer.legal_notice') }}</a></li>
                        <li><a href="#" class="hover:text-emerald-400 transition-colors duration-200">{{ $t('footer.cookies') }}</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="border-t border-teal-900/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-6">
            <p>&copy; 2026 OnubHiking. {{ $t('footer.made_with') }}</p>
            
            <div class="flex flex-wrap justify-center gap-6">
                <a href="mailto:info@onubhike.com" class="flex items-center gap-2 hover:text-white transition-colors">
                    <Mail :size="14" class="text-emerald-500" />
                    info@onubhike.com
                </a>
                <span class="hidden md:inline text-teal-800">|</span>
                <span class="flex items-center gap-2">
                    <MapPin :size="14" class="text-emerald-500" />
                    {{ $t('footer.location') }}
                </span>
            </div>
        </div>
    </footer>
</template>