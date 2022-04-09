<template>
  <div class="bbc">
    <div class="nav">
      健 康 数 据
    </div>
    <div class="box" @click="goBlood">
      <!-- <p>血氧</p> -->
      <div class="img"><img src="@/assets/xieyang.png"/></div>
      <div class="img" v-if="bloodOxygen.length !== 0">
        <p>血氧 ： {{bloodOxygen[0]}}%</p>
        <p style="font-size:13px;color:rgb(107, 110, 112);">时间:{{health[0][0].time}}</p>
      </div>
      <div class="button">
        <van-button  hairline round  type="danger" size="mini" v-if="bloodOxygen[0]>97">较高</van-button>
        <van-button  hairline round  type="warning" size="mini" v-if="bloodOxygen[0]<90">较低</van-button>
        <van-button  hairline round  type="primary" size="mini" v-if="bloodOxygen[0]<=97&&bloodOxygen[0]>=90">正常</van-button>
      </div>
    </div>
    <div class="box" @click="goTemperature">
      <div class="img"><img src="@/assets/tiwenjilu-qietu.png"/></div>
      <div class="img" v-if="bloodOxygen.length !== 0">
        <p>体温 ： {{temperature[0]}}℃</p>
        <p style="font-size:13px;color:rgb(107, 110, 112);">时间:{{health[0][0].time}}</p>
      </div>
      <div class="button">
        <van-button  hairline round  type="danger" size="mini" v-if="temperature[0]>37.5">较高</van-button>
        <van-button  hairline round  type="warning" size="mini" v-if="temperature[0]<35.7">较低</van-button>
        <van-button  hairline round  type="primary" size="mini" v-if="temperature[0]<=37.5&&temperature>=35.7">正常</van-button>
      </div>
      </div>
    <div class="box" @click="goHeartbeat">
      <div class="img"><img src="@/assets/xinshuai.png"/></div>
      <div class="img" v-if="bloodOxygen.length !== 0">
        <p>心率 ： {{heartbeat[0]}}次/分</p>
        <p style="font-size:13px;color:rgb(107, 110, 112);">时间:{{health[0][0].time}}</p>
      </div>
      <div class="button">
        <van-button  hairline round  type="danger" size="mini" v-if="heartbeat[0]>100">较高</van-button>
        <van-button  hairline round  type="warning" size="mini" v-if="heartbeat[0]<60">较低</van-button>
        <van-button  hairline round  type="primary" size="mini" v-if="heartbeat[0]<=100&&heartbeat[0]>=60">正常</van-button>
      </div>
      </div>
      <div class="box" @click="goAlcohol">
      <div class="img"><img src="@/assets/tizhong.png"/></div>
      <div class="img" v-if="bloodOxygen.length !== 0">
        <p>体重 ： 80.3 Kg</p>
        <p style="font-size:13px;color:rgb(107, 110, 112);">时间:{{health[0][0].time}}</p>
      </div>
      <div class="button">
        <van-button  hairline round  type="danger" size="mini" v-if="0">危险</van-button>
        <van-button  hairline round  type="primary" size="mini" v-if="1">正常</van-button>
      </div>
    </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState(['health', 'token']),
    ...mapGetters(['heartbeat', 'temperature', 'bloodOxygen'])
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
