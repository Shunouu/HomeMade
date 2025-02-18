<template>
  <div class="chef-detail" v-if="chef">
    <h1>{{ chef.name }}</h1>
    <h2>Spécialités : {{ chef.specialties.join(', ') }}</h2>
    <div class="dish-cards">
      <DishCard
        v-for="dish in chef.dishes"
        :key="dish.id"
        :dish="dish"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import DishCard from '@/components/DishCard.vue';

export default {
  name: 'ChefDetailPage',
  components: {
    DishCard
  },
  setup() {
    const route = useRoute();
    const chef = ref(null);

    const fetchChefDetails = async () => {
  const chefs = [
    { 
      id: 1, 
      name: 'Chef Mbala', 
      specialties: ['Congolais', 'Africain'], 
      dishes: [
        { id: 1, name: 'Poulet Moambe', description: 'Poulet mijoté avec une sauce tomate épicée et de l\'huile de palme.', image: '/Image/poulet_moambe.jpg' },
        { id: 2, name: 'Saka Saka', description: 'Plat à base de manioc pilé avec des légumes et de la viande.', image: '/Image/saka_saka.jpg' },
        { id: 3, name: 'Liboké', description: 'Poisson ou viande cuit dans des feuilles de bananier.', image: '/Image/liboke.jpg' },
        { id: 4, name: 'Madesu', description: 'Plat à base de poisson séché avec des légumes en sauce.', image: '/Image/madesu.jpg' },
        { id: 5, name: 'Ndakala', description: 'Plat de légumes et de viande mijoté avec des épices.', image: '/Image/ndakala.jpg' }
      ]
    },
    { 
      id: 2, 
      name: 'Chef Dupont', 
      specialties: ['Français', 'Gastronomie'], 
      dishes: [
        { id: 1, name: 'Ratatouille', description: 'Plat de légumes classique français.', image: '/Image/ratatouille.jpg' },
        { id: 2, name: 'Coq au Vin', description: 'Poulet mijoté dans du vin rouge avec des légumes.', image: '/Image/coq_au_vin.jpg' },
        { id: 3, name: 'Boeuf Bourguignon', description: 'Bœuf cuit lentement dans du vin rouge avec des légumes.', image: '/Image/boeuf_bourguignon.jpg' },
        { id: 4, name: 'Tarte Tatin', description: 'Tarte aux pommes renversée caramélisée.', image: '/Image/tarte_tatin.jpg' },
        { id: 5, name: 'Soupe à l\'Oignon', description: 'Soupe à base d\'oignons caramélisés, gratinée au fromage.', image: '/Image/soupe_oignon.jpg' }
      ]
    },
    { 
      id: 3, 
      name: 'Chef Rossi', 
      specialties: ['Italien', 'Méditerranéen'], 
      dishes: [
        { id: 1, name: 'Spaghetti Carbonara', description: 'Pâtes avec une sauce crémeuse à base de pancetta et d\'œufs.', image: '/Image/spaghetti_carbonara.jpg' },
        { id: 2, name: 'Pizza Margherita', description: 'Pizza traditionnelle avec tomate, mozzarella et basilic.', image: '/Image/pizza_margherita.jpg' },
        { id: 3, name: 'Lasagne', description: 'Pâtes en couches avec de la viande, du fromage et de la sauce tomate.', image: '/Image/lasagne.jpg' },
        { id: 4, name: 'Ravioli', description: 'Pâtes farcies aux épinards et ricotta, servies avec une sauce tomate.', image: '/Image/ravioli.jpg' },
        { id: 5, name: 'Risotto', description: 'Riz crémeux avec des champignons et du parmesan.', image: '/Image/risotto.jpg' }
      ]
    },
    { 
      id: 4, 
      name: 'Chef Ivanov', 
      specialties: ['Russe', 'Traditionnel'], 
      dishes: [
        { id: 1, name: 'Borscht', description: 'Soupe traditionnelle à base de betteraves et de légumes.', image: '/Image/borscht.jpg' },
        { id: 2, name: 'Pelmeni', description: 'Raviolis russes farcis à la viande, servis avec de la crème aigre.', image: '/Image/pelmeni.jpg' },
        { id: 3, name: 'Blini', description: 'Crêpes russes servies avec de la crème aigre et du caviar.', image: '/Image/blini.jpg' },
        { id: 4, name: 'Shashlik', description: 'Brochettes de viande marinées, cuites au barbecue.', image: '/Image/shashlik.jpg' },
        { id: 5, name: 'Pirozhki', description: 'Petits pains farcis de viande ou de légumes.', image: '/Image/pirojki.jpg' }
      ]
    },
    { 
      id: 5, 
      name: 'Chef García', 
      specialties: ['Espagnol', 'Tapas'], 
      dishes: [
        { id: 1, name: 'Paella', description: 'Plat à base de riz, fruits de mer et légumes, typique de la région de Valence.', image: '/Image/paella.jpg' },
        { id: 2, name: 'Tortilla Española', description: 'Omelette espagnole à base de pommes de terre et d\'œufs.', image: '/Image/tortilla_espanola.jpg' },
        { id: 3, name: 'Gazpacho', description: 'Soupe froide à base de tomates, concombre, poivrons et ail.', image: '/Image/gazpacho.jpg' },
        { id: 4, name: 'Patatas Bravas', description: 'Pommes de terre frites accompagnées de sauce tomate épicée.', image: '/Image/patatas_bravas.jpg' },
        { id: 5, name: 'Churros', description: 'Pâtisserie espagnole frite, souvent servie avec du chocolat chaud.', image: '/Image/churros.jpg' }
      ]
    }
  ];
  chef.value = chefs.find(c => c.id === parseInt(route.params.id));
};

    onMounted(fetchChefDetails);

    return {
      chef
    };
  }
};
</script>