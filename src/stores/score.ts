import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { ApiError, type PageSavedQuizAttemptDto, UserControllerService } from '@/lib/api'

export const useScores = defineStore('scores', () => {
  const data = ref<PageSavedQuizAttemptDto>();
  const error = ref<ApiError>();

  const get = async ({page}: {page: number}) => {
    try {
      data.value = await UserControllerService.getQuizAttempts({
        page
      })
      error.value = undefined;
    } catch (err) {
      error.value = err as ApiError;
    }
  }

  get({page: 0})

  const actualData = computed(() => {
    return data.value?.content;
  })

  return {
    data: actualData, error, get
  }
})