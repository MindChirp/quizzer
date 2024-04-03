<script setup lang="ts">
import axios from 'axios'

const props = defineProps<{
  user?: User
}>()
interface User { // <= Dette er typen til User. Den kan brukes der du trenger den
  username: string;
  fullName: string;
  email: string;
  password: string;
}

const registerUser = () => {
  axios.post('http://localhost:8080/api/users/register', {}/*this.user*/)
    .then(response => {
      console.log("User registered: " + response);
    })
    .catch(error => {
      console.log("There was an error: " + error);
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
