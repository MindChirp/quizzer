<template>
  <PageWrapper>

    <ChangeFullNameModal :open="openFullName" @close="toggleFullNameModal"/>
    <ChangeEmailModal :open="openEmail" @close="toggleEmailModal"/>
    <ChangePasswordModal :open="openPassword" @close="togglePasswordModal"/>

    <div class="container">
      <div class="profile">
        <div class="profile-picture">
          <ProfilePicture disable-hover :full-name="user.data?.fullName" style="font-size: 4rem" />
        </div>
        <InfoRowComponent label="Username" :value="user.data?.username" />
        <info-row-component-with-button label="Full Name" :value="user.data?.fullName" @edit="toggleFullNameModal"/>
        <info-row-component-with-button label="Email" :value="user.data?.email" @edit="toggleEmailModal"/>
        <info-row-component-with-button label="Password" value="**********" @edit="togglePasswordModal"/>
      </div>
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
import ProfilePicture from '@/components/icons/ProfilePicture.vue'
import PageWrapper from '@/components/layout/PageWrapper.vue'
import { useUser } from '@/stores/user.ts'
import { ref } from 'vue'
import { UserControllerService } from '@/lib/api/services/UserControllerService.ts';
import toaster from '@/stores/toaster.ts'
import InfoRowComponent from '@/components/data/InfoRowComponent.vue'
import ChangeEmailModal from '@/components/data/ChangeEmailModal.vue'
import ChangeFullNameModal from '@/components/data/ChangeFullNameModal.vue'
import ChangePasswordModal from '@/components/data/ChangePasswordModal.vue'
import InfoRowComponentWithButton from '@/components/data/InfoRowComponentWithButton.vue'

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
  }
}
</style>
