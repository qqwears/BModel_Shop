<template>
  <div class="home">
    <div class="hero">
      <h1>Welcome to Our 3D Model Shop</h1>
      <p>Discover high-quality 3D models for your projects, crafted with precision and creativity.</p>
      <router-link to="/order" class="btn">View Your Orders</router-link>
    </div>
    <div class="features">
      <div
        class="feature-card"
        v-for="feature in features"
        :key="feature.title"
        :style="{ backgroundImage: `url('/images/${feature.image}')` }"
      >
        <div class="content">
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          title: 'High-Quality Models',
          description: 'Our models are designed to meet the highest standards of quality.',
          image: 'quality.png', // Add this image to your public/images folder
        },
        {
          title: 'Affordable Prices',
          description: 'Get premium models at prices that fit your budget.',
          image: 'affordable.png', // Add this image to your public/images folder
        },
        {
          title: 'Instant Download',
          description: 'Download your chosen models instantly after purchase.',
          image: 'download.png', // Add this image to your public/images folder
        },
        {
          title: 'Flexible Licensing Options',
          description: 'Choose from a variety of licensing options to fit your needs, whether personal or commercial.',
          image: 'license.png',
        }
      ],
    };
  },
};
</script>

<style scoped>
/* Общий стиль */
.home {
  font-family: 'Arial', sans-serif;
  color: #333;
  text-align: center;
  background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
  padding: 20px;
}

/* Hero Section */
.hero {
  padding: 50px 20px;
  background-image: url('/images/background.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  box-shadow: inset 0 0 2000px rgba(0, 0, 0, 0.5);
  margin-bottom: 40px;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.hero .btn {
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.hero .btn:hover {
  background-color: #0056b3;
}

/* Features Section */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.feature-card {
  position: relative;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  height: 200px;
  display: flex;
  align-items: flex-end;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.feature-card .content {
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 15px;
  text-align: center;
  width: 100%;
}

.feature-card h2 {
  font-size: 1.5rem;
  margin: 0;
}

.feature-card p {
  font-size: 1rem;
  margin: 5px 0 0;
}
</style>
