<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import TagComponent from '@/components/data/TagComponent.vue'

export type OptionType = {
  label: string;
  value: string;
}

const props = defineProps<{
  options: OptionType[],
  placeholder?: string,
}>();

const search = ref('');
const open = ref(false);
const selfDOM = ref<HTMLElement>();

const selectedValues = defineModel<OptionType[]>({
  required: true
});

const filteredOptions = computed(() => {
  return props.options.filter((obj) =>
    obj.label.toLowerCase().includes(search.value?.toLowerCase() ?? '')
    && !selectedValues.value.find(s => obj.label == s.label))
    .slice(0, 5);
})


const handleInputKey = (e: KeyboardEvent) => {

  if (e.code == "Enter") {
    // Add the first element in the filteredOptions list to selectedValues
    selectItem(0);
    return;
  }

  if (e.code == "Backspace" && !search.value) {
    // Delete the last selected value
    selectedValues.value.pop();
    return;
  }

  if (e.code == "Escape") {
    open.value = false;
    return;
  }

  // If the user is typing, but the menu is not visible, show it.
  if (!open.value) open.value = true;
}

const selectItem = (index: number) => {
  if (!filteredOptions.value[index]) return;
  selectedValues.value?.push(filteredOptions.value[index]);
  search.value = "";
}

const clickOutsideHandler = (e: Event) => {
  if (!selfDOM.value?.contains(e.target as HTMLElement)) {
    open.value = false;
  }
}

onMounted(() => {
  // Register a global event listener that checks if the user has clicked outside of the component
  document.addEventListener("click", clickOutsideHandler)
})

onUnmounted(() => {
  document.removeEventListener("click", clickOutsideHandler)
})

</script>
<template>
  <div class="wrapper" v-bind="$attrs" ref="selfDOM">
    <div class="input">
      <div class="labels" v-if="selectedValues.length > 0">
        <TagComponent v-for="(value, number) in selectedValues" :key="number">{{value.label}}</TagComponent>
      </div>
      <input :placeholder="placeholder" v-model="search" @keydown="handleInputKey" @focus="() => open = true"/>
    </div>
    <div class="options" v-if="open">
      <button class="option" v-for="(option, number) in filteredOptions" :key="number" @click="() => selectItem(number)">{{option.label}}</button>
      <span v-if="filteredOptions.length == 0" class="no-results roboto-bold">No results found</span>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  width: fit-content;
  position: relative;
}

.input {
  display: flex;
  gap: .5rem;
  padding: 0 .5rem;
  border-radius: 6px;
  border: solid 1px var(--secondary-fg);
}

input {
  padding: .5rem 0;
  border: 0;
  height: 100%;
  width: 100%;
  outline: none;
}

.labels {
  display: flex;
  align-items: center;
  gap: .25rem;
}

.options {
  background: var(--default-bg);
  border-radius: .5rem;
  padding: .5rem 0;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  transform: translate(0,100%);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  overflow-y: auto;
  max-height: 200px;
  display: flex;
}

.no-results {
  margin: auto;
  font-size: .8rem;
  color: var(--secondary-bg-text)
}

.option {
  width: 100%;
  padding: .5rem 1rem;
  cursor: default;
  background: transparent;
  border: none;
  text-align: left;
}

.option:first-of-type {
  background: var(--secondary-bg);
}


.option:hover {
  background: var(--secondary-bg)
}

.option:focus {
  background: var(--secondary-bg);
}

</style>