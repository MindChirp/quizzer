import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { QuizDto } from '@/lib/api'
import { ApiError, QuizControllerService } from '@/lib/api'

export const useQuizzes = defineStore("quizzes", () => {
    const data = ref<QuizDto[]>([])
    const error = ref<ApiError>();

    function get({ page = 0 }: {page?: number}) {
      QuizControllerService.getPageOfQuizzes({
        page: page,
      }).then(res => {
        error.value = undefined;
        data.value = res as QuizDto[];
      }).catch(err => {
        error.value = err;
      })
    }

    return {
      get,
      error,
      data,
    }
})