
<script setup lang="ts">
import toaster, { type TToastStatus } from '@/stores/toaster.ts'
import { computed } from 'vue'

const toastClassMap: Record<TToastStatus, string> = {
  warning: "warning",
  error: "error",
  success: "success",
};

const toastIconMap: Record<TToastStatus, string> = {
  error: "toast-error",
  warning: "toast-warning",
  success: "toast-success",
};
const toastStore = toaster();
</script>

<template>
  <Teleport to="body">
    <ul v-if="toastStore.toasts.length" class="wrapper">
      <li
        v-for="toast in toastStore.toasts"
        :class="['inner', toastClassMap[toast.status]]"
        :key="toast.text"
      >
        <div />

        <span class="inner-text">
              {{ toast.text }}
            </span>
      </li>
    </ul>
  </Teleport>
</template>


<style scoped>
  .wrapper {
    position: fixed;
    bottom: 3%;
    right: 5%;

    z-index: 100;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .inner {
    --color: black;
    display: flex;
    align-items: center;
    gap: 1rem;

    border-radius: 0.3rem;

    border: 1px solid transparent;

    background-color: white;

    padding: 2.2rem 1.6rem;

    border-color: var(--color);
    color: var(--color);


    svg {
      fill: var(--color);
      stroke: var(--color);
    }

    .success {
      --color: green;
    }

    .warning {
      --color: orange;
    }

    .error {
      --color: red;
    }

    text {
      font-size: 1.6rem;
      font-weight: 600;
    }
  }

</style>