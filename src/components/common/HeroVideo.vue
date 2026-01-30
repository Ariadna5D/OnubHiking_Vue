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
        default: 'h-[50vh] md:h-[60vh] lg:h-[70vh]' 
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
        
        <div class="absolute inset-0 bg-black/40 flex items-center justify-center text-center text-white px-6 py-10">
            <div class="max-w-5xl mx-auto">
                <h1 
                    v-if="title" 
                    class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 balance drop-shadow-lg leading-tight"
                >
                    {{ title }}
                </h1>
                
                <p 
                    v-if="subtitle" 
                    class="text-lg sm:text-xl md:text-2xl opacity-90 drop-shadow-md max-w-2xl mx-auto"
                >
                    {{ subtitle }}
                </p>

                <div class="mt-8">
                    <slot></slot>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.balance {
    text-wrap: balance;
}
</style>