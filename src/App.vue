<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ButtonComponent from './components/input/ButtonComponent.vue'
import RegisterFormComponent from './components/forms/RegisterForm.vue'
import { Camera } from 'lucide-vue-next'
</script>

<template>
  <RegisterFormComponent></RegisterFormComponent>
  <!-- <RouterView /> -->
</template>

<style scoped></style>
