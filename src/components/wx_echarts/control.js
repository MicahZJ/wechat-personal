import echarts from 'echarts'
import mpvueEcharts from 'mpvue-echarts'

export default {
  data () {
    return {
      echarts
    }
  },
  watch: {
    getOptions: {
      handler (newValue, oldValue) {
        console.log('watcht', newValue.series[0].data)
        if (newValue) {
          this.initChart(newValue)
        } else {
          this.initChart(oldValue)
        }
      },
      deep: true
    }
  },
  props: [
    'getOptions'
  ],
  computed: {},
  methods: {
    initChart (value) {
      this.getOptions = value
      this.$refs.echarts.init()
    },

    handleInit(canvas, width, height) {
      let barChart = echarts.init(canvas, null, {
        width: width,
        height: height
      })
      canvas.setChart(barChart)
      barChart.setOption(this.getOptions)
      return barChart
    }
  },
  components: {
    mpvueEcharts
  },
  onLoad () {
  },
  onShow () {
  },
  onHide () {
  },
  onUnload () {
  }
}
