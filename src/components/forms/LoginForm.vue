<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

interface User {
  username: string;
  password: string;
}

const usernameField = ref('')
const passwordField = ref('')

const loginUser = () => {
  const newUser: User = {
    username: usernameField.value,
    password: passwordField.value,
  }

  console.log(newUser);

  axios.post('http://localhost:8080/api/users/login', newUser)
      .then(response => {
        console.log("Login status: ", response.data);
      })
      .catch(error => {
        console.log("There was an error:", error);
      })
}
</script>

<template>
  <h1>Log in</h1>

  <FormKit type="form" @submit="loginUser">
    <FormKit
        type="text"
        name="username"
        id="username"
        validation="required"
        label="Username"
        placeholder="SteveCraft123"
        v-model="usernameField"
    />

    <FormKit
        type="password"
        name="password"
        id="password"
        validation="required"
        label="Password"
        v-model="passwordField"
    />
  </FormKit>

</template>
<style scoped>

</style>
