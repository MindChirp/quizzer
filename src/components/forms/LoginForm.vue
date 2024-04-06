<script setup lang="ts">

import { useToken } from '@/stores/token.ts'
import router from '@/router'
import type { UserDto } from '@/lib/api'
import toaster from '@/stores/toaster.ts'

const token = useToken();

type User = Pick<UserDto, "username" | "password">

const toast = toaster();

const showError = () => toast.error({
  title: "Log in failed!",
  description: "Wrong username or password."
})
const loginUser = async (data: User) => {

  await token.get({ username: data.username as string, password: data.password as string });
  if (sessionStorage.getItem("JWT")) {
      router.push("/");
  } else {
    showError();
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
