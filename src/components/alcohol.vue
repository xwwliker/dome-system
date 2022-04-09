<template>
  <div>
    <div class="nav">
      体 重
    </div>
  <div id="main" :style="{width: '100%', height: '300px'}"></div>

  <div class="card" style="background-image: linear-gradient(to bottom right,  rgb(244, 177, 131), rgba(244, 177, 131,0.7));">
          <van-icon name="bar-chart-o" size="30px" color="#fff"/>
          <br>
          <div>
            <p>最高：</p> <p style="float: right">80.2Kg</p>
            <br>
            <p>最低：</p> <p style="float: right">78.9Kg</p>
            <br>
            <p>身体指数：</p> <p style="float: right">23.5</p>
            <br>
            <p>建议体重：</p> <p style="float: right">75.9Kg</p>
          </div>
    </div>
</div>
</template>

<script>
import * as echarts from 'echarts'
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'alcohol',
  mounted () {
    this.drawLine()
  },
  computed: {
    ...mapGetters(['bloodOxygen']),
    ...mapState(['lastHistory'])
  },
  methods: {
    drawLine () {
      var chartDom = document.getElementById('main')
      var myChart = echarts.init(chartDom)
      var option

      var date = ['2022-01-17', '2022-01-18', '2022-01-21', '2022-01-23', '2022-01-25', '2022-01-30', '2022-02-02']
      var data = [80.0, 80.2, 79.8, 79.5, 79.0, 79.1, 78.9]
      option = {
        title: {
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: date,
          axisPointer: {
            show: true,
            label: {
              show: true
            }
          }
        },
        yAxis: {
          boundaryGap: [0, '50%'],
          type: 'value',
          scale: true
        },
        series: [
          {
            name: '酒精',
            type: 'line',
            symbol: 'none',
            lineStyle: {
              color: 'rgb(244, 177, 131)'
            },
            itemStyle: {
              normal: { label: { show: true } }
            },
            axisTick: {
              show: true,
              interval: 0,
              lineStyle: {
              }
            },
            data: data
          }
        ]
      }

      option && myChart.setOption(option)
    }
  }
}
</script>
<style lang="less" scoped>
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
