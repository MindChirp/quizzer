<script setup lang="ts">
import PageWrapper from '@/components/layout/PageWrapper.vue'
import { useRoute } from 'vue-router'
import { useQuiz } from '@/stores/quizzes.ts'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { type QuestionAnswersDto, type QuestionAttemptDto, type QuestionDto, QuizControllerService } from '@/lib/api'
import MultipleChoice from '@/components/input/MultipleChoice.vue'
import PlayProgression from '@/components/data/PlayProgression.vue'
import QuizFinishedStats from '@/components/data/QuizFinishedStats.vue'
import { ROUTES } from '@/router'

const route = useRoute();
const quiz = useQuiz();
quiz.get({
  quizId: route.params[ROUTES.QUIZ_PLAY.param] as string
})

/**
 * Resolution of the timer in seconds.
 */
const timerTickTimeSeconds = 1;

/**
 * Time count, in seconds
 */
const timer = ref<number>(0);

/**
 * Stores the timer interval id
 */
let interval: number;

/**
 * Handles the time incrementing. Each call to this function is
 * spaced 1 second apart.
 */
const intervalHandler = () => {
  timer.value += timerTickTimeSeconds;
}

onMounted(() => {
  interval = setInterval(intervalHandler, timerTickTimeSeconds*1000)
})

onUnmounted(() => {
  clearInterval(interval);
})


// The following section defines question progression logic
const currentQuestion = ref<QuestionDto>();
watch(quiz, () => {
  if (!quiz.data) return;
  currentQuestion.value = quiz.data?.questions?.[0];
})

export type QuestionAnswerWithId = {
  questionId: number
} & QuestionAnswersDto

const selectedAnswers = ref<QuestionAnswerWithId[]>([])

const questionNumber = ref<number>(0);

const quizFinished = ref(false);

const quizResults = ref<{
  time: number,
  score: number,
  correctAnswers: number
}>();

const handleChoice = (choice: QuestionAnswerWithId) => {
  selectedAnswers.value.push(choice);
  selectNextQuestion();
}

const selectNextQuestion = () => {
  if (questionNumber.value === (quiz.data?.questions?.length as number - 1)) {
    finishQuiz();
  }

  questionNumber.value += 1;
  if (!quiz.data) return;
  currentQuestion.value = quiz.data?.questions?.[questionNumber.value];
}

const finishQuiz = async () => {
  quizFinished.value = true;
  // Stop the timer
  clearInterval(interval);

  const formatted: QuestionAttemptDto[] = [];
  selectedAnswers.value.forEach(e => {
    formatted.push({
      questionId: e.questionId,
      answerLabel: e.answer
    })
  })

  const results = await QuizControllerService.submitAttempt(route.params[ROUTES.QUIZ_PLAY.param] as string, {
    duration: timer.value,
    questionAttempts: formatted
  })

  quizResults.value = {
    score: Math.round((results.score ?? 0)*1000 / timer.value),
    time: timer.value,
    correctAnswers: results.score ?? 0
  }
}


</script>
<template>
  <PageWrapper>
    <template v-if="quiz.data">
      <div class="question-wrapper" v-if="!quizFinished">
        <PlayProgression :current-number="questionNumber" :number-of-questions="quiz.data.questions?.length" />
        <h1 class="question-title">{{ currentQuestion?.label }}</h1>
        <MultipleChoice :question="currentQuestion" @click="handleChoice"/>
      </div>

      <div class="score-wrapper" v-if="quizFinished">
        <QuizFinishedStats :correct-answers="quizResults?.correctAnswers" :score="quizResults?.score" :time="quizResults?.time" />
      </div>
    </template>
  </PageWrapper>
</template>
<style scoped>
.question-title {
  color: var(--default-bg-text);
  font-size: 4rem;
}

.question-wrapper {
  animation: slide-in 300ms ease-in-out;
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
  .question-title {
    font-size: 2rem;
    line-height: 2rem;
  }
}
</style>
