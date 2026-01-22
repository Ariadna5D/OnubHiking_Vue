<script setup>
import { ref, onMounted } from 'vue';
import { Play, Pause, Volume2, Maximize } from 'lucide-vue-next';

const props = defineProps({
  src: { type: String, required: true },
  poster: { type: String, default: '' },
  title: { type: String, default: 'Video de la comunidad' }
});

const videoRef = ref(null);
const isPlaying = ref(false);

const togglePlay = () => {
  if (videoRef.value.paused) {
    videoRef.value.play();
    isPlaying.value = true;
  } else {
    videoRef.value.pause();
    isPlaying.value = false;
  }
};

const handleFullscreen = () => {
  if (videoRef.value.requestFullscreen) {
    videoRef.value.requestFullscreen();
  }
};
</script>

<template>
  <div class="relative group rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video w-full max-w-4xl mx-auto border-4 border-emerald-900/10">
    <video
      ref="videoRef"
      class="w-full h-full object-cover"
      :poster="poster"
      @click="togglePlay"
    >
      <source :src="src" type="video/mp4" />
      Tu navegador no soporta vídeos.
    </video>

    <div class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
      
      <div class="flex items-center justify-between text-white">
        <div class="flex items-center gap-4">
          <button @click="togglePlay" class="hover:scale-110 transition-transform cursor-pointer">
            <Pause v-if="isPlaying" :size="28" />
            <Play v-else :size="28" fill="currentColor" />
          </button>
          <span class="font-medium text-sm sm:text-base">{{ title }}</span>
        </div>

        <div class="flex items-center gap-4">
          <Volume2 :size="20" />
          <button @click="handleFullscreen" class="hover:scale-110 transition-transform cursor-pointer">
            <Maximize :size="20" />
          </button>
        </div>
      </div>
    </div>

    <button 
      v-if="!isPlaying"
      @click="togglePlay"
      class="absolute inset-0 m-auto w-20 h-20 bg-emerald-500/90 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-400 transition-all hover:scale-110 group-hover:flex"
    >
      <Play :size="40" fill="currentColor" class="ml-1" />
    </button>
  </div>
</template>