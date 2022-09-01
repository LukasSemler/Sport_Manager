import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import ContactView from '../views/ContactView.vue';

// import { PiniaStore } from '../Store/Store.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView,
    },
    {
      path: '/contact',
      name: 'Conatct',
      component: ContactView,
    },

    { path: '/:pathmatch(.*)*', name: 'not-found', component: NotFoundView },
  ],
});

export default router;
