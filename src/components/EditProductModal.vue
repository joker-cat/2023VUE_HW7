<template>
  <div
    ref="editModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="putProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title">
            <span>編輯產品</span>
          </h5>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="addProductTitle" class="form-label col-3">商品名稱</label>
              <input
                type="text"
                class="form-label"
                id="addProductTitle"
                v-model="change.data.title"
                placeholder="joooker小丑"
              />
            </div>
            <div class="mb-3">
              <label for="addProductCategory" class="form-label col-3">系列</label>
              <input
                type="text"
                class="form-label"
                id="addProductCategory"
                v-model="change.data.category"
                placeholder="搞怪系列"
              />
            </div>
            <div class="mb-3">
              <label for="addProductOriginPrice" class="form-label col-3">原價</label>
              <input
                type="text"
                class="form-label"
                id="addProductOriginPrice"
                v-model.number="change.data.origin_price"
                placeholder="原價"
              />
            </div>
            <div class="mb-3">
              <label for="addProductPrice" class="form-label col-3">售價</label>
              <input
                type="text"
                class="form-label"
                id="addProductPrice"
                v-model.number="change.data.price"
                placeholder="售價"
              />
            </div>
            <div class="mb-3">
              <label for="addProductDescription" class="form-label col-3">商品描述</label>
              <input
                type="text"
                class="form-label"
                id="addProductDescription"
                v-model="change.data.description"
                placeholder="描述"
              />
            </div>
            <div class="mb-3">
              <label for="addProductContent" class="form-label col-3">商品內容</label>
              <input
                type="text"
                class="form-label"
                id="addProductContent"
                v-model="change.data.content"
                placeholder="內容"
              />
            </div>
            <div class="mb-3">
              <label for="addProductIs_enabled" class="form-label col-3">是否啟用</label>
              <input
                type="checkbox"
                class="form-label"
                id="addProductIs_enabled"
                :checked="trunBoolen"
                v-model="change.data.is_enabled"
                :true-value="1"
                :false-value="0"
                placeholder="內容"
              />
            </div>
            <div class="mb-3">
              <div class="mb-2 text-center">
                <p>圖片展示</p>
                <img class="img-fluid" :src="change.data.imageUrl" alt="圖片ERR" />
                <template v-for="img in change.data.imagesUrl" :key="img">
                  <img :src="img" alt="圖片error" class="images m-2" style="width: 200px" />
                </template>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="putProducts">確認修改</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as bootstrap from 'bootstrap/dist/js/bootstrap.min.js'
export default {
  props: ['choose'],
  data () {
    return {
      inputNull: [],
      warmObj: {
        title: '商品名稱',
        price: '售價',
        origin_price: '原價',
        category: '系列',
        description: '商品描述',
        content: '商品內容'
      },
      change: {
        data: { ...this.choose }
      }
    }
  },
  created () {
    this.change = { data: { ...this.choose } }
  },
  watch: {
    choose (newChoose) {
      this.change = { data: { ...newChoose } }
    }
  },
  computed: {
    trunBoolen () {
      return this.change.data.is_enabled ? true : false
    }
  },
  methods: {
    checkEmptyValues () {
      for (const key in this.change.data) {
        if (this.change.data[key] === '') {
          this.inputNull.push(this.warmObj[key])
        }
      }
    },
    putProducts () {
      this.checkEmptyValues()
      if (this.inputNull.length === 0) {
        this.$axios
          .put(`/admin/product/${this.choose.id}`, this.change)
          .then(res => {
            if (res.data.success) {
              this.hasCookie = res.data.success
              this.$emit('reloadRender')
              alert('修改成功')
            }
          })
          .catch(error => {
            console.log(error)
          })
      } else {
        alert('請確實填寫 : ' + this.inputNull.join(' , '))
      }
    },
    openModal () {
      this.editModal.show()
    },
    closeModal () {
      this.editModal.hide()
    }
  },
  mounted () {
    this.editModal = new bootstrap.Modal(this.$refs.editModal)
  }
}
</script>

<style></style>
