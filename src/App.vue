<script setup lang="ts">
import { Trash } from 'lucide-vue-next'
import ButtonComponent from './components/input/ButtonComponent.vue'
import toaster from '@/stores/toaster.ts'
import ToasterComponent from '@/components/layout/ToasterComponent.vue'

const store = toaster();
const success = () => store.success({
  title: "Din ting ble lagt til!",
  description: "Morra di er mann forresten",
  timeout: 10000
})
</script>
<template>
  <ToasterComponent />
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
    <ButtonComponent @click="success" variant="ghost" style="flex: 0">
      <Trash style="height: 1rem; width: 1rem" />
    </ButtonComponent>
  </div>
  <!-- <RouterView /> -->
</template>
<style scoped></style>
@/v1
