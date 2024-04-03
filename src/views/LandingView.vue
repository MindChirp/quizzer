<script setup lang="ts">
import PageWrapper from '@/components/layout/PageWrapper.vue'
import QuizzerLogo from '@/components/icons/QuizzerLogo.vue'
</script>
<template>
  <PageWrapper>
    <div class="hero">
      <QuizzerLogo style="height: 10rem; width: auto;"/>
      <h1 class="roboto-medium slogan">&blacktriangleright;Learn new things!</h1>
    </div>
  </PageWrapper>
</template>
<style scoped>
.hero {
  color: #0c66e4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 10rem);
}

.slogan {
  font-size: 5rem;
}
</style>