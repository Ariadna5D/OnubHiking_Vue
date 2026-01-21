<script setup>
import HeroVideo from '../components/common/HeroVideo.vue';
import EquipmentCard from '../components/common/EquipmentCard.vue';

const equipoItems = [
  {
    title: 'Calzado',
    description: 'Botas de senderismo con buen agarre e impermeabilidad.',
    image: '/images/equipo1.webp'
  },
  {
    title: 'Cantimplora',
    description: 'Al menos un litro y resistente. La hidratación es clave.',
    image: '/images/equipo2.webp'
  },
  {
    title: 'Botiquín',
    description: 'Incluye tiritas, antiséptico y vendas para emergencias.',
    image: '/images/equipo3.webp'
  },
  {
    title: 'Gorra',
    description: 'Protege contra la insolación y la exposición solar.',
    image: '/images/equipo4.webp'
  },
  {
    title: 'Mochila',
    description: 'Mochila cómoda y ergonómica. Distribuye bien el peso.',
    image: '/images/equipo5.webp'
  },
  {
    title: 'Ropa Técnica',
    description: 'Usa ropa transpirable y evita el algodón.',
    image: '/images/equipo6.webp'
  }
];
</script>

<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-6 grow min-h-screen">
    <HeroVideo videoSrc="/videos/montania_Ed.mp4" title="Equipo de Senderismo" subtitle="El equipamiento esencial para tus aventuras" />

    <section class="mt-8 mb-12">

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <EquipmentCard
          v-for="item in equipoItems"
          :key="item.title"
          v-bind="item"
        >
    <svg class="w-16 h-16 text-blue-500 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" fill="none"/>
    </svg>
        </EquipmentCard>
      </div>
    </section>
  </div>
</template>
