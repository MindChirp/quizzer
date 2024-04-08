<template>
  <PageWrapper>

    <ChangeFullNameModal :open="openFullName" @close="toggleFullNameModal"/>
    <ChangeEmailModal :open="openEmail" @close="toggleEmailModal"/>
    <ChangePasswordModal :open="openPassword" @close="togglePasswordModal"/>
    <ModalComponent :open="openSignOut" @close-trigger="() => openSignOut = !openSignOut">
      <ModalHeader>
        <ModalTitle>Are you sure?</ModalTitle>
      </ModalHeader>
      <ModalBody>You are about to sign out!</ModalBody>
      <ModalButtons>
        <ButtonComponent variant="destructive" @click=signOutUser>Sign out</ButtonComponent>
        <ButtonComponent variant="secondary" @click="() => openSignOut = false">Cancel</ButtonComponent>
      </ModalButtons>
    </ModalComponent>

    <div class="container">
      <div class="profile">
        <div class="profile-picture">
          <ProfilePicture disable-hover :full-name="user.data?.fullName" style="font-size: 4rem" />
        </div>
        <InfoRowComponent label="Username" :value="user.data?.username" />
        <InfoRowComponentWithButton label="Full Name" :value="user.data?.fullName" @edit="toggleFullNameModal"/>
        <InfoRowComponentWithButton label="Email" :value="user.data?.email" @edit="toggleEmailModal"/>
        <InfoRowComponentWithButton label="Password" value="**********" @edit="togglePasswordModal"/>

        <ButtonComponent variant="destructive" size="icon" style="width: 100%; margin-top: 1rem;" @click="() => openSignOut = !openSignOut">Sign out</ButtonComponent>
      </div>

    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
import ProfilePicture from '@/components/icons/ProfilePicture.vue'
import PageWrapper from '@/components/layout/PageWrapper.vue'
import { useUser } from '@/stores/user.ts'
import { ref } from 'vue'
import toaster from '@/stores/toaster.ts'
import ChangeEmailModal from '@/components/data/ChangeEmailModal.vue'
import ChangeFullNameModal from '@/components/data/ChangeFullNameModal.vue'
import ChangePasswordModal from '@/components/data/ChangePasswordModal.vue'
import ButtonComponent from '@/components/input/ButtonComponent.vue'
import ModalButtons from '@/components/data/ModalButtons.vue'
import ModalHeader from '@/components/data/ModalHeader.vue'
import ModalComponent from '@/components/data/ModalComponent.vue'
import ModalTitle from '@/components/data/ModalTitle.vue'
import ModalBody from '@/components/data/ModalBody.vue'
import { signOut } from '@/lib/utils/user.ts'
import InfoRowComponentWithButton from '@/components/data/InfoRowComponentWithButton.vue'
import InfoRowComponent from '@/components/data/InfoRowComponent.vue'

const openSignOut = ref(false);
const openFullName = ref(false);
const openEmail = ref(false);
const openPassword = ref(false);

const user = useUser();
const userId = localStorage.getItem("username") ?? "";
user.get({username: userId})

const toast = toaster();

const toggleFullNameModal = () => {
  openFullName.value = !openFullName.value;
};

const toggleEmailModal = () => {
  openEmail.value = !openEmail.value;
};

const togglePasswordModal = () => {
  openPassword.value = !openPassword.value;
};

const showPasswordMismatch = () => toast.error({
  title: "Could not update password!",
  description: "Passwords are not matching."
})

const signOutUser = () => {
  signOut();
  location.reload();
}


</script>
<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  box-sizing: border-box;
}

.profile-picture {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 3rem;
}

.profile {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  min-width: 50%;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  font-size: 1.3rem;
}

@media only screen and (max-width: 1000px) {
  .profile{
    font-size: 0.8rem;
    width: 100%;
    
  }
}
</style>
