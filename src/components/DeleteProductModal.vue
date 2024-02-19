<template>
    <div ref="delModal" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">確定要刪除嗎?</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card mb-3">
                        <img :src="chooseProduct.imageUrl" class="card-img-top primary-image" alt="主圖">
                        <div class="card-body">
                            <h5 class="card-title">
                                {{ chooseProduct.title }}
                                <span class="badge bg-primary ms-2">{{ chooseProduct.category }}</span>
                            </h5>
                            <p class="card-text">商品描述：{{ chooseProduct.description }}</p>
                            <p class="card-text">商品內容：{{ chooseProduct.content }}</p>
                            <div class="d-flex">
                                <p class="card-text me-2">{{ chooseProduct.price }}</p>
                                <p class="card-text text-secondary"><del>{{ chooseProduct.origin_price }}</del></p>
                                元 / {{ chooseProduct.unit }}
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <template v-for="img in chooseProduct.imagesUrl" :key="img">
                            <img :src="img" alt="圖片error" class="images m-2">
                        </template>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                    <button type="button" class="btn btn-primary" @click="allowDelete">確定</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as bootstrap from "bootstrap/dist/js/bootstrap.min.js";
export default {
    props: ["chooseProduct"],
    methods: {
        allowDelete() {
            this.$emit('reloadRender', this.chooseProduct.id);
        },
        openModal(){
            this.delModal.show();
        },
        closeModal(){
            this.delModal.hide();
        }
    },
    mounted() {
        this.delModal = new bootstrap.Modal(this.$refs.delModal);
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
    display: inline;
}
</style>