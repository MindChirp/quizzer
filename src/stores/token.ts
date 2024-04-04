import { defineStore } from "pinia";
import { getJwtToken, getUserInfo } from '@/utils/httputils'
export const useTokenStore = defineStore("token", {
  state: () => ({
    jwtToken: null,
    loggedInUser: null,
  }),

  actions: {

    async getTokenAndSaveInStore(username: string, password: string) {
      try {
        let response = await getJwtToken(username, password);
        let token = response.data;
        if (token) {
          this.jwtToken = token;
          let userInfoResponse = await getUserInfo(username, token);
          this.loggedInUser = userInfoResponse.data;
          console.log("HELLO GUYS!! " + JSON.stringify(this.loggedInUser, null, 2));

        }
      } catch (err) {
        console.log(err);
      }
    }

  },
});
