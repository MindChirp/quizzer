<template>
    <h1>Register</h1>

    <Formkit type="form" @submit="registerUser">
      <Formkit
        type="text"
        name="name"
        id="name"
        v-model="user.fullName"
        validation="required"
        label="Full Name"
        placeholder="Steve Craft"
        />

      <Formkit
          type="username"
          name="username"
          id="username"
          v-model="user.username"
          validation="required"
          label="Username"
          placeholder="SteveCraft123"
      />

      <Formkit
          type="mail"
          name="email"
          id="email"
          v-model="user.email"
          validation="required"
          label="Email"
          placeholder="SteveCraft@mail.com"
      />

      <Formkit
          type="password"
          name="password"
          id="password"
          v-model="user.password"
          validation="required"
          label="Password"
      />
    </Formkit>

</template>

<script>
import axios from 'axios';

import ButtonComponent from '../input/ButtonComponent.vue'



export default {

  components: {
    ButtonComponent
  },

  data() {
    return {
      user: {
        username: '',
        fullName: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    registerUser() {
      axios.post('http://localhost:8080/api/users/register', this.user)
          .then(response => {
            console.log("User registered: " + response);
          })
          .catch(error => {
            console.log("There was an error: " + error);
          })
    },
  }
}
</script>

<style scoped>

</style>
