<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; 2025 HomeMade. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  mounted() {
    console.log('Footer component mounted');
  }
}
</script>

<style scoped>
.footer {
  background-color: #f8f9fa;
  padding: 1rem;
  text-align: center;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
nav ul {
  list-style-type: none;
  padding: 0;
}
nav ul li {
  display: inline;
  margin: 0 15px;
}
</style>