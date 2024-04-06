<script setup lang="ts">

import PageWrapper from '@/components/layout/PageWrapper.vue'
import { useRoute } from 'vue-router'
import QuizEditHero from '@/components/data/QuizEditHero.vue'
import { useQuiz } from '@/stores/quizzes.ts'
import EditQuizForm from '@/components/forms/EditQuizForm.vue'
import { ref, watch } from 'vue'
import EditImageModal from '@/components/data/EditImageModal.vue'
import type { QuizDetailsDto } from '@/lib/api'

const route = useRoute();
const quizId = route.params.quizId as string

const quiz = useQuiz();
quiz.get({
  quizId: quizId
})

const editObject = ref<QuizDetailsDto>();
const imageModalOpen = ref(false);

watch(quiz, () => {
  if (!quiz.data) return;
  editObject.value = quiz.data
})

const setImageUrl = (value: string) => {
  imageModalOpen.value = false;
  editObject.value.imageLink = value;
  console.log(editObject.value);
}

</script>
<template>
  <EditImageModal :open="imageModalOpen" @close="() => imageModalOpen = false" @save="setImageUrl" />
  <PageWrapper>
    <QuizEditHero :url="quiz.data?.imageLink" style="margin-bottom: 2rem" @change-image-source="() => imageModalOpen = !imageModalOpen"/>
    <EditQuizForm :quiz-data="quiz.data" />
  </PageWrapper>
</template>
<style scoped>
</style>