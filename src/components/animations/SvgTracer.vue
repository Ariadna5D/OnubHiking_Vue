<template>
  <svg width="200" height="200" viewBox="0 0 100 100">
    <path 
      d="M10 80 C 40 10, 65 10, 95 80" 
      class="path-animation"
      fill="transparent" 
      stroke="#42b883" 
      stroke-width="2"
    />
  </svg>
</template>

<style scoped>
.path-animation {
  /* El valor depende de la longitud del path */
  stroke-dasharray: 1000; 
  stroke-dashoffset: 1000;
  animation: draw 3s forwards ease-in-out;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
</style>