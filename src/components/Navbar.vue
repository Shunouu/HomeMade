<template>
  <nav class="navbar">
    <router-link to="/" class="logo">Home</router-link>
    <div class="nav-links">
      <router-link to="/chefs">Chefs</router-link>
      <router-link v-if="!user" to="/signup">S'inscrire</router-link>
      <router-link v-if="!user" to="/login">Connexion</router-link>
      <router-link v-if="user" to="/cart">Panier</router-link>
      <div v-if="user" class="user-menu">
        <span>Welcome, {{ user.username }}</span>
        <button @click="logout" class="btn">Déconnection</button>
      </div>
    </div>
  </nav>
</template>

<script>
import { useMainStore } from '../store';
import { computed } from 'vue';

export default {
  name: 'Navbar',
  setup() {
    const store = useMainStore();
    const user = computed(() => store.user);

    const logout = () => {
      store.logout();
    };

    return {
      user,
      logout,
    };
  },
};
</script>