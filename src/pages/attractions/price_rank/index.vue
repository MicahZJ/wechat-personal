<template lang="pug">
  div.rank-wrapper
    li.rank-box(v-for="(item, index) in getTopicData" :key="index")
      div.base-content
        div.box-left
          span
          span
          span
        div.box-right
          span
      div.more-content
</template>

<script src="./control.js"></script>

<style lang="stylus" src="./style.styl"></style>
