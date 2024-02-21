import { createRouter, createWebHashHistory } from 'vue-router'
import IndexPage from '../views/IndexPage.vue'
import AdminBackend from '../views/AdminBackend.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: IndexPage,
      redirect: '/products',
      children: [
        {
          path: 'products',
          component: () => import('../components/ProductList.vue')
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
      redirect: '/admin/products',
      children: [
        {
          path: 'products',
          component: () => import('../components/backendPage/AdminProducts.vue')
        },
        {
          path: 'orders',
          component: () => import('../components/backendPage/AdminOrders.vue')
        },
        {
          path: 'coupons',
          component: () => import('../components/backendPage/AdminCoupons.vue')
        },
        {
          path: 'articles',
          component: () => import('../components/backendPage/AdminArticles.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    },
    {
      path: '/admin/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router
