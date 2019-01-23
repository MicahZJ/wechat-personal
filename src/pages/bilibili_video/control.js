
export default {
  data() {
    return {
      loadData: false, // 可以加载数据
    }
  },
  methods: {
    /**
     * 上拉加载
     */
    lowerGetData() {
      console.log('执行上滑操作')
      this.loadData ? this.getNewsData() : null
    },

    /**
     * 获取视频列表
     */
    async getVideoInfo() {
      let api = '/x/web-interface/newlist'
      let requestData = {
        bilibiliUrl: 1,
        callback: 'jqueryCallback_bili_3269480563337597',
        rid: 33,
        type: 0,
        pn: 1,
        ps: 20,
        jsonp: 'jsonp',
        _: 1548076804738
      }
      
      const res = await this.$get(api, requestData)
    }
  },
  props: [],
  components: {
  },
  onShow() {
    this.getVideoInfo()
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
