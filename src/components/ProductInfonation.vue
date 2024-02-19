<template>
    <div class="col-lg-5 col-sm-12">
        <h2 class="text-center">單一產品細節</h2>
        <template v-if="chooseIsNull">
            <div class="card mb-3">
                <img :src="userChoose.imageUrl" class="card-img-top primary-image" alt="主圖">
                <div class="card-body">
                    <h5 class="card-title">
                        {{ userChoose.title }}
                        <span class="badge bg-primary ms-2">{{ userChoose.category }}</span>
                    </h5>
                    <p class="card-text">商品描述：{{ userChoose.description }}</p>
                    <p class="card-text">商品內容：{{ userChoose.content }}</p>
                    <div class="d-flex">
                        <p class="card-text me-2">{{ userChoose.price }}</p>
                        <p class="card-text text-secondary"><del>{{ userChoose.origin_price }}</del></p>
                        元 / {{ userChoose.unit }}
                    </div>
                </div>
            </div>
            <div class="text-center">
                <template v-for="(img,idx) in userChoose.imagesUrl" :key="img+idx">
                    <img :src="img" alt="圖片error" class="images m-2">
                </template>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: ["userChoose"],
    computed: {
        chooseIsNull() {
            return Object.keys(this.userChoose).length !== 0;
        }
    }
}
</script>

<style scoped>
img {
    object-fit: contain;
    max-width: 100%;
}

.primary-image {
    height: 300px;
}

.images {
    width: 200px;
    display: inline-block;
}
</style>
