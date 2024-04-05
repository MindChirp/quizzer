import { defineStore } from 'pinia'
import { nextTick, reactive, ref, shallowRef, toRefs } from 'vue'
import type { QuizDto } from '@/lib/api'
import { ApiError, QuizControllerService } from '@/lib/api'

export const useQuizzes = defineStore("quizzes", () => {
  const data = ref<QuizDto[]>([]);
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
