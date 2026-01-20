import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import EquipoView from '../views/EquipoView.vue';
import RutasView from '../views/RutasView.vue';
import ComunidadView from '../views/ComunidadView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/equipo', name: 'equipo', component: EquipoView },
  { path: '/rutas', name: 'rutas', component: RutasView },
  { path: '/comunidad', name: 'comunidad', component: ComunidadView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;