<script setup lang="ts">
withDefaults(defineProps<{selected?: boolean}>(), {
  selected: false
})
</script>
<template>
<button class="button" :class="{selected: selected}" v-bind="$attrs">
  <slot></slot>
</button>
</template>
<style scoped>
.button {
  border: none;
  width: 90%;
  background: transparent;
  border-top-right-radius: 5rem;
  border-bottom-right-radius: 5rem;
  cursor: pointer;
  padding: 1rem;
  position: relative;
  transition: all 100ms ease-in-out;
}

.button.selected {
  background: #0c66e433;
}

.button::after {
  content: "";
  height: 80%;
  top: 50%;
  position: absolute;
  background: transparent;
  left: 0;
  width: 3px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  transform: translate(0,-50%);
}

.button.selected::after {
  background: #0c66e4;

}

</style>