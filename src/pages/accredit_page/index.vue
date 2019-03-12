<script src="./control.js"></script>
<style lang="stylus" src="./style.styl"></style>
<template lang="pug">
    .main
        .logo-contant
            image(src="https://wxapp.lyancoffee.com/common/logo.png" class="logo")
            image(src="https://wxapp.lyancoffee.com/common/logo-text.png" class="logo-text")
        .btn-contant
            button(class='btn' open-type="getUserInfo" lang="zh_CN" @getuserinfo='user_info') 授权登录


    
        
        
</template>