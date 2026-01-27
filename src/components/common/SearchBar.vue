<script setup>
import { ref, watch } from 'vue'
import { Search } from 'lucide-vue-next';

const searchQuery = ref('')
const isFocused = ref(false)

const handleSearch = () => {
    // Lógica de búsqueda
}
</script>

<template>
    <div class="relative max-w mx-auto mb-12 ">
        <div class="relative">
            <i class="pi pi-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl z-10"></i>
            <input 
                v-model="searchQuery"
                type="text"
                :placeholder="$t('search_bar.placeholder')"
                class="w-full h-20 pl-12 pr-12 py-3 text-xl bg-white/80  backdrop-blur-md border-2 border-gray-200  rounded-2xl shadow-xl focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-200/50 transition-all duration-300 text-gray-900  placeholder-gray-500"
                :class="{ 
                    'border-emerald-500! ring-emerald-300/70! shadow-2xl': isFocused || searchQuery 
                }"
                @focus="isFocused = true"
                @blur="setTimeout(() => isFocused = false, 200)"
                @keyup.enter="handleSearch"
            />
            <button 
                @click="handleSearch"
                class="absolute right-3 h-auto top-1/2 -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-xl font-semibold text-xl flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-emerald-200"
            >
                <Search :size="20" />
                <span class="hidden sm:inline">{{ $t('search_bar.button') }}</span>
            </button>
        </div>
    </div>
</template>