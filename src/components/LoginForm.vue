<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="credentials.email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="credentials.password" required>
      </div>
      <Button variant="primary" size="medium" type="submit">Login</Button>
    </form>
  </div>
</template>


<script>


export default {
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      // TODO: Fiks log-in logic her
      console.log("Login info:", this.credentials);
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
}

button {
  width: 100%;
  padding: 0.5rem;
  background-color: #0c66e4;
  border: none;
  color: white;
}

</style>
