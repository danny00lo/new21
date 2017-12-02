<template>
  <div class="explain">
    <div class="top">
      <div class="box"></div>
      <div class="content">详细说明</div>
    </div>
    <div class="explainContent">
      <p>{{msg1.title}}</p>
      <p>{{msg1.content}}</p>
    </div>
    <div class="explainContent">
      <p>{{msg2.title}}</p>
      <p>{{msg2.content}}</p>
    </div>
    <div class="explainContent">
      <p>{{msg3.title}}</p>
      <p>{{msg3.content}}</p>
    </div>
    <div class="explainContent">
      <p>{{msg4.title}}</p>
      <p>{{msg4.content}}</p>
    </div>
    <div class="explainContent">
      <p>{{msg5.title}}</p>
      <p>{{msg5.content}}</p>
    </div>
    <p class="explainContent">
      {{msgEx}}
    </p>
    <p class="footer">
      最终解释权归种子习惯所有
    </p>
  </div>
</template>

<script>


  export default {
    name: 'Explain',
    data() {
      return {
        msg1: {
          title:'1、关于组队',
          content:'完成报名后即可参与组队，可接受系统分配快速组队、自己创建队伍或者查找并加入特定队伍'
        },
        msg2:{
          title:'2、关于打卡',
          content:'系统每天会给出指定的早起打卡任务，所有参赛队员需在早上6点至8点之间完成打卡，逾期无效'
        },
        msg3:{
          title:'3、关于叫醒',
          content:'队伍中每天会有一名队员担当值日生，大家轮流值日，值日生早上8点前在APP里录制好一段叫醒的语音，所有没有起床打卡的队友都将收到实时的闹钟提醒和值日生的叫醒语音'
        },
        msg4:{
          title:'4、关于奖金',
          content:'排名前40的队伍均可获得奖金支持，队伍成员平分所获得的奖金，奖金会以红包的形式发放，支持提现'
        },
        msg5:{
          title:'5、其他支持',
          content:'报名成功后，每邀请5名队员加入，将获得19.9元的现金奖励'
        },
        msgEx:'种子习惯的使命是通过建立正向的社交连接帮助大家养成好习惯，建立可持续的生活方式。任何建议或合作意向可联系support@idothing.com'
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
1
<style lang="scss" scoped="">
  .explain {
    background: #ffffff;
    /*box-shadow: 0 2px 16px 0 rgba(5, 0, 30, 0.16);*/
    /*border-radius: 8px;*/
    margin: 0 auto;
    width: (324/375*100%);
    position: relative;
    .top{
      padding:19px 0 25px 0;
      margin: 0 auto;
      width: (319/375*100%);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .box{
        background:#00cc81;
        width:4px;
        height:16px;
      }
      .content{
        font-family:PingFangSC-Medium;
        font-size:14px;
        color:#333333;
        letter-spacing:-0.1px;
        text-align:left;
        margin-left: 9px;
      }
    }
    .explainContent{
      font-family:PingFangSC-Thin;
      font-size:12px;
      color:#4A4A4A;
      letter-spacing:0;
      text-align:left;
      width: (319/375*100%);
      margin: 0 auto 10px auto;
      p{
        font-size:12px;
        color:#4A4A4A;
        letter-spacing:0;
        text-align:left;
      }
    }
    .footer{
      margin: 10px auto 40px auto;
      padding-bottom: 40px;
      font-family:PingFangSC-Regular;
      font-size:12px;
      color:#4a4a4a;
      letter-spacing:0;
      text-align:left;
      width: (319/375*100%);
    }
  }
</style>
