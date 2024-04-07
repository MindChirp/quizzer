import { defineStore } from "pinia";
import { ref } from 'vue'
import { OpenAPI, TokenControllerService } from '@/lib/api'

export const useToken = defineStore("accessToken", () => {
  const accessTokenRef = ref<string>(sessionStorage.getItem("accessToken") as string);

  const get = async ({ username, password }:
                       {
                         username: string,
                         password: string
                       }) => {
    try {
      const response = await TokenControllerService.authenticateUser({
        username,
        password
      })
      if (response?.accessToken && response?.refreshToken) {
        sessionStorage.setItem("accessToken", response.accessToken as string);
        localStorage.setItem("refreshToken", response.refreshToken as string);
        localStorage.setItem("username", username);
        OpenAPI.TOKEN = response.accessToken;
        accessTokenRef.value = response.accessToken;
        console.log("access " + response.accessToken)
        console.log("refresh " + response.refreshToken)
      }
    } catch (err) {
      console.log(err);
    }
  }

  return {
    token: accessTokenRef, get
  }
})
