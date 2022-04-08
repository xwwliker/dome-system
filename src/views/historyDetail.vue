<template>
  <div>
    <div class="nav">
      驾 驶 记 录 详 情
    </div>

        <div class="card" style="background-image: linear-gradient(to bottom right,  rgb(244, 177, 131), rgba(244, 177, 131,0.7));">
          <van-icon name="underway" size="30px" color="#fff"/>
          <br>
          <div>
            <p>驾驶时长：</p> <p style="float: right">{{this.drivingtime}}分钟</p>
            <van-divider/>
            <br>
            <p>眨眼次数：</p> <p style="float: right">{{this.$route.params.obj.closeEye}}次</p>
            <br>
            <p style="float: right">{{this.$route.params.obj.attention}}次</p>
            <p>注意力不集中次数：</p>
            <br>
            <p style="float: right">{{this.$route.params.obj.yawn}}次</p>
            <p>打哈欠次数：</p>
            <br>
            <p style="float: right">{{this.$route.params.obj.startLatitude}}° N {{this.$route.params.obj.startLongitude}}° E</p>
            <p>起始位置：</p>
            <br>
            <p style="float: right">{{this.$route.params.obj.endLatitude}}° N {{this.$route.params.obj.endLongitude}}° E</p>
            <p>结束位置：</p>
          </div>
    </div>

        <div id="main" :style="{width: 'auto', height: '300px'}" ></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'historydetail',
  data () {
    return {
      drivingtime: 0
    }
  },
  created () {
    this.$nextTick(function () {
      this.drawLine()
    })
    var begin = new Date(this.$route.params.obj.begin)
    var end = new Date(this.$route.params.obj.end)
    this.drivingtime = (end - begin) / 1000 / 60
  },
  methods: {
    drawLine () {
      var chartDom = document.getElementById('main')
      var myChart = echarts.init(chartDom)
      var option

      option = {
        series: [
          {
            type: 'pie',
            data: [
              {
                value: this.$route.params.obj.closeEye,
                name: '眨眼'
              },
              {
                value: this.$route.params.obj.attention,
                name: '注意力分散'
              },
              {
                value: this.$route.params.obj.yawn,
                name: '打哈欠'
              }
            ],
            radius: '40%'
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
.card{
       border-radius: 10px;
       padding: 10px;
       margin: 10px;
       img{
         display: inline-block;
         width: 60px;
       }
       div{
         display: inline-block;
         width: 100%;
         p{
           display: inline-block;
           font-size: 15px;
           color: #fff;
         }
       }
}
</style>
