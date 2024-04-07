<script setup lang="ts">
import { useEditor } from '@/stores/quizEdit.ts'
import CardComponent from '@/components/data/CardComponent.vue'
import ButtonComponent from '@/components/input/ButtonComponent.vue'
import { Plus, Trash } from 'lucide-vue-next'
import type { QuestionAnswersDto, QuestionDto } from '@/lib/api'
import { nextTick } from 'vue'

const quiz = useEditor();

const setQuestionTitle = (index: number, e: InputEvent) => {
  const value = (e.currentTarget as HTMLInputElement).value;
  if (!quiz.questions) return;
  quiz.questions[index].label = value;
}

// Adds a question with an empty answer
const addQuestion = () => {
  quiz.questions?.push({alternatives: [{}]} as Partial<QuestionDto>)
}

const addAnswer = async (questionIndex: number) => {
  if (!quiz.data) return;
  if (!quiz.data.questions) quiz.data.questions = [];
  if (quiz.data.questions[questionIndex].alternatives == undefined) {
    quiz.data.questions[questionIndex].alternatives = [];
  }
  quiz.data.questions[questionIndex].alternatives?.push({});
}

const updateAnswer = (questionIndex: number, answerIndex: number, e: InputEvent) => {
  if (!quiz.questions) return;
  if (!quiz.questions[questionIndex]) return
  (quiz.questions[questionIndex].alternatives as QuestionAnswersDto[])[answerIndex].answer = (e.currentTarget as HTMLInputElement).value;
}

const deleteAnswer = (questionIndex: number, answerIndex: number) => {
  if (!quiz.questions) return;
  if (!quiz.questions[questionIndex]) return

  quiz.questions[questionIndex].alternatives = (quiz.questions[questionIndex].alternatives as QuestionAnswersDto[]).filter((e, _i) => _i != answerIndex)
}

</script>
<template>
<div style="margin-top: 1rem; display: flex; gap: .5rem; flex-direction: column">
  <span v-if="quiz.data?.questions?.length == 0">There are no questions.</span>
  <CardComponent v-for="(item, number) in quiz.data?.questions" :key="number" class="question-card">
    {{item.type}}
    <FormKit type="text" placeholder="What's your question?" :value="item.label" @change.prevent="(e: InputEvent) => setQuestionTitle(number, e)" validation="required" name="Question"/>
    <div class="answers">
      <div class="input-wrapper" v-for="(ans, n) in item.alternatives" :key="n" >
        <input class="answer roboto-medium" :value="ans.answer" @change.prevent="(e: Event) => updateAnswer(number, n, e as InputEvent)" placeholder="Type something"/>
        <button class="delete" @click.prevent="() => deleteAnswer(number, n)"><Trash style="height: 1rem;"/></button>
      </div>
    </div>
    <ButtonComponent variant="ghost" class="add-answer" @click.prevent="() => addAnswer(number)"><Plus style="height: 1rem"/> Add answer</ButtonComponent>
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
  background: var(--primary-bg);
  width: 100%;
  height: fit-content;
  min-height: 4rem;
  border-radius: .25rem;
  text-align: center;
  cursor: pointer;
  transition: background 100ms ease-in-out;
  position: relative;
  border: none;
  color: var(--primary-bg-text);
}

.add-answer, .add-question {
  margin-top: 1rem;
}

.input-wrapper {
  width: 100%;
  height: fit-content;
  position: relative;
}

.input-wrapper:hover .delete {
  opacity: 1;
}

.delete:focus {
  opacity: 1;
}

.delete {
  position: absolute;
  right: .5rem;
  top: 50%;
  transform: translate(0,-50%);
  border-radius: .5rem;
  height: 3rem;
  width: 3rem;
  background: var(--destructive-fg);
  border: none;
  color: white;
  opacity: 0;
  cursor: pointer;
  transition: background 100ms ease-in-out;
}

.delete:hover {
  background: var(--destructive-active);
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