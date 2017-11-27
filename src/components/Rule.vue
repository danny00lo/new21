<template>
  <div class="rule">
    <div class="top2">
      <div class="box"></div>
      <div class="content">参与规则</div>
    </div>
    <p class="ruleContent">{{rule}}</p>
    <div class="wxTips">
      <p class="title">{{wxTips.title}}</p>
      <p class="content">{{wxTips.content}}</p>
      <div class="showWinPoint">
        <ul class="up">
          <li v-for='(item,index) in list'>
            {{item}}
          </li>
        </ul>
        <ul class="down">
          <li v-for='(item,index) in list2'>
            {{item}}
          </li>
        </ul>
      </div>
    </div>
    <div class="act" v-if="show == true">
      <div class="box"></div>
      <p class="text">{{activity}}</p>
    </div>
    <footer>
      {{footer}}
    </footer>
  </div>
</template>

<script>
  import {API} from '../assets/Api'

  export default {
    name: 'Rule',
    data() {
      return {
        rule: '每12人组成一支队伍，在未来21天里，每天早上6-8点之间\n' +
        '完成官方指定的早起打卡任务，队伍每天会有值日生通过\n' +
        '语音的方式负责叫醒其他队友，过程中队友可以彼此监督、\n' +
        '鼓励、支持。21天结束后累计早起打卡次数越多的队伍，\n' +
        '获得的奖金越高。',
        wxTips: {
          title: '各名次团队奖金支持',
          content: '比赛结束后48小时内以红包形式发放，可提现'
        },
        footer: '开赛时间 2017.12.18-2018.01.07',
        list: [1, 2, 3, '4-10', '11-20', '21-40'],
        list2: ['¥5000', '¥3000', '¥2000', '¥800', '¥300', '¥240'],
        activity: 'Liam30秒前报名并加入队伍#早起毁一天#',
        data: [],
        show: false,
        id:0
      }
    },
    created() {
      let self = this;
      let params = {
        num: 10
      };
      API.getData(params).then((res) => {
        console.log(res);
        if (res.data.list.length == 0) {
          this.show = false;
        } else {
          this.show = true;
          for (let i = 0; i < res.data.list.length; i++) {
            let abc = res.data.list[i].username + ' '+ this.dateChange(res.data.list[i].pay_time) + '前报名并加入队伍#' + res.data.list[i].roomname + '#';
            this.data.push(abc);
          }
          this.activity = this.data[res.data.list.length - 1]
        }
        let timer = setInterval(() => {
          self.changeText()
//          if (this.localTime == countDownTime) {
//            clearInterval(timer);
//
//          }
        }, 2000)
      });
    },
    methods: {
      dateChange(time) {
        let nowTime = (new Date()).valueOf();
        let countDown = nowTime / 1000 - time;
        let timeData;
        if (countDown < 60) {
          timeData = Math.floor(Math.abs(countDown)) + "秒";
          return timeData
        } else if (countDown < 60 * 60) {
          timeData = Math.floor(Math.abs(countDown)/60) + "分";
          return timeData;
        } else {
          timeData = Math.floor(Math.abs(countDown)/(60*60)) + "小时";
          return timeData;
        }
      },
      changeText(){
        this.activity = this.data[this.id];
        this.id++;
        if (this.id >= this.data.length){
          this.id = 0;
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="">
  ul, li {
    list-style: none;
  }

  .rule {
    background: #ffffff;
    box-shadow: 0 2px 16px 0 rgba(5, 0, 30, 0.16);
    border-radius: 8px;
    margin: -35px auto 0 auto;
    width: (341/375*100%);
    .top2 {
      padding: 19px 0 15px 0;
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
    .ruleContent {
      font-size: 12px;
      color:#4A4A4A;
      letter-spacing: -0.1px;
      text-align: left;
      margin: 0 auto;
      width: (310/375*100%);
    }
    .wxTips {
      padding-top: 14px;
      .title {
        font-size: 14px;
        color: #141414;
        letter-spacing: 0;
        text-align: left;
        margin: 0 auto;
        width: (310/375*100%);
      }
      .content {
        font-size: 10px;
        color: #999999;
        letter-spacing: -0.07px;
        text-align: left;
        margin: 0 auto;
        width: (310/375*100%);
      }
      .showWinPoint {
        margin: 3px auto 0 auto;
        background: #ffd207;
        border-radius: 6px;
        width: (307/375*100%);
        height: 100px;
        .up {
          opacity: 0.4;
          background: #ffffff;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          li {
            width: 20%;
            border-left: 1px solid rgba(255, 255, 255, .35);
            text-align: center;
            font-size: 10px;
            color: #292d5a;
            letter-spacing: -0.07px;
            height: 50px;
            line-height: 50px;
          }
          li:first-child {
            border: none;
          }
        }
        .down {
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          li {
            width: 20%;
            height: 50px;
            border-left: 1px solid rgba(255, 255, 255, .35);
            text-align: center;
            font-size: 10px;
            color: #292d5a;
            line-height: 50px;
          }
          li:first-child {
            border: none;
          }
        }
      }
    }
    .act {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 9px 0;
      .box {
        background: #00cd82;
        width: 10px;
        height: 10px;
        border-radius: 100%;
      }
      .text {
        margin-left: 3%;
        font-size: 12px;
        color: #00cc81;
        letter-spacing: 0;
        text-align: center;
      }
    }
    footer {
      font-size: 10px;
      color: #666666;
      letter-spacing: 0;
      text-align: center;
      padding-bottom: 13px;
    }
  }
</style>
