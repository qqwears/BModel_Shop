import { createRouter, createWebHistory, } from 'vue-router'
import sourceData from '../data.json'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/order',
      name: 'Order',
      component: () => import('../views/Order.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/article',
      name: 'Article',
      component: () => import('../views/Article.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/ProductPage.vue'),
      props: true,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../components/Cart.vue'),
    },
    {
      path: '/destination/:id/:slug',
      name: 'destination.show',
      component: () => import('../views/DestinationShow.vue'),
      props: route => ({
        ...route.params,
        id: parseInt(route.params.id)
      }),
      beforeEnter(to) {
        const exists = sourceData.destinations.find(
          destination => destination.id === parseInt(to.params.id)
        )
        if (!exists) return {
          name: 'NotFound',
          params: { pathMatch: to.path.split('/').slice(1) },
          query: to.query,
          hash: to.hash,
        }
      },
      children: [{
        path: ':experienceSlug',
        name: 'experience.show',
        component: () => import('../views/ExperienceShow.vue'),
        props: route => ({
          ...route.params,
          id: parseInt(route.params.id)
        })
      }]
    },

  ],
  scrollBehavior(savedPosition) {
    return savedPosition || new Promise((resolve) => {
      setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 300)
    })
  },
  linkActiveClass: 'vue-active-link'
})

export default router
