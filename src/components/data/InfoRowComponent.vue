<template>
  <div class="info-row">
    <div class="label-wrapper">
      <span class="label">{{ label }}</span>
    </div>
    <div class="data">
      <span class="value">{{ value }}</span>
      <ButtonComponent variant="ghost" size="icon" @click="$emit('edit')">···</ButtonComponent>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from '@/components/input/ButtonComponent.vue'

defineProps({
  label: String,
  value: String
});
</script>

<style scoped>

.info-row {
  display: flex;
  align-items: center;
  width: 100%;
}

.label-wrapper {
  width: 100%;
  height: 100%;
}

.label {
  width: fit-content;
  background: var(--secondary-bg);
  padding: .2rem .7rem;
  border-radius: 3px;
  color: var(--secondary-bg-text)
}

.data {
  display: flex;
  width: fit-content;
  flex: 1;
  white-space: nowrap;
  gap: .5rem;
  align-items: center;
}

.value {
  font-weight: bold;
  color: #0c66e4;
  margin-bottom: 0;
  text-align: right;
}

</style>
