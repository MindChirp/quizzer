<script setup lang="ts">

import PageWrapper from '@/components/layout/PageWrapper.vue'
import { useRoute } from 'vue-router'
import QuizEditHero from '@/components/data/QuizEditHero.vue'
import { useQuiz } from '@/stores/quizzes.ts'
import EditQuizForm from '@/components/forms/EditQuizForm.vue'
import { ref, watch } from 'vue'
import EditImageModal from '@/components/data/EditImageModal.vue'
import { ApiError, QuizControllerService, type QuizDetailsDto } from '@/lib/api'
import { useEditor } from '@/stores/quizEdit.ts'
import ButtonComponent from '@/components/input/ButtonComponent.vue'
import toaster from '@/stores/toaster.ts'

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
      imageLink: value
  })
}

const toast = toaster();

const saveChanges = async () => {
  // Code for saving the quiz details.
  if (!editor.data) return;
  try {
    const res = await QuizControllerService.updateQuiz(editor.data);
    toast.success({
      title: "Success!",
      description: "Changes have been saved"
    })
  } catch (err) {
    toast.error({
      title: "Could not save",
      description: `Something went wrong, and we could not save your quiz. ${(err as ApiError).message}`
    })
  }
}

</script>
<template>

  <PageWrapper>
    <div v-if="quiz.error">
      <h1>Could not load this quiz.</h1>
    </div>
    <template v-if="!quiz.error && editor.data">
      <EditImageModal :open="imageModalOpen" @close="() => imageModalOpen = false" @save="setImageUrl" />
      <FormKit type="form" :value="quiz.data" v-if="quiz.data" :actions="false" class="title" @submit="saveChanges">
        <QuizEditHero :url="editor.data.imageLink" style="margin-bottom: 2rem" @change-image-source="() => imageModalOpen = true"/>
        <EditQuizForm :quiz-data="quiz.data" />
        <ButtonComponent style="width: 100%; margin-top: 1rem;">Save changes</ButtonComponent>
      </FormKit>
    </template>
  </PageWrapper>
</template>
<style scoped>
</style>