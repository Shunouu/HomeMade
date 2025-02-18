<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import { useMainStore } from './store';

export default {
  name: 'App',
  components: {
    Navbar
  },
  setup() {
    const store = useMainStore();

    // Restaurer l'utilisateur depuis le localStorage
    if (localStorage.getItem('user')) {
      store.setUser(JSON.parse(localStorage.getItem('user')));
    }

    return {};
  }
}
</script>

<style>
/* Ajoutez vos styles globaux ici */
</style>