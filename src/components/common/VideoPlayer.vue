<script setup>
import { ref } from 'vue';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-vue-next';

const props = defineProps({
  src: { type: String, required: true },
  poster: { type: String, default: '' },
  title: { type: String, default: 'Video de la comunidad' }
});

const videoRef = ref(null);
const isPlaying = ref(false);
const volume = ref(1); // Rango de 0 a 1

const togglePlay = () => {
  if (!videoRef.value) return;

  if (videoRef.value.paused) {
    // Usamos el catch para evitar que el error de "play/pause" ensucie la consola
    videoRef.value.play().catch(error => {
      console.error("Error al reproducir:", error);
    });
  } else {
    videoRef.value.pause();
  }
};

const handleVolumeChange = (e) => {
  const val = parseFloat(e.target.value);
  volume.value = val;
  videoRef.value.volume = val;
};

const handleFullscreen = () => {
  if (videoRef.value.requestFullscreen) {
    videoRef.value.requestFullscreen();
  }
};
</script>

<template>
  <div class="relative group rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video w-full">
    <video ref="videoRef" :src="src" class="w-full h-full object-cover cursor-pointer" :poster="poster" playsinline
      @click="togglePlay" @play="isPlaying = true" @pause="isPlaying = false">
      Tu navegador no soporta vídeos.
    </video>

    <div
      class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
      <div class="flex items-center justify-between text-white">
        <div class="flex items-center gap-4">
          <button @click.stop="togglePlay"
            class="hover:scale-110 transition-transform cursor-pointer focus:outline-none">
            <Pause v-if="isPlaying" :size="28" />
            <Play v-else :size="28" fill="currentColor" />
          </button>
          <span class="font-medium text-sm sm:text-base truncate max-w-[200px]">{{ title }}</span>
        </div>

        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2 group/volume">
            <VolumeX v-if="volume === 0" :size="20" />
            <Volume2 v-else :size="20" />
            <input type="range" min="0" max="1" step="0.1" :value="volume" @input="handleVolumeChange"
              class="w-0 group-hover/volume:w-20 transition-all duration-300 accent-emerald-500 cursor-pointer appearance-none bg-white/30 h-1.5 rounded-lg" />
          </div>
          <button @click.stop="handleFullscreen"
            class="hover:scale-110 transition-transform cursor-pointer focus:outline-none">
            <Maximize :size="20" />
          </button>
        </div>
      </div>
    </div>

    <button v-if="!isPlaying" @click.stop="togglePlay"
      class="absolute inset-0 m-auto w-20 h-20 bg-emerald-500/90 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-400 transition-all hover:scale-110">
      <Play :size="40" fill="currentColor" class="ml-1" />
    </button>
  </div>
</template>

<style scoped>
input[type='range']::-webkit-slider-thumb {
  appearance: none;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}
</style>