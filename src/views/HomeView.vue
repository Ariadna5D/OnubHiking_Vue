<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import ScrollReveal from '../components/animations/ScrollReveal.vue';
import WindCanvas from '../components/animations/WindCanvas.vue';
import HeroVideo from '../components/common/HeroVideo.vue';
import HomeCard from '../components/common/HomeCard.vue';
import { Map, Lightbulb, Backpack, Users } from 'lucide-vue-next';
import VideoPlayer from '../components/common/VideoPlayer.vue';

const { t } = useI18n();
const baseUrl = import.meta.env.BASE_URL;

const menuCards = computed(() => [
    {
        title: t('home.menu_cards.rutas.title'),
        description: t('home.menu_cards.rutas.description'),
        image: `${baseUrl}images/paisaje1.jpg`,
        link: '/rutas',
        icon: Map,
        buttonText: t('home.menu_cards.rutas.button')
    },
    {
        title: t('home.menu_cards.guia.title'),
        description: t('home.menu_cards.guia.description'),
        image: `${baseUrl}images/senial.jpg`,
        link: '/',
        icon: Lightbulb,
        buttonText: t('home.menu_cards.guia.button')
    },
    {
        title: t('home.menu_cards.equipo.title'),
        description: t('home.menu_cards.equipo.description'),
        image: `${baseUrl}images/equipo1.webp`,
        link: '/equipo',
        icon: Backpack,
        buttonText: t('home.menu_cards.equipo.button')
    },
    {
        title: t('home.menu_cards.comunidad.title'),
        description: t('home.menu_cards.comunidad.description'),
        image: `${baseUrl}images/grupo.jpg`,
        link: '/comunidad',
        icon: Users,
        buttonText: t('home.menu_cards.comunidad.button')
    }
]);
</script>

<template>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-6 grow min-h-screen">

        <HeroVideo :videoSrc="`${baseUrl}videos/intro_Ed.mp4`" :title="$t('home.hero.title')"
            :subtitle="$t('home.hero.subtitle')" />

        <section class="max-w-6xl mx-auto mt-8 mb-10">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-7">
                <ScrollReveal v-for="(card, index) in menuCards" :key="card.id || index" :delay="index * 150">
                    <HomeCard v-bind="card" />
                </ScrollReveal>
            </div>
        </section>

        <section class="max-w-6xl mx-auto mb-24 px-0">
            <div class="max-w-4xl mx-auto text-center mb-10">
                <h2 class="text-5xl font-bold text-emerald-900 mb-4">{{ $t('home.discover.title') }}</h2>
                <p class="text-gray-600 text-2xl">{{ $t('home.discover.subtitle') }}</p>
            </div>

            <div
                class="grid grid-cols-1 md:grid-cols-1 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-2xl border border-emerald-100">
                <div class="p-8 md:p-12">
                    <VideoPlayer :src="`${baseUrl}videos/video_senderos_Huelva.mp4`"
                        :poster="`${baseUrl}images/miniatura.webp`" />
                </div>
            </div>
        </section>

    </div>
</template>