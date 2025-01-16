// src/stores/cart.js

import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || []
  }),
  actions: {
    addItem(item) {
      const existingItem = this.cartItems.find(i => i.id === item.id)
      if (existingItem) {
        // Увеличиваем количество, если товар уже есть в корзине
        existingItem.quantity++
      } else {
        // Добавляем новый товар в корзину с количеством 1
        this.cartItems.push({ ...item, quantity: 1 })
      }
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    },
    removeItem(id) {
      this.cartItems = this.cartItems.filter(item => item.id !== id)
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    },
    increaseQuantity(id) {
      const item = this.cartItems.find(item => item.id === id)
      if (item) {
        item.quantity++
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
      }
    },
    decreaseQuantity(id) {
      const item = this.cartItems.find(item => item.id === id)
      if (item && item.quantity > 1) {
        item.quantity--
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
      }
    }
  },
  getters: {
    totalPrice: (state) => {
      return state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
    }
  }
})
