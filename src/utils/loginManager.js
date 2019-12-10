import { loginUrl } from '../api/api'
import config from './config'
import { wxNavBarLoading, wxHideNavBarLoading, badRequest, errRequest, wxNavPush } from './wxapi'
import WatchJS from 'melanke-watchjs'

// class CallBack {
//   constructor (callback) {
//     this.callback = callback
//   }
// }
class SingleLogin {
  constructor () {
    this.instance = null
    this.sessionKey = null
    this.customerId = null
    this._resolve = null
    this.callbacks = []
    this._lock = false
    this._watcher = null
    this._unwatch = null
  }

  static getInstance () {
    if (!this.instance) {
      this.instance = new SingleLogin()
    }
    return this.instance
  }

  async getSessionKey () {
    return new Promise(async (resolve, reject) => {
      this.callbacks.push(resolve)
      if (this._getSessionKey()) { // 获取session
        resolve(this._getSessionKey())
      } else { // 没有去重新获取session
        if (!this._lock) {
          this._lock = true
          await this.getLogin()
          resolve(this._getSessionKey())
        } else {
          if (!this._watcher) {
            this._watcher = WatchJS.watch
            this._unwatch = WatchJS.unwatch
          }
          await this.watcher()
          resolve(this._getSessionKey())
        }
      }
    })
  }

  /**
   * 登录
   * @returns {Promise<void>}
   */
  async getLogin () {
    let code = await this._wxLogin()
    await this._loginApi(code)
  }

  /**
   * 监听session-key存储
   * @returns {Promise<*>}
   */
  async watcher () {
    return new Promise((resolve, reject) => {
      let _this = this
      this._watcher(_this, () => {
        if (_this._getSessionKey()) {
          resolve()
          this._unwatch(this, '_lock')
        }
      })
    })
  }

  /**
   * 获取登录code
   * @returns {Promise<*>}
   * @private
   */
  async _wxLogin () {
    return new Promise((resolve, reject) => {
      wx.login({
        success: res => {
          console.log('微信登录成功', res.code)
          resolve(res.code)
        },
        fail: err => {
          console.log('获取微信登录code失败', err)
          errRequest('获取微信登录code失败')
        },
        complete: (msg) => {
          console.log('login无条件回调', msg)
        }
      })
    })
  }

  /**
   * 获取openid和session等信息
   * @param code
   * @returns {Promise<void>}
   * @private
   */
  async _loginApi (code) {
    let param = { 'code': code }
    let res = await this._wxRequest(param, config.rootUrl + loginUrl, 'POST')
    console.log('登录返回', res.obj)
    let loginArr = res.obj

    this._setSessionKey(loginArr.session_key)
    this._setCustomerId(loginArr.openid)
    this._wxGetUserInfo('')
  }

  /**
   * 获取用户授权
   * @param data
   * @param type
   * @returns {Promise<*>}
   */
  async handleUserInfo (data, type) {
    return new Promise(async (resolve, reject) => {
      if (!data) {
        let path = `/pages_subpack/accredit_page/accredit_page?type=${type}`
        wxNavPush(path)
      } else {
        // this._syncUserInfo()
        this._saveUserInfo(JSON.parse(data.rawData))
        resolve()
        if (this._resolve) {
          this._resolve()
        }
      }
    })
  }

  /**
   * 保存个人信息到全局变量中
   * @param info
   * @private
   */
  _saveUserInfo (info) {
    getApp().appData.userInfo = info
  }

  /**
   * 同步个人信息
   * @returns {Promise<void>}
   * @private
   */
  // async _syncUserInfo () {
  //   let session = await this._getSessionKey()
  //   let userInfo = getApp().appData.userInfo
  //   if (userInfo) {
  //     let param = {
  //       'client_session_key': session,
  //       nickName: userInfo.nickName,
  //       avatarUrl: userInfo.avatarUrl,
  //       gender: userInfo.gender,
  //       city: userInfo.city,
  //       province: userInfo.province,
  //       country: userInfo.country
  //     }
  //     this._wxRequest(param, config.rootUrl + syncUserInfoUrl, 'POST', true)
  //   }
  // }

  /**
   * 补偿登录
   * @param param
   * @returns {Promise<void>}
   * @private
   */
  // async _remedyLogin (param) {
  //   let _param = {
  //     cb_app_id: config.cbAppId,
  //     key: this._getSessionKey(),
  //     iv: param.iv,
  //     encrypted_data: param.encryptedData
  //   }
  //   let res = await this._wxRequest(_param, config.rootUrl + remedyLoginUrl, 'POST')
  //   let loginList = res.split(',')
  //   this._setSessionKey(loginList[0])
  //   this._setCustomerId(loginList[1])
  //   setTimeout(function () {
  //     getApp().appData.$Gio('setUserId', loginList[1])
  //   }, 2000)
  // }

  /**
   * 请求session和openid等数据
   * @param param
   * @param url
   * @param method
   * @param tip
   * @returns {Promise<*>}
   * @private
   */
  async _wxRequest (param, url, method, tip) {
    return new Promise((resolve, reject) => {
      let _header = {
        'content-type': 'application/json;charset=UTF-8'
      }
      if (param.client_session_key) {
        _header['WXA-TOKEN'] = param.client_session_key
      }
      wxNavBarLoading()
      wx.request({
        url: url,
        method: method,
        data: param,
        header: _header,
        success: res => {
          wxHideNavBarLoading()
          if (res.data.code === 2000) {
            resolve(res.data)
          } else {
            // if (!tip) {
            //   errRequest(res.data.message ? res.data.message : '登录失败')
            // }
            // let _manager = SingleLogin.getInstance()
            // if (_manager._lock) { _manager._lock = false }
          }
        },
        fail: err => {
          console.log('获取openid和session失败', err)
          wxHideNavBarLoading()
          badRequest()
          let _manager = SingleLogin.getInstance()
          if (_manager._lock) { _manager._lock = false }
        }
      })
    })
  }

  /**
   * 获取用户信息  获取敏感数据 必须登录后调用
   * @param callback
   * @returns {Promise<any>}
   */
  async _wxGetUserInfo (type) {
    return new Promise((resolve, reject) => {
      wx.getUserInfo({
        withCredentials: true,
        lang: 'zh_CN',
        success: async res => {
          // getApp().appData.$Gio('setVisitor', res.userInfo);//growingio 设置用户属性
          console.log('用户授权信息', res.userInfo)
          await this.handleUserInfo(res, type)
          resolve()
        },
        fail: err => {
          console.log('_wxGetUserInfo', err)
          this._resolve = resolve
          let path = `/pages/accredit_page/main?type=${type}`
          wxNavPush(path)
        }
      })
    })
  }

  clearSessionKey () {
    this.sessionKey = null
  }
  _getSessionKey () {
    return this.sessionKey
  }
  _getCustomerId () {
    return this.customerId
  }
  async _setSessionKey (session) {
    this.sessionKey = session
  }
  _setCustomerId (customerId) {
    this.customerId = customerId
  }
}
export default SingleLogin
