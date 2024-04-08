<template>
  <ModalComponent :open="open" @close-trigger="close">
    <ModalHeader>
      <ModalTitle>Change Password</ModalTitle>
    </ModalHeader>
    <FormKit type="form" submit-label="Change Password" :actions="false" @submit="submitForm">
      <ModalBody>
        <FormKit name="password" validation="required|length:3" type="password" label="New password" class="input" />
        <FormKit name="confirmPassword" validation="required|length:3" type="password" label="Confirm password" class="input" />
      </ModalBody>
      <ModalButtons>
        <ButtonComponent type="submit" variant="primary">Change Password</ButtonComponent>
        <ButtonComponent variant="secondary" @click.prevent="close" >Cancel</ButtonComponent>
      </ModalButtons>
    </FormKit>
  </ModalComponent>
</template>

<script setup lang="ts">
import ModalComponent from '@/components/data/ModalComponent.vue'
import ModalHeader from '@/components/data/ModalHeader.vue'
import ModalTitle from '@/components/data/ModalTitle.vue'
import ButtonComponent from '@/components/input/ButtonComponent.vue'
import ModalBody from '@/components/data/ModalBody.vue'
import ModalButtons from '@/components/data/ModalButtons.vue'
import { FormKit } from '@formkit/vue'
import { UserControllerService } from '@/lib/api'
import { getUserId } from '@/lib/utils/user.ts'
import { useUser } from '@/stores/user.ts'
import toaster from '@/stores/toaster.ts'

const user = useUser();

const props = defineProps({
  open: Boolean,
  title: String
});

const emit = defineEmits(['close', 'save']);

const toast = toaster();

const showError = () => toast.error({
  title: "Password mismatch!",
  description: "Passwords dont match each-other!"
})
const close = () => emit('close');
const submitForm = async (data: { password: string, confirmPassword: string }) => {

  if (data.password !== data.confirmPassword) {
    showError();
    return;
  }

  try {
    await UserControllerService.updateUser(getUserId() ?? '', {
      password: data.password
    })
    user.get({username:getUserId() ?? ''});
    close();
  } catch (err) {
    toaster().error({
      title: "Something went wrong",
      description: "Could not update user."
    })
  }
}
</script>

