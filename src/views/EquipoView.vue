<script setup>
import HeroVideo from '../components/common/HeroVideo.vue';
import EquipmentCard from '../components/common/EquipmentCard.vue';
// Importamos los iconos específicos
import { 
  Footprints, 
  Droplets, 
  BriefcaseMedical, 
  Sun, 
  Backpack, 
  Shirt 
} from 'lucide-vue-next';

const equipoItems = [
  {
    title: 'Calzado',
    category: 'Fundamental',
    description: 'Botas de senderismo con buen agarre e impermeabilidad para proteger tus tobillos en terrenos irregulares.',
    image: '/images/equipo1.webp',
    icon: Footprints
  },
  {
    title: 'Cantimplora',
    category: 'Vital',
    description: 'Al menos 1.5 litros. Mantener la hidratación constante evita la fatiga y los calambres musculares.',
    image: '/images/equipo2.webp',
    icon: Droplets
  },
  {
    title: 'Botiquín',
    category: 'Seguridad',
    description: 'Básico con desinfectante, vendas y tiritas. La seguridad es lo primero en cualquier ruta.',
    image: '/images/equipo3.webp',
    icon: BriefcaseMedical
  },
  {
    title: 'Protección Solar',
    category: 'Protección',
    description: 'Gorra y gafas. En la montaña la radiación UV es más intensa, incluso en días nublados.',
    image: '/images/equipo4.webp',
    icon: Sun
  },
  {
    title: 'Mochila',
    category: 'Esencial',
    description: 'Capacidad de 20-30L con ajuste pectoral. Debe distribuir el peso hacia tus caderas, no hombros.',
    image: '/images/equipo5.webp',
    icon: Backpack
  },
  {
    title: 'Ropa Técnica',
    category: 'Confort',
    description: 'Sistema de capas transpirables. Evita el algodón; retiene la humedad y te enfriará al parar.',
    image: '/images/equipo6.webp',
    icon: Shirt
  }
];
</script>

<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-6 grow min-h-screen">
    <HeroVideo 
      videoSrc="/videos/montania_Ed.mp4" 
      title="Equipo Recomendado" 
      subtitle="Equípate como un profesional para disfrutar de Huelva" 
    />

    <section class="mt-16 mb-20">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-black text-gray-900 uppercase tracking-tighter">Checklist de Aventura</h2>
        <p class="text-emerald-600 font-bold">Lo que no puede faltar en tu mochila</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <EquipmentCard
          v-for="item in equipoItems"
          :key="item.title"
          v-bind="item"
        >
        </EquipmentCard>
      </div>
    </section>
  </div>
</template>