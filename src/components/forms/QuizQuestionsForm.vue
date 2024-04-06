<script setup lang="ts">
import { useEditor } from '@/stores/quizEdit.ts'
import CardComponent from '@/components/data/CardComponent.vue'
import ButtonComponent from '@/components/input/ButtonComponent.vue'
import { Plus } from 'lucide-vue-next'
import type { QuestionAnswersDto, QuestionDto } from '@/lib/api'

const quiz = useEditor();

const setQuestionTitle = (index: number, e: InputEvent) => {
  const value = (e.currentTarget as HTMLInputElement).value;
  if (!quiz.questions) return;
  quiz.questions[index].label = value;
}

const addQuestion = () => {
  quiz.questions?.push({} as Partial<QuestionDto>)
}

const addAnswer = (questionIndex: number) => {
  if (!quiz.questions) return;
  quiz.questions[questionIndex].alternatives?.push({});
}

const updateAnswer = (questionIndex: number, answerIndex: number, e: InputEvent) => {
  if (!quiz.questions) return;
  if (!quiz.questions[questionIndex]) return
  (quiz.questions[questionIndex].alternatives as QuestionAnswersDto[])[answerIndex].answer = (e.currentTarget as HTMLInputElement).value;
}

</script>
<template>
<div style="margin-top: 1rem; display: flex; gap: .5rem; flex-direction: column">
  <span v-if="quiz.data?.questions?.length == 0">There are no questions.</span>
  <CardComponent v-for="(item, number) in quiz.data?.questions" :key="number" class="question-card">
    <FormKit type="text" placeholder="What's your question?" :value="item.label" @change.prevent="(e: InputEvent) => setQuestionTitle(number, e)"/>
    <div class="answers">
      <input v-for="(ans, n) in item.alternatives" :key="n" class="answer roboto-medium" :value="ans.answer" @change.prevent="(e: Event) => updateAnswer(number, n, e as InputEvent)" placeholder="Type something"/>
    </div>
    <ButtonComponent variant="secondary" class="add-answer" @click.prevent="() => addAnswer(number)"><Plus style="height: 1rem"/> Add answer</ButtonComponent>
  </CardComponent>
  <ButtonComponent variant="secondary" class="add-question" @click.prevent="addQuestion"><Plus style="height: 1rem"/> Add question</ButtonComponent>
</div>
</template>
<style scoped>

.answers {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  gap: .5rem;
}

.answer {
  background: var(--secondary-bg);
  width: 100%;
  height: fit-content;
  min-height: 4rem;
  border-radius: .25rem;
  text-align: center;
  cursor: pointer;
  transition: background 100ms ease-in-out;
  position: relative;
  border: none;
  color: var(--secondary-bg-text);
}

.add-answer, .add-question {
  margin-top: 1rem;
}

@media screen and (max-width: 1000px) {
  .answers {
    grid-template-columns: 1fr;
  }

  .add-answer, .add-question {
    width: 100%;
  }
}
</style>