import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
  { path: '/equipo', name: 'equipo', component: () => import('../views/EquipoView.vue') },
  { path: '/rutas', name: 'rutas', component: () => import('../views/RutasView.vue') },
  { path: '/comunidad', name: 'comunidad', component: () => import('../views/ComunidadView.vue') },
];

const router = createRouter({
  history: createWebHashHistory(), 
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
});

export default router;