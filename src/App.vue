<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavigationHeader from './components/navigation/NavigationHeader.vue'
import type ButtonComponent from './components/input/ButtonComponent.vue'
</script>
<template>
  <NavigationHeader />
  <RouterView />
</template>
<style scoped></style>
@/v1
