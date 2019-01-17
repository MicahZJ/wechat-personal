<template lang="pug">
  scroll-view#attractions-wrapper(scroll-y @scrolltolower="lowerGetData")
    div.tabbar-box
      li.box-content(v-for="(item, index) in arrList" :key="item.id" @click="toggleIndex(index)")
        span.content-text(:class="{'active': toggleNum === item.id}") {{item.title}}
        span.select-line(:class="{'active': toggleNum === item.id}")
    price-box(v-if="toggleNum === 0")
</template>

<script src="./control.js"></script>

<style lang="stylus" src="./style.styl"></style>
