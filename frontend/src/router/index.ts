import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../home/HomeView.vue';
import ProfilView from '../profil/ProfilView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/profil',
    name: 'profil',
    component: ProfilView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
