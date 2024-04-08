<!-- This component will probably be deprecated. Use formkit's implementation instead. -->

<script setup lang="ts">
import { useSlots } from 'vue'

type Context = {
  node: {
    input: (value: string) => void
  }
  _value: any
}

export interface InputProps {
  context?: Context
  label?: string
  help?: string
}

const props = defineProps<InputProps>()

const handleInput = (event: any) => {
  props?.context?.node.input(event?.target?.value)
}

const slots = useSlots()
const hasSlot = () => {
  return !!slots['default']
}
</script>
<template>
  <div class="question-wrapper">
    <div class="label">
      <label>{{ props.label }}</label>
    </div>
    <div class="inner">
      <div class="icon" v-if="hasSlot()">
        <slot style="height: 1rem"></slot>
      </div>
      <input
        @input="handleInput"
        :value="props?.context?._value"
        class="input"
        :class="[hasSlot() ? 'with-icon' : undefined]"
        v-bind="$attrs"
      />
    </div>
    <div class="help">
      <label>{{ props.help }}</label>
    </div>
  </div>
</template>
<style scoped>
.question-wrapper {
  position: relative;
  width: fit-content;
  height: fit-content;
  color: #8590a2;
}

.inner {
  position: relative;
  height: fit-content;
}

.label {
  margin-bottom: 0.1rem;
}

.help {
  margin-top: 0.1rem;
  font-size: 0.7rem;
}

.icon {
  position: absolute;
  top: 50%;
  left: 0.5rem;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
  color: inherit;
}

.input {
  border: 2px solid #8590a2;
  border-radius: 0.19rem;
  padding: 0.5rem 1rem;
  outline: none;
  font-size: 1rem;
  box-sizing: border-box;
}

.input.with-icon {
  padding-left: 2.3rem;
}

.input:focus {
  border-color: #0c66e4;
}
</style>
