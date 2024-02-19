import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

//toast CSS
import 'vue3-toastify/dist/index.css'

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

//LoadingPlugin
import { LoadingPlugin } from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

//API
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.config.globalProperties.$axios = axios.create({
  baseURL: import.meta.env.VITE_PATH
})

app.use(VueAxios, axios)
app.use(createPinia())
app.use(LoadingPlugin)
app.use(router)

app.mount('#app')
