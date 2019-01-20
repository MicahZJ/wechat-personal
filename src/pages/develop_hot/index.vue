<template lang="pug">
  scroll-view#hot-wrapper(scroll-y @scrolltolower="lowerGetData")
    swiper-box(:getNewsData="newsData")
    main-box(:getNewsData="newsData")
</template>

<script src="./control.js"></script>

<style lang="stylus" src="./style.styl"></style>
