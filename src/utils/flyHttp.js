import config from './config'
// import { badRequest, errRequest, wxNavBarLoading, wxHideNavBarLoading } from './wxapi'
const Fly = require('flyio/dist/npm/wx')
const flyioHttp = new Fly()

class FlyHttp {
  async httpGet(_api, _param = {}, _lastresolve, _count) {
    if (_param.xc) {
      flyioHttp.interceptors.request.use((_config, promise) => {
        _config.headers['referer'] = ''
        return _config
      })

      flyioHttp.config.baseURL = config.wechatRootUrl
      console.log('flyUrl2', flyioHttp.config.baseURL)
      return new Promise((resolve, reject) => {
        flyioHttp.get(_api, _param).then((res) => {
          resolve(res)
        }).catch(err => {
          reject(err)
          console.log(err)
        })
      })
    }
  }
}
export default new FlyHttp()
