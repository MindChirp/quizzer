import { defineStore } from "pinia";
import { ref } from 'vue'
import { OpenAPI, TokenControllerService } from '@/lib/api'

export const useToken = defineStore("token", () => {
  const tokenRef = ref<string>(localStorage.getItem("token") as string);

  const get = async ({ username, password }:
                       {
                         username: string,
                         password: string
                       }) => {
    try {
      const token = await TokenControllerService.generateToken({
        username,
        password
      })
      if (token?.token) {
        console.log(token.token)
        OpenAPI.TOKEN = token.token;
        sessionStorage.setItem("JWT", token.token as string);
        localStorage.setItem("username", username);
        tokenRef.value = token.token;
      }
    } catch (err) {
      console.log(err);
    }
  }

  return {
    token: tokenRef, get
  }

})
