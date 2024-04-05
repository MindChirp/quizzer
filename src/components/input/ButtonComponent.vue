<script setup lang="ts">
import type { ComponentSizes, ComponentVariants } from '@/types/component.ts'

interface ButtonProps {
  variant?: ComponentVariants
  size?: ComponentSizes
}

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(defineProps<ButtonProps>(), {
  size: 'medium',
  variant: 'primary'
})
</script>
<template>
  <button class="button roboto-medium" :class="[variant, size]" v-bind="$attrs">
    <span><slot /></span>
  </button>
</template>

<style scoped>
.button {
  transition: all 100ms ease-in-out;
  padding: 0.5rem 1rem;
  border-radius: 0.19rem;
  border: 2px solid transparent;
  font-size: 0.875rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0;
  height: fit-content;
  width: fit-content;
  white-space: nowrap;
  box-sizing: border-box;
}

.button:disabled {
  opacity: 0.5;
  pointer-events: none;
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
    background: var(--primary-fg);
    color: var(--primary-fg-text);
    border-color: var(--primary-fg);
  }

  &:hover {
    background: var(--primary-active);
    color: var(--primary-active-text);
    border-color: var(--primary-active);
  }
}

.secondary {
  & {
    background: var(--secondary-bg);
    color: var(--secondary-fg-text);
    border-color: var(--secondary-bg);
  }

  &:hover {
    background: var(--secondary-fg);
    color: var(--secondary-fg-text);
    border-color: var(--secondary-fg);
  }
}

.destructive {
  & {
    background: var(--destructive-fg);
    color: var(--destructive-fg-text);
  }

  &:hover {
    background: var(--destructive-active);
    color: var(--destructive-active-text)
  }
}

.outline {
  & {
    background: transparent;
    border: solid 2px var(--secondary-bg-text);
    color: var(--secondary-bg-text);
  }

  &:hover {
    background: var(--secondary-bg);
  }
}

.ghost {
  & {
    background: transparent;
    color: var(--secondary-fg-text);
  }

  &:hover {
    background: var(--secondary-bg);
    color: var(--secondary-bg-text)
  }
}
</style>
