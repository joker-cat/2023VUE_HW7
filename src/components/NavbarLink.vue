<template>
  <nav>
    <ul class="nav nav-pills py-3 row">
      <li class="col-6">
        <RouterLink class="btn btn-danger w-100" :to="hasCookie ? '/admin' : '/login'">{{ hasCookie
          ?
          '前往後台' :
          '登入後台' }}</RouterLink>
      </li>
      <li class="col-6">
        <button class="btn btn-primary w-100" type="button" @click="checkLogin">
          驗證登入
        </button>
      </li>
    </ul>
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
    }
  },
  methods: {
    checkLogin() {
      this.$axios
        .post('https://ec-course-api.hexschool.io/v2/api/user/check')
        .then(() => {
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
  justify-content: space-between;
}
</style>
