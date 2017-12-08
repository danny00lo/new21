<template>
  <div class="process">
    <!--<div class="top2">-->
      <!--<div class="box"></div>-->
      <!--<div class="content">参赛流程</div>-->
    <!--</div>-->
    <div class="title2">
      <p>
        参赛流程
      </p>
    </div>
    <div class="step">
      <div class="start">{{startGame}}</div>
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"></div>
      <div class="box2"></div>
      <div class="box3"></div>
      <div class="box2"></div>
      <div class="box3"></div>
      <div class="end">{{endGame}}</div>
      <div class="startGame">
        <p>{{process.num1}}</p>
        <i class="download"></i>
      </div>
      <div class="startGame2">
        <i class="team"></i>
        <p>{{process.num2}}</p>
      </div>
      <div class="startGame3">
        <p>{{process.num3}}</p>
        <i class="wait"></i>
      </div>
      <div class="content1">
        <p class="title">{{process.title1}}</p>
        <p class="content">{{process.content1}}</p>
      </div>
      <div class="content2">
        <p class="title">{{process.title2}}</p>
        <p class="content">{{process.content2}}</p>
      </div>
      <div class="content3">
        <p class="title">{{process.title3}}</p>
        <p class="content">{{process.content3}}</p>
      </div>
    </div>
    <div class="last">
      最终解释权归种子习惯所有
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Process',
    data() {
      return {
        msg: '',
        startGame: '开始',
        endGame: '完成参赛',
        process:{
          num1:'下载',
          num2:'组队',
          num3:'开赛',
          title1:'01',
          title2:'02',
          title3:'03',
          content1:'下载种子习惯app报名',
          content2:'报名后进行组队',
          content3:'12月21日正式开赛'
        }
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="">
  .process {
    background: #ffffff;
    /*box-shadow: 0 2px 16px 0 rgba(5, 0, 30, 0.16);*/
    /*border-radius: 8px;*/
    margin: 0 auto;
    width: (324/375*100%);
    .title2{
      background: #ffd207;
      width: (126/324*100%);
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      padding: 10px 0;
      font-size:14px;
      color:#000000;
      margin-bottom: 27px;
      p{
        margin-left: 26px;
        font-size:14px;
        color:#000000;
      }
    }
    .top2 {
      padding: 19px 0 25px 0;
      margin: 0 auto;
      width: (319/375*100%);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .box {
        background: #00cc81;
        width: 4px;
        height: 16px;
      }
      .content {
        font-size: 14px;
        color: #333333;
        letter-spacing: -0.1px;
        text-align: left;
        margin-left: 9px;
      }
    }
    .step {
      position: relative;
      width: 100%;
      margin: 0 auto;
      padding-bottom: 22px;
      .startGame {
        position: absolute;
        left: (140/375*100%);
        top: 50px;
        font-size: 9px;
        color: #1e4df5;
        letter-spacing: -0.07px;
        display: flex;
        justify-content: center;
        align-items: center;
        p{
          font-size: 9px;
        }
        .download{
          background: url(../assets/img/download.png)no-repeat;
          background-size: 100% 100%;
          width: 12px;
          height: 12px;
          display: block;
          margin-left: 4px;
        }
      }
      .startGame2 {
        position: absolute;
        left: (201/375*100%);
        top: 123px;
        font-size: 9px;
        color: #1e4df5;
        letter-spacing: -0.07px;
        display: flex;
        justify-content: center;
        align-items: center;
        p{
          font-size: 9px;
          margin-left: 4px;
        }
        .team{
          background: url(../assets/img/team.png)no-repeat;
          background-size: 100% 100%;
          width: 12px;
          height: 12px;
          display: block;
        }
      }
      .startGame3 {
        position: absolute;
        left: (140/375*100%);
        top: 194px;
        font-size: 9px;
        color: #1e4df5;
        letter-spacing: -0.07px;
        display: flex;
        justify-content: center;
        align-items: center;
        p{
          font-size: 9px;
        }
        .wait{
          background: url(../assets/img/wait.png)no-repeat;
          background-size: 100% 100%;
          width: 12px;
          height: 12px;
          display: block;
          margin-left: 4px;
        }
      }
      .start {
        background: #eaeaea;
        border-radius: 2px;
        width: (56/375*100%);
        margin: 0 auto 2px auto;
        height: 20px;
        line-height: 20px;
        text-align: center;
        color: #bfbfbf;
        font-size: 10px;
      }
      .box1 {
        border: 2px solid #1e4df5;
        width: 0px;
        height: 30px;
        margin: 0 auto;
      }
      .box2 {
        background: #1e4df5;
        width: 6px;
        height: 6px;
        border-radius: 100%;
        margin: 2px auto;
      }
      .box3 {
        border: 2px solid #1e4df5;
        width: 0px;
        height: 58px;
        margin: 0 auto;
      }
      .end {
        background: #1e4df5;
        border-radius: 2px;
        width: (66/375*100%);
        height: 20px;
        margin: 0 auto;
        font-size: 10px;
        color: #ffffff;
        text-align: center;
        line-height: 20px;
      }
      .content1{
        position: absolute;
        background: url(../assets/img/convert.png)no-repeat;
        background-size: 100% 100%;
        width: (165/375*100%);
        height: 58px;
        left: (201/375*100%);
        top: 40px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        .title{
          font-size:20px;
          color:#333333;
          letter-spacing:-0.14px;
          text-align:left;
          margin-left: 17px;
        }
        .content{
          font-size:12px;
          color:#666666;
          letter-spacing:-0.14px;
          text-align:left;
          margin-left: 17px;
        }
      }
      .content2{
        position: absolute;
        background: url(../assets/img/convert2.png)no-repeat;
        background-size: 100% 100%;
        width: (145/375*100%);
        height: 58px;
        left: (34/375*100%);
        top: 118px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        .title{
          font-size:20px;
          color:#333333;
          letter-spacing:-0.14px;
          text-align:left;
          margin-left: 8px;
        }
        .content{
          font-size:12px;
          color:#666666;
          letter-spacing:-0.14px;
          text-align:left;
          margin-left: 8px;
        }
      }
      .content3{
        position: absolute;
        background: url(../assets/img/convert.png)no-repeat;
        background-size: 100% 100%;
        width: (145/375*100%);
        height: 58px;
        left: (201/375*100%);
        top: 189px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        .title{
          font-size:20px;
          color:#333333;
          letter-spacing:-0.14px;
          text-align:left;
          margin-left: 17px;
        }
        .content{
          font-size:12px;
          color:#666666;
          letter-spacing:-0.14px;
          text-align:left;
          margin-left: 17px;
        }
      }
    }
    .last{
      margin-left: 17px;
      padding-bottom: 22px;
      font-size:10px;
      color:#888585;
      text-align:left;
    }
  }
</style>
