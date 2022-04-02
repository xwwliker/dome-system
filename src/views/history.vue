<template>
  <div>
    <div class="nav">
      驾 驶 记 录
    </div>
    <!-- <div class="test">
      暂无驾驶记录!
    </div> -->
    <br>
    <div class="showcard">
      <span @click="$router.push('./weekhistory')">
        <p v-if="this.weekHistory.length">{{weekHistory.length}}天</p>
        <p class="min">本周驾驶天数</p>
      </span>
      <span>
        <p v-if="this.weekHistory.length">{{weekHistory.length}}次</p>
        <p class="min">本周驾驶次数</p>
      </span>
    </div>
    <br>
    <div>
      <div id="main" :style="{width: '100%', height: '300px'}" ></div>
    </div>
    <div class="title">
      <p v-if="weekHistory.length!=0">本周驾驶记录</p>
    </div>
    <router-link v-for="item in weekHistory" :key="item.drivingInformation.id" :to="{name: 'historydetail',params: {id:item.drivingInformation.id,obj: item}}">
      <div class="card">
          <van-icon name="todo-list-o" size="30px" color="black"/>
          <div>
            <p>开始时间: {{item.drivingInformation.begin}}</p>
            <p>结束时间: {{item.drivingInformation.end}}</p>
          </div>
      </div>
    </router-link>
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import * as echarts from 'echarts'
export default {
  name: 'history',
  computed: {
    ...mapState(['weekHistory', 'monthHistory']),
    ...mapGetters(['closeEye', 'attention'])
  },
  data () {
    return {

    }
  },
  created () {
    this.$nextTick(function () {
      this.drawLine()
    })
  },
  methods: {
    drawLine () {
      var chartDom = document.getElementById('main')
      var myChart = echarts.init(chartDom)
      var option

      option = {
        legend: {
          data: ['闭眼', '注意力分散'],
          icon: 'rect'
        },
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {},
        series: [
          {
            name: '闭眼',
            type: 'bar',
            data: this.closeEye,
            itemStyle: {
              color: 'rgb(100, 204, 245,0.8)'
            }
          },
          {
            name: '注意力分散',
            type: 'bar',
            data: this.attention,
            itemStyle: {
              color: 'rgba(125, 255, 201, 0.8)'
            }
          }
        ]
      }

      option && myChart.setOption(option)
    }
  }
}
</script>

<style lang="less" scoped>
.nav{
  height: 46px;
  background-color: #007bffd5;
  text-align: center;
  line-height: 46px;
  color: #fff;
}
.title{
  text-align: center;
  height: 40px;
  line-height: 40px;
  background-image: linear-gradient(rgb(32, 184, 239), rgb(99, 196, 238));
  border-radius: 10px;
  margin: 0 10px;
  padding: 0 10px;
  color: #fff;
}
.card{
       border-radius: 10px;
       width: auto;
       height: 60px;
       padding: 10px;
       margin: 5px;
       box-shadow:  1px 1px 1px #fafafa;
       background-color: #fafafa;
       div{
         display: inline-block;
         margin-left: 10px;
         p{
           font-size: 10px;
           color: black;
         }
       }
}
.bbc{
  background-color: rgba(125, 255, 201, 0.555);
}
.showcard{
  display: flex;
  // background-color: rgb(32, 184, 239);
  background-image: linear-gradient(rgb(32, 184, 239), rgb(99, 196, 238));
  border-radius: 10px;
  margin: 0 10px;
  color: #fff;
  span{
    width: 50%;
    text-align: center;
  }
  .min{
    font-size: 12px;
  }
}
</style>
