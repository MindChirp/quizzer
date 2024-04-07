import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { QuizDetailsDto } from '@/lib/api'

export const useEditor = defineStore("quiz-edit", () => {
  const data = ref<QuizDetailsDto>();

  function set({ quiz }: {quiz: QuizDetailsDto}) {
    data.value = quiz;
  }

  function setPartial(partial: Partial<QuizDetailsDto>) {
    // Split partial into keys
    for (const [ key, value ] of Object.entries(partial)) {
      if (data.value) {
        if (data.value[key as keyof QuizDetailsDto]) data.value[key as keyof QuizDetailsDto] = value as any;
      }
    }
  }

  const questions = computed(() => {
    return data.value?.questions;
  })


  return { data, set, setPartial, questions };
})