<script>
import { docCookies } from '../cookie.js'
import NavbarLink from '../components/NavbarLink.vue'
import ListGroups from '../components/ListGroups.vue'

export default {
  components: {
    NavbarLink,
    ListGroups
  },
  computed: {
    titleName() {
      return {
        '/': '首頁',
        '/products': '商品頁',
        '/cart': '購物車',
        '/article': '文章列表'
      }[this.$route.path]
    }
  },
  mounted() {
    if (docCookies.hasItem('token')) {
      this.$axios.defaults.headers.common['Authorization'] = docCookies.getItem('token')
    }
  }
}
</script>

<template>
  <div class="container">
    <h2 class="fw-bolder text-center my-5">{{ titleName }}</h2>
    <div class="row">
      <div class="col-3">
        <ListGroups />
        <NavbarLink />
      </div>
      <div class="col-9 mx-auto">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>
