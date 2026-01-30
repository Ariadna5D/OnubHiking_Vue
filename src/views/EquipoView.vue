<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import HeroVideo from '../components/common/HeroVideo.vue';
import EquipmentCard from '../components/common/EquipmentCard.vue';
import { 
  Footprints, 
  Droplets, 
  BriefcaseMedical, 
  Sun, 
  Backpack, 
  Shirt 
} from 'lucide-vue-next';
import ScrollReveal from '../components/animations/ScrollReveal.vue';

const { t } = useI18n();
const baseUrl = import.meta.env.BASE_URL;

const equipoItems = computed(() => [
  {
    title: t('equipo_view.items.0.title'),
    category: t('equipo_view.items.0.category'),
    description: t('equipo_view.items.0.description'),
    image: `${baseUrl}images/equipo1.webp`,
    icon: Footprints
  },
  {
    title: t('equipo_view.items.1.title'),
    category: t('equipo_view.items.1.category'),
    description: t('equipo_view.items.1.description'),
    image: `${baseUrl}images/equipo2.webp`,
    icon: Droplets
  },
  {
    title: t('equipo_view.items.2.title'),
    category: t('equipo_view.items.2.category'),
    description: t('equipo_view.items.2.description'),
    image: `${baseUrl}images/equipo3.webp`,
    icon: BriefcaseMedical
  },
  {
    title: t('equipo_view.items.3.title'),
    category: t('equipo_view.items.3.category'),
    description: t('equipo_view.items.3.description'),
    image: `${baseUrl}images/equipo4.webp`,
    icon: Sun
  },
  {
    title: t('equipo_view.items.4.title'),
    category: t('equipo_view.items.4.category'),
    description: t('equipo_view.items.4.description'),
    image: `${baseUrl}images/equipo5.webp`,
    icon: Backpack
  },
  {
    title: t('equipo_view.items.5.title'),
    category: t('equipo_view.items.5.category'),
    description: t('equipo_view.items.5.description'),
    image: `${baseUrl}images/equipo6.webp`,
    icon: Shirt
  }
]);
</script>

<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-6 grow min-h-screen">
    <HeroVideo 
      :videoSrc="`${baseUrl}videos/montania_Ed.mp4`" 
      :title="$t('equipo_view.hero.title')" 
      :subtitle="$t('equipo_view.hero.subtitle')" 
    />

    <section class="mt-8 mb-20">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <ScrollReveal 
          v-for="(item, index) in equipoItems" 
          :key="item.title"
          :delay="index * 150"
        >
          <EquipmentCard v-bind="item" />
        </ScrollReveal>

      </div>
    </section>
  </div>
</template>