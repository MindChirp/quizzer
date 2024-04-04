<template>
  <div class="login-view">
    <LoginComponent />
  </div>
</template>

<script setup lang="ts">
import LoginComponent from '../components/forms/LoginForm.vue';
</script>

<style scoped>
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
