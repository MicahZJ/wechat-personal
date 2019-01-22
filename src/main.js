import Vue from 'vue'
import App from './App'
import Http from '@/utils/httpUtil'
import FlyHttp from '@/utils/FlyHttp'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$Http = Http
Vue.prototype.$get = Http.getRequest
Vue.prototype.$post = Http.postRequest
Vue.prototype.$FlyHttp = FlyHttp
const app = new Vue(App)
app.$mount()
