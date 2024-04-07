<script setup lang="ts">
import { EditIcon } from 'lucide-vue-next'

defineProps<{
  url?: string
}>()

</script>
<template>
  <div class="wrapper shadow-5" :style="`background-image: url('${url}')`">
    <button class="wrapping-button" @click.prevent="$emit('changeImageSource')">
      <div class="shadow">
          <EditIcon class="icon" style="color: var(--secondary-bg)"/>
      </div>
    </button>
  </div>
</template>
<style scoped>
.wrapper {
  width: 100%;
  height: 10rem;
  border-radius: 1rem;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.shadow {
  height: 100%;
  width: 100%;
  display: flex;
  place-content: center;
  align-items: center;
  background: #00000055;
  transition: background 100ms ease-in-out;
}

.shadow:hover {
  background: #00000099;
}

.wrapping-button {
  cursor: pointer;
  width: 100%;
  height: 100%;
  padding: 0;
  background: transparent;
  border: none;
}

</style>