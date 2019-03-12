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

getApp().appData = {
  homeRefresh: true,
  recordRefresh: true,
  cityCode: null,
  city: null
}

getApp().appData.launchTimeStramp = +new Date()

try {
  const updateManager = wx.getUpdateManager()

  updateManager.onCheckForUpdate(function (res) {
    // 请求完新版本信息的回调
    console.log(res.hasUpdate)
  })

  updateManager.onUpdateReady(function () {
    wx.showModal({
      title: '更新提示',
      content: '新版本已经准备好，是否重启应用？',
      success: function (res) {
        if (res.confirm) {
          // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
          updateManager.applyUpdate()
        }
      }
    })
  })
} catch (e) {}
