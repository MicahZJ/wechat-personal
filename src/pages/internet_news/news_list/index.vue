<template lang="pug">
  div.news-wrapper
    li.news-box(v-for="(item, index) in getTopicData" :key="index" @click="showMore(item)")
      div.base-content
        div.box-left
          span.left-subtitle(:class="{'checked': item.checkFlag}") {{item.newsArray[0].title}}
          span.left-time {{item.createdTime}}
        div.box-right
          image.right-icon(:src="moreIcon")
          span.right-subtitle(v-if="item.showFlag") 隐藏
          span.right-subtitle(v-else) 更多
      div.more-content(v-if="item.showFlag")
        span.more-text {{item.summary}}
        li.from-source(v-for="(sItem, sIndex) in item.newsArray" :key="sIndex" @click="toWebView(sItem)")
          span.source-title {{sItem.title}}
          span.source-siteName {{sItem.siteName}}
          span.circle-class
</template>

<script src="./control.js"></script>

<style lang="stylus" src="./style.styl"></style>
