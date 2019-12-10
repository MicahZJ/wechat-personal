<template>
  <div class="echarts-wrap">
    <mpvue-echarts :echarts="echarts" :onInit="handleInit" canvasId="bar" ref="echarts" />
  </div>
</template>

<script src="./control.js"></script>

<style scoped lang="stylus" src="./style.styl"></style>
