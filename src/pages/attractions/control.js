import priceBox from './price_rank/index'
import playBox from './play_rank/index'

export default {
  data() {
    return {
      arrList: [
        { title: '测试1', id: 0 },
        { title: '测试2', id: 1 }
      ],
      toggleNum: 0, // 当前选择
      lastCursor: '', // 最后id
      topicData: [], // 数据
      flagPlay: false, // 重复点击保护
      flagPrice: false // 重复点击保护
    }
  },
  methods: {
    /**
     * 清空data
     */
    clearData() {
      this.toggleNum = 0
      this.lastCursor = ''
      this.topicData = []
      this.flagPlay = false
      this.flagPrice = false
    },

    /**
     * 上拉加载
     */
    lowerGetData() {
      console.log('执行上滑操作', this.toggleNum)
      switch (this.toggleNum) {
        case 0:
          if (this.flagPlay) {
            this.getTopicData()
          }
          break
        case 1:
          break
      }
    },

    /**
     * 单选
     */
    toggleIndex(index) {
      this.toggleNum = index
    },

    /**
     * 获取数据
     */
    async getTopicData() {
      let Api = '/topic'
      let requestData = {
        lastCursor: this.lastCursor,
        pageSize: 20
      }
      console.log('123')
      this.flagPlay = false
      const res = await this.$get(Api, requestData)
      if (res) {
        this.flagPlay = true
        this.lastCursor = res.data[res.data.length - 1].order
        this.topicData = this.topicData.concat(...res.data)
        console.log('长度', this.topicData)
      }
    }
  },
  props: [],
  computed: {},
  watch: {},
  components: {
    priceBox,
    playBox
  },
  onLoad() {},
  onShow() {
    this.getTopicData()
  },
  onHide() {},
  onUnload() {
    this.clearData()
  }
}
