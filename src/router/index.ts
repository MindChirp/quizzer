import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'
import DiscoverView from '@/views/DiscoverView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import QuizDetailView from '@/views/QuizDetailView.vue'
import QuizEditView from '@/views/QuizEditView.vue'

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
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/quiz/:quizId',
      name: "Quiz detail",
      component: QuizDetailView
    },
    {
      path: '/quiz/edit/:quizId',
      name: "Edit quiz",
      component: QuizEditView
    }
  ]
})

export default router
