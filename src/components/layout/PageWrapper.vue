<script setup lang="ts">

</script>
<template>
  <div class="wrapper" v-bind="$attrs">
    <slot></slot>
  </div>
</template>
<style scoped>
.wrapper {
  width: 80%;
  height: fit-content;
  margin: auto;
}
</style>