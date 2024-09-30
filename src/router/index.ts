// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '@/views/InicioView.vue';
import Noticias from '@/views/NoticiasView.vue';
import Contacto from '@/views/ContactoView.vue';
import Nintendo from '@/views/NintendoView.vue';
import PlayStation5 from '@/views/PlayStation5View.vue';
import Xbox from '@/views/XboxView.vue';
const routes = [
  { path: '/', component: Inicio },
  { path: '/noticias', component: Noticias },
  { path: '/contacto', component: Contacto },
  { path: '/nintendo', component: Nintendo },
  { path: '/playStation5', component: PlayStation5 },
  { path: '/xbox', component: Xbox },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

