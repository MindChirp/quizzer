<script setup lang="ts">
import type { ComponentSizes, ComponentVariants } from '@/types/component.ts'
import ToasterComponent from '@/components/data/ToasterComponent.vue'

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
  flex: 1;
  height: fit-content;
  width: fit-content;
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
  }

  &:hover {
    background: var(--primary-active);
    color: var(--primary-active-text)
  }
}

.secondary {
  & {
    background: var(--secondary-fg);
    color: var(--secondary-fg-text);
  }

  &:hover {
    background: var(--secondary-active);
    color: var(--secondary-active-text);
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
    border: solid 2px var(--secondary-fg-text);
    color: var(--secondary-fg-text);
  }

  &:hover {
    background: transparent;
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
