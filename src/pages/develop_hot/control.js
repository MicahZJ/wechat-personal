import swiperBox from './swiper_content/index'
import mainBox from './main_content/index'

export default {
  data() {
    return {
      loadData: false, // 可以加载数据
      lastScore: 0, // 资源id
      newsData: [] // 新闻数据
    }
  },
  methods: {
    /**
     * 清空
     */
    clearData() {
      this.loadData = false
      this.lastScore = 0
      this.newsData = [] // 新闻数据
    },

    /**
     * 获取资讯数据
     */
    async getNewsData() {
      let api = '/public/v1/my/recommond'
      let requestData = {
        xc: 'xc',
        size: 12,
        score: this.lastScore
      }
      this.loadData = false
      const res = await this.$post(api, requestData)
      if (res.code === 0) {
        this.loadData = true
        this.lastScore = res.data[res.data.length - 1].score
        this.newsData = this.newsData.concat(...res.data)
      }
    },

    /**
     * 上拉加载
     */
    lowerGetData() {
      console.log('执行上滑操作', this.toggleNum)
      this.loadData ? this.getNewsData() : null
    },

    /**
     * 获取资讯数据
     */
    async getRecommendData() {
      console.log('flyUrl2')
      let api = '/public/v1/article/getIndexList'
      let requestData = {
        xc: 'xc'
      }
      const res = await this.$FlyHttp.httpGet(api, requestData)
    }
  },
  props: [],
  components: {
    swiperBox,
    mainBox
  },
  onShow() {
    this.getRecommendData()
    this.getNewsData()
  },
  onShareAppMessage() {
  },
  mounted() {
  },
  onHide() {
  },
  onUnload() {
    this.clearData()
  }
}
