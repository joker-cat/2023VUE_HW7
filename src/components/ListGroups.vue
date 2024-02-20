<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item">
        <RouterLink class="btn btn-secondary w-100" to="/products">
          <p data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"
            class="m-0">商品頁</p>
        </RouterLink>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample" @click="turnPath">
          <div class="accordion-body">
            <div class="list-group">
              <label class="list-group-item">
                <input class="form-check-input me-1" name="category" type="radio" value="" v-model="category">
                全部品項
              </label>
              <label class="list-group-item">
                <input class="form-check-input me-1" name="category" type="radio" value="唇膏" v-model="category">
                唇膏
              </label>
              <label class="list-group-item">
                <input class="form-check-input me-1" name="category" type="radio" value="指甲油" v-model="category">
                指甲油
              </label>
              <label class="list-group-item">
                <input class="form-check-input me-1" name="category" type="radio" value="香水" v-model="category">
                香水
              </label>
              <label class="list-group-item">
                <input class="form-check-input me-1" name="category" type="radio" value="眼彩盤" v-model="category">
                眼彩盤
              </label>
            </div>
          </div>
        </div>

      </li>
      <li class="list-group-item">
        <RouterLink class="btn btn-secondary w-100" to="/cart">購物車
          <span class="text-ligth" v-if="getMyCart.length > 0">({{ getMyCart.length }})</span>
        </RouterLink>
      </li>
      <li class="list-group-item">
        <RouterLink class="btn btn-secondary w-100" to="/article">文章列表</RouterLink>
      </li>
    </ul>
  </div>
  <div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import cart from '../stores/cart.js'
export default {
  data() {
    return {
      category: ''
    }
  },
  computed: {
    ...mapState(cart, ['getMyCart', 'filterCategory', 'getLoadingStatus'])
  },
  methods: {
    ...mapActions(cart, ['axiosGetProducts', 'changeLoadingStatus']),
    turnPath() {
      this.$router.push('/products')
    }
  },
  watch: {
    category(newValue) {
      this.axiosGetProducts(1, newValue);
    }
  }
}
</script>

<style>
</style>
