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
    myCart: [],
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
    filterCategory: ({ products, category }) => {
      const filterArray = products.filter((i) => i.category === category)
      return filterArray
    }
  },
  actions: {
    axiosGetProducts(page = 1, category = '') {
      axios
        .get(`${this.baseUrl}/products/?page=${page}&category=${category}`)
        .then((res) => {
          const addAttribute = res.data.products.map((i) => (i = { ...i, ispressed: false }))
          this.myCart.map((icart) => {
            const icartId = icart.id
            const getidx = addAttribute.findIndex((i) => icartId === i.id)
            if (getidx !== -1) {
              addAttribute[getidx]['ispressed'] = true
            }
          })
          this.products = addAttribute
          this.pagination = res.data.pagination
          this.frontPage = page
        })
        .catch((err) => console.log(err))
    },
    addToCart(productId, count = 1) {
      const hasInCart = this.myCart.filter((iproduct) => iproduct.id === productId).length
      if (hasInCart) {
        const findIdx = this.myCart.findIndex((iMycart) => iMycart.id === productId)
        this.myCart[findIdx]['count'] = count + 1
        this.toastAnimation('數量成功修改')
      } else {
        const findIdx = this.products.findIndex((iproduct) => iproduct.id === productId)
        this.myCart.push({ ...this.products[findIdx], count })
        this.toastAnimation('成功加入購物車')
      }
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
