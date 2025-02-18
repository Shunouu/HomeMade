<template>
  <div class="signup-page">
    <h1>S'inscrire</h1>
    <form @submit.prevent="signup">
      <input type="text" v-model="username" placeholder="Username" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
    <p v-if="emailExists" style="color: red;">Cet email existe déjà</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useMainStore } from '../store';
import { useRouter } from 'vue-router';

export default {
  name: 'SignupPage',
  setup() {
    const store = useMainStore();
    const router = useRouter();
    const username = ref('');
    const email = ref('');
    const password = ref('');
    const emailExists = ref(false); // Variable pour contrôler l'erreur d'email

    const signup = () => {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      // Vérifier si l'email existe déjà
      const emailAlreadyExists = users.some(user => user.email === email.value);

      if (emailAlreadyExists) {
        emailExists.value = true;
      } else {
        if (username.value && email.value && password.value) {
          users.push({ username: username.value, email: email.value, password: password.value });
          localStorage.setItem('users', JSON.stringify(users));
          store.setUser({ username: username.value, email: email.value, password: password.value });
          // Redirection après l'inscription
          router.push('/');
        } else {
          alert('Please fill in all fields');
        }
      }
    };

    return {
      username,
      email,
      password,
      emailExists,
      signup,
    };
  },
};
</script>

<style scoped>
.signup-page {
  text-align: center;
  padding: 20px;
}

input {
  display: block;
  margin: 10px auto;
  padding: 10px;
  width: 80%;
  max-width: 300px;
}

button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #369f6b;
}
</style>