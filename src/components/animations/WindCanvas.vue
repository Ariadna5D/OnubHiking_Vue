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
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.reset();
  }

  reset() {
    this.x = Math.random() * window.innerWidth;
    this.baseY = Math.random() * window.innerHeight;
    this.y = this.baseY;
    this.speed = Math.random() * 2 + 1;
    this.length = Math.random() * 40 + 20; 
    
    this.amplitude = Math.random() * 15 + 5; 
    this.frequency = 0.005 + Math.random() * 0.01; 
  }

  update() {
    this.x += this.speed;
    
    this.y = this.baseY + Math.sin(this.x * this.frequency) * this.amplitude;

    if (this.x > window.innerWidth) {
      this.x = -this.length;
      this.baseY = Math.random() * window.innerHeight;
    }
  }

  draw(ctx) {
    ctx.strokeStyle = 'rgba(0, 70, 40, 0.15)'; 
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    
    ctx.moveTo(this.x, this.y);
    
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