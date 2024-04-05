<script setup lang="ts">
defineProps<{
  selected?: boolean
}>()
</script>
<template>
  <button
  v-bind="$attrs"
  class="button"
  :class="{selected: selected}"
  >
    <div class="inner-bkg roboto-medium">
      <slot></slot>
    </div>
  </button>
</template>
<style scoped>
.button {
  padding: 0 .5rem;
  background: transparent;
  border: none;
  outline: none;
  color: #4f5a6c;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  cursor: pointer;
}

.inner-bkg {
  height: fit-content;
  width: fit-content;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  transition: background 100ms ease-in-out;
}

.button:hover .inner-bkg {
  background: #9e9e9e33;
}


.button.selected {
  color: #0c66e4;
}

.button.selected::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  background: #0c66e4;
  height: 3px;
  width: 50%;
  transform: translate(-50%);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
</style>