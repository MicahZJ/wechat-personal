<template lang="pug">
  div.main-wrapper
    li.main-box(v-for="(item, index) in getNewsData" :key="index" v-if="index > 3")
      div.box-left
        span.title-text {{item.article_title}}
        div.nick-box
          span.nickname-text 作者：{{item.author[0].nickname}}
          span.nickname-text-t(v-if="item.translator") 译者：{{item.translator[0].nickname}}
      div.box-right
        image.news-image(:src="item.article_cover" mode="aspectFill")
</template>

<script src="./control.js"></script>

<style scoped lang="stylus" src="./style.styl"></style>
