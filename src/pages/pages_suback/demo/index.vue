<template lang="pug">
  div#mine-wrapper
    li(v-for="(item, index) in list"
       :key="index"
       @click="toggleSwitch(index)") {{item.title}}
    mpvue-echarts(:getOptions="options")
</template>

<script src="./control.js"></script>

<style lang="stylus" src="./style.styl"></style>
