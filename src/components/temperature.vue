<template>
<div>
    <div class="nav">
      体 温
    </div>
  <div id="main" :style="{width: '100%', height: '300px'}"></div>

  <div class="card" style="background-image: linear-gradient(to bottom right,  rgb(244, 177, 131), rgba(244, 177, 131,0.7));">
          <van-icon name="bar-chart-o" size="30px" color="#fff"/>
          <br>
          <div>
            <p>本次最高：</p> <p style="float: right">{{maxnumber}} ℃</p>
            <br>
            <p style="float: right">{{minnumber}} ℃</p>
            <p>本次最低：</p>
          </div>
    </div>
</div>

</template>

<script>
import * as echarts from 'echarts'
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'temperature',
  mounted () {
    this.drawLine()
    this.maxnum()
  },
  computed: {
    ...mapGetters(['temperature']),
    ...mapState(['lastHistory'])
  },
  data () {
    return {
      maxnumber: 0,
      minnumber: 1e9
    }
  },
  methods: {
    drawLine () {
      var chartDom = document.getElementById('main')
      var myChart = echarts.init(chartDom)
      var option

      var date = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      var data = this.temperature || []
      option = {
        title: {
          text: this.lastHistory.drivingInformation.end.substring(0, 10)
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
            name: '体温',
            type: 'line',
            // smooth: true,
            symbol: 'none',
            areaStyle: {
              color: 'rgb(255, 188, 194)'
            },
            itemStyle: {
              normal: { label: { show: true } }
            },
            lineStyle: {
              color: 'rgb(255, 188, 194)'
            },
            axisTick: {
              show: true,
              interval: 0,
              lineStyle: {

              }
            },
            // label: {
            //   show: true,
            //   position: 'bottom',
            //   textStyle: {
            //     fontSize: 1
            //   }
            // },
            data: data
          }
        ]
      }

      option && myChart.setOption(option)
    },
    maxnum () {
      this.temperature.forEach(item => {
        this.maxnumber = Math.max(this.maxnumber, item)
        this.minnumber = Math.min(this.minnumber, item)
      })
    }
  }
}
</script>

<style lang="less" scoped>
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
