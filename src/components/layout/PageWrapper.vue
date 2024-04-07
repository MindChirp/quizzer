<script setup lang="ts">

</script>
<template>
  <div class="wrapper" v-bind="$attrs">
    <slot></slot>
  </div>
</template>
<style scoped>
.wrapper {
  width: 80vw;
  height: fit-content;
  margin: auto;
  max-width: 1280px;
  padding: 4rem 0;
}

@media screen and (max-width: 1000px) {
  .wrapper {
    padding: 6rem 0;
  }
}
</style>