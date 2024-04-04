<template>
  <div class="wrapper shadow-5 roboto-bold">
    <h1 class="title">Want to learn something new?</h1>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.wrapper {
  margin-top: 2rem;
  height: 20rem;
  width: 100%;
  border-radius: 1rem;
  background: black url("/nature-4790694_1920.jpg");
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  box-sizing: border-box;
  /* -webkit-linear-gradient(16deg, #cf92ed 0%, #f1e4d2 30%, var(--primary-fg) 60%, #ceabef 90%)*/
}
.title {
  color: white;
  font-size: 4rem;
  background: #D14036;
  background-image: linear-gradient(225deg, hsl(3, 90%, 50%), hsl(275, 100%, 55%));
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

</style>