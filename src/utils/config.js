let rootUrl
let wechatRoot

if (process.env.NODE_ENV === 'production') {
  // 正式环境api接口地址
  rootUrl = ''
  wechatRoot = ''
} else {
  // 测试
  rootUrl = 'https://api.readhub.cn'
  wechatRoot = ''
  // mock server http://47.97.4.140
}

const config = {
  rootUrl: rootUrl,
  wechatRootUrl: wechatRoot
}

export default config
