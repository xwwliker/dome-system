<template>
  <div id="main" :style="{width: '300px', height: '300px'}"></div>
</template>

<script>
import * as echarts from 'echarts'
import { mapGetters } from 'vuex'
export default {
  name: 'temperature',
  mounted () {
    this.drawLine()
  },
  computed: {
    ...mapGetters(['temperature'])
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
          show: true,
          text: '体温',
          align: 'center'
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
            name: '体温',
            type: 'line',
            smooth: true,
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
    }
  }
}
</script>

<style>

</style>
