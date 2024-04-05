<template>
  <PageWrapper>
    <div class="login-view">
      <LoginComponent />
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
import LoginComponent from '../components/forms/LoginForm.vue'
import PageWrapper from '@/components/layout/PageWrapper.vue'
</script>

<style scoped>
.login-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 10rem);
}
</style>
