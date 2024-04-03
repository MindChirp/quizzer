<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import NavigationHeader from './components/navigation/NavigationHeader.vue'
const router = useRouter();
console.log(router.currentRoute.value.path);

</script>
<template>
  <NavigationHeader :current-route="router.currentRoute.value.path" />
  <RouterView />
</template>
<style scoped></style>
@/v1
