<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'
import { getNode } from '@formkit/core'
import { Trash } from 'lucide-vue-next'
import ButtonComponent from './components/input/ButtonComponent.vue'
</script>
<template>
  <div
    style="
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      width: fit-content;
    "
  >
    <FormKit type="range" name="range_value" style="margin: 0" />
    <ButtonComponent variant="destructive" size="icon" style="flex: 0"
      ><Trash style="height: 1rem; width: 1rem"
    /></ButtonComponent>
  </div>
  <!-- <RouterView /> -->
</template>
<style scoped></style>
@/v1
