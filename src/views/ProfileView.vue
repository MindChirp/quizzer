<template>
  <PageWrapper>
    <ProfileModal :open="openFullName" @close="toggleFullNameModal" title="Change full name">
      <FormKit type="form" @submit="updateFullName" submit-label="Change name">
        <FormKit v-model="newFullName" validation="required|length:3" type="text" label="New full name" class="input" />
      </FormKit>
    </ProfileModal>

    <ProfileModal :open="openEmail" @close="toggleEmailModal" title="Change email" @save="updateEmail">
      <FormKit type="form" @submit="updateEmail" submit-label="Change email">
        <FormKit v-model="newEmail" validation="required|length:3" type="email" label="New full email" class="input" />
      </FormKit>
    </ProfileModal>

    <ProfileModal :open="openPassword" @close="togglePasswordModal" title="Change password" @save="updatePassword">
      <FormKit type="form" @submit="updatePassword" submit-label="Change password">
        <FormKit v-model="newPassword" validation="required|length:3" type="password" label="New password" class="input" />
        <FormKit v-model="confirmPassword" validation="required|length:3" type="password" label="Confirm new password" class="input" />
      </FormKit>
    </ProfileModal>

    <div class="container">
      <div class="profile">
        <div class="profile-picture">
          <ProfilePicture disable-hover :full-name="user.data?.fullName" style="font-size: 4rem" />
        </div>
        <InfoRowComponent label="Username" :value="user.data?.username"/>
        <InfoRowComponent label="Full Name" :value="user.data?.fullName" @edit="toggleFullNameModal"/>
        <InfoRowComponent label="Email" :value="user.data?.email" @edit="toggleEmailModal"/>
        <InfoRowComponent label="Password" value="**********" @edit="togglePasswordModal"/>
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
import ProfileModal from '@/components/data/ProfileModal.vue'
import InfoRowComponent from '@/components/data/InfoRowComponent.vue'
import { FormKit } from '@formkit/vue'

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

const updateFullName = async () => {
  openFullName.value = false;

  const requestBody = {
    fullName: newFullName.value,
  };
  try {
    const response = await UserControllerService.updateUserFullName(user.data?.username as string, requestBody);
    console.log(response);
    user.get({
      username: userId
    })
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
    const response = await UserControllerService.updateUserEmail(user.data?.username as string, requestBody);
    console.log(response);
    user.get({
      username: userId
    })
  } catch (error) {
    console.error("Failed to update user's email:", error);
  }
};

const updatePassword = async () =>
  {

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
      await UserControllerService.updateUserPassword(user.data?.username as string, requestBody)
    } catch (error) {
      console.error("Failed to update user's password:", error);
    }
  }
;

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
