<template>
    <div>
        <section class="destination">
            <h1>{{ destination.name }}</h1>
            <div class="destination-details">
                <img :src="`/images/${destination.image}`" :alt="destination.name">
                <p>{{ destination.description }}</p>
            </div>
            <h3>Price: ${{ destination.price }}</h3>
            <button @click="addToCart(destination)">Add to Cart</button>
            <GoBack />
        </section>
        <section class="experiences">
            <h2>Top Experiences in {{ destination.name }}</h2>
            <div class="cards">
                <router-link v-for="experience in destination.experiences" :key="experience.slug"
                    :to="{ name: 'experience.show', params: { experienceSlug: experience.slug } }">
                    <ExperienceCard :experience="experience" />
                </router-link>
            </div>
            <router-view />
        </section>
    </div>
</template>

<script>
import { useCartStore } from '@/stores/cart' // Импортируем Pinia store
import sourceData from '../data.json'
import ExperienceCard from '@/components/ExperienceCard.vue';
import GoBack from '@/components/GoBack.vue';

export default {
    components: { ExperienceCard, GoBack },
    props: {
        id: { type: Number, required: true }
    },
    computed: {
        destination() {
            return sourceData.destinations.find(
                (description) => description.id === this.id)
        }
    },
    methods: {
        addToCart(destination) {
            const cartStore = useCartStore() // Получаем доступ к store корзины
            cartStore.addItem({
                id: destination.id,
                name: destination.name,
                price: destination.price,
                image: destination.image
            })
        }
    }
}
</script>

<style scoped>
button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #45a049;
}
</style>
