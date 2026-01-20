<script setup>
import HeroVideo from '../components/common/HeroVideo.vue';
import HomeCard from '../components/common/HomeCard.vue';

const menuCards = [
    {
        title: 'Rutas cercanas',
        description: 'Encuentra senderos increíbles cerca de ti.',
        image: '/images/paisaje1.jpg',
        link: '/rutas'
    },
    {
        title: 'Consejos',
        description: 'Aprende las mejores prácticas para tus rutas.',
        image: '/images/senial.jpg',
        link: '/' 
    },
    {
        title: 'Equipo',
        description: 'Descubre el equipo esencial para tus aventuras.',
        image: '/images/equipo1.webp',
        link: '/equipo'
    },
    {
        title: 'Comunidad',
        description: 'Conecta con otros amantes del senderismo.',
        image: '/images/grupo.jpg',
        link: '/comunidad'
    }
];
</script>

<template>
    <div class="container mx-auto px-4 mt-6 flex-grow">
        
        <HeroVideo 
            videoSrc="/videos/intro_Ed.mp4"
            title="Descubre las mejores rutas de Huelva"
            subtitle="Explora la naturaleza onubense a través de sus senderos"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <HomeCard 
                v-for="card in menuCards" 
                :key="card.title"
                v-bind="card" 
            />
        </div>
    </div>
</template>