<script setup lang="ts">
import PageWrapper from '@/components/layout/PageWrapper.vue'
import { useQuiz } from '@/stores/quizzes.ts'
import { useRoute } from 'vue-router'
import QuizHero from '@/components/data/QuizHero.vue'

const route = useRoute();
const quizId = route.params.quizId as string

const quiz = useQuiz();
quiz.get({
  quizId
})
</script>
<template>
  <PageWrapper>
    <QuizHero />
    <div class="content">
      <h1 class="roboto-bold title">{{ quiz.data?.title }}</h1>
      <span class="roboto-medium description">{{quiz.data?.description}}</span>
    </div>
  </PageWrapper>
</template>
<style scoped>
.content {
  color: var(--default-bg-text)
}

.title {
  font-size: 3rem;
  margin: .5rem 0 0 0;
}

.description {
}
</style>