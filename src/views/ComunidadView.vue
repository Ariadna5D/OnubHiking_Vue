<script setup>
import HeroVideo from '../components/common/HeroVideo.vue';
import CommunityCard from '../components/common/CommunityCard.vue';
import TabsEvents from '../components/common/TabsEvents.vue';

// 1. Obtenemos la base URL de Vite
const baseUrl = import.meta.env.BASE_URL;

const communityData = {
  // 2. Concatenamos la base a la ruta de la imagen
  image: `${baseUrl}images/paisaje1.jpg`,
  title: '¡Únete a nuestras rutas en grupo!',
  description: 'Quedamos a menudo y siempre hay muy buen ambiente, descubriremos lugares, experiencias y amigos nuevos! Esto es apto para todas las edades!'
};

</script>

<template>
  <div class="container mx-auto px-4 mt-6 grow">
    <HeroVideo
      :videoSrc="`${baseUrl}videos/cascada.mp4`"
      title="Descubre nuestra gran comunidad"
      subtitle="Explora Huelva con la mejor compañía y para todas las edades"
    />

    <section class="mb-12">
      <CommunityCard v-bind="communityData" />
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-bold text-emerald-900  mb-6 text-center">
        Noticias de la Comunidad
      </h2>
      <TabsEvents />
    </section>
  </div>
</template>