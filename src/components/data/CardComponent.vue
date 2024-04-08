<script setup lang="ts">

</script>
<template>
  <div class="question-wrapper" v-bind="$attrs">
    <slot />
  </div>
</template>
<style scoped>
.question-wrapper {
  padding: 1rem;
  border: 2px solid var(--secondary-bg);
  border-radius: .5rem;
  box-sizing: border-box;
  background: var(--default-bg);
}
</style>