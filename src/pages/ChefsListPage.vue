<template>
  <div class="chefs-list">
    <h1>Liste des Chefs</h1>
    <div class="chef-cards">
      <ChefCard
        v-for="chef in chefs"
        :key="chef.id"
        :chef="chef"
        @view-detail="goToChefDetail"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import ChefCard from '../components/ChefCard.vue';

export default {
  components: {
    ChefCard,
  },
  setup() {
    const chefs = ref([]);
    const router = useRouter();

    const fetchChefs = async () => {
  chefs.value = [
    { id: 1, name: 'Chef Mbala', image: '/Image/chef1.jpg', specialties: ['Congolais', 'Africain'] },
    { id: 2, name: 'Chef Dupont', image: '/Image/chef2.jpg', specialties: ['Français', 'Gastronomie'] },
    { id: 3, name: 'Chef Rossi', image: '/Image/chef3.jpg', specialties: ['Italien', 'Méditerranéen'] },
    { id: 4, name: 'Chef Ivanov', image: '/Image/chef4.jpg', specialties: ['Russe', 'Traditionnel'] },
    { id: 5, name: 'Chef García', image: '/Image/chef5.jpg', specialties: ['Espagnol', 'Tapas'] },
  ];
};

    const goToChefDetail = (id) => {
      router.push({ name: 'ChefDetail', params: { id } });
    };

    onMounted(fetchChefs);

    return {
      chefs,
      goToChefDetail,
    };
  },
};
</script>