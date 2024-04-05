<script setup lang="ts">

</script>
<template>
<div class="wrapper shadow-5">
  <div class="gradient" />
</div>
</template>
<style scoped>
.wrapper {
  width: 100%;
  height: 15rem;
  border-radius: .5rem;
  background-image: url("/earth-1756274_1920.jpg");
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: left;
  position: relative;
  overflow: hidden;
}

.gradient {
  display: none;
  width: 70%;
  background: rgb(255,255,255);
  background: linear-gradient(270deg, var(--default-bg) 10%, color-mix(in srgb, var(--default-bg) 90%, transparent) 40%, rgba(255,255,255,0.0) 100%);
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
}
</style>