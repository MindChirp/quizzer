import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { PageUserDto, UserDto } from '@/lib/api'
import { ApiError, OpenAPI, UserControllerService } from '@/lib/api'
import { refreshTokenIfNeeded } from '@/lib/utils/token.ts'


export const useUser = defineStore('user', () => {
  const data = ref<UserDto>();
  const error = ref<ApiError>();



  const get = async ({ username }: {username: string}) => {
    OpenAPI.TOKEN = sessionStorage.getItem("accessToken") ?? '';
    try {
      await refreshTokenIfNeeded(sessionStorage.getItem("accessToken") ?? '');
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

export const useUsers = defineStore('users', () => {
  const data = ref<PageUserDto>();
  const error = ref<ApiError>();

  const actualData = computed(() => {
    return data.value?.content;
  })


  const get = async ({ search }: {search: string}) => {
    OpenAPI.TOKEN = sessionStorage.getItem("accessToken") ?? '';
    try {
      await refreshTokenIfNeeded(sessionStorage.getItem("accessToken") ?? '');
      data.value = await UserControllerService.searchUsers(search, {
        page: 0
      });


      error.value = undefined;
    } catch (err) {
      error.value = err as ApiError;
    }
  }

  return {
    data: actualData, error, get
  }
})