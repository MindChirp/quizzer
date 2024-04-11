import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'
import DiscoverView from '@/views/DiscoverView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import ProfileView from '@/views/ProfileView.vue'
import QuizDetailView from '@/views/QuizDetailView.vue'
import QuizEditView from '@/views/QuizEditView.vue'
import { checkUserAuth, signOut } from '@/lib/utils/user.ts'
import QuizCreateView from '@/views/QuizCreateView.vue'
import PlayQuizView from '@/views/QuizPlayView.vue'
import { refreshTokenIfNeeded } from '@/lib/utils/token.ts'
import { OpenAPI } from '@/lib/api'
import type { ApiRequestOptions } from '@/lib/api/core/ApiRequestOptions.ts'
import toaster from '@/stores/toaster.ts'

// ????? This should be fixed in the future
//const BASE_URL = import.meta.env.BASE_URL

const getToken = async (options: ApiRequestOptions) => {
  if (options.url === "/api/token/refresh") return ''
  const stillValid = await refreshTokenIfNeeded(sessionStorage.getItem("accessToken") ?? '');
  if (!stillValid && location.pathname != "/login" && location.pathname != "/register") {
    toaster().error({
      title: 'Session expired',
      description: 'You have been signed out'
    })
    location.reload()
  }
  return sessionStorage.getItem('accessToken') ?? ''
}
OpenAPI.TOKEN = getToken

export const ROUTES = {
  LANDING: { path: '' },
  DISCOVER: { path: 'discover' },
  LOGIN: { path: 'login' },
  REGISTER: { path: 'register' },
  PROFILE: { path: 'profile' },
  QUIZ_DETAIL: { path: 'quiz', param: 'quizId' },
  QUIZ_EDIT: { path: 'quiz/edit', param: 'quizId' },
  QUIZ_CREATE: { path: 'quiz/create' },
  QUIZ_PLAY: { path: 'quiz/play', param: 'quizId' }
}

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    /*
    {
      path: '/' + ROUTES.LANDING.path,
      name: 'landing',
      component: LandingView
    },*/

    {
      path: '/' + ROUTES.DISCOVER.path,
      name: 'Discover',
      component: DiscoverView
    },
    {
      path: '/' + ROUTES.LOGIN.path,
      name: 'login',
      component: LoginView
    },
    {
      path: '/' + ROUTES.REGISTER.path,
      name: 'register',
      component: RegisterView
    },
    {
      path: '/' + ROUTES.PROFILE.path,
      name: 'profile',
      component: ProfileView
    },
    {
      path: `/${ROUTES.QUIZ_DETAIL.path}/:${ROUTES.QUIZ_DETAIL.param}`,
      name: 'Quiz detail',
      component: QuizDetailView
    },
    {
      path: `/${ROUTES.QUIZ_EDIT.path}/:${ROUTES.QUIZ_EDIT.param}`,
      name: 'Edit quiz',
      component: QuizEditView
    },
    {
      path: '/' + ROUTES.QUIZ_CREATE.path,
      name: 'Create quiz',
      component: QuizCreateView
    },
    {
      path: `/${ROUTES.QUIZ_PLAY.path}/:${ROUTES.QUIZ_PLAY.param}`,
      name: 'Play quiz',
      component: PlayQuizView
    }
  ]
})

router.beforeEach((to, from) => {
  if (to.name == ROUTES.LOGIN.path) return
  if (to.name == ROUTES.REGISTER.path) return
  // Check user authentication
  if (!checkUserAuth()) {
    signOut()
    router.replace('/' + ROUTES.LOGIN.path)
  }
})

export default router
