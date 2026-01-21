<template>
  <div 
    ref="target" 
    :class="['reveal', { 'is-visible': isVisible }]"
    :style="{ transitionDelay: props.delay + 'ms' }" 
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Definimos la prop. No es obligatoria y por defecto es 0.
const props = defineProps({
  delay: {
    type: Number,
    default: 0
  }
});

const target = ref(null);
const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        // Dejamos de observar para que la animación solo ocurra una vez
        observer.unobserve(entry.target); 
      }
    });
  }, { 
    threshold: 0.1 // Se activa cuando el 10% del elemento es visible
  });

  if (target.value) {
    observer.observe(target.value);
  }
});
</script>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(30px);
  /* El transition-delay se aplica vía inline-style desde el template */
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>