<template>
  <div class="login-page">
    <h1>Connexion</h1>
    <form @submit.prevent="login">
      <input type="text" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useMainStore } from '../store';
import { useRouter } from 'vue-router';

export default {
  name: 'LoginPage',
  setup() {
    const store = useMainStore();
    const router = useRouter();
    const email = ref('');
    const password = ref('');

    const login = () => {
      if (email.value && password.value) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        console.log("Utilisateurs stockés :", users); // Debugging

        const user = users.find(user => user.email === email.value && user.password === password.value);
        if (user) {
          store.setUser(user);
          router.push('/');
        } else {
          alert('Email ou mot de passe incorrect.');
        }
      } else {
        alert('Veuillez entrer un email et un mot de passe.');
      }
    };

    return {
      email,
      password,
      login,
    };
  },
};
</script>

<style scoped>
.login-page {
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