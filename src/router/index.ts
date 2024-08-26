import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home/index.vue'),
      meta: { title: 'Home' },
    },
    {
      path: '/heatSurge',
      component: () => import('@/views/HeatSurge/index.vue'),
      meta: { title: 'HeatSurge' },
    },
  ],
});

export default router;
