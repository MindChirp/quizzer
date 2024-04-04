<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

interface User {
  username: string;
  fullName: string;
  email: string;
  password: string;
}

// Initialize refs for form fields
const usernameField = ref('')
const fullNameField = ref('')
const emailField = ref('')
const passwordField = ref('')

const registerUser = () => {
  const newUser: User = {
    username: usernameField.value,
    fullName: fullNameField.value,
    email: emailField.value,
    password: passwordField.value,
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
      name="name"
      id="name"
      validation="required"
      label="Full Name"
      placeholder="Steve Craft"
      v-model="fullNameField"
    />

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
      type="email"
      name="email"
      id="email"
      validation="required"
      label="Email"
      placeholder="SteveCraft@mail.com"
      v-model="emailField"
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
