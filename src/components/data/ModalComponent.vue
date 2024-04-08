<script setup lang="ts">
import { ref } from 'vue'

interface ModalProps {
  open?: boolean;
}

const element = ref<HTMLElement>();

withDefaults(defineProps<ModalProps>(), {
  open: false
})
</script>
<template>
  <Teleport to="body">
    <div class="question-wrapper" :class="{open: open}" ref="element">
      <div class="modal-bg" @click="$emit('closeTrigger')"/>
      <div class="modal-fg">
        <slot />
      </div>
    </div>
  </Teleport>
</template>
<style scoped>
  .question-wrapper {
    height: 100%;
    width: 100%;
    z-index: 200;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) scale(0.98);
    transition: all 200ms ease-in-out;
    opacity: 0;
  }

  .question-wrapper.open {
    transform: translate(-50%,-50%) scale(1);
    opacity: 1;
    animation: display-none 250ms ease-in-out;
    display: block;
  }

  .question-wrapper:not(.open) {
    pointer-events: none;
  }

  .modal-fg {
    box-sizing: border-box;
    padding: 1rem;
    height: fit-content;
    min-width: min(500px, 100%);
    max-width: 100vw;
    border-radius: 0.5rem;
    background: var(--default-bg);
    border: 2px var(--secondary-bg-text);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  .modal-bg {
    position: absolute;
    height: 110%;
    width: 110%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #000000bb;
  }
</style>