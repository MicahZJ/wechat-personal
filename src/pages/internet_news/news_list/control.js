import { wxNavPush } from '../../../utils/wxapi'

export default {
  data() {
    return {
      moreIcon: '/static/image/news/check_more.png',
    }
  },
  methods: {
    /**
     * 展示更多
     */
    showMore(item) {
      item.showFlag = !item.showFlag
      item.checkFlag = true
    },

    /**
     * 跳转web-view
     */
    toWebView(item) {
      console.log('item', item)
      let page = `/pages/web_view/main?mobileUrl=${item.mobileUrl}`
      wxNavPush(page)
    }
  },
  props: [
    'getTopicData'
  ],
  computed: {},
  watch: {},
  components: {
  },
  onLoad() {
  },
  onShow() {
  },
  onHide() {
  },
  onUnload() {
  }
}
