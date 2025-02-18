import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ChefsListPage from '../pages/ChefsListPage.vue';
import ChefDetailPage from '../pages/ChefDetailPage.vue';
import SignupPage from '../pages/SignupPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import Cart from '../pages/Cart.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/chefs',
    name: 'ChefsList',
    component: ChefsListPage
  },
  {
    path: '/chefs/:id',
    name: 'ChefDetail',
    component: ChefDetailPage,
    props: true
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;