<template>
  <div class="row justify-content-center text-center align-items-center" style="height: 100vh">
    <div class="col-5">
      <h2 class="mb-3 fs-bolder">請先登入</h2>
      <form id="form" class="form-signin">
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="username" placeholder="name@example.com" required autofocus
            v-model="userInfo.username" />
          <label for="username">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="password" placeholder="Password" required
            v-model="userInfo.password" />
          <label for="password">Password</label>
        </div>
        <button class="btn btn-lg btn-primary w-100 my-3" type="submit" @click.prevent="login">
          登入
        </button>
        <RouterLink class="btn btn-lg btn-danger w-100 mx-auto" to="/">返回首頁</RouterLink>
      </form>
      <p class="mt-5 mb-3 text-muted">&copy; 2021~∞ - 六角學院</p>
    </div>
  </div>
</template>

<script>
import { docCookies } from '../cookie.js'
export default {
  data() {
    return {
      token: '',
      userInfo: {
        username: '',
        password: ''
      }
    }
  },
  created() {
    if (docCookies.hasItem('token')) {
      this.$router.push('/')
      return
    }
  },
  methods: {
    login() {
      if (this.userInfo.username.trim() === '' || this.userInfo.password.trim() === '') {
        alert('欄位請確實填寫');
        return
      }
      this.$axios
        .post('https://ec-course-api.hexschool.io/v2/admin/signin', this.userInfo)
        .then((res) => {
          if (res.data.message === '登入成功') {
            this.token = res.data.token
            docCookies.setItem('token', this.token)
            this.$axios.defaults.headers.common['Authorization'] = this.token //此全域設置只在此組件範圍有效
            this.$router.push('/admin')
          }
        })
        .catch((error) => {
          alert('登入失敗')
          console.log(error)
        })
    }
  }
}
</script>

<style>
</style>
