<script>
import { docCookies } from '../cookie.js'
import NavbarLink from '../components/NavbarLink.vue'
import ListGroups from '../components/ListGroups.vue'

export default {
  components: {
    NavbarLink,
    ListGroups
  },
  mounted () {
    if (docCookies.hasItem('token')) {
      this.$axios.defaults.headers.common['Authorization'] = docCookies.getItem('token')
    }
  }
}
</script>

<template>
  <div class="container">
    <NavbarLink />
    <div class="row">
      <div class="col-3">
        <ListGroups />
      </div>
      <div class="col-9 mx-auto">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
