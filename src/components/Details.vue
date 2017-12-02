<template>
  <div class="details">
    <div class="title">
      <p>
        赛事设计详细说明
      </p>
    </div>
    <div class="topDetails">
      <p>
        众所周知，习惯养成最难的是坚持。作为全球最大的习惯养成平台，种子习惯曾花一千多个日夜，研究上百万真实用户反馈，发现90%的人坚持不下来的原因是：<span>懒，忙，缺少方法，枯燥无味</span>。
      </p>
      <p>
        而21天早起对抗赛事的设计却巧妙的将<span>陪伴，暗示，周期性奖赏</span>结合在一起，可帮助大家更有效的养成早起习惯。
      </p>
    </div>
    <div class="box">
      <div class="boxTitle">
        <p>组队设计：原来早起还可以这么好玩</p>
      </div>
      <p class="contentPage">
        报名后即可组队，可系统分配、自己创建或者搜索特定队伍
      </p>
      <div class="boxContent">
        <img src="../assets/img/details_1.png" alt="">
      </div>
    </div>
    <div class="box">
      <div class="boxTitle2">
        <p>关于打卡：有你们陪伴，我怎么舍得睡懒觉</p>
      </div>
      <p class="contentPage">
        系统每天会给出指定的早起打卡任务，所有参赛队员需在早上5点至8点之间完成打卡，逾期无效
      </p>
      <div class="boxContent">
        <img src="../assets/img/details_2.png" alt="">
      </div>
    </div>
    <div class="box">
      <div class="boxTitle3">
        <p>关于提醒：别怕起不来，我会叫醒你</p>
      </div>
      <p class="contentPage">
        队伍中每天会有一名队员担当值日生，大家轮流值日，值日生早上8点前在APP里录制好一段叫醒的语音，所有没有起床打卡的队友都将收到实时的闹钟提醒和值日生的叫醒语音
      </p>
      <div class="boxContent">
        <img src="../assets/img/details_3.png" alt="">
      </div>
    </div>
    <div class="box">
      <div class="boxTitle3">
        <p>赛事拓展：未来，会有更多可能</p>
      </div>
      <div class="contentPage">
        <p>✔ 开放6人、9人、12人、16人等多梯度房间模式，允许用户发起和自创建。</p>
        <p>✔ 支持所有品类习惯小组开通对抗模式</p>
      </div>
      <div class="boxContent">
        <img src="../assets/img/details_4.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data() {
      return {
        msg: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="">
  .details{
    background: #ffffff;
    margin: 0 auto;
    width: (324/375*100%);
    .title{
      background: #ffd207;
      width: (187/324*100%);
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      padding: 10px 0;
      font-size:14px;
      color:#000000;
      p{
        margin-left: 26px;
        font-size:14px;
        color:#000000;
      }
    }
    .topDetails{
      margin: 0 auto;
      width: (267/324*100%);
      font-size:12px;
      color:#515151;
      text-align:left;
      padding: 24px 0;
      p{
        font-size:12px;
        color:#515151;
        text-align:left;
        span{
          font-size:12px;
          color: red;
        }
      }
      p:last-child{
        margin-top: 20px;
      }
    }
    .box{
      .boxTitle{
        background:#1e4df5;
        width:(267/324*100%);
        margin-left: 15px;
        height:24px;
        line-height: 24px;
        p{
          margin-left: 13px;
          font-size:14px;
          color:#ffffff;
          text-align:left;
        }
      }
      .boxTitle2{
        background:#1e4df5;
        width:(285/324*100%);
        margin-left: 15px;
        height:24px;
        line-height: 24px;
        p{
          margin-left: 13px;
          font-size:14px;
          color:#ffffff;
          text-align:left;
        }
      }
      .boxTitle3{
        background:#1e4df5;
        width:(255/324*100%);
        margin-left: 15px;
        height:24px;
        line-height: 24px;
        p{
          margin-left: 13px;
          font-size:14px;
          color:#ffffff;
          text-align:left;
        }
      }
      .boxContent{
        margin-left: 13px;
        padding-bottom: 40px;
        img{
          margin-left: 15px;
          width: (160/324*100%);
        }
      }
      .contentPage{
        width: (255/324*100%);
        margin: 17px auto 9px auto;
        font-size:12px;
        color:#515151;
        text-align:left;
        p{
          font-size:12px;
          color:#515151;
          text-align:left;
        }
      }
    }
  }
</style>
