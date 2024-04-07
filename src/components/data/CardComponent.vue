<script setup lang="ts">

</script>
<template>
  <div class="wrapper" v-bind="$attrs">
    <slot />
  </div>
</template>
<style scoped>
.wrapper {
  padding: 1rem;
  border: 2px solid var(--secondary-bg);
  border-radius: .5rem;
  box-sizing: border-box;
  background: var(--default-bg);
}
</style>