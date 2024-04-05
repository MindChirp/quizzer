<script setup lang="ts">

</script>
<template>
  <div class="body roboto-light">
    <slot />
  </div>
</template>
<style scoped>
.body {
  width: 100%;
  padding: 1rem 0;
  color: var(--default-bg-text);
  box-sizing: border-box;
}
</style>