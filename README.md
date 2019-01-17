# wechat-personal

> A Mpvue project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 进行个人配置
> 遇到app.json 解析失败，可能是mpvue-loader的问题
### mpvue 主要生命周期
 > onShow()，监听页面加载  
  onLoad()，监听页面显示  
  onHide()，监听页面隐藏  
  onUnload()，监听页面卸载  
## 快速上手教程
> [mpvue-docs](http://mpvue.com/mpvue/quickstart/#4-2018723)
### step1
下载stylus 相关包
``` bash
yarn add stylus stylus-loader -D
```

### step2
下载pug 相关包
``` bash
yarn add  pug pug-loader -D
```
