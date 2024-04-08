<script setup lang="ts">
import { ROUTES } from '@/router'
import { UserControllerService } from '@/lib/api'
import toaster from '@/stores/toaster.ts'
import CardComponent from '@/components/data/CardComponent.vue'
import ButtonComponent from '@/components/input/ButtonComponent.vue'
import { useRouter } from 'vue-router'

interface User {
  username: string;
  fullName: string;
  email: string;
  password: string;
}

const toast = toaster();
const router = useRouter();
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
    router.push(`/${ROUTES.LOGIN.path}`);
  } catch (err) {
    showError();
  }
}

const logIn = () => {
  router.push(`/${ROUTES.LOGIN.path}`)
}
</script>
<template>
  <CardComponent style="min-width: 25rem; max-width: 100vw; box-sizing: border-box">

    <FormKit
      type="form"
      @submit="registerUser"
      :actions="false"
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
      <ButtonComponent style="width: 100%;">Register user</ButtonComponent>
    </FormKit>
    <div class="roboto-medium divider">
      <span>OR</span>
    </div>
    <ButtonComponent variant="secondary" style="width: 100%" @click="logIn">Sign in</ButtonComponent>
  </CardComponent>
</template>
<style scoped>
.divider {
  background: white;
  text-align: center;
  display: block;
  position: relative;
  z-index: 2;
  margin: .5rem auto;
}

.divider span {
  background: white;
  padding: .5rem;
  color: var(--secondary-bg-text)
}

.divider::before {
  content: "";
  background: var(--secondary-bg);
  height: 2px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10rem;
  z-index: -2;
}
</style>
