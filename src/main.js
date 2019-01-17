import Vue from 'vue'
import App from './App'
import Http from '@/utils/httpUtil'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$Http = Http
Vue.prototype.$get = Http.getRequest
Vue.prototype.$post = Http.postRequest

const app = new Vue(App)
app.$mount()
