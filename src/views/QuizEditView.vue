<script setup lang="ts">

import PageWrapper from '@/components/layout/PageWrapper.vue'
import { useRoute } from 'vue-router'
import QuizEditHero from '@/components/data/QuizEditHero.vue'
import { useQuiz } from '@/stores/quizzes.ts'
import EditQuizForm from '@/components/forms/EditQuizForm.vue'

const route = useRoute();
const quizId = route.params.quizId as string
const quiz = useQuiz();
quiz.get({
  quizId: quizId
})


</script>
<template>
  <PageWrapper>
    <QuizEditHero :url="quiz.data?.imageLink" style="margin-bottom: 2rem"/>
    <EditQuizForm :quiz-data="quiz.data" />
  </PageWrapper>
</template>
<style scoped>
</style>