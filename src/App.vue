<script setup>
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
</script>

<template>
    <div class="min-h-screen flex flex-col  bg-emerald-100">
        <Header />

        <main class="grow px-10">
            <router-view></router-view> 
        </main>

        <Footer />
    </div>
</template>