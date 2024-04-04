<script setup lang="ts">
import axios from 'axios'

interface User {
  username: string;
  password: string;
}

const loginUser = (data:User) => {
  const newUser: User = {
    username: data.username,
    password: data.password,
  }

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
  <FormKit type="form" @submit="loginUser">
    <FormKit
        type="text"
        name="username"
        id="username"
        validation="required"
        label="Username"
        placeholder="SteveCraft123"
    />

    <FormKit
        type="password"
        name="password"
        id="password"
        validation="required"
        label="Password"
    />
  </FormKit>

</template>
<style scoped>

</style>
