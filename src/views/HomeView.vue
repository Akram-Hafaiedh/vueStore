<template>
  <div>
    <h2>Welcome to our Vue.js E-commerce Store!</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu justo
      id lorem mollis tristique. Integer vitae ultricies neque, ac suscipit
      sapien. Vivamus blandit mauris at ante placerat lacinia. Duis nec magna
      leo. Sed vehicula lacus eget lorem volutpat, in congue leo congue.
    </p>
    <div>
      <h3>Featured Products</h3>
      <!-- Display some featured products here -->
      <!-- Example: -->
      <div v-for="product in featuredProducts" :key="product.id">
        <h4>{{ product.name }}</h4>
        <p>{{ product.description }}</p>
        <p>Price: ${{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      featuredProducts: [
        {
          id: 1,
          name: 'Product 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          price: 19.99
        },
        {
          id: 2,
          name: 'Product 2',
          description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          price: 29.99
        },
        // Add more featured products as needed
      ]
    };
  }
};
</script>

<style>
/* Add your component-specific styles here */
</style>
