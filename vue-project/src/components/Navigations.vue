<template>
  <header>
    <nav id="nav">
      <router-link id="logo" to="/">BModels</router-link>
      <router-link to="/order">Order</router-link>
      <router-link to="/article">Article</router-link>
      <router-link to="/contact">Contact</router-link>

      <!-- Добавляем ссылку на корзину -->
      <router-link to="/cart">
        Cart ({{ cartCount }}) <!-- Количество товаров в корзине -->
      </router-link>
    </nav>
  </header>
</template>

<script>
// Импортируем store для корзины
import { useCartStore } from '@/stores/cart';

export default {
  setup() {
    // Получаем доступ к состоянию корзины
    const cartStore = useCartStore();

    // Возвращаем количество товаров в корзине
    return {
      cartCount: cartStore.cartCount
    };
  }
};
</script>

<style lang="css">
#nav .vue-active-link {
  color: darkgrey;
}
</style>
