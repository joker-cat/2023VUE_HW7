<template>
  <div class="text-center position-relative">
    <loading class="w-100" v-model:active="getLoadingStatus" backgroundColor="#ff0000" loader="dots" :is-full-page="fullPage" />
    <div class="mb-3" style="height: 650px; overflow: auto;">
      <table class="table align-middle py-4">
        <thead>
          <tr>
            <th style="width: 3%">#</th>
            <th style="width: 15%">圖式</th>
            <th style="width: 15%">名稱</th>
            <th style="width: 26%">敘述</th>
            <th style="width: 8%">原價</th>
            <th style="width: 8%">特價</th>
            <th style="width: 25%"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(iproduct, idx) in getProducts" :key="iproduct.id">
            <th>{{ idx + 1 }}</th>
            <th>
              <img class="w-100" :src="iproduct.imageUrl" alt="error loading" />
            </th>
            <td>{{ iproduct.title }}</td>
            <td>{{ iproduct.description }}</td>
            <td>{{ iproduct.origin_price }}</td>
            <td>{{ iproduct.price }}</td>
            <td class="text-center p-0">
              <div>
                <RouterLink class="btn btn-success me-2" :to="`/products/${iproduct.id}`">查看</RouterLink>
                <button class="btn btn-primary" :class="getButtonClass(iproduct.ispressed)" @click="clickaddToCart(iproduct)">
                  {{ iproduct.ispressed ? '已加入購物車' : '加入購物車' }}
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div aria-label="Page navigation example" class="d-flex justify-content-center">
      <ul class="pagination p-0">
        <li class="page-item" :class="{ disabled: !getPagination.has_pre }">
          <a class="page-link" aria-label="Previous" style="cursor: pointer"
            @click="axiosGetProducts(getPagination.current_page - 1, getCategory)">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" :class="{ active: page === getPagination.current_page }"
          v-for="page in getPagination.total_pages" :key="'mypage' + page">
          <a class="page-link" style="cursor: pointer" @click="axiosGetProducts(page, getCategory)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: !getPagination.has_next }">
          <a class="page-link" aria-label="Next" style="cursor: pointer"
            @click="axiosGetProducts(getPagination.current_page + 1, getCategory)">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import cart from '../stores/cart.js'
import { mapState, mapActions } from 'pinia'
import Loading from 'vue-loading-overlay';

export default {
  data() {
    return {
      page: 1,
      isLoading: false,
      fullPage: false
    }
  },
  components: {
    Loading
  },
  methods: {
    ...mapActions(cart, ['addToCart', 'axiosGetProducts', 'changeLoadingStatus','getCart']),
    clickaddToCart(product) {
      console.log(product);
      // const InCart = this.myCart.findIndex((icart) => icart.id === product.id)
      // this.addToCart(product.id, InCart !== -1 ? this.myCart[InCart].count : 1)
      this.addToCart(product.id)
    },
    getPageProduct(page) {
      this.page = page
      this.axiosGetProducts(page)
    },
    getButtonClass(boolen) {
      return {
        btn: true,
        'btn-primary': boolen,
        'btn-danger': boolen
      }
    }
  },
  computed: {
    ...mapState(cart, ['getProducts', 'getPagination', 'getFrontPage', 'getLoadingStatus', 'getCategory', 'getMyCart']),
    filterGetMyCart() {
      return this.getMyCart.carts
    }
  },
  mounted() {
    this.getPageProduct(this.getFrontPage)
    this.getCart();
  },
  watch: {
    getProducts() {
      setTimeout(() => {
        this.changeLoadingStatus()
      }, 1000);
    }
  }
}
</script>

<style scoped>
@import 'vue-loading-overlay/dist/css/index.css';

table::-webkit-scrollbar {
  display: none;
}
</style>
