<template>
  <PageWrapper>

    <ModalComponent :open="openFullName" @close-trigger="() => openFullName = !openFullName">
      <ModalHeader>
        <ModalTitle>Change full name</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <FormKit v-model="newFullName" validation="required" type="text" label="New full name" class="input"/>
      </ModalBody>
      <ModalButtons>
        <ButtonComponent variant="secondary" @click="() => openFullName = false">Cancel</ButtonComponent>
        <ButtonComponent variant="primary" @click=updateFullName>Save changes</ButtonComponent>
      </ModalButtons>
    </ModalComponent>

    <ModalComponent :open="openEmail" @close-trigger="() => openEmail = !openEmail">
      <ModalHeader>
        <ModalTitle>Change email</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <FormKit v-model="newEmail" validation="required" type="email" label="New email" class="input"/>
      </ModalBody>
      <ModalButtons>
        <ButtonComponent variant="secondary" @click="() => openEmail = false">Cancel</ButtonComponent>
        <ButtonComponent variant="primary" @click=updateEmail>Save changes</ButtonComponent>
      </ModalButtons>
    </ModalComponent>

    <ModalComponent :open="openPassword" @close-trigger="() => openPassword = !openPassword">
      <ModalHeader>
        <ModalTitle>Change password</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <FormKit v-model="newPassword" validation="required" type="password" label="New Password" class="input"/>
        <FormKit v-model="confirmPassword" validation="required" type="password" label="Confirm Password" class="input"/>
      </ModalBody>
      <ModalButtons>
        <ButtonComponent variant="secondary" @click="() => openPassword = false">Cancel</ButtonComponent>
        <ButtonComponent variant="primary" @click=updatePassword>Save changes</ButtonComponent>
      </ModalButtons>
    </ModalComponent>

    <div class="container">
      <div class="profile">
        <div class="profile-picture">
          <ProfilePicture disable-hover :full-name="user.data?.fullName" style="font-size: 4rem" >
          </ProfilePicture>
        </div>
        <div class="info-row">
          <span class="label">Username:</span>
          <span class="value">{{ user.data?.username }}</span>
        </div>
        <div class="info-row">
          <span class="label">Full Name:</span>
          <span class="value">{{ user.data?.fullName }}</span>
          <ButtonComponent variant="ghost" size="icon" style="flex: 0" @click="() => openFullName = !openFullName">···</ButtonComponent>
        </div>
        <div class="info-row">
          <span class="label">Email:</span>
          <span class="value">{{ user.data?.email }}</span>
          <ButtonComponent variant="ghost" size="icon" style="flex: 0" @click="() => openEmail = !openEmail">···</ButtonComponent>
        </div>
        <div class="info-row">
          <span class="label">Password:</span>
          <span class="value">**********</span>
          <ButtonComponent variant="ghost" size="icon" style="flex: 0" @click="() => openPassword = !openPassword">···</ButtonComponent>
        </div>
      </div>
    </div>
  </PageWrapper>
</template>


<script setup lang="ts">
import ProfilePicture from '@/components/icons/ProfilePicture.vue'
import PageWrapper from '@/components/layout/PageWrapper.vue'
import { useUser } from '@/stores/user.ts'
import ButtonComponent from '@/components/input/ButtonComponent.vue'
import ModalButtons from '@/components/data/ModalButtons.vue'
import ModalTitle from '@/components/data/ModalTitle.vue'
import ModalBody from '@/components/data/ModalBody.vue'
import { FormKit } from '@formkit/vue'
import ModalComponent from '@/components/data/ModalComponent.vue'
import ModalHeader from '@/components/data/ModalHeader.vue'
import { ref } from 'vue'
import { UserControllerService } from '@/lib/api/services/UserControllerService.ts';
import toaster from '@/stores/toaster.ts'

const openFullName = ref(false);
const openEmail = ref(false);
const openPassword = ref(false);

const newFullName = ref('');
const newEmail = ref('');
const newPassword = ref('');
const confirmPassword = ref('');

const user = useUser();
const userId = localStorage.getItem("username") ?? "";
user.get({username: userId})

const toast = toaster();

const showPasswordMismatch = () => toast.error({
  title: "Could not update password!",
  description: "Passwords are not matching."
})

const updateFullName = async () => {
  openFullName.value = false;

  const requestBody = {
    fullName: newFullName.value,
  };

  try {
    const response = await UserControllerService.updateUserFullName(user.data?.username, requestBody);
    console.log(response);
    location.reload();
  } catch (error) {
    console.error("Failed to update user's full name:", error);
  }
};

const updateEmail = async () => {
  openEmail.value = false;

  const requestBody = {
    email: newEmail.value,
  };

  try {
    const response = await UserControllerService.updateUserEmail(user.data?.username, requestBody);
    console.log(response);
    location.reload();
  } catch (error) {
    console.error("Failed to update user's email:", error);
  }
};

const updatePassword = async () => {

  if (newPassword.value !== confirmPassword.value) {
    openPassword.value = false;
    showPasswordMismatch();
    return;
  }

  openPassword.value = false;

  const requestBody = {
    password: newPassword.value,
  };

  try {
    const response = await UserControllerService.updateUserPassword(user.data?.username, requestBody);
    console.log(response);
    location.reload();
  } catch (error) {
    console.error("Failed to update user's password:", error);
  }
};

</script>

<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
}

.profile-picture {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 5%;
}

.profile {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  min-width: 50%;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  font-size: 1.3rem;
}

.info-row {
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0.8rem 0;
}

.label, .value {
  margin-right: auto;
}

.value {
  font-weight: bold;
  color: #0c66e4;
  margin-bottom: 0;
  text-align: right;
}

@media only screen and (max-width: 900px) {
  .profile{
    font-size: 0.8rem;
  }
}

</style>
