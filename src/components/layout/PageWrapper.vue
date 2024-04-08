<script setup lang="ts">

</script>
<template>
  <div class="question-wrapper" v-bind="$attrs">
    <slot></slot>
  </div>
</template>
<style scoped>
.question-wrapper {
  width: 80vw;
  height: fit-content;
  margin: auto;
  max-width: 1280px;
  padding: 4rem 0;
}

@media screen and (max-width: 1000px) {
  .question-wrapper {
    padding: 6rem 0;
    width: 90vw;
  }
}
</style>