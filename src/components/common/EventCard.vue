<script setup>
import { Users, ChevronRight } from 'lucide-vue-next';

defineProps({
  date: String,
  title: String,
  description: String,
  participants: String
});
</script>

<template>
  <div
    class="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">

    <div class="absolute top-6 right-6 flex items-center gap-2 bg-amber-100/60 px-3 py-1.5 rounded-full border border-amber-200 shadow-sm backdrop-blur-xs">
      <span class="relative flex h-5 w-5 items-center justify-center">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-80"></span>
        <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-600 shadow-[0_0_5px_rgba(217,119,6,0.6)]"></span>
      </span>
      <span class="text-xs font-black text-amber-900 uppercase tracking-tighter">
        {{ $t('event_card.badge_new') }}
      </span>
    </div>

    <div class="flex items-center gap-2 mb-4">
      <span class="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest">
        {{ $t('event_card.badge_upcoming') }}
      </span>
      <span class="text-emerald-700 text-xs font-bold uppercase tracking-wider">{{ date }}</span>
    </div>

    <h3 class="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
      {{ title }}
    </h3>

    <p class="text-gray-600 text-sm leading-relaxed mb-6">
      {{ description }}
    </p>

    <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
      <div class="flex items-center gap-2 text-gray-500">
        <Users :size="16" />
        <span class="text-xs font-medium">{{ participants }}</span>
      </div>

      <button class="flex items-center gap-1 text-emerald-600 font-bold text-sm hover:gap-2 transition-all">
        {{ $t('event_card.button_join') }}
        <ChevronRight :size="16" />
      </button>
    </div>
  </div>
</template>