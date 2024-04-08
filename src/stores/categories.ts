import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ApiError, type CategoryDto, QuizControllerService } from '@/lib/api'

export const useCategories = defineStore("categories", () => {
  const data = ref<CategoryDto[]>([]);
  const error = ref<ApiError>();

  async function get() {
    try {
      const res = await QuizControllerService.getCategories();
      error.value = undefined;
      data.value = res ?? [];
    } catch (err) {
      error.value = err as ApiError;
    }
  }

  get();

  return {
    data,
    error,
    get,
  }
})