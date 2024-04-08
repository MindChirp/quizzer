<script setup lang="ts">
import router from '@/router'
import { UserControllerService } from '@/lib/api'
import toaster from '@/stores/toaster.ts'

interface User {
  username: string;
  fullName: string;
  email: string;
  password: string;
}

const toast = toaster();
const showSuccess = () => toast.success({
  title: "Congratulations!",
  description: "The account has been created!"
})

const showError = () => toast.error({
  title: "An error occurred.",
  description: "Could not create account. Please try again."
})

const registerUser = (data:User) => {

  try {
    UserControllerService.createUser(data)
    showSuccess();
    router.push("/login");
  } catch (err) {
    console.log("There was an error: ", err)
    showError();
  }
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
      validation="required|length:3"
      label="Full Name"
      placeholder="Steve Craft"
    />

    <FormKit
      type="text"
      name="username"
      id="username"
      validation="required|length:3"
      label="Username"
      placeholder="SteveCraft123"
    />

    <FormKit
      type="email"
      name="email"
      id="email"
      validation="required|length:3"
      label="Email"
      placeholder="SteveCraft@mail.com"
    />

    <FormKit
      type="password"
      name="password"
      id="password"
      validation="required|length:3"
      label="Password"
    />
  </FormKit>
  <p>Do you already have a user? <router-link to="/login">Log in here!</router-link></p>
</template>
<style scoped>

</style>
