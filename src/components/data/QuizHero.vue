<script setup lang="ts">
defineProps<{
  url: string
}>()
</script>
<template>
<div class="wrapper" :style="`background-image: url('${url}')`">
  <div class="gradient" />
</div>
</template>
<style scoped>
.wrapper {
  top: 0;
  position: absolute;
  width: 100%;
  left: 0;
  height: 30rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
}

.gradient {
  width: 100%;
  background: rgb(255,255,255);
  background: linear-gradient(0deg, var(--default-bg) 0%, color-mix(in srgb, var(--default-bg) 80%, transparent) 50%, rgba(255,255,255,0.0) 80%);
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
}
</style>