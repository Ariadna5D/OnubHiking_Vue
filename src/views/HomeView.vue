<script setup>
import HeroVideo from '../components/common/HeroVideo.vue';
import HomeCard from '../components/common/HomeCard.vue';
import { Map, Lightbulb, Backpack, Users } from 'lucide-vue-next';

const menuCards = [
    {
        title: 'Rutas Cercanas',
        description: 'Descubre los tesoros ocultos de la Sierra de Aracena y las marismas del Odiel.',
        image: '/images/paisaje1.jpg',
        link: '/rutas',
        icon: Map,
        buttonText: 'Ver rutas'
    },
    {
        title: 'Guía de Consejos',
        description: 'Todo lo que necesitas saber sobre seguridad, señalización y respeto al medio ambiente.',
        image: '/images/senial.jpg',
        link: '/',
        icon: Lightbulb,
        buttonText: 'Aprender más'
    },
    {
        title: 'Equipo Técnico',
        description: '¿Qué llevar en la mochila? Analizamos el material esencial para cada estación.',
        image: '/images/equipo1.webp',
        link: '/equipo',
        icon: Backpack,
        buttonText: 'Ver equipo'
    },
    {
        title: 'Comunidad Onubense',
        description: 'Únete a nuestras próximas salidas grupales y comparte tu pasión con otros.',
        image: '/images/grupo.jpg',
        link: '/comunidad',
        icon: Users,
        buttonText: 'Unirme'
    }
];
</script>

<template>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-6 grow min-h-screen">
        
        <HeroVideo 
            videoSrc="/videos/intro_Ed.mp4"
            title="Tu aventura comienza aquí"
            subtitle="Explora Huelva de una forma diferente a través del senderismo"
        />

        <section class="max-w-6xl mx-auto mt-16 mb-24">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
              <HomeCard 
                  v-for="card in menuCards" 
                  :key="card.title"
                  v-bind="card" 
                  class="animate-in fade-in slide-in-from-bottom-6 duration-700"
              />
          </div>
        </section>
    </div>
</template>