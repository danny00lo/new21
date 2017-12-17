<template>
  <div class="img">
    <img src="../assets/img/1.png" alt="">
    <img src="../assets/img/2.png" alt="">
    <img src="../assets/img/3.png" alt="">
    <img src="../assets/img/4.png" alt="">
    <img src="../assets/img/5.png" alt="">
    <img src="../assets/img/6.png" alt="">
    <img src="../assets/img/7.png" alt="">
  </div>
</template>

<script>
  export default {
    name: 'Img',
    data() {
      return {
        msg: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="">
  .img{
    img{
      width: 100%;
    }
  }
</style>
