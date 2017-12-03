<template>
  <div class="footer">
    <div class="father">
      <div>
        <img class="logo" src="../assets/img/logo_footer.png" alt="">
      </div>
      <div class="mainText">
        前往种子习惯app参赛
      </div>
      <div class="downLoad" v-on:click="downloadApp()">
        点击前往
      </div>
    </div>
  </div>
</template>

<script>
  import {downloadURL} from '../assets/config'
  export default {
    name: 'Footer',
    data() {
      return {
        msg: ''
      }
    },
    methods: {
      downloadApp() {
        console.log("mlink");
//        window.location.href = downloadURL;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped="">
  .footer {
    position: fixed;
    bottom: 0;
    background: #1e4df5;
    box-shadow: 0 -2px 16px 0 rgba(0, 0, 0, 0.20);
    width: 100%;
    height: 68px;
    z-index: 1000;
    .father {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 68px;
      .mainText {
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #ffffff;
        letter-spacing: -0.14px;
        text-align: left;
        width: 45%;
        margin-left: 3%;
      }
      .downLoad {
        background: #ffffff;
        box-shadow: 0 0 16px 0 rgba(111, 121, 232, 0.50);
        border-radius: 100px;
        width: 109px;
        height: 38px;
        text-align: center;
        line-height: 38px;
        color: #292d5a;
      }
      .logo {
        width: 51px;
        height: 51px;
      }
    }
  }
</style>
