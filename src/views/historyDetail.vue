<template>
  <div>
    <div class="nav">
      驾 驶 记 录 详 情
    </div>

        <div class="card" style="background-image: linear-gradient(to bottom right,  rgb(244, 177, 131), rgba(244, 177, 131,0.7));">
          <van-icon name="underway" size="30px" color="#fff"/>
          <br>
          <div>
            <p>眨眼次数：</p> <p style="float: right">{{this.$route.params.obj.drivingInformation.closeEye}}次</p>
            <br>
            <p style="float: right">{{this.$route.params.obj.drivingInformation.attention}}次</p>
            <p>注意力不集中次数：</p>
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
        series: [
          {
            type: 'pie',
            data: [
              {
                value: this.$route.params.obj.drivingInformation.closeEye,
                name: '眨眼'
              },
              {
                value: this.$route.params.obj.drivingInformation.attention,
                name: '注意力分散'
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
       height: 120px;
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
