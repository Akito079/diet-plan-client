import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthService from '@/services/AuthService';
import { ref } from 'vue';
import { userStore } from '@/stores/userStore';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import('../views/Login.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue'),
      meta: { requiresAuth: false },
      
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/Product.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue'),
      meta: { requiresAuth: true },
    },
  ]
})
router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      HSStaticMethods.autoInit();
    }, 100)
  }
});
router.beforeEach((to)=>{
    const user =localStorage.getItem('user');
    if(to.meta.requiresAuth && !user){
      return {name : 'login'};
    }
});
export default router
