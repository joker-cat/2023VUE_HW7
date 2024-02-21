<template>
  <div class="row my-4 position-relative">
    <div class="col-sm-4 col-6 mb-4" v-for="icoupon in coupons" :key="icoupon.id">
      <div class="card">
        <img src="../../assets/image/coupon.png" class="card-img-top" alt="img error">
        <div class="card-body">
          <p class="card-text">名稱 {{ icoupon.title }}</p>
          <p class="card-text">折扣 {{ icoupon.percent }}</p>
          <p class="card-text">狀態 {{ icoupon.is_enabled?'啟用':'不啟用' }}</p>
        </div>
      </div>
    </div>
    <!-- <div class="col-sm-4 col-6">
      <div class="card">
        <img src="../../assets/image/coupon.png" class="card-img-top" alt="img error">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
      </div>
    </div>
    <div class="col-sm-4 col-6">
      <div class="card">
        <img src="../../assets/image/coupon.png" class="card-img-top" alt="img error">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
      </div>
    </div> -->
    <button type="button" class="btn btn-dark position-absolute" style="width: 120px;top: -50px;right: 12px;"
      @click="openModal">
      新增優惠券
    </button>
  </div>



  <!-- Modal -->
  <div class="modal modal-lg fade" ref="couponModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title fw-bolder" id="exampleModalLabel">新增優惠券</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="card p-2">
            <div class="row">
              <div class="col-md-4">
                <img src="../../assets/image/coupon.png" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body p-0">
                  <form>
                    <div class="mb-3">
                      <label for="cardtitle">優惠券名稱</label>
                      <input type="text" class="form-control" id="cardtitle" v-model="couponForm.data.title">
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1">折扣趴數</label>
                      <input type="text" class="form-control" id="exampleInputEmail1"
                        v-model.number="couponForm.data.percent">
                    </div>
                    <div class="mb-3 form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1"
                        v-model="couponForm.data.is_enabled" true-value="1" false-value="0">
                      <label class="form-check-label" for="exampleCheck1">是否啟用 {{ typeof couponForm.data.is_enabled
                      }}</label>
                    </div>
                    <!-- <div class="mb-3">
                      <label for="exampleInputPassword1">due_date</label>
                      <input type="text" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1">code</label>
                      <input type="text" class="form-control" id="exampleInputPassword1">
                    </div> -->
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn fs-6 p-2 px-3 border border-dark" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn fs-6 p-2 px-3 bg-dark text-light" @click="createCoupon">新增</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { docCookies } from '../../cookie.js'
import * as bootstrap from "bootstrap/dist/js/bootstrap.min.js";
export default {
  data() {
    return {
      modal: null,
      coupons: [],
      couponForm: {
        data: {
          title: "",
          is_enabled: 0,
          percent: null,
          due_date: new Date().getTime(),
          code: "testCode"
        }
      }
    }
  },
  methods: {
    getCoupons() {
      this.$axios
        .get('/admin/coupons')
        .then((res) => {
          this.coupons = res.data.coupons;
        })
        .catch(() => {
        })
    },
    createCoupon() {
      this.couponForm.data.is_enabled -= 0;
      this.$axios
        .post('/admin/coupon',
          {
            ...this.couponForm,
            due_date: new Date().getTime()
          })
        .then(() => {
          alert('新增成功')
          this.closeModal();
        })
        .catch(() => {
          alert('新增失敗')
          this.closeModal();
        })
    },
    openModal() {
      this.modal.show()
    },
    closeModal() {
      this.modal.hide()
    }
  },
  mounted() {
    const hasToken = docCookies.hasItem('token')
    if (!hasToken) {
      this.$router.push('/')
    } else {
      this.$axios.defaults.headers.common['Authorization'] = docCookies.getItem('token')
      this.getCoupons()
      this.modal = new bootstrap.Modal(this.$refs.couponModal);
    }
  }
}
/*
{
  "data": {
    "title": "超級特惠價格",
    "is_enabled": 1,
    "percent": 80,
    "due_date": 1555459200,
    "code": "testCode"
  }
}
*/
</script>

<style lang="scss" scoped>
</style>
