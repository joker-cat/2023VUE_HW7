import { createRouter, createWebHashHistory } from 'vue-router'
import IndexPage from '../views/IndexPage.vue'
import Products from '../components/Products.vue'
import ShowProduct from '../components/ShowProduct.vue'
import CartProduct from '../components/CartProduct.vue'
import AdminBackend from '../views/AdminBackend.vue'



const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: IndexPage,
      children: [
        {
          path: 'products',
          component: Products,
        },
        {
          path: 'cart',
          component: CartProduct,
        },
        {
          path: 'products/:id',
          component: ShowProduct,
        }]
    },
    {
      path: '/login',
      component: () => import('../views/Loginbackend.vue')
    },
    {
      path: '/admin',
      component: AdminBackend,
      children: [
        // {
        //   path: '',
        //   component: Products,
        // },
        // {
        //   path: 'products/:id',
        //   component: ShowProduct,
        // }
      ]
    }
    // {
    //   path: '/about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
