<script setup>
import ScrollReveal from '../components/animations/ScrollReveal.vue';
import WindCanvas from '../components/animations/WindCanvas.vue';
import HeroVideo from '../components/common/HeroVideo.vue';
import HomeCard from '../components/common/HomeCard.vue';
import { Map, Lightbulb, Backpack, Users } from 'lucide-vue-next';

// 1. Obtenemos la base URL (será "/" en local y "/OnubHiking_Vue/" en GitHub)
const baseUrl = import.meta.env.BASE_URL;

const menuCards = [
    {
        title: 'Rutas Cercanas',
        description: 'Descubre los tesoros ocultos de la Sierra de Aracena y las marismas del Odiel.',
        // 2. Concatenamos la base antes de la ruta (asumiendo que están en public/images/)
        image: `${baseUrl}images/paisaje1.jpg`,
        link: '/rutas',
        icon: Map,
        buttonText: 'Ver rutas'
    },
    {
        title: 'Guía de Consejos',
        description: 'Todo lo que necesitas saber sobre seguridad, señalización y respeto al medio ambiente.',
        image: `${baseUrl}images/senial.jpg`,
        link: '/',
        icon: Lightbulb,
        buttonText: 'Aprender más'
    },
    {
        title: 'Equipo Técnico',
        description: '¿Qué llevar en la mochila? Analizamos el material esencial para cada estación.',
        image: `${baseUrl}images/equipo1.webp`,
        link: '/equipo',
        icon: Backpack,
        buttonText: 'Ver equipo'
    },
    {
        title: 'Comunidad Onubense',
        description: 'Únete a nuestras próximas salidas grupales y comparte tu pasión con otros.',
        image: `${baseUrl}images/grupo.jpg`,
        link: '/comunidad',
        icon: Users,
        buttonText: 'Unirme'
    }
];
</script>

<template>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-6 grow min-h-screen">

        <HeroVideo :videoSrc="`${baseUrl}videos/intro_Ed.mp4`" title="Tu aventura comienza aquí"
            subtitle="Explora Huelva de una forma diferente a través del senderismo" />
        <section class="max-w-6xl mx-auto mt-8 mb-24">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-7">
            <ScrollReveal 
            v-for="(card, index) in menuCards" 
            :key="card.id || index"
            :delay="index * 150"
            >
            <HomeCard v-bind="card" />
            </ScrollReveal>
            </div>
        </section>
    </div>
</template>