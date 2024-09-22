// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '@/views/InicioView.vue';
import Noticias from '@/views/NoticiasView.vue';
import VideoJuegos from '@/views/VideoJuegosView.vue';
import Contacto from '@/views/ContactoView.vue';
const routes = [
  { path: '/', component: Inicio },
  { path: '/noticias', component: Noticias },
  { path: '/videojuegos/:consola', component: VideoJuegos },
  { path: '/contacto', component: Contacto },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

