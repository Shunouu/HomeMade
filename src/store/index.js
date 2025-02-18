import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    cart: JSON.parse(localStorage.getItem('cart')) || [],
  }),
  actions: {
    setUser(user) {
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    logout() {
      this.user = null;
      this.cart = [];
      localStorage.removeItem('user');
      localStorage.removeItem('cart');
    },
    addToCart(dish) {
      this.cart.push(dish);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    clearCart() {
      this.cart = [];
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  },
});