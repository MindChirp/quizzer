<script setup lang="ts">
import PageWrapper from '@/components/layout/PageWrapper.vue'
import { useQuiz } from '@/stores/quizzes.ts'
import { useRoute } from 'vue-router'

const route = useRoute();
const quizId = route.params.quizId as string

const quiz = useQuiz(quizId);
alert(quiz.data);

</script>
<template>
  <PageWrapper>
    <h1>{{quiz.data}}</h1>
  </PageWrapper>
</template>
<style scoped>
</style>