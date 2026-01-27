<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const canvas = ref(null);
let animationFrameId = null;
let particles = [];

const resize = () => {
  if (!canvas.value) return;
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;
};

class Particle {
  constructor() {
    this.reset(true); // true indica que es la carga inicial (posición aleatoria)
  }

  reset(initial = false) {
    // Si es el inicio, que aparezcan por toda la pantalla. 
    // Si es un reinicio tras salir, que aparezcan justo por el borde derecho.
    this.x = initial ? Math.random() * window.innerWidth : window.innerWidth + Math.random() * 50;
    this.baseY = Math.random() * window.innerHeight;
    this.y = this.baseY;
    this.speed = Math.random() * 2 + 1;
    this.length = Math.random() * 40 + 20; 
    
    this.amplitude = Math.random() * 15 + 5; 
    this.frequency = 0.005 + Math.random() * 0.01; 
  }

  update() {
    // CAMBIO: Restamos velocidad para ir hacia la izquierda
    this.x -= this.speed;
    
    this.y = this.baseY + Math.sin(this.x * this.frequency) * this.amplitude;

    // CAMBIO: Si sale por el borde izquierdo (0 - su longitud), reinicia a la derecha
    if (this.x < -this.length) {
      this.reset(false);
    }
  }

  draw(ctx) {
    ctx.strokeStyle = 'rgba(0, 70, 40, 0.15)'; 
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    ctx.moveTo(this.x, this.y);
    
    // La "cola" de la partícula se dibuja hacia la derecha para dar efecto de movimiento a la izquierda
    const endX = this.x + this.length;
    const endY = this.baseY + Math.sin(endX * this.frequency) * this.amplitude;
    
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }
}

onMounted(() => {
  const ctx = canvas.value.getContext('2d');
  resize();

  particles = Array.from({ length: 100 }, () => new Particle());

  const animate = () => {
    if (!canvas.value) return;
    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
    particles.forEach(p => {
      p.update();
      p.draw(ctx);
    });
    animationFrameId = requestAnimationFrame(animate);
  };

  animate();
  window.addEventListener('resize', resize);
});

onUnmounted(() => {
  window.removeEventListener('resize', resize);
  cancelAnimationFrame(animationFrameId);
});
</script>

<template>
  <canvas ref="canvas" class="wind-bg"></canvas>
</template>

<style scoped>
.wind-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0; 
  pointer-events: none; 
  background: transparent; 
}
</style>