<script setup lang="ts">
import type { QuestionDto } from '@/lib/api'

defineProps<{
  question?: QuestionDto
}>()

const emit = defineEmits(['click'])
</script>
<template>
  <div class="question-wrapper" v-if="question?.alternatives">
    <button class="option" v-for="(choice, n) in question.alternatives" :key="n" @click="() => emit('click', {...choice, questionId: question?.questionId})">
      <span class="roboto-medium">{{choice.answer}}</span>
    </button>
  </div>

</template>
<style scoped>
.question-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .5rem;
}

.option {
  width: 100%;
  background: var(--primary-bg);
  padding: 1.5rem 0;
  box-sizing: border-box;
  border-radius: .5rem;
  cursor: pointer;
  border: none;
  outline: none;
  color: var(--primary-bg-text);
  transition: background 100ms ease-in-out;
}
.option:hover {
  background: var(--primary-active);
  color: var(--primary-active-text);
}

.option:focus {
  box-shadow: 0px 0px 0px 2px var(--primary-fg);
}

@media screen and (max-width: 1000px) {
  .question-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>