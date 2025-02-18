<template>
  <div class="home-page">
    <h1>Bienvenue sur notre site HomeMade</h1>
    <p>On vous propose des plats faits maison avec amour</p>
    <router-link to="/chefs" class="btn">Voir les Chefs</router-link>
    <footer />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useMainStore } from '../store';
import Footer from '../components/Footer.vue';

export default {
  name: 'HomePage',
  components: {
    Footer
  },
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
  mounted() {
    // Hook for lifecycle management
    console.log('HomePage component mounted');
  }
}
</script>

<style scoped>
.home-page {
  text-align: center;
  padding: 200px;
}

h1 {
  color: white;
}

.btn {
  margin: 10px;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.user-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-menu span {
  margin-right: 10px;
}

.user-menu button {
  background: none;
  border: none;
  color: #42b983;
  cursor: pointer;
  text-decoration: underline;
}
</style>