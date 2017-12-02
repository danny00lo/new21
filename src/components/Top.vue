<template>
  <div class="top">
    <!--<div class="top2">-->
      <!--<div class="box"></div>-->
      <!--<div class="content">玩法简介</div>-->
    <!--</div>-->
    <div class="title2">
      <p>
        玩法简介
      </p>
    </div>
    <ul class="topContent">
      <li>
        <div class="photo">
          <img src="../assets/img/top_2.png" alt="">
        </div>
        <div class="contentFather">
          <div class="title">{{msg1.title}}</div>
          <div class="content">{{msg1.content}}</div>
        </div>
      </li>
      <li>
        <div class="photo">
          <img src="../assets/img/top_2.png" alt="">
        </div>
        <div class="contentFather">
          <div class="title">{{msg2.title}}</div>
          <div class="content">{{msg2.content}}</div>
        </div>
      </li>
      <li>
        <div class="photo">
          <img src="../assets/img/top_3.png" alt="">
        </div>
        <div class="contentFather">
          <div class="title">{{msg3.title}}</div>
          <div class="content">{{msg3.content}}</div>
        </div>
      </li>
      <li>
        <div class="photo">
          <img src="../assets/img/top_4.png" alt="">
        </div>
        <div class="contentFather">
          <div class="title">{{msg4.title}}</div>
          <div class="content">{{msg4.content}}</div>
        </div>
      </li>
      <li>
        <div class="photo">
          <img src="../assets/img/top_5.png" alt="">
        </div>
        <div class="contentFather">
          <div class="title">{{msg5.title}}</div>
          <div class="content">{{msg5.content}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data() {
      return {
        list: [0, 1, 2, 3],
        msg1: {
          num: 1,
          title: '1.报名',
          content: '19.9元/21天'
        },
        msg2: {
          num: 2,
          title: '2.组队',
          content: '每12人组成一队'
        },
        msg3: {
          num: 3,
          title: '3.互助',
          content: '队伍值日生负责叫醒起不来的队友'
        },
        msg4: {
          num: 4,
          title: '4.打卡',
          content: '早上5-8点之间早起并打卡'
        },
        msg5: {
          num: 5,
          title: '5.奖励',
          content: '获胜队伍分钱'
        }
      }
    },
    created() {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="">
  .top {
    background: #fff;
    width: (324/375*100%);
    margin: 0 auto;
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
  }

  .topContent {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #fff;
    align-items: center;
    li {
      width: 100%;
      list-style: none;
      text-align: left;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-top: 18px;
      .num {
        background: #00cd81;
        width: 24px;
        height: 24px;
        border-radius: 100%;
        margin: 0 auto;
        color: #fff;
        line-height: 24px;
      }
      .contentFather{
        .title {
          margin-top: 8px;
          font-size: 14px;
          color:#1e4df5;
          letter-spacing: -0.48px;
        }
        .content {
          font-size: 10px;
          color:#515151;
          letter-spacing: -0.34px;
        }
      }
      .photo{
        margin: 0 12px;
        text-align: center;
        img{
          width: 50%;
        }
      }
    }
    li:first-child{
      margin-top: 0;
    }
    li:last-child{
      padding-bottom: 22px;
    }
  }
</style>
