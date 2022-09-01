import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue';
// import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: LandingPage
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
