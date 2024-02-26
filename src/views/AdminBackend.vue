<template>
  <div class="row py-3">
    <h2>產品列表</h2>
    <div class="col-lg-3 mt-4">
      <div class="list-group">
        <router-link v-for="ipath in listGroups" :key="ipath.name"
          class="btn fw-bolder list-group-item list-group-item-action" :to="ipath.path">{{ ipath.name }}</router-link>
          <router-link class="btn fw-bolder text-light fs-6 p-2 bg-danger my-3" to="/">回前台</router-link>
          <button class="btn fw-bolder text-danger fs-6 p-2 border border-danger" @click="signout">
            登出
          </button>
      </div>
    </div>
    <div class="col-lg-9">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { docCookies } from '../cookie.js'

export default {
  data() {
    return {
      listGroups: [
        { name: "產品", path: "/admin/products" },
        { name: "訂單", path: "/admin/orders" },
        { name: "優惠券", path: "/admin/coupons" },
        { name: "文章", path: "/admin/articles" }
      ]
    }
  },
  created() {
    if (!docCookies.hasItem('token')) {
      this.$router.push('/')
      return
    }
  },
  methods: {
    signout() {
      this.$axios
        .post('https://vue3-course-api.hexschool.io/v2/logout')
        .then(() => {
          alert('已登出')
          docCookies.removeItem('token')
          this.$router.push('/')
        })
        .catch((error) => {
          console.log(error)
          alert('登出失敗')
        })
    }
  },
  mounted() {
    const hasToken = docCookies.hasItem('token')
    if (!hasToken) {
      this.$router.push('/')
    } else {
      this.$axios.defaults.headers.common['Authorization'] = docCookies.getItem('token')
    }
  }
}
</script>

<style>
</style>
