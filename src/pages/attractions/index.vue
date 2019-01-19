<template lang="pug">
  scroll-view#attractions-wrapper(scroll-y @scrolltolower="lowerGetData")
    div.tabbar-box
      div.update-box(v-if="count > 0")
        span.update-count {{count}}
        span.update-text 有这么多消息，点击查看最新哦～
      li.box-content(v-for="(item, index) in arrList" :key="item.id" @click="toggleIndex(index)")
        span.content-text(:class="{'active': toggleNum === item.id}") {{item.title}}
        span.select-line(:class="{'active': toggleNum === item.id}")
    news-box(v-if="toggleNum === 0" :getTopicData="topicData")
    play-box(v-if="toggleNum === 1")
</template>

<script src="./control.js"></script>

<style lang="stylus" src="./style.styl"></style>
