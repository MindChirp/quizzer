<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import NavigationHeader from './components/navigation/NavigationHeader.vue'
import type { RouteButton } from '@/components/navigation/NavigationHeader.vue'
import ToasterComponent from '@/components/data/ToasterComponent.vue'
import { useToken } from '@/stores/token.ts'
import { OpenAPI } from '@/lib/api'
const router = useRouter()

const token = useToken();
OpenAPI.TOKEN = token.token;

const routeButtons: RouteButton[] = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Discover',
    path: '/discover'
  },
  {
    label: 'Profile',
    path: '/profile'
  }
]
</script>
<template>
  <!-- Leave this alone, it should be here to enable the toaster function -->
  <ToasterComponent />
  <NavigationHeader :current-route="router.currentRoute.value.path" :route-buttons="routeButtons" />
  <RouterView />
</template>
<style scoped></style>
@/v1
