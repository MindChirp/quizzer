<script setup lang="ts">
import axios from 'axios'

interface User {
  username: string;
  fullName: string;
  email: string;
  password: string;
}

const registerUser = (data:User) => {
  const newUser: User = {
    username: data.username,
    fullName: data.fullName,
    email: data.email,
    password: data.password,
  }

  console.log(newUser);

  axios.post('http://localhost:8080/api/users/register', newUser)
      .then(response => {
        console.log("Register status: ", response.data);
      })
      .catch(error => {
        console.log("There was an error:", error);
      })
}
</script>

<template>
  <h1>Register</h1>

  <FormKit type="form" @submit="registerUser">
    <FormKit
      type="text"
      name="fullName"
      id="fullName"
      validation="required"
      label="Full Name"
      placeholder="Steve Craft"
    />

    <FormKit
      type="text"
      name="username"
      id="username"
      validation="required"
      label="Username"
      placeholder="SteveCraft123"
    />

    <FormKit
      type="email"
      name="email"
      id="email"
      validation="required"
      label="Email"
      placeholder="SteveCraft@mail.com"
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
