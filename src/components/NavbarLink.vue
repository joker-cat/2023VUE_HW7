<template>
  <nav>
    <ul class="nav nav-pills py-3">
      <li class="ms-auto">
        <div class="d-flex">
          <RouterLink class="btn btn-danger me-3" :to="hasCookie ? '/admin' : '/login'">{{ hasCookie
            ?
            '前往後台' :
            '登入後台' }}</RouterLink>
          <button class=" btn btn-primary" type="button" @click="checkLogin">
            驗證登入
          </button>
        </div>
      </li>
    </ul>
    <h2 class="fw-bolder text-center mb-4">{{ titleName }}</h2>
  </nav>
</template>

<script>
import { docCookies } from '../cookie.js'
import { mapState } from 'pinia'
import cart from '../stores/cart.js'

export default {
  computed: {
    ...mapState(cart, ['getMyCart']),
    localRoute() {
      return this.$route.path === '/' ? true : false
    },
    hasCookie() {
      return docCookies.hasItem('token')
    },
    titleName() {
      return { '/': '首頁', '/products': '商品頁', '/cart': '購物車' }[this.$route.path]
    }
  },
  methods: {
    checkLogin() {
      this.$axios
        .post('https://ec-course-api.hexschool.io/v2/api/user/check')
        .then((res) => {
          alert('已登入')
        })
        .catch((error) => {
          alert('驗證失敗')
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-item {
  margin-right: 16px;
}
</style>
