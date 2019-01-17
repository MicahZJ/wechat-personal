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
遇到app.json 解析失败，可能是mpvue-loader的问题

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