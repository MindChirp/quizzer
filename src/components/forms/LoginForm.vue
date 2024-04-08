<script setup lang="ts">

import { ROUTES } from '@/router'
import type { UserDto } from '@/lib/api'
import toaster from '@/stores/toaster.ts'
import { setTokensWithUserCredentials } from '@/lib/utils/user.ts'
import CardComponent from '@/components/data/CardComponent.vue'
import ButtonComponent from '@/components/input/ButtonComponent.vue'
import { useRouter } from 'vue-router'

type User = Pick<UserDto, "username" | "password">

const toast = toaster();
const router = useRouter();

const showError = () => toast.error({
  title: "Log in failed!",
  description: "Wrong username or password."
})

const loginUser = async (data: User) => {
  setTokensWithUserCredentials(data.username ?? '', data.password ?? '')
    .then(() => {
      router.replace(`/${ROUTES.DISCOVER.path}`);
    })
    .catch(showError)
}

const register = () => {
  router.push(`/${ROUTES.REGISTER.path}`)
}

</script>
<template>
  <CardComponent style="min-width: 25rem;">
    <FormKit
      type="form"
      @submit="loginUser"
      :actions="false"
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
      <ButtonComponent style="width: 100%;">Sign in</ButtonComponent>
    </FormKit>
    <div class="roboto-medium divider">
      <span>OR</span>
    </div>
    <ButtonComponent variant="secondary" style="width: 100%;" @click="register">Register</ButtonComponent>
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
