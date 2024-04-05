<script setup lang="ts">

import { useTokenStore } from '@/stores/token.ts'
import  router  from '@/router'

const tokenStore = useTokenStore();

interface User {
  username: string;
  password: string;
}

const loginUser = async (data: User) => {
  const newUser: User = {
    username: data.username,
    password: data.password,
  }

  await tokenStore.getTokenAndSaveInStore(newUser.username, newUser.password);
  if (sessionStorage.getItem("JWT")) {
    console.log("Log in success")
    router.push("/");
  } else {
    console.log("Log in failed!")
  }

}
</script>
<template>
  <FormKit
    type="form"
    @submit="loginUser"
    submit-label="Log in"
  >

    <FormKit
        type="text"
        name="username"
        id="username"
        validation="required"
        label="Username"
    />

    <FormKit
        type="password"
        name="password"
        id="password"
        validation="required"
        label="Password"
    />
  </FormKit>
  <p>Are you a new user? <router-link to="/register">Register here!</router-link></p>

</template>
<style scoped>

</style>
