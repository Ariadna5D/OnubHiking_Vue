<script setup>
import { computed } from 'vue'; 
import { useI18n } from 'vue-i18n'; 
import HeroVideo from '../components/common/HeroVideo.vue';
import CommunityCard from '../components/common/CommunityCard.vue';
import TabsEvents from '../components/common/TabsEvents.vue';
import ScrollReveal from '../components/animations/ScrollReveal.vue';
import VideoPlayer from '../components/common/VideoPlayer.vue';

const { t } = useI18n();
const baseUrl = import.meta.env.BASE_URL;

const communityData = computed(() => ({
  image: `${baseUrl}images/paisaje1.jpg`,
  title: t('comunidad_view.community_card.title'),
  description: t('comunidad_view.community_card.description')
}));
</script>

<template>
  <div class="container mx-auto px-4 mt-6 grow">
    <HeroVideo
      :videoSrc="`${baseUrl}videos/cascada.mp4`"
      :title="$t('comunidad_view.hero.title')"
      :subtitle="$t('comunidad_view.hero.subtitle')"
    />

    <section class="mb-12 ">
      <ScrollReveal>
        <CommunityCard v-bind="communityData" />
      </ScrollReveal>
    </section>

    <section class="mb-12 ">
      <h2 class="text-2xl font-bold text-emerald-900 mb-6 text-center">
        {{ $t('comunidad_view.news_section.title') }}
      </h2>
      <ScrollReveal>
        <TabsEvents />
      </ScrollReveal>
    </section>

  </div>
</template>