<script setup lang="ts">

import PageWrapper from '@/components/layout/PageWrapper.vue'
import { useRoute } from 'vue-router'
import QuizEditHero from '@/components/data/QuizEditHero.vue'
import { useQuiz } from '@/stores/quizzes.ts'
import EditQuizForm from '@/components/forms/EditQuizForm.vue'
import { ref, watch } from 'vue'
import EditImageModal from '@/components/data/EditImageModal.vue'
import { QuizControllerService, type QuizDetailsDto } from '@/lib/api'
import { useEditor } from '@/stores/quizEdit.ts'
import ButtonComponent from '@/components/input/ButtonComponent.vue'

const route = useRoute();
const quizId = route.params.quizId as string
const editor = useEditor();

const quiz = useQuiz();
quiz.get({
  quizId: quizId
})


const imageModalOpen = ref(false);

watch(quiz, () => {
  if (!quiz.data) return;
  editor.set({
    quiz: quiz.data
  })
})

const setImageUrl = (value: string) => {
  imageModalOpen.value = false;
  editor.setPartial({
    partial: {
      imageLink: value
    }
  })
}

const saveChanges = () => {
  // Code for saving the quiz details.
  alert(`Quiz stats: \n - ${editor.data?.questions?.length} questions`)
}

</script>
<template>
  <EditImageModal :open="imageModalOpen" @close="() => imageModalOpen = false" @save="setImageUrl" />
  <PageWrapper>
    <QuizEditHero :url="quiz.data?.imageLink" style="margin-bottom: 2rem" @change-image-source="() => imageModalOpen = !imageModalOpen"/>
    <EditQuizForm :quiz-data="quiz.data" />
    <ButtonComponent style="width: 100%; margin-top: 1rem;" @click.prevent="saveChanges">Save changes</ButtonComponent>
  </PageWrapper>
</template>
<style scoped>
</style>