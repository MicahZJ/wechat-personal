let rootUrl
let wechatRoot

if (process.env.NODE_ENV === 'production') {
  // 正式环境
  rootUrl = ''
  wechatRoot = ''
} else {
  // 测试环境
  rootUrl = 'https://api.readhub.cn'
  wechatRoot = 'https://sec-m.ctrip.com'
}

const config = {
  rootUrl: rootUrl,
  wechatRootUrl: wechatRoot
}

export default config
