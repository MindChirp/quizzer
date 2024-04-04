<script setup lang="ts">

import ProfilePicture from '@/components/icons/ProfilePicture.vue'
</script>
<template>
  <div class="wrapper">
    <ProfilePicture full-name="Andreas Gjersøe" number-of-initials="2"/>
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