<script setup lang="ts">
import ProfilePicture from '@/components/icons/ProfilePicture.vue'
import { useUser } from '@/stores/user.ts'
import router from '@/router/index.js'

const user = useUser();
const routToProfilePage = () => {
  router.push('/profile')
};

</script>
<template>
  <div class="wrapper">
    <ProfilePicture :full-name="user.data?.fullName" number-of-initials="2" @click="routToProfilePage"/>
  </div>
</template>
<style scoped>
.wrapper {
  width: fit-content;
  display: flex;
  align-items: center;
  min-width: 4rem;
  justify-content: center;
  height: 100%;
}
</style>