
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
