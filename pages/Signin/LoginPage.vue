<template>
  <div class="login-container">
    <div class="login-box">
      <h2 class="login-title">Welcome Back!</h2>
      <form class="login-form" @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" class="form-input" v-model="email" placeholder="Your email" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" class="form-input" v-model="password" placeholder="Your password" required>
        </div>
        <button type="submit" class="submit-button">Login</button>
      </form>
      <p>Don't have an account? <nuxt-link to="/Signin">Register</nuxt-link></p>
    </div>
  </div>
</template>
  
<script>
import { supabase } from '~/utils/supabase';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const { user, error } = await supabase.auth.signInWithPassword({
          email: this.email,
          password: this.password
        });

        if (error) {
          console.error('Login error:', error.message);
        } else {
          console.log('Login successful:', user);
          this.$router.push("/Product");
          // Redirect or perform additional actions after successful login
        }
      } catch (error) {
        console.error('Login failed:', error.message);
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f0f0;
  /* Warna latar belakang abu-abu */
  font-family: "Poppins", sans-serif;
}

.login-box {
  width: 400px;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  text-align: center;
}

.login-title {
  font-family: "Poppins", sans-serif;
  /* Font family Poppins */
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  margin-bottom: 20px;
  width: 100%;
}

label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
  text-align: left;
  width: 100%;
}

.form-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  color: #444;
  font-family: "Poppins", sans-serif;
  /* Font family Poppins */
  box-sizing: border-box;
}

.submit-button {
  width: 100%;
  padding: 15px;
  background-color: #555;
  /* Warna tombol abu-abu tua */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 16px;
  font-family: "Poppins";
}

.submit-button:hover {
  background-color: #333;
  /* Warna tombol abu-abu lebih gelap saat dihover */
}

p {
  margin-top: 20px;
  font-size: 14px;
  color: #555;
}

a {
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
}

a:hover {
  text-decoration: underline;
}
</style>

  