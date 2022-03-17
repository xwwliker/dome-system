<template>
  <div id="main" :style="{width: '300px', height: '300px'}"></div>
</template>

<script>
import * as echarts from 'echarts'
import { mapGetters } from 'vuex'
export default {
  name: 'alcohol',
  mounted () {
    this.drawLine()
  },
  computed: {
    ...mapGetters(['bloodOxygen'])
  },
  methods: {
    drawLine () {
      var chartDom = document.getElementById('main')
      var myChart = echarts.init(chartDom)
      var option

      var date = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      var data = this.bloodOxygen || []
      // function addData (shift) {
      //   data.push((Math.random() - 0.4) * 10 + data[data.length - 1])
      //   if (shift) {
      //     date.shift()
      //     data.shift()
      //   }
      // }
      // for (var i = 1; i < 15; i++) {
      //   addData()
      // }
      option = {
        title: {
          show: true,
          text: '酒精'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: date
        },
        yAxis: {
          boundaryGap: [0, '50%'],
          type: 'value'
        },
        series: [
          {
            name: '酒精',
            type: 'line',
            smooth: true,
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

<style>

</style>
