import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'
import DiscoverView from '@/views/DiscoverView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import ProfileView from '@/views/ProfileView.vue'
import QuizDetailView from '@/views/QuizDetailView.vue'
import { checkUserAuth, signOut } from '@/lib/utils/user.ts'

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
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/quiz/:quizId',
      name: "Quiz detail",
      component: QuizDetailView
    }
  ]
})


router.beforeEach((to, from) => {
  console.log(to.name);
  if (to.name == "login" || to.name =="register") return;
  // Check user authentication
  if (!checkUserAuth()) {
    signOut();
    router.replace("/login")
  }
});

export default router
