<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import InputComponent from './components/input/InputComponent.vue'
import { Search } from 'lucide-vue-next'
import ButtonComponent from './components/input/ButtonComponent.vue'
</script>

<template>
  <ButtonComponent variant="primary">Create</ButtonComponent>
  <InputComponent type="email" label="hhshshs">
    <template #icon>
      <Search style="height: 1.2rem" />
    </template>
  </InputComponent>
  <!-- <RouterView /> -->
</template>
W
<style scoped></style>
