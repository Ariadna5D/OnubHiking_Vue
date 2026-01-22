<script setup>
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

// 1. Definimos la base URL
const baseUrl = import.meta.env.BASE_URL;

const equipoItems = [
  {
    title: 'Calzado',
    category: 'Fundamental',
    description: 'Botas de senderismo con buen agarre e impermeabilidad para proteger tus tobillos en terrenos irregulares.',
    // 2. Añadimos baseUrl (quitando la barra inicial de la ruta original)
    image: `${baseUrl}images/equipo1.webp`,
    icon: Footprints
  },
  {
    title: 'Cantimplora',
    category: 'Vital',
    description: 'Al menos 1.5 litros. Mantener la hidratación constante evita la fatiga y los calambres musculares.',
    image: `${baseUrl}images/equipo2.webp`,
    icon: Droplets
  },
  {
    title: 'Botiquín',
    category: 'Seguridad',
    description: 'Básico con desinfectante, vendas y tiritas. La seguridad es lo primero en cualquier ruta.',
    image: `${baseUrl}images/equipo3.webp`,
    icon: BriefcaseMedical
  },
  {
    title: 'Protección Solar',
    category: 'Protección',
    description: 'Gorra y gafas. En la montaña la radiación UV es más intensa, incluso en días nublados.',
    image: `${baseUrl}images/equipo4.webp`,
    icon: Sun
  },
  {
    title: 'Mochila',
    category: 'Esencial',
    description: 'Capacidad de 20-30L con ajuste pectoral. Debe distribuir el peso hacia tus caderas, no hombros.',
    image: `${baseUrl}images/equipo5.webp`,
    icon: Backpack
  },
  {
    title: 'Ropa Técnica',
    category: 'Confort',
    description: 'Sistema de capas transpirables. Evita el algodón; retiene la humedad y te enfriará al parar.',
    image: `${baseUrl}images/equipo6.webp`,
    icon: Shirt
  }
];
</script>

<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-6 grow min-h-screen">
    <HeroVideo 
      :videoSrc="`${baseUrl}videos/montania_Ed.mp4`" 
      title="Equipo Recomendado" 
      subtitle="Equípate como un profesional para disfrutar de Huelva" 
    />

<section class="mt-8  mb-20">
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