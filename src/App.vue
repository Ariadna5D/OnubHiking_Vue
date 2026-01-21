<script setup>
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
import WindCanvas from './components/animations/WindCanvas.vue';
</script>

<template>
    <div class="min-h-screen flex flex-col  bg-emerald-100">
        <Header />
        
        <main class="grow px-10">
            <WindCanvas />

            <router-view class="relative z-10"></router-view> 
        </main>

        <Footer />
    </div>
</template>