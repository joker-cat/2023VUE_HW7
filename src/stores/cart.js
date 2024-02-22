// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'
import axios from 'axios'

//Pinia 是獨立於 Vue 核心的狀態管理函式庫，它並不依賴 Vue 的全域配置
//所以全域宣告的$axios不起作用

export default defineStore('cart', {
  state: () => ({
    // baseUrl: import.meta.env.VITE_PATH,
    baseUrl: 'https://ec-course-api.hexschool.io/v2/api/joooker',
    products: [],
    pagination: [],
    myCart: {},
    category: '',
    loadingStatus: false,
    frontPage: 1
  }),
  getters: {
    getProducts: ({ products }) => {
      return products
    },
    getPagination: ({ pagination }) => {
      return pagination
    },
    getFrontPage({ frontPage }) {
      return frontPage
    },
    getMyCart: ({ myCart }) => {
      return myCart
    },
    getLoadingStatus: ({ loadingStatus }) => {
      return loadingStatus
    },
    getCategory: ({ category }) => {
      return category
    },
    filterCategory: ({ products, category }) => {
      const filterArray = products.filter((i) => i.category === category)
      return filterArray
    }
  },
  actions: {
    axiosGetProducts(page = 1, category = '') {
      this.changeLoadingStatus()
      axios
        .get(`${this.baseUrl}/products/?page=${page}&category=${category}`)
        .then((res) => {
          console.log(res)
          this.category = category
          this.products = res.data.products
          this.pagination = res.data.pagination
          this.frontPage = page
        })
        .catch((err) => console.log(err))
    },
    //要改成購物車放在API，目前已成功加入購物車
    addToCart(productId, count = 1) {
      const hasProduct = this.myCart.carts.findIndex((i) => i.product_id === productId)
      const apiMethods = hasProduct === -1 ? 'post' : 'put'
      console.log(apiMethods)
      axios[apiMethods](
        `${this.baseUrl}/cart/${apiMethods === 'put' ? this.myCart.carts[hasProduct]['id'] : ''}`,
        {
          data: {
            product_id: productId,
            qty: count,
            ispressed: true
          }
        }
      )
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getCart() {
      axios
        .get(`${this.baseUrl}/cart`)
        .then((res) => {
          console.log(res)
          this.myCart = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    removeToProduct(productId) {
      const findMyCartIdx = this.myCart.findIndex((icart) => icart.id === productId)
      this.myCart[findMyCartIdx]['ispressed'] = false
      this.myCart.splice(findMyCartIdx, 1)
      this.toastAnimation('成功移除商品')
    },
    removeAllProduct() {
      this.myCart = []
      this.toastAnimation('成功清空購物車')
    },
    changeLoadingStatus() {
      this.loadingStatus = !this.loadingStatus
    },
    // clearProducts() {
    //   this.products = []
    // },
    // changeCategory(categoryValue) {
    //   this.category = categoryValue === '全部' ? '' : categoryValue
    // },
    toastAnimation(str) {
      toast(str, {
        theme: 'colored',
        type: 'error',
        dangerouslyHTMLString: true
      })
    }
  }
})
