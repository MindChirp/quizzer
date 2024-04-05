<template>
  <PageWrapper>
    <div class="container">
      <div class="profile">
        <div class="profile-picture">
          <ProfilePicture disable-hover :full-name="user.data?.fullName" style="font-size: 4rem" >
          </ProfilePicture>
        </div>
        <div class="info-row">
          <span class="label">Username:</span>
          <span class="value">{{ user.data?.username }}</span>
          <span class="button" @click="logTest"> ···· </span>
        </div>
        <div class="info-row">
          <span class="label">Full Name:</span>
          <span class="value">{{ user.data?.fullName }}</span>
          <span class="button" @click="logTest"> ···· </span>
        </div>
        <div class="info-row">
          <span class="label">Email:</span>
          <span class="value">{{ user.data?.email }}</span>
          <span class="button" @click="logTest"> ···· </span>
        </div>
        <div class="info-row">
          <span class="label">Password:</span>
          <span class="value">**********</span>
          <span class="button" @click="logTest"> ···· </span>
        </div>
      </div>
    </div>
  </PageWrapper>
</template>


<script setup lang="ts">
import ProfilePicture from '@/components/icons/ProfilePicture.vue'
import PageWrapper from '@/components/layout/PageWrapper.vue'
import { useUser } from '@/stores/user.ts'

const user = useUser();
// Get the user id from token
const userId = localStorage.getItem("username") ?? "";
user.get({username: userId})

const logTest = () => {
  console.log('test');
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


.button {
  margin-left: 0.5rem;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
}

.button:hover {
  border: 1px solid grey;
  border-radius: 20px;
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
