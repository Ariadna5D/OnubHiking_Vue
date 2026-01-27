<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import ScrollReveal from "../components/animations/ScrollReveal.vue";
import HeroVideo from "../components/common/HeroVideo.vue";
import RouteCard from "../components/common/RouteCard.vue";
import SearchBar from "../components/common/SearchBar.vue";

const { t, tm, rt } = useI18n();
const baseUrl = import.meta.env.BASE_URL;

const rutas = computed(() => {
  const listaTraducida = tm('rutas_view.lista');
  if (!Array.isArray(listaTraducida)) return []; 
  
  return listaTraducida.map((item) => ({
    title: rt(item.title),
    distance: rt(item.distance),
    difficulty: rt(item.difficulty),
    audience: rt(item.audience),
    description: rt(item.description),
    image: `${baseUrl}images/${rt(item.image)}`,
    // ESTE ES EL CAMPO QUE FALTABA PARA EL BOTÓN
    buttonText: t('rutas_view.button_text'), 
    link: "#",
  }));
});

const topRutas = computed(() => {
  const topTraducido = tm('rutas_view.top_data');
  if (!Array.isArray(topTraducido)) return [];
  
  return topTraducido.map((item) => ({
    rank: item.rank,
    name: rt(item.name),
    km: rt(item.km),
    difficulty: rt(item.difficulty),
    score: rt(item.score)
  }));
});
</script>

<template>
  <div class="container mx-auto px-4 mt-6 grow">
    <HeroVideo 
      :videoSrc="`${baseUrl}videos/consejos_Ed.mp4`" 
      :title="$t('rutas_view.hero.title')"
      :subtitle="$t('rutas_view.hero.subtitle')" 
    />

    <section class="mt-8">
      <ScrollReveal>
        <SearchBar />
      </ScrollReveal>

      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        <ScrollReveal v-for="(ruta, index) in rutas" :key="ruta.title" :delay="index * 100">
          <RouteCard v-bind="ruta" />
        </ScrollReveal>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-bold text-emerald-950 mb-4">
        {{ $t('rutas_view.top_section.title') }}
      </h2>
      <div class="overflow-x-auto bg-white rounded-xl shadow-md border border-gray-100">
        <table class="min-w-full text-sm">
          <thead class="bg-teal-300">
            <tr>
              <th class="text-left px-4 py-3 font-semibold text-gray-700">{{ $t('rutas_view.top_section.table.rank') }}</th>
              <th class="text-left px-4 py-3 font-semibold text-gray-700">{{ $t('rutas_view.top_section.table.route') }}</th>
              <th class="text-left px-4 py-3 font-semibold text-gray-700">{{ $t('rutas_view.top_section.table.km') }}</th>
              <th class="text-left px-4 py-3 font-semibold text-gray-700">{{ $t('rutas_view.top_section.table.difficulty') }}</th>
              <th class="text-left px-4 py-3 font-semibold text-gray-700">{{ $t('rutas_view.top_section.table.score') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ruta in topRutas" :key="ruta.rank" class="border-t hover:bg-teal-100 border-gray-100">
              <td class="px-4 py-3 text-gray-700">{{ ruta.rank }}</td>
              <td class="px-4 py-3 text-gray-900 font-medium">{{ ruta.name }}</td>
              <td class="px-4 py-3 text-gray-700">{{ ruta.km }}</td>
              <td class="px-4 py-3 text-gray-700">{{ ruta.difficulty }}</td>
              <td class="px-4 py-3 text-gray-900">{{ ruta.score }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>