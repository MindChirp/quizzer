<script setup lang="ts">
import type { ComponentSizes, ComponentVariants } from '@/types/component.ts'

interface ButtonProps {
  variant?: ComponentVariants
  size?: ComponentSizes
}

const props = defineProps<ButtonProps>()
</script>
<template>
  <button class="button roboto-medium" :class="[variant ?? 'primary', size ?? 'medium']">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  transition: background 100ms ease-in-out;
  padding: 0.5rem 1rem;
  border-radius: 0.19rem;
  border: none;
  font-size: 0.875rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.small {
  padding: 0.25rem 0.5rem;
}

.medium {
  padding: 0.5rem 1rem;
}

.large {
  padding: 0.75rem 1.5rem;
}

.icon {
  padding: 0.5rem;
}

.primary {
  & {
    background: #0c66e4;
    color: white;
  }

  &:hover {
    background: #0055cc;
  }
}

.secondary {
  & {
    background: #c8c8c8;
    color: #4f5a6c;
  }

  &:hover {
    background: #9e9e9e;
  }
}

.destructive {
  & {
    background: #e60000;
    color: white;
  }

  &:hover {
    background: #990000;
  }
}

.outline {
  & {
    background: transparent;
    border: solid 2px #999999;
    color: #999999;
  }

  &:hover {
    background: transparent;
  }
}

.ghost {
  & {
    background: transparent;
    color: #999999;
  }

  &:hover {
    background: #9e9e9e33;
  }
}
</style>