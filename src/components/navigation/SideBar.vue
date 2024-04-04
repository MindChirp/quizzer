<script setup lang="ts">

const props = withDefaults(defineProps<{
  open?: boolean
}>(), {
  open: false
})

import { X } from 'lucide-vue-next'
import ButtonComponent from '@/components/input/ButtonComponent.vue'

</script>
<template>
  <div class="sidebar" :class="{open: open}">
    <div class="header">
      <ButtonComponent size="icon" variant="ghost" style="flex: 0" @click="$emit('closeTrigger')"><X /></ButtonComponent>

    </div>
  </div>
</template>
<style scoped>
.sidebar {
  width: 80%;
  background: white;
  height: 100vh;
  padding: 1rem;
  top: 0;
  left: 0;
  position: fixed;
  border: 0px solid #9e9e9e;
  border-right-width: 1px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  transition: transform 250ms ease-in-out;
}

.sidebar:not(.open) {
  transform: translate(-100%);
}

.sidebar.open {
  transform: translate(0);
}

.sidebar .header {
  height: fit-content;
  display: flex;
  width: 100%;
  align-items: center;
  place-content: end;
}
</style>