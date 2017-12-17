<template>
  <div class="footer">
    <img src="../assets/img/8.png" alt="">
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
    width: 100%;
    z-index: 1000;
    img{
      width: 100%;
    }
  }
</style>
