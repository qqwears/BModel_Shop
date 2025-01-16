<template>
    <div class="order-page">
        <h1>Order Page</h1>
        <div class="product-list">
            <router-link v-for="destination in destinations" :key="destination.id"
                :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }" class="product-card">
                <h2>{{ destination.name }}</h2>
                <img :src="'/images/' + destination.image" :alt="destination.name">
                <h3>Price: ${{ destination.price }}</h3>
            </router-link>
        </div>
    </div>
</template>
<script>
import sourceData from '../data.json'
export default {
    data() {
        return {
            destinations: sourceData.destinations,
        }
    },
}
</script>

<style scoped>
.order-page {
  padding: 20px;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* отступы между карточками */
  justify-content: space-between; /* Выравнивание карточек */
}

.product-card {
  width: 30%; /* ширина каждой карточки, чтобы было три в ряд */
  padding: 10px;
  border: 2px solid #ccc; /* обводка */
  border-radius: 10px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.product-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  border-color: #333; /* цвет обводки при наведении */
}

.product-list img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

/* Чтобы при маленьких экранах карточки могли занимать 100% ширины */
@media (max-width: 768px) {
  .product-card {
    width: 100%;
  }
}

</style>