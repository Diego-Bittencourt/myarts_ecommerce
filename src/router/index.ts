import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue';
import HowPay from '../pages/HowPay.vue';
import ProductsList from '../pages/ProductsList.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: LandingPage
  },
  {
    path: '/howtopay',
    name: 'how to pay',
    component: HowPay
  },
  {
    path: '/productslist',
    name: 'List of Products',
    component: ProductsList
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
