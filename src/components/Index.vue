<template>
  <div class="index">
    <Top></Top>
    <Rule></Rule>
    <Details></Details>
    <Process></Process>
    <!--<Explain></Explain>-->
    <Download></Download>
  </div>
</template>

<script>
  import Download from './Footer.vue'
  import Explain from './Explain.vue'
  import Rule from './Rule.vue'
  import Process from './Process.vue'
  import Top from './Top.vue'
  import Details from './Details.vue'

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
      Details
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="">
  .index{
    padding-bottom: 68px;
  }
</style>
