<template>
  <div class="index">
    <!--<div class="background">-->
      <!--<img src="../assets/img/background_index.png" alt="">-->
    <!--</div>-->
    <!--<Top></Top>-->
    <!--<Rule></Rule>-->
    <!--<Details></Details>-->
    <!--<Process></Process>-->
    <!--&lt;!&ndash;<Explain></Explain>&ndash;&gt;-->
    <Photo></Photo>
    <Download></Download>
  </div>
</template>

<script>
  import Download from './Footer2.vue'
  import Explain from './Explain.vue'
  import Rule from './Rule.vue'
  import Process from './Process.vue'
  import Top from './Top.vue'
  import Details from './Details.vue'
  import Photo from './Img.vue'

  export default {
    name: 'Index',
    data() {
      return {
        msg: ''
      }
    },
    components:{
      Download,
      Explain,
      Rule,
      Process,
      Top,
      Details,
      Photo
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="">
  /*.background{*/
    /*position: relative;*/
    /*z-index: 1;*/
    /*img{*/
      /*width: 100%;*/
    /*}*/
  /*}*/
  /*.index{*/
    /*padding-bottom: 68px;*/
  /*}*/
</style>
