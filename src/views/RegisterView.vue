<template>
  <div class="register-view">
    <RegisterComponent />
  </div>
</template>

<script setup lang="ts">
import RegisterComponent from '../components/forms/RegisterForm.vue';
</script>

<style scoped>
.register-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
