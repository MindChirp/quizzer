<script setup lang="ts">

</script>
<template>
  <div class="question-wrapper">
    <span class="roboto-medium">
      <slot />
    </span>
  </div>
</template>
<style scoped>
.question-wrapper {
  background: var(--secondary-bg);
  color: var(--secondary-fg-text);
  padding: 0.1rem 0.4rem;
  border-radius: 3px;
  display: flex;
  gap: 0;
  place-content: center;
  align-items: center;
  font-size: .8rem;
  cursor: default;
  user-select: none;
  text-transform: capitalize;
}
</style>