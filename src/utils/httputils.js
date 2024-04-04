import axios from "axios";

const baseurl = "http://localhost:8080";

export const getJwtToken = (username, password) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = {
    username: username,
    password: password,
  };
  return axios.post(baseurl + "/token", JSON.stringify(body), config);
}

export const getUserInfo = (username, token) => {
  const config = {
    headers: {
      "Authorization" : "Bearer " + token
    },
  };
  return axios.get(baseurl + "/api/users/" + username, config);
}
