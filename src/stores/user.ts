import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { UserDto } from '@/lib/api'
import { ApiError, OpenAPI, UserControllerService } from '@/lib/api'
import { useToken } from '@/stores/token.ts'


export const useUser = defineStore('user', () => {
  const data = ref<UserDto>();
  const error = ref<ApiError>();



  const get = async ({ username }: {username: string}) => {
    OpenAPI.TOKEN = sessionStorage.getItem("JWT") ?? '';
    try {
      data.value = await UserControllerService.getUser(username);
      error.value = undefined;
    } catch (err) {
      error.value = err as ApiError;
    }
  }

  return {
    data, error, get
  }
})