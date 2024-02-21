<template>
	<div class="card mb-3">
		<div class="row g-0">
			<div class="col-md-3">
				<img class="w-100" src="https://drive.google.com/thumbnail?id=1nTzt8C1mlGol1IOb-ukfj2RzeWIN-YQb" alt="img error">
			</div>
			<div class="col-md-9">
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
						content. This content is a little bit longer.</p>
					<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
				</div>
			</div>
		</div>
	</div>
	<!-- <button class="btn btn-primary" @click="del">del</button> -->
	<!-- Button trigger modal -->
	<button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
		Show Modal
	</button>
	<ArticleModal />
</template>

<script>
import ArticleModal from "../components/ArticleModal.vue";
export default {
	data() {
		return {
			getArticle: []
		}
	},
	methods: {
		// del() {
		// 	this.$axios.delete('/admin/article/-Nr14E2BiCWqJaQ5eeYk')
		// 		.then(res => {
		// 			console.log(res);
		// 		})
		// 		.catch(err => console.log(err))
		// },
		// add() {
		// 	this.$axios.post('/admin/article', {
		// 		"data": {
		// 			"title": "測試新增文章",
		// 			"description": "文章內容123",
		// 			"image": "../assets/image/productImage/2.jpg",
		// 			"tag": [
		// 				"口紅2", "口紅口紅2"
		// 			],
		// 			"create_at": this.getCurrentDate(),
		// 			"author": "joker",
		// 			"isPublic": true,
		// 			"content": "口紅2"
		// 		}
		// 	})
		// 		.then(res => {
		// 			console.log(res);
		// 		})
		// 		.catch(err => console.log(err))
		// },
		getCurrentDate() {
			return new Date().getTime();
		}
	},
	created(page = 1) {
		this.$axios.get(`/articles?${page}`)
			.then(res => {
				console.log(res);
			})
			.catch(err => console.log(err))
	},
	components: {
		ArticleModal
	},
	// mounted() {
	// 	const hasToken = docCookies.hasItem('token')
	// 	console.log(hasToken);
	// 	if (!hasToken) {
	// 		this.$router.push('/')
	// 	} else {
	// 		this.$axios.defaults.headers.common['Authorization'] = docCookies.getItem('token')
	// 	}
	// },
}
</script>

<style>
</style>
