import mpvueEcharts from '../../components/wx_echarts/index'

export default {
  data() {
    return {
      list: [{title: '1号'}, {title: '2号'}],
      toggleIndex: 0,
      options: {},
      wxOptions: {},
      wxOptionsT: {}
    }
  },
  methods: {
    toggleSwitch(index) {
      this.toggleIndex = index
      switch (index) {
        case 0:
          console.log('index', index)
          this.options = this.wxOptions
          break
        case 1:
          console.log('index', index)
          this.options = this.wxOptionsT
          break
      }
    },

    getData() {
      setTimeout(() => {
        this.wxOptions = {
          xAxis: [
            {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }
          ],
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }]
        }
        this.options = this.wxOptions
      }, 400)
    },

    getDataT() {
      setTimeout(() => {
        this.wxOptionsT = {
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '直接访问',
              type: 'bar',
              barWidth: '60%',
              data: [10, 52, 200, 334, 390, 330, 220]
            }
          ]
        }
      }, 500)
    }
  },
  props: [],
  components: {
    mpvueEcharts
  },
  onLoad() {
  },
  onShow() {
    this.getData()
    this.getDataT()
  },
  onShareAppMessage() {
  },
  mounted() {
  },
  onHide() {
  },
  onUnload() {
  }
}
