<script setup lang="ts">

import PageWrapper from '@/components/layout/PageWrapper.vue'
import { useEditor } from '@/stores/quizEdit.ts'
import { useQuizzes } from '@/stores/quizzes.ts'
import EditImageModal from '@/components/data/EditImageModal.vue'
import QuizEditHero from '@/components/data/QuizEditHero.vue'
import EditQuizForm from '@/components/forms/EditQuizForm.vue'
import ButtonComponent from '@/components/input/ButtonComponent.vue'
import { ref } from 'vue'
import { QuizControllerService } from '@/lib/api'
import toaster from '@/stores/toaster.ts'
import { useRouter } from 'vue-router'
import { ROUTES } from '@/router'

const editor = useEditor();
editor.set({
  quiz: {}
})

const allQuizzes = useQuizzes();

const imageModalOpen = ref(false);

const router = useRouter();

const setImageUrl = (value: string) => {
  imageModalOpen.value = false;
  if (!editor.data) return;
  editor.data.imageLink = value;
}

const toast = toaster();

const saveChanges = async () => {
  if (!editor.data) return;
  // Post quiz to backend
  try {
    const createdQuiz = await QuizControllerService.createQuiz(editor.data)
    toast.success({
      title: "Success!",
      description: "The quiz has been created, and can now be played."
    })

    // Refetch all quizzes
    allQuizzes.get({page: 0});

    router.push(`/${ROUTES.QUIZ_DETAIL.path}/${createdQuiz.quizId}`)

  } catch (err) {
    toast.error({
      title: "An error occurred",
      description: "We could not create your quiz."
    })
  }
}

</script>
<template>
  <PageWrapper>
      <FormKit type="form" :value="editor.data" v-if="editor.data" :actions="false" class="title" @submit="saveChanges">
        <EditImageModal :open="imageModalOpen" @close="() => imageModalOpen = false" @save="setImageUrl" />
        <QuizEditHero :url="editor.data?.imageLink" style="margin-bottom: 2rem" @change-image-source="() => imageModalOpen = !imageModalOpen"/>
        <EditQuizForm :quiz-data="editor.data" />
        <ButtonComponent style="width: 100%; margin-top: 1rem;">Save changes</ButtonComponent>
      </FormKit>
  </PageWrapper>
</template>
<style scoped>

</style>