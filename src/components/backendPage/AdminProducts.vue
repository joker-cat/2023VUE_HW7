
<template>
  <table class="table align-middle table-hover mt-4">
    <thead>
      <tr>
        <th width="180">產品名稱</th>
        <th width="50">原價</th>
        <th width="50">售價</th>
        <th width="70">是否啟用</th>
        <th width="130">查看細節</th>
        <th width="140">管理</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in allProducts" :key="item.id">
        <td width="180">{{ item.title }}</td>
        <td width="50">
          {{ item.origin_price }}
        </td>
        <td width="50">
          {{ item.price }}
        </td>
        <td width="70">
          <span class="text-success" v-if="item.is_enabled === 1">啟用</span>
          <span v-else>未啟用</span>
        </td>
        <td width="130">
          <button type="button" class="btn btn-primary" @click="detail(item)">查看細節</button>
        </td>
        <td width="140">
          <button type="button" class="btn btn-outline-primary btn-sm me-3" @click="openEditModal(item)">
            編輯
          </button>
          <button type="button" class="btn btn-outline-danger btn-sm" @click="openDelModal(item)">
            刪除
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="d-flex justify-content-between align-items-center px-4">
    <span>目前有 {{ allProducts.length }} 項產品</span>
    <div aria-label="Page navigation example d-flex">
      <ul class="pagination p-0 m-auto">
        <li class="page-item" :class="{ disabled: !pagination.has_pre }">
          <a class="page-link" aria-label="Previous" style="cursor: pointer"
            @click="renderProduct(pagination.current_page - 1)">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" :class="{ active: page === pagination.current_page }" v-for="page in pagination.total_pages"
          :key="'mypage' + page">
          <a class="page-link" style="cursor: pointer" @click="renderProduct(page)">{{
            page
          }}</a>
        </li>
        <li class="page-item" :class="{ disabled: !pagination.has_next }">
          <a class="page-link" aria-label="Next" style="cursor: pointer"
            @click="renderProduct(pagination.current_page + 1)">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </div>
    <button class="btn btn-success" @click="openAddModal">建立新的產品</button>
  </div>
</template>

<script>
import { docCookies } from '../../cookie.js'
export default {
  data() {
    return {
      allProducts: [], //全部品項,
      pagination: {}, //總頁數

    }
  },
  methods: {
    renderProduct(page = 1) {
      this.$axios
        .get(`/admin/products?page=${page}`)
        .then((res) => {
          this.pagination = res.data.pagination
          this.allProducts = res.data.products
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
    mounted() {
    const hasToken = docCookies.hasItem('token')
    if (!hasToken) {
      this.$router.push('/')
    } else {
      this.$axios.defaults.headers.common['Authorization'] = docCookies.getItem('token')
      this.renderProduct()
    }
  }
}
</script>

<style>
</style>
