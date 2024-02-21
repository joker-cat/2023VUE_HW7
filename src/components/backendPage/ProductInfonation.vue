<template>
	<div class="modal fade" ref="infoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h2 class="text-center">單一產品細節</h2>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
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
							<template v-for="(img, idx) in userChoose.imagesUrl" :key="img+idx">
								<img :src="img" alt="圖片error" class="images m-2">
							</template>
						</div>
					</template>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					<button type="button" class="btn btn-primary">Save changes</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
// import Modal from 'bootstrap/js/dist/modal';
import * as bootstrap from 'bootstrap/dist/js/bootstrap.min.js'
export default {
	props: ["userChoose"],
	data() {
		return {
			infoModal: null
		}
	},
	computed: {
		chooseIsNull() {
			return Object.keys(this.userChoose).length !== 0;
		}
	},
	methods: {
		openModal() {
			this.infoModal.show()
		},
		closeModal() {
			this.infoModal.hide()
		}
	},
	mounted() {
		this.infoModal = new bootstrap.Modal(this.$refs.infoModal)
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
