<template>
  <svg 
    viewBox="0 0 100 100" 
    class="w-full h-full overflow-visible"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M 30 25 L 70 50 L 30 75" 
      class="arrow-path"
      fill="transparent" 
      stroke="currentColor" 
      stroke-width="12"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<style scoped>
.arrow-path {
  stroke-dasharray: 200; 
  stroke-dashoffset: 200;
  animation: draw-arrow 2s infinite ease-in-out;
}

@keyframes draw-arrow {
  0% { stroke-dashoffset: 200; opacity: 0; }
  20% { opacity: 1; }
  50% { stroke-dashoffset: 0; }
  80% { stroke-dashoffset: 0; opacity: 1; }
  100% { stroke-dashoffset: 0; opacity: 0; }
}
</style>