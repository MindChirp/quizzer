import { defineStore } from "pinia";
import { getJwtToken, getUserInfo } from '@/utils/httputils'
export const useTokenStore = defineStore("token", {
  state: () => ({
    loggedInUser: null,
  }),

  actions: {

    async getTokenAndSaveInStore(username: string, password: string) {
      try {
        let response = await getJwtToken(username, password);
        let token = response.data;
        if (token) {
          sessionStorage.setItem("JWT", token);
          let userInfoResponse = await getUserInfo(username, token);
          this.loggedInUser = userInfoResponse.data;
        }
      } catch (err) {
        console.log(err);
      }
    }

  },
});
