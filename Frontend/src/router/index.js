import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

import { PiniaStore } from '../Store/Store.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },

    // { path: '/:pathmatch(.*)*', name: 'not-found', component: NotFoundView },
  ],
});

export default router;
