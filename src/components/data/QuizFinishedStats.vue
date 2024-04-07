<script setup lang="ts">

import { CheckIcon, TimerIcon, TrophyIcon } from 'lucide-vue-next'
import ButtonComponent from '@/components/input/ButtonComponent.vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter();
const route = useRoute();

withDefaults(defineProps<{
  time?: number,
  score?: number,
  correctAnswers?: number,
}>(), {
  time: 0,
  score: 0,
  correctAnswers: 0
})

const goToQuizDetail = () => {
  router.push(`/quiz/${route.params.quizId}`)
}
</script>
<template>
  <div class="wrapper">
    <h1 class="roboto-bold-italic title">Wow, Impressive!</h1>
    <div class="stats">
      <span class="roboto-medium" style="display: block; text-align: center">Here are some key stats</span>
      <div class="stats-cards">
        <div class="item">
          <TimerIcon />
          <span class="roboto-bold">{{ time }} {{ time != 1 ? 'Seconds' : 'Seconds'}}</span>
        </div>

        <div class="item">
          <CheckIcon />
          <span class="roboto-bold">{{ correctAnswers }} Correct {{ correctAnswers != 1 ? 'Answers' : 'Answer' }}</span>
        </div>

        <div class="item">
          <TrophyIcon />
          <span class="roboto-bold">{{ score }} Score</span>
        </div>
      </div>
      <ButtonComponent style="width: 100%; margin-top: 1rem;" @click="goToQuizDetail">Go back to quiz page</ButtonComponent>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  animation: slide-in 500ms ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.title {
  font-size: 4rem;
  margin: auto;
  color: var(--default-bg-text);
  text-align: center;
}

.stats {
  width: fit-content;
  margin: auto;
}

.stats-cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: fit-content;
  gap: .5rem;
}

.item {
  background: var(--secondary-bg);
  padding: 1rem 2rem;
  border-radius: .25rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--secondary-bg-text)
}


@keyframes slide-in {
  from {
    transform: translate(0, 1rem);
    opacity: 0;
  }
  to {
    transform: translate(0);
    opacity: 1;
  }
}

@media screen and (max-width: 1000px) {
  .title {
    font-size: 2rem;
    line-height: 2rem;
  }

  .stats-cards {
    grid-template-columns: 1fr;
    width: 100%;
  }

  .stats {
    width: 100%;
  }
}
</style>