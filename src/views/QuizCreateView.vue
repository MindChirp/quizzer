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
editor.set({
  quiz: {}
})

const imageModalOpen = ref(false);

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