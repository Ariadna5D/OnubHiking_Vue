<script setup>
defineProps({
    videoSrc: {
        type: String,
        required: true
    },
    title: {
        type: String,
        default: ''
    },
    subtitle: {
        type: String,
        default: ''
    },
    height: {
        type: String,
        default: 'h-[60vh]' // Altura por defecto
    }
});
</script>

<template>
    <section :class="['relative w-full overflow-hidden rounded-xl shadow-lg mb-8', height]">
        <video 
            autoplay 
            muted 
            loop 
            playsinline 
            class="absolute inset-0 w-full h-full object-cover"
        >
            <source :src="videoSrc" type="video/mp4" />
            Tu navegador no soporta videos.
        </video>
        
        <div class="absolute inset-0 bg-black/40 flex items-center justify-center text-center text-white px-4">
            <div class="max-w-4xl">
                <h1 v-if="title" class="text-3xl md:text-5xl font-bold mb-2 drop-shadow-md">
                    {{ title }}
                </h1>
                <p v-if="subtitle" class="text-lg md:text-xl opacity-90 drop-shadow-sm">
                    {{ subtitle }}
                </p>
                <slot></slot>
            </div>
        </div>
    </section>
</template>