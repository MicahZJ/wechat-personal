<script src="./control.js"></script>
<style lang="stylus" src="./style.styl"></style>
<template lang="pug">
    .main
        .logo-contant
        .btn-contant
            button(class='btn' open-type="getUserInfo" lang="zh_CN" @getuserinfo='user_info') 授权登录
</template>
