<template>
  <div class="top">
    <div class="top2">
      <div class="box"></div>
      <div class="content">玩法介绍</div>
    </div>
    <ul class="topContent">
      <li>
        <div class="num">{{msg1.num}}</div>
        <div class="title">{{msg1.title}}</div>
        <div class="content">{{msg1.content}}</div>
      </li>
      <li>
        <div class="num">{{msg2.num}}</div>
        <div class="title">{{msg2.title}}</div>
        <div class="content">{{msg2.content}}</div>
      </li>
      <li>
        <div class="num">{{msg3.num}}</div>
        <div class="title">{{msg3.title}}</div>
        <div class="content">{{msg3.content}}</div>
      </li>
      <li>
        <div class="num">{{msg4.num}}</div>
        <div class="title">{{msg4.title}}</div>
        <div class="content">{{msg4.content}}</div>
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
          title: '报名',
          content: '19.9元/21天'
        },
        msg2: {
          num: 2,
          title: '组队',
          content: '每12人一队'
        },
        msg3: {
          num: 3,
          title: '打卡',
          content: '早上6-8点打卡'
        },
        msg4: {
          num: 4,
          title: '奖励',
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
    height: 177px;
    background: #fff;
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
    justify-content: center;
    background: #fff;
    align-items: center;
    li {
      width: 25%;
      list-style: none;
      text-align: center;
      .num {
        background: #00cd81;
        width: 24px;
        height: 24px;
        border-radius: 100%;
        margin: 0 auto;
        color: #fff;
        line-height: 24px;
      }
      .title {
        margin-top: 8px;
        font-size: 14px;
        color: #333333;
        letter-spacing: -0.48px;
      }
      .content {
        font-size: 10px;
        color: #999999;
        letter-spacing: -0.34px;
      }
    }
  }
</style>
