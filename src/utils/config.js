let rootUrl
let wechatRoot
let bilibiliUrl

if (process.env.NODE_ENV === 'production') {
  // 正式环境
  rootUrl = 'https://api.readhub.cn'
  wechatRoot = 'https://www.infoq.cn'
} else {
  // 测试环境
  rootUrl = 'https://api.readhub.cn'
  wechatRoot = 'https://www.infoq.cn'
  bilibiliUrl = 'https://api.bilibili.com'
}

const config = {
  rootUrl: rootUrl,
  wechatRootUrl: wechatRoot,
  bilibiliUrl: bilibiliUrl
}

export default config
