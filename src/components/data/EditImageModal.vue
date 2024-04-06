
<script setup lang="ts">
import ModalComponent from '@/components/data/ModalComponent.vue'
import ModalHeader from '@/components/data/ModalHeader.vue'
import ModalTitle from '@/components/data/ModalTitle.vue'
import ButtonComponent from '@/components/input/ButtonComponent.vue'
import ModalBody from '@/components/data/ModalBody.vue'
import ModalButtons from '@/components/data/ModalButtons.vue'
import { FormKit } from '@formkit/vue'
import { useUser } from '@/stores/user.ts'

const user = useUser();

const props = defineProps({
  open: Boolean,
  title: String
});

const emit = defineEmits(['close', 'save']);

const close = () => emit('close');

const submitForm = () => {
  
}


</script>

<template>
  <ModalComponent :open="open" @close-trigger="close">
    <ModalHeader>
      <ModalTitle>Set image source</ModalTitle>
    </ModalHeader>
    <FormKit type="form" submit-label="Change image source" :actions="false" @submit="submitForm">
      <ModalBody>
        <FormKit name="fullName" validation="required|length:3" type="text" label="New full name" class="input" />
      </ModalBody>
      <ModalButtons>
        <ButtonComponent type="submit" variant="primary">Change name</ButtonComponent>
        <ButtonComponent variant="secondary" @click.prevent="close" >Cancel</ButtonComponent>
      </ModalButtons>
    </FormKit>
  </ModalComponent>
</template>


