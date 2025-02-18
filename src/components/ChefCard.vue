
<template>
  <div class="chef-card">
    <img :src="chef.image" alt="Image du chef" class="chef-image" />
    <div class="chef-info">
      <h3>{{ chef.name }}</h3>
      <p>Spécialités : {{ chef.specialties.join(', ') }}</p>
      <button @click="$emit('view-detail', chef.id)" class="view-detail-btn">Voir les plats</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChefCard',
  props: {
    chef: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.chef-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 200px;
  margin: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.chef-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.chef-info {
  padding: 10px;
}

.chef-info h3 {
  margin: 0;
  font-size: 1.2em;
}

.chef-info p {
  margin: 5px 0 0;
  color: #666;
}

.view-detail-btn {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.view-detail-btn:hover {
  background-color: #369f6b;
}
</style>