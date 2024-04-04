import axios from "axios";

const baseurl = "http://localhost:8080";

export const loginRequest = (user) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  return axios.get(baseurl + "/api/users/login", config)
}

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
  console.log("Fetching user info...");
  const config = {
    headers: {
      "Authorization" : "Bearer " + token
    },
  };
  return axios.get(baseurl + "/api/users/" + username, config);
}
