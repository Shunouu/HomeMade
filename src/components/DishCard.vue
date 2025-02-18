
<template>
  <div class="dish-card">
    <img :src="dish.image" alt="Image du plat" class="dish-image" />
    <div class="dish-info">
      <h3>{{ dish.name }}</h3>
      <p>{{ dish.description }}</p>
      <button @click="handleAddToCart" class="btn">Ajouter au panier</button>
    </div>
    <Modal :message="modalMessage" :visible="isModalVisible" @close="isModalVisible = false" />
  </div>
</template>

<script>
import { ref } from 'vue';
import { useMainStore } from '../store';
import Modal from './Modal.vue';

export default {
  name: 'DishCard',
  components: {
    Modal
  },
  props: {
    dish: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const store = useMainStore();
    const isModalVisible = ref(false);
    const modalMessage = ref('');

    const handleAddToCart = () => {
      if (!store.user) {
        modalMessage.value = 'Veuillez vous connecter pour pouvoir ajouter des plats.';
        isModalVisible.value = true;
        return;
      }

      const existingDish = store.cart.find(item => item.id === props.dish.id);
      if (existingDish) {
        modalMessage.value = 'Ce plat est déjà dans votre panier.';
      } else {
        store.addToCart(props.dish);
        modalMessage.value = 'Plat ajouté au panier.';
      }
      isModalVisible.value = true;
    };

    return {
      handleAddToCart,
      isModalVisible,
      modalMessage
    };
  }
};
</script>

<style scoped>
.dish-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 200px;
  margin: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.dish-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.dish-info {
  padding: 10px;
}

.dish-info h3 {
  margin: 0;
  font-size: 1.2em;
}

.dish-info p {
  margin: 5px 0 0;
  color: #666;
}

.btn {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn:hover {
  background-color: white;
  border: 2px solid;
  color: #42b983;
  text-align: center;
}

.btn:active {
  opacity: 0.5;
}
</style>