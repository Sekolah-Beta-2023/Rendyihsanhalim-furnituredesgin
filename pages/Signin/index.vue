<template>
  <div class="login-container">
    <div class="login-box">
      <h2 class="login-title">Welcome Back!</h2>
      <form v-if="!verificationMessage" class="login-form" @submit.prevent="signup">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" class="form-input" v-model="username" placeholder="Your username" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" class="form-input" v-model="email" placeholder="Your email" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" class="form-input" v-model="password" placeholder="Your password" required>
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" class="form-input" v-model="confirmPassword" placeholder="Confirm password" required>
        </div>
        <button type="submit" class="submit-button">Register</button>
      </form>
      <p v-if="verificationMessage">{{ verificationMessage }}</p>
      <p v-if="!verificationMessage">
        Already have an account? <router-link to="Signin/LoginPage">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import httpClient from '~/utils/httpClient';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      verificationMessage: '',
      error: null,
    };
  },
  methods: {
    async signup() {
      if (this.password !== this.confirmPassword) {
        this.error = 'Passwords do not match.';
        return;
      }

      try {
        const response = await httpClient('/auth/v1/signup', 'POST', {
          username: this.username,
          email: this.email,
          password: this.password,
        });

        // Proses respons dari server sesuai kebutuhan
        const responseData = await response.json();
        console.log(responseData);

        // Menetapkan pesan verifikasi yang akan ditampilkan di UI
        this.verificationMessage = 'We have sent an email for verification. Please check your inbox.';

        // Mungkin Anda ingin mengarahkan pengguna ke halaman login setelah pendaftaran berhasil
        // this.$router.push('/login');
      } catch (error) {
        console.error(error);
        this.error = 'Registration failed. Please try again.';
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
    background: #f0f0f0; /* Warna latar belakang abu-abu */
    font-family: "Poppins", sans-serif;
    padding-top:3rem;
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
    font-family: "Poppins", sans-serif; /* Font family Poppins */
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
    font-family: "Poppins", sans-serif; /* Font family Poppins */
    box-sizing: border-box;
  }
  
  .submit-button {
    width: 100%;
    padding: 15px;
    background-color: #555; /* Warna tombol abu-abu tua */
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 16px;
    font-family: "Poppins";
  }
  
  .submit-button:hover {
    background-color: #333; /* Warna tombol abu-abu lebih gelap saat dihover */
  }
  </style>