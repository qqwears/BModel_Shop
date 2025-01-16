<template>
    <div class="product-page">
      <h1>{{ product.name }}</h1>
      <img :src="'/images/' + product.image" alt="Product image" />
      <p>Price: ${{ product.price }}</p>
      <p>{{ product.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductPage',
    data() {
      return {
        product: null
      };
    },
    created() {
      const productId = this.$route.params.id;
      const productSlug = this.$route.params.slug;
      this.fetchProduct(productId, productSlug);
    },
    methods: {
      fetchProduct(productId, productSlug) {
        const products = [
          {
            id: 1,
            name: '3D Model A',
            slug: '3d-model-a',
            price: 25,
            image: 'product1.jpg',
            description: 'Detailed 3D model for animation.'
          },
          {
            id: 2,
            name: '3D Model B',
            slug: '3d-model-b',
            price: 40,
            image: 'product2.jpg',
            description: '3D model for game design.'
          },
          {
            id: 3,
            name: '3D Model C',
            slug: '3d-model-c',
            price: 60,
            image: 'product3.jpg',
            description: 'High-poly 3D model for CGI.'
          }
        ];
  
        this.product = products.find(p => p.id === parseInt(productId) && p.slug === productSlug);
      }
    }
  };
  </script>
  
  <style scoped>
  .product-page {
    text-align: center;
  }
  
  .product-page img {
    max-width: 100%;
    height: auto;
  }
  
  .product-page p {
    font-size: 1.2em;
  }
  </style>
  