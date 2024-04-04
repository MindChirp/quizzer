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
  if (tokenStore.jwtToken) {
    console.log("logg inn yeahaahhh<!!!!")
    router.push("/");
  } else {
    console.log("Log in failed!")
  }

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
