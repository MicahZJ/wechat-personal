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
          this.flagPlay ? this.getTopicData() : null
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
      switch (this.toggleNum) {
        case 0:
          this.topicData = []
          this.lastCursor = ''
          this.flagPlay ? this.getTopicData() : null
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
