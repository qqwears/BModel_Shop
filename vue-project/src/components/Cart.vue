<template>
    <div class="cart">
        <h2>Shopping Cart</h2>
        <ul v-if="cartItems.length" class="cart-items">
            <li v-for="item in cartItems" :key="item.id" class="cart-item">
                <div class="item-details">
                    <img :src="'/images/' + item.image" :alt="item.name" class="item-image">
                    <div class="item-info">
                        <span class="item-name">{{ item.name }}</span>
                        <span class="item-price">${{ item.price }}</span>
                    </div>
                </div>
                <div class="quantity-controls">
                    <button @click="updateQuantity(item.id, 'decrease')" class="quantity-btn">-</button>
                    <span class="quantity">{{ item.quantity }}</span>
                    <button @click="updateQuantity(item.id, 'increase')" class="quantity-btn">+</button>
                </div>
                <button @click="removeItem(item.id)" class="remove-btn">Remove</button>
            </li>
        </ul>
        <p v-else>Your cart is empty</p>
        <p class="total-price">Total: ${{ totalPrice }}</p>
        <button v-if="cartItems.length" @click="checkout" class="checkout-btn">Checkout</button>
    </div>
</template>

<script>
import { useCartStore } from '@/stores/cart'

export default {
    computed: {
        cartItems() {
            const cartStore = useCartStore()
            return cartStore.cartItems
        },
        totalPrice() {
            const cartStore = useCartStore()
            return cartStore.totalPrice
        }
    },
    methods: {
        removeItem(id) {
            const cartStore = useCartStore()
            cartStore.removeItem(id)
        },
        updateQuantity(id, action) {
            const cartStore = useCartStore()
            if (action === 'increase') {
                cartStore.increaseQuantity(id)
            } else if (action === 'decrease') {
                cartStore.decreaseQuantity(id)
            }
        },
        checkout() {
            alert('Proceeding to checkout')
            // Logic for checkout (e.g., send data to server, clear cart, etc.)
        }
    }
}
</script>

<style scoped>
.cart {
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
}

h2 {
    text-align: center;
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
}

.cart-items {
    list-style-type: none;
    padding: 0;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 15px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
}

.cart-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
}

.item-details {
    display: flex;
    align-items: center;
    gap: 15px;
}

.item-image {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 5px;
}

.item-info {
    display: flex;
    flex-direction: column;
}

.item-name {
    font-size: 16px;
    font-weight: bold;
    color: #333;
}

.item-price {
    font-size: 14px;
    color: #777;
}

.quantity-controls {
    display: flex;
    align-items: center;
    gap: 10px;
}

.quantity-btn {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.quantity-btn:hover {
    background-color: #45a049;
}

.quantity {
    font-size: 16px;
    font-weight: bold;
    color: #333;
}

.remove-btn {
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.remove-btn:hover {
    background-color: #c0392b;
}

.total-price {
    text-align: right;
    font-size: 18px;
    color: #333;
    margin-top: 20px;
}

.checkout-btn {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    margin-top: 20px;
}

.checkout-btn:hover {
    background-color: #2980b9;
}
</style>
