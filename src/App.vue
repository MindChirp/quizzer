<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router'
import NavigationHeader from './components/navigation/NavigationHeader.vue'
import type { RouteButton } from '@/components/navigation/NavigationHeader.vue'
import ToasterComponent from '@/components/data/ToasterComponent.vue'
import { useUser } from '@/stores/user.ts'
import { getUserId } from '@/lib/utils/user.ts'
import { computed } from 'vue'
import { ignoreHeader } from '@/lib/utils/header.ts'

const router = useRouter()
const route = useRoute();

const user = useUser();
user.get({
  username: getUserId() ?? ''
})

const routeButtons: RouteButton[] = [
  {
    label: 'Discover',
    path: '/discover'
  },
  {
    label: 'Profile',
    path: '/profile'
  }
]

const hideHeader = computed(() => {
  const path = route.path.substring(1, route.path.length);
  return ignoreHeader(path ?? '');
})
</script>
<template>
  <!-- Leave this alone, it should be here to enable the toaster function -->
  <ToasterComponent />
  <header>
    <NavigationHeader :current-route="router.currentRoute.value.path" :route-buttons="routeButtons" v-if="!hideHeader" />
  </header>
  <main>
    <RouterView />
  </main>
</template>
<style scoped></style>
@/v1
