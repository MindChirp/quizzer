<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import NavigationHeader from './components/navigation/NavigationHeader.vue'
import type { RouteButton } from '@/components/navigation/NavigationHeader.vue'
const router = useRouter();
console.log(router.currentRoute.value.path);

const routeButtons: RouteButton[] = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Discover',
    path: '/discover'
  },
]

</script>
<template>
  <NavigationHeader :current-route="router.currentRoute.value.path" :route-buttons="routeButtons" />
  <RouterView />
</template>
<style scoped></style>
@/v1
