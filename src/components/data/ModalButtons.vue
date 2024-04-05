<script setup lang="ts">

</script>
<template>
  <div class="buttons">
    <slot />
  </div>
</template>
<style scoped>
.buttons {
  width: 100%;
  display: flex;
  align-items: center;
  place-content: start;
  gap: 1rem;
}
</style>