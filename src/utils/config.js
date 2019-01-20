let rootUrl
let wechatRoot

if (process.env.NODE_ENV === 'production') {
  // 正式环境
  rootUrl = 'https://api.readhub.cn'
  wechatRoot = 'https://www.infoq.cn'
} else {
  // 测试环境
  rootUrl = 'https://api.readhub.cn'
  wechatRoot = 'https://www.infoq.cn'
}

const config = {
  rootUrl: rootUrl,
  wechatRootUrl: wechatRoot
}

export default config
