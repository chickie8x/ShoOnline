import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage/index.vue')
    },
    {
      path: '/download',
      name: 'download',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Download/index.vue')
    },
    {
      path: '/wiki',
      name: 'wiki',
      component: () => import('@/views/Wiki/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About/index.vue')
    }
  ]
})

export default router
