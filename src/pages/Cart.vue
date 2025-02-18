<template>
    <div class="cart">
      <h1>Votre Panier</h1>
      <ul>
        <li v-for="(dish, index) in cart" :key="index">
          <img :src="dish.image" alt="Image du plat" class="dish-image" />
          <div class="dish-info">
            <h3>{{ dish.name }}</h3>
            <p>{{ dish.description }}</p>
            <button @click="removeFromCart(index)" class="btn">Retirer</button>
          </div>
        </li>
      </ul>
      <button @click="clearCart" class="clear-cart-btn">Vider le panier</button>
    </div>
  </template>
  
  <script>
  import { useMainStore } from '../store';
  import { computed } from 'vue';
  
  export default {
    name: 'Cart',
    setup() {
      const store = useMainStore();
      const cart = computed(() => store.cart);
  
      const removeFromCart = (index) => {
        store.removeFromCart(index);
      };
  
      const clearCart = () => {
        store.clearCart();
      };
  
      return {
        cart,
        removeFromCart,
        clearCart,
      };
    },
  };
  </script>