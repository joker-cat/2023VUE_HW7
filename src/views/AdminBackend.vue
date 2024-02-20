<template>
  <div class="row py-3">
    <h2>
      產品列表
      <router-link class="btn fw-bolder text-light fs-6 p-1 me-2 bg-danger" to="/">回前台</router-link>
      <button class="btn fw-bolder text-danger fs-6 p-1 border border-danger" @click="signout">
        登出
      </button>
    </h2>
    <div class="col-lg-3 mt-4">
      <div class="list-group">
        <router-link v-for="ipath in listGroups" :key="ipath.name"
          class="btn fw-bolder list-group-item list-group-item-action" :to="ipath.path">{{ ipath.name }}</router-link>
      </div>
    </div>
    <div class="col-lg-9">
      <router-view></router-view>
      <!-- <table class="table align-middle table-hover mt-4">
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
            <li class="page-item" :class="{ active: page === pagination.current_page }"
              v-for="page in pagination.total_pages" :key="'mypage' + page">
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
      </div> -->
    </div>


    <ProductInfonation :userChoose="userChoose" />



    <DeleteProductModal ref="callDelModal" :chooseProduct="delChoose" @reloadRender="delProduct" />
    <AddProduct ref="callAddModal" @reloadRender="colseAddModal" />
    <EditProduct ref="callEditModal" :choose="putChoose" @reloadRender="colseEditModal" />
  </div>
</template>

<script>
import { docCookies } from '../cookie.js'
import AddProduct from '../components/AddProductModal.vue'
import EditProduct from '../components/EditProductModal.vue'
import ProductInfonation from '../components/ProductInfonation.vue'
import DeleteProductModal from '../components/DeleteProductModal.vue'
export default {
  data() {
    return {
      pathname: '', //當前路徑
      hasCookie: false, //是否有cookie
      userChoose: {}, //品項選擇
      putChoose: {}, //品項編輯
      delChoose: {}, //即將刪除
      allProducts: [], //全部品項,
      pagination: {}, //總頁數
      pages: 1, //當前頁數
      delModal: null,
      addModal: null,
      editModal: null,
      addProduct: {
        //新增
        data: {
          title: '',
          category: '',
          origin_price: '',
          price: '',
          unit: '個',
          description: '',
          content: '',
          is_enabled: 0,
          imageUrl: '',
          imagesUrl: []
        }
      },
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
    delProduct(id) {
      this.$axios
        .delete(`/admin/product/${id}`)
        .then((res) => {
          if (res.data.success) {
            this.hasCookie = res.data.success
            this.colseDelModal()
            this.renderProduct()
            alert('已刪除')
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    detail(item) {
      this.userChoose = { ...item }
    },
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
    openAddModal() {
      this.$refs.callAddModal.openModal()
    },
    openEditModal(item) {
      this.putChoose = { ...item }
      this.$refs.callEditModal.openModal()
    },
    openDelModal(item) {
      this.delChoose = { ...item }
      this.$refs.callDelModal.openModal()
    },
    colseAddModal() {
      this.$refs.callAddModal.closeModal()
      this.renderProduct()
    },
    colseEditModal() {
      this.$refs.callEditModal.closeModal()
      this.renderProduct()
    },
    colseDelModal() {
      this.$refs.callDelModal.closeModal()
      this.renderProduct()
    },
    signout() {
      this.$axios
        .post('https://ec-course-api.hexschool.io/v2/logout')
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
      this.renderProduct()
    }
  },
  components: {
    AddProduct,
    EditProduct,
    ProductInfonation,
    DeleteProductModal
  }
}
</script>

<style>
</style>
