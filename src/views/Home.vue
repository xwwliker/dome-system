<template>
  <div class="bbc">
    <div class="nav">
      健 康 数 据
    </div>
    <!-- <div class="user">
      <van-grid>
        <van-grid-item icon="user-o" text="uesr1" />
        <van-grid-item icon="user-o" text="user2" />
        <van-grid-item icon="user-o" text="user3" />
        <van-grid-item icon="user-o" text="user4" />
      </van-grid>
    </div> -->
     <!-- <div class="chart">
       <van-button square  type="primary" size="normal" color="#007BFF"  @click="selected=1">酒精</van-button>
       <van-button square  type="primary" size="normal" color="#007BFF"  @click="selected=2">血压</van-button>
       <van-button square  type="primary" size="normal" color="#007BFF"  @click="selected=3">心跳</van-button>
    </div> -->
    <!-- <Alcohol v-if="selected===1"/>
    <Blood v-if="selected===2"/>
    <Heartbeat v-if="selected===3"/> -->
    <div class="box" @click="goBlood">
      <!-- <p>血氧</p> -->
      <div class="img"><img src="@/assets/xieyang.png"/></div>
      <div class="img" v-if="lastHistory.a_bloodOxygen!==undefined">
        <p>血氧 ： {{lastHistory.a_bloodOxygen}}</p>
        <p style="font-size:13px;color:rgb(107, 110, 112);">时间:{{lastHistory.drivingInformation.end}}</p>
      </div>
      <!-- <div class="button"><van-button  hairline round  type="primary" size="mini">充足</van-button></div> -->
      <!-- <div class="button"><van-button  hairline round  type="danger" size="mini">较低</van-button></div> -->
      <div class="button">
        <van-button  hairline round  type="danger" size="mini" v-if="lastHistory.a_bloodOxygen>97">较高</van-button>
        <van-button  hairline round  type="warning" size="mini" v-if="lastHistory.a_bloodOxygen<90">较低</van-button>
        <van-button  hairline round  type="primary" size="mini" v-if="lastHistory.a_bloodOxygen<=97&&lastHistory.a_bloodOxygen>=90">正常</van-button>
      </div>
    </div>
    <div class="box" @click="goTemperature">
      <div class="img"><img src="@/assets/tiwenjilu-qietu.png"/></div>
      <div class="img" v-if="lastHistory.a_bloodOxygen!==undefined">
        <p>体温 ： {{lastHistory.a_temperature}}</p>
        <p style="font-size:13px;color:rgb(107, 110, 112);">时间:{{lastHistory.drivingInformation.end}}</p>
      </div>
      <div class="button">
        <van-button  hairline round  type="danger" size="mini" v-if="lastHistory.a_temperature>37.5">较高</van-button>
        <van-button  hairline round  type="warning" size="mini" v-if="lastHistory.a_temperature<35.7">较低</van-button>
        <van-button  hairline round  type="primary" size="mini" v-if="lastHistory.a_temperature<=37.5&&lastHistory.a_temperature>=35.7">正常</van-button>
      </div>
      </div>
    <div class="box" @click="goHeartbeat">
      <div class="img"><img src="@/assets/xinshuai.png"/></div>
      <div class="img" v-if="lastHistory.a_bloodOxygen!==undefined">
        <p>心率 ： {{lastHistory.a_heartbeat}}</p>
        <p style="font-size:13px;color:rgb(107, 110, 112);">时间:{{lastHistory.drivingInformation.end}}</p>
      </div>
      <div class="button">
        <van-button  hairline round  type="danger" size="mini" v-if="lastHistory.a_heartbeat>100">较高</van-button>
        <van-button  hairline round  type="warning" size="mini" v-if="lastHistory.a_heartbeat<60">较低</van-button>
        <van-button  hairline round  type="primary" size="mini" v-if="lastHistory.a_heartbeat<=100&&lastHistory.a_heartbeat>=60">正常</van-button>
      </div>
      </div>
      <div class="box" @click="goAlcohol">
      <div class="img"><img src="@/assets/a-winejiu.png"/></div>
      <div class="img" v-if="lastHistory.a_bloodOxygen!==undefined">
        <p>酒精 ： 0</p>
        <p style="font-size:13px;color:rgb(107, 110, 112);">时间:{{lastHistory.drivingInformation.end}}</p>
      </div>
      <div class="button">
        <van-button  hairline round  type="danger" size="mini" v-if="0">危险</van-button>
        <van-button  hairline round  type="primary" size="mini" v-if="1">正常</van-button>
      </div>
    </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState(['lastHistory', 'token'])
  },
  data () {
    return {
      selected: 1
    }
  },
  methods: {
    goAlcohol () {
      this.$router.push('/health/alcohol')
    },
    goBlood () {
      this.$router.push('/health/bloodoxygen')
    },
    goHeartbeat () {
      this.$router.push('/health/heartbeat')
    },
    goTemperature () {
      this.$router.push('/health/temperature')
    }
  },
  mounted () {
    if (this.token.length === 0) {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
img{
  height: 100px;
  width: 320px;
}
.nav{
  height: 46px;
  background-color: #007bffd5;
  text-align: center;
  line-height: 46px;
  color: #fff;
  // word-spacing: 2px;
}
.chart{
  display: flex;
  height: 30px;
  justify-content: space-around;
}
.box{
  height: 90px;
  background-color: #fff;
  border: 1px   #fff solid;
  border-radius: 20px;
  margin: 10px;
  // box-shadow: 1px 1px 1px #888888;
  van-button{
    float: right;
  }
  .button{
    float: right;
    margin-top: 33px;
    margin-right: 5px;
  }
  .img{
    display: inline-block;
    margin-left: 5px;
  img{
    width: 40px;
    height: 40px;
    margin-right: 30px;
  }
  }
}
.bbc{
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #f1f9ffb6;
}

</style>
