import { defineStore } from 'pinia'
import { nextTick, reactive, ref, shallowRef, toRefs } from 'vue'
import type { QuizDetailsDto, QuizGeneralDto } from '@/lib/api'
import { ApiError, QuizControllerService } from '@/lib/api'

export const useQuizzes = defineStore("quizzes", () => {
  const data = ref<QuizGeneralDto[]>([]);
  const error = ref<ApiError>();

  async function get({ page = 0 }: {page?: number}) {
    try {
      const res = await QuizControllerService.getPageOfQuizzes({ page });
      error.value = undefined;
      data.value = res.content ?? [];
    } catch (err) {
      error.value = err as ApiError;
    }
  }

  get({})

  return {
    data,
    error,
    get,
  }
})

export const useQuiz = defineStore('quiz', () => {
  const data = ref<QuizDetailsDto>();
  const error = ref<ApiError>();

  async function get({ quizId }: {quizId: string}) {
    try {
      // Implement fetching logic
      const res = await QuizControllerService.getQuizDetails(quizId);
      error.value = undefined;
      data.value = res;
    } catch (err) {
      error.value = err as ApiError;
    }
  }

  return {
    get, data, error
  }
});
