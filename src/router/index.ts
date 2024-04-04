import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'
import DiscoverView from '@/views/DiscoverView.vue'

// ????? This should be fixed in the future
//const BASE_URL = import.meta.env.BASE_URL

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/discover',
      name: 'Discover',
      component: DiscoverView
    }
  ]
})

export default router
