<script setup lang="ts">

import PageWrapper from '@/components/layout/PageWrapper.vue'
import { useEditor } from '@/stores/quizEdit.ts'
import { useQuiz } from '@/stores/quizzes.ts'
import EditImageModal from '@/components/data/EditImageModal.vue'
import QuizEditHero from '@/components/data/QuizEditHero.vue'
import EditQuizForm from '@/components/forms/EditQuizForm.vue'
import ButtonComponent from '@/components/input/ButtonComponent.vue'
import { ref, watch } from 'vue'

const editor = useEditor();

const quiz = useQuiz();
quiz.data = {
  categories: [],
  questions: [],
  title: '',
  description: '',
  imageLink: '',
  owner: undefined,
}

const imageModalOpen = ref(false);

watch(quiz, () => {
  if (!quiz.data) return;
  editor.set({
    quiz: quiz.data
  })
})

const setImageUrl = (value: string) => {
  imageModalOpen.value = false;
  if (!editor.data) return;
  editor.data.imageLink = value;
}

const saveChanges = () => {
  // Post quiz to backend
}

</script>
<template>
  <PageWrapper>
    <div v-if="quiz.error">
      <h1>Could not load this quiz.</h1>
    </div>
    <template v-if="!quiz.error">
      <FormKit type="form" :value="quiz.data" v-if="quiz.data" :actions="false" class="title" @submit="saveChanges">
        <EditImageModal :open="imageModalOpen" @close="() => imageModalOpen = false" @save="setImageUrl" />
        <QuizEditHero :url="quiz.data?.imageLink" style="margin-bottom: 2rem" @change-image-source="() => imageModalOpen = !imageModalOpen"/>
        <EditQuizForm :quiz-data="quiz.data" />
        <ButtonComponent style="width: 100%; margin-top: 1rem;">Save changes</ButtonComponent>
      </FormKit>
    </template>
  </PageWrapper>
</template>
<style scoped>

</style>