<template lang="pug">
  div.swiper-wrapper
    swiper.swiper-box(:indicator-dots="indicatorDots"
                      :autoplay="autoPlay"
                      :interval="interval"
                      :duration="duration"
                      :circular="circular"
                      @change="currentIndex")
      swiper-item(v-for="(item, index) in getNewsData" :key="index" v-if="index < 4")
        image.swiper-image(:src="item.article_cover" mode="widthFix")
    div.swiper-text-box(v-for="(nItem, nIndex) in getNewsData" :key="nIndex" v-if="nIndex === current")
      span.title-text {{nItem.article_title}}
      div.nickname-box
        span.box-left 作者：{{nItem.author[0].nickname}}
        span.box-right(v-if="nItem.translator") 译者：{{nItem.translator[0].nickname}}
      span.content-text {{nItem.article_summary}}
</template>

<script src="./control.js"></script>

<style scoped lang="stylus" src="./style.styl"></style>
