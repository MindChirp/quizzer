
<script setup lang="ts">
import toaster, { type TToastStatus } from '@/stores/toaster.ts'

const toastClassMap: Record<TToastStatus, string> = {
  warning: "warning",
  error: "error",
  success: "success",
  default: "default"
};

const toastStore = toaster();
</script>

<template>
  <Teleport to="body">
    <div v-if="toastStore.toasts.length" class="question-wrapper">
      <div
        v-for="toast in toastStore.toasts"
        :class="['inner', toastClassMap[toast.status]]"
        :key="toast.description"
        class="shadow-5"
      >
        <h2 class="title roboto-bold">{{toast.title}}</h2>
        <span class="description roboto-light">
          {{ toast.description }}
        </span>
      </div>
    </div>
  </Teleport>
</template>


<style scoped>
  @keyframes slide-in {
    from {
      transform: translate(200%);
    }
    to {
      transform: translate(0);
    }
  }

  .question-wrapper {
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
    flex-direction: column;
    align-items: start;
    border-radius: 0.3rem;
    border: 1px solid;
    background-color: var(--color);
    padding: 1rem 1.5rem;
    border-color: var(--secondary-bg);
    color: var(--secondary-bg-text);
    box-sizing: border-box;
    animation: slide-in 500ms cubic-bezier(.17,.67,.22,1.37);
    min-width: 300px;
    width: 90%;
    margin: auto;
  }

  .title {
    margin: 0;
    font-size: 1rem;
  }

  .inner.success {
    background-color: var(--success-fg);
    color: var(--success-fg-text);
  }

  .inner.warning {
    background-color: var(--warning-fg);
    color: var(--warning-fg-text);
  }

  .inner.error {
    background-color: var(--destructive-fg);
    color: var(--destructive-fg-text);
  }

  .inner.default {
    background-color: var(--default-fg);
    color: var(--default-fg-text);
  }

  @media screen and (max-width: 1000px) {
    .question-wrapper {
      top: 3%;
      bottom: unset;
      right: 50%;
      width: 100%;
      transform: translate(50%);
    }
  }

</style>