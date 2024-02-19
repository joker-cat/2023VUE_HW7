<template>
    <div ref="addModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-md">
            <div class="modal-content border-0">
                <div class="modal-header bg-dark text-white">
                    <h5 id="productModalLabel" class="modal-title">
                        <span>新增產品</span>
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="addProductTitle" class="form-label col-3">商品名稱</label>
                            <input type="text" class="form-label " id="addProductTitle" v-model="addProduct.data.title"
                                placeholder="joooker小丑">
                        </div>
                        <div class="mb-3">
                            <label for="addProductCategory" class="form-label col-3">系列</label>
                            <input type="text" class="form-label " id="addProductCategory"
                                v-model="addProduct.data.category" placeholder="搞怪系列">
                        </div>
                        <div class="mb-3">
                            <label for="addProductOriginPrice" class="form-label col-3">原價</label>
                            <input type="text" class="form-label " id="addProductOriginPrice"
                                v-model.number="addProduct.data.origin_price" placeholder="原價">
                        </div>
                        <div class="mb-3">
                            <label for="addProductPrice" class="form-label col-3">售價</label>
                            <input type="text" class="form-label " id="addProductPrice"
                                v-model.number="addProduct.data.price" placeholder="售價">
                        </div>
                        <div class="mb-3">
                            <label for="addProductDescription" class="form-label col-3">商品描述</label>
                            <input type="text" class="form-label " id="addProductDescription"
                                v-model="addProduct.data.description" placeholder="描述">
                        </div>
                        <div class="mb-3">
                            <label for="addProductContent" class="form-label col-3">商品內容</label>
                            <input type="text" class="form-label " id="addProductContent" v-model="addProduct.data.content"
                                placeholder="內容">
                        </div>
                        <div class="mb-3">
                            <label for="addProductIs_enabled" class="form-label col-3">是否啟用</label>
                            <input type="checkbox" class="form-label " id="addProductIs_enabled"
                                v-model="addProduct.data.is_enabled" :true-value="1" :false-value="0" placeholder="內容">
                        </div>
                        <div class="mb-3">
                            <div>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="新增主圖網址(限1個)"
                                        aria-label="新增主圖網址(限1個)" aria-describedby="button-addon1"
                                        v-model="main">
                                    <button class="btn btn-outline-secondary" type="button" id="button-addon1"
                                        @click="mainImage">+</button>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="新增附圖網址(限5個)"
                                        aria-label="新增附圖網址(限5個)" aria-describedby="button-addon2"
                                        v-model="additional">
                                    <button class="btn btn-outline-secondary" type="button" id="button-addon2"
                                        @click="additionalImage">+</button>
                                </div>
                            </div>
                            <div class="mb-2">
                                <label for="imageUrl" class="form-label">圖片展示(請新增圖片網址)</label>
                                <img v-if="addProduct.data.imageUrl!==''" class="img-fluid" :src="addProduct.data.imageUrl" alt="圖片ERR">
                                <template v-for="(img, idx) in addProduct.data.imagesUrl" :key="img">
                                    <img :src="img" alt="圖片error" class="images m-2" style="width: 200px;">
                                </template>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary" @click="postProduct" :disabled="isDisabled">新增產品</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as bootstrap from "bootstrap/dist/js/bootstrap.min.js";
export default {
    data() {
        return {
            main: '',
            additional: '',
            addProduct: { //新增
                data: {
                    "title": "",
                    "category": "",
                    "origin_price": "",
                    "price": "",
                    "unit": "個",
                    "description": "",
                    "content": "",
                    "is_enabled": 0,
                    "imageUrl": "",
                    "imagesUrl": []
                }
            }
        }
    },
    methods: {
        isImage(url) {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = url;
                img.onload = function () {
                    resolve(true);
                };
                img.onerror = function () {
                    resolve(false);
                };
            });
        },
        async mainImage() {
            if (this.main.trim() === "") return;
            if (await this.isImage(this.main)) {
                this.mydata.imageUrl = this.main;
                this.main = '';
            }
        },
        additionalImage() {
            if (this.mydata.imagesUrl.length === 5 || this.additional.trim() === "") return;
            if (this.isImage(this.mydata.imagesUrl)) {
                this.mydata.imagesUrl.push(this.additional);
                this.additional = '';
            }
        },
        postProduct() {
            this.$axios
                .post('/admin/product', {
                    ...this.addProduct
                })
                .then((res) => {
                    if (res.data.success) {
                        this.reset();
                        this.$emit('reloadRender');
                        alert('已新增');
                    }
                }).catch((error) => {
                    console.log(error);
                })
        },
        openModal(){
            this.addModal.show();
        },
        closeModal(){
            this.addModal.hide();
        },
        reset() {
            this.addProduct.data = {
                "title": "",
                "category": "",
                "origin_price": "",
                "price": "",
                "unit": "個",
                "description": "",
                "content": "",
                "is_enabled": 0,
                "imageUrl": "",
                "imagesUrl": []
            }
        },
    },
    computed: {
        mydata(){
            return this.addProduct.data;
        },
        isDisabled() {
            return (
                this.mydata.title === "" ||
                this.mydata.category === "" ||
                this.mydata.origin_price === "" ||
                this.mydata.price === "" ||
                this.mydata.description === "" ||
                this.mydata.content === "" ||
                this.mydata.imageUrl === "" ||
                this.mydata.imagesUrl.length === 0
            ) ?
                true : false;
        },
    },
    mounted() {
        this.addModal = new bootstrap.Modal(this.$refs.addModal);
    }
}
</script>

<style></style>
