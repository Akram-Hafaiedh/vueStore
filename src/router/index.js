import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProductsPage from '@/views/ProductsPage.vue'
// import ProductDetail from '@/components/ProductDetail.vue'
import ProductDetailPage from '@/views/ProductDetailPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        }
      ]
    },
    {
      path: '/about',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'about',
          component: AboutView
        }
      ]
    },
    {
      path: '/products',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'products',
          component: ProductsPage
        },
        {
          path: ':id',
          name: 'product',
          component: ProductDetailPage
        },
      ]
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: LoginPage
        },
        {
          path: 'register',
          name: 'register',
          component: RegisterPage
        }
      ]
    },
  ]
})

export default router
