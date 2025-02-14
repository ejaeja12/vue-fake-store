import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('@/views/home-page/HomeView.vue'),
    },
    
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login-page/LoginView.vue'),
    },

    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/register-page/RegisterView.vue'),
    },
  ],
})

export default router
