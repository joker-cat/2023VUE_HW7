<template>
  <div class="row my-4 position-relative">
    <div class="col-sm-4 col-6 mb-4" v-for="icoupon in coupons" :key="icoupon.id" @click="editCoupon($event, icoupon)">
      <div class="card">
        <img src="../../assets/image/coupon.png" class="card-img-top" alt="img error">
        <div class="card-body">
          <div class="row fs-6">
            <div class="col-4">
              <p class="card-text" style="font-weight: 500;">名稱</p>
            </div>
            <div class="col-8 text-danger mb-1">{{ icoupon.title }}</div>
            <div class="col-4">
              <p class="card-text" style="font-weight: 500;">折扣</p>
            </div>
            <div class="col-8 text-danger mb-1">{{ icoupon.percent }}</div>
            <div class="col-4">
              <p class="card-text" style="font-weight: 500;">是否啟用</p>
            </div>
            <div class="col-8 text-danger">
              <div class="form-check form-switch ps-0">
                <input class="form-check-input form-control m-0 mt-1" type="checkbox" id="flexSwitchCheckDefault"
                  v-model="icoupon.is_enabled" true-value="1" false-value="0" @change="handleCheckboxChange(icoupon)">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
          <h5 class="modal-title fw-bolder" id="exampleModalLabel">{{ couponApi === 'post' ? '新增' : '編輯' }}優惠券</h5>
          <span class="text-danger">(14天期限)</span>
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
                  {{ couponForm.data }}
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
                    <div class="mb-3 form-check ps-0">
                      <div class="form-check form-switch ps-0">
                        <div class="d-flex">
                          <label class="form-check-label me-2" for="flexSwitchCheckDefault">是否啟用</label>
                          <input class="form-check-input form-control m-0 mt-1" type="checkbox"
                            id="flexSwitchCheckDefault" v-model="couponForm.data.is_enabled" true-value="1"
                            false-value="0">
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn fs-6 p-2 px-3 btn-danger me-auto"  @click="deleteCoupon(couponForm.data.id)">刪除</button>
            <button type="button" class="btn fs-6 p-2 px-3 border border-dark" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn fs-6 p-2 px-3 bg-dark text-light" @click="createCoupon">{{ couponApi === 'post'
            ? '新增' : '編輯' }}</button>
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
      couponApi: 'post',
      coupons: [],
      couponForm: {
        data: {
          title: "",
          is_enabled: 0,
          percent: null,
          due_date: 0,
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
          console.log(res);
          this.coupons = res.data.coupons;
        })
        .catch(() => {
        })
    },
    getTimeStamp() {
      let currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + 14); // 14天後過期
      let threeDaysLaterTimestamp = currentDate.getTime();
      return threeDaysLaterTimestamp
    },
    deleteCoupon(id) {
      console.log(id);
      this.$axios
        .delete(`/admin/coupon/${id}`)
        .then((res) => {
          if (res.data.success) alert('已刪除優惠券');
          this.closeModal();
          this.getCoupons();
        })
        .catch((err) => console.log(err))
    },
    createCoupon() {
      this.couponForm.data.is_enabled -= 0;
      const apiRouter = this.couponApi === 'post' ? '/admin/coupon' : `/admin/coupon/${this.couponForm.data.id}`;
      const couponObj = this.couponApi === 'post' ? {
        ...this.couponForm,
        due_date: this.getTimeStamp()
      } : { ...this.couponForm };
      console.log(couponObj);


      this.$axios
      [this.couponApi](apiRouter, couponObj)
        .then((res) => {
          console.log(res);
          alert(this.couponApi === 'post' ? '新增成功' : '編輯成功')
          this.closeModal();
          this.getCoupons();
        })
        .catch(() => {
          alert('新增失敗')
          this.closeModal();
        })
    },
    editCoupon(event, icoupon) {
      if (event.target.type === 'checkbox') return;
      this.couponApi = 'put';
      this.couponForm = { data: { ...icoupon } }
      this.modal.show()
    },
    handleCheckboxChange(icoupon) {
      const { title, is_enabled, percent, due_date, id, code } = icoupon;
      this.$axios
        .put(`/admin/coupon/${id}`, {
          "data": { title, percent, due_date, code, is_enabled: is_enabled - 0 }
        })
        .then((res) => {
          if (res.data.success) alert('已更新優惠券');
        })
        .catch((err) => console.log(err))
    },
    openModal() {
      this.couponApi = 'post';
      this.couponForm = {
        data: {
          title: "",
          is_enabled: 0,
          percent: null,
          due_date: 0,
          code: "testCode"
        }
      };
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
      this.$axios.defaults.headers.common['Authorization'] = docCookies.getItem('token');
      this.getCoupons();
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
