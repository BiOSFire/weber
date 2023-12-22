import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../home/HomeView.vue';
import ProfilView from '../profil/ProfilView.vue';
import MessagesView from '../messages/MessagesView.vue';

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
  {
    path: '/messages',
    name: 'messages',
    component: MessagesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
