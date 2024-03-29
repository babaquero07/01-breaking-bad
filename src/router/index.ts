import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/shared/pages/HomePage.vue'
import AboutPage from '@/shared/pages/AboutPage.vue'
import { characterRoute } from '../characters/router/index';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Public
    { path: '/', name: 'home', component: HomePage },
    { path: '/about', name: 'about', component: AboutPage },

    // Characters
    characterRoute,

    // Default
    { path: '/:pathMatch(.*)*', redirect: () => ({ name: 'home' }) }
  ]
})

// router.addRoute(characterRoute) Another way to add routes

export default router
