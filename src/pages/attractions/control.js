import priceBox from './price_rank/index'

export default {
  data() {
    return {
      arrList: [
        {title: '测试1', id: 0},
        {title: '测试2', id: 1}
      ],
      toggleNum: 0 // 当前选择
    }
  },
  methods: {
    /**
     * 清空data
     */
    clearData() {
      this.toggleNum = 0
    },

    /**
     * 上拉加载
     */
    lowerGetData() {
      console.log('执行上滑操作', this.toggleNum)
    },

    /**
     * 单选
     */
    toggleIndex(index) {
      this.toggleNum = index
    }
  },
  props: [
  ],
  computed: {},
  watch: {},
  components: {
    priceBox
  },
  onLoad() {
  },
  onShow() {
  },
  onHide() {
  },
  onUnload() {
    this.clearData()
  }
}
