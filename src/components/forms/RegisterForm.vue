<script setup lang="ts">
import axios from 'axios'
import router from '@/router'

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

  axios.post('http://localhost:8080/api/users/register', newUser)
      .then(response => {
        console.log("Register status: ", response.data);
        router.push("/login")
        //TODO: add toaster to show successful registration
      })
      .catch(error => {
        console.log("There was an error:", error);
      })
}
</script>
<template>

  <FormKit
    type="form"
    @submit="registerUser"
    submit-label="Register"
  >
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
  <p>Do you already have a user? <router-link to="/login">Log in here!</router-link></p>
</template>
<style scoped>

</style>
