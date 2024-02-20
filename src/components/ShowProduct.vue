<script>
export default {
  data() {
    return {
      productId: '',
      productInfo: {},
      count: 1
    }
  },
  mounted() {
    this.productId = this.$route.params.id;
    this.$axios.get(`/product/${this.productId}`).then((res) => {
      this.productInfo = res.data.product
    })
  }
}
</script>
<template>
  <div class="card w-50 m-auto">
    <div>
      <img :src="productInfo.imageUrl" class="card-img-top" alt="Image loading error" />
    </div>
    <div class="card-body">
      <h5 class="card-title fs-2 fw-bolder">{{ productInfo.title }}</h5>
      <p class="d-inline-block mb-2 text-danger fw-bolder">{{ productInfo.category }}</p>
      <p class="card-text fs-5">{{ productInfo.content }}</p>
      <div>
        <p>原價{{ productInfo.origin_price }}</p>
        <p>特價{{ productInfo.price }}</p>
      </div>
      <RouterLink class="d-block btn btn-success" to="/products">返回</RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
