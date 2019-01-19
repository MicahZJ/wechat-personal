import {formatDate} from '../../utils/commonMethods'
import newsBox from './news_list/index'
import playBox from './play_rank/index'

export default {
  data() {
    return {
      arrList: [
        { title: '最新资讯', id: 0 },
        { title: '测试2', id: 1 }
      ],
      toggleNum: 0, // 当前选择
      lastCursor: '', // 最后id
      updateCursor: '', // 查看更新id
      count: 0, // 更新数据数量
      topicData: [], // 数据
      flagPlay: false, // 重复点击保护
      flagPrice: false, // 重复点击保护
      timer: null // 定时器
    }
  },
  methods: {
    /**
     * 清空data
     */
    clearData() {
      this.toggleNum = 0
      this.lastCursor = ''
      this.updateCursor = ''
      this.count = 0
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
    },

    /**
     * 获取数据
     */
    async getTopicData() {
      let api = '/topic'
      let requestData = {
        lastCursor: this.lastCursor,
        pageSize: 20
      }
      console.log('123')
      this.flagPlay = false
      const res = await this.$get(api, requestData)
      if (res) {
        this.flagPlay = true
        this.lastCursor = res.data[res.data.length - 1].order
        this.updateCursor = res.data[0].order
        //  format
        let topicData = this.topicData.concat(...res.data)
        this.topicData = topicData.map((item, index) => {
          item.createdTime = formatDate(item.createdAt)
          item.showFlag = false // 显示，隐藏
          item.checkFlag = false // 是否已看过
          return item
        })
        console.log('长度', this.topicData)
        this.checkUpdate()
      }
    },

    /**
     * 检查更新
     */
    checkUpdate() {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.getUpdateInfo()
      }, 60000 * 10)
    },

    /**
     * 定时任务 -> 查看是否有新消息
     */
    async getUpdateInfo() {
      let api = '/topic/newCount'
      let requestData = {
        latestCursor: this.updateCursor
      }

      const res = await this.$get(api, requestData)
      if (res) {
        this.count = res.count
      }
    }
  },
  props: [],
  computed: {},
  watch: {},
  components: {
    newsBox,
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
