<template>
  <ModalComponent :open="open" @close-trigger="close">
    <ModalHeader>
      <ModalTitle>{{ title }}</ModalTitle>
    </ModalHeader>
    <ModalBody>
      <slot></slot>
    </ModalBody>
    <ModalButtons>
      <ButtonComponent variant="secondary" @click="close">Cancel</ButtonComponent>
    </ModalButtons>
  </ModalComponent>
</template>

<script setup>
import ModalComponent from '@/components/data/ModalComponent.vue'
import ModalHeader from '@/components/data/ModalHeader.vue'
import ModalTitle from '@/components/data/ModalTitle.vue'
import ButtonComponent from '@/components/input/ButtonComponent.vue'
import ModalBody from '@/components/data/ModalBody.vue'
import ModalButtons from '@/components/data/ModalButtons.vue'

const props = defineProps({
  open: Boolean,
  title: String
});

const emit = defineEmits(['close', 'save']);

const close = () => emit('close');
</script>

