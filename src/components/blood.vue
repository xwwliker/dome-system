<template>
  <div>
    <div class="nav">
      血 氧
    </div>
  <div id="main" :style="{width: '100%', height: '300px'}"></div>

  <div class="card" style="background-image: linear-gradient(to bottom right,  rgb(244, 177, 131), rgba(244, 177, 131,0.7));">
          <van-icon name="bar-chart-o" size="30px" color="#fff"/>
          <br>
          <div class="box">
            <div class="text">
              <p>本次最高：</p>
              <p style="float:right">{{maxnumber}}%</p>
            </div>

            <br>
            <!-- <p style="float: right">{{minnumber}}%</p> -->
            <div class="text">
              <p>本次最低：</p>
              <p style="float:right">{{minnumber}}%</p>
            </div>
          </div>
    </div>
</div>
</template>

<script>
import * as echarts from 'echarts'
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'blood',
  mounted () {
    this.drawLine()
    this.maxnum()
  },
  data () {
    return {
      maxnumber: 0,
      minnumber: 1e9
    }
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

      var date = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      var data = this.bloodOxygen || []
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
            name: '血氧',
            type: 'line',
            symbol: 'none',
            areaStyle: {
              color: 'rgb(255, 188, 194)'
            },
            lineStyle: {
              color: 'rgb(255, 188, 194)'
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
      this.bloodOxygen.forEach(item => {
        this.maxnumber = Math.max(this.maxnumber, item)
        this.minnumber = Math.min(this.minnumber, item)
      })
    }
  }
}
</script>

<style lang="less" scoped>
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
.box{
  width: 100%;
}
.text{
    div p{
      display: inline-block;
    }
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
