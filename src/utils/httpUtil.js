import config from './config'
import { badRequest, errRequest, wxNavBarLoading, wxHideNavBarLoading } from './wxapi'

class Http {
  /**
   * get类型请求
   * @param url  subUrl
   * @param param  参数
   * @param _lastresolve 用于失效时重新请求的回调，外部调用不传
   * @returns {Promise<any>}
   */
  async getRequest(_api, _param = {}, _lastresolve, _count) {
    if (_param.xc) {
      console.log('url', config.wechatRootUrl)
      _api = config.wechatRootUrl + _api
    } else {
      console.log('url', config.rootUrl)
      _api = config.rootUrl + _api
    }
    return new Promise((resolve, reject) => {
      wxNavBarLoading()
      wx.request({
        url: _api,
        data: _param,
        header: {
        },
        success: async res => {
          wxHideNavBarLoading()
          if (res.data.code === 4001) {
            console.log('1')
            _count = _count || 0
            _count++
            if (_count > 2) {
              errRequest('登录异常，请联系客服')
            } else {
              // _LoginManager.clearSessionKey()
              // _param.client_session_key = await _LoginManager.getSessionKey()
              this.getRequest(_api, _param, resolve, _count)
            }
          } else if (res.data.code === 500) {
            console.log('2')
            let errstr = `${res.data.code}:${res.data.message}`
            errRequest(errstr)
          } else {
            console.log('3')
            _lastresolve ? _lastresolve(res.data) : resolve(res.data)
          }
        },
        fail: err => {
          reject(err)
          wxHideNavBarLoading()
          badRequest()
        }
      })
    })
  }

  /**
   * post类型请求
   * @param url  subUrl
   * @param param  参数
   * @param _lastresolve 用于失效时重新请求的回调，外部调用不传
   * @returns {Promise<any>}
   */
  async postRequest(_api, _param = {}, _lastresolve, _count) {
    if (_param.xc) {
      console.log('url', config.wechatRootUrl)
      _api = config.wechatRootUrl + _api
    } else {
      console.log('url', config.rootUrl)
      _api = config.rootUrl + _api
    }
    return new Promise((resolve, reject) => {
      wxNavBarLoading()
      wx.request({
        url: _api,
        method: 'POST',
        data: _param,
        header: {
        },
        success: async res => {
          wxHideNavBarLoading()
          if (res.data.code === 4001) {
            console.log('1')
            _count = _count || 0
            _count++
            if (_count > 2) {
              errRequest('登录异常，请联系客服')
            } else {
              // _LoginManager.clearSessionKey()
              // param.client_session_key = _LoginManager.getSessionKey()
              this.postRequest(_api, _param, resolve, _count)
            }
          } else if (res.data.code === 500 || res.data.code === 403) {
            console.log('2')
            let errstr = `${res.data.code}:${res.data.message}`
            errRequest(errstr)
          } else {
            console.log('3')
            _lastresolve ? _lastresolve(res.data) : resolve(res.data)
          }
        },
        fail: err => {
          reject(err)
          wxHideNavBarLoading()
          badRequest()
        }
      })
    })
  }
}

export default new Http()
