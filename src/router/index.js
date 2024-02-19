import { createRouter, createWebHashHistory } from 'vue-router'
import IndexPage from '../views/IndexPage.vue'
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
          component: () => import('../components/Products.vue')
        },
        {
          path: 'cart',
          component: () => import('../components/CartProduct.vue')
        },
        {
          path: 'products/:id',
          component: () => import('../components/ShowProduct.vue')
        },
        {
          path: '/article',
          component: () => import('../components/ArticleList.vue')
        }
      ]
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
