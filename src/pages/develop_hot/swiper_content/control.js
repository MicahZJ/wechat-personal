export default {
  data () {
    return {
      indicatorDots: true, // 面板指示点
      autoPlay: true, // 自动播放
      interval: 5000, // 播放间隔
      duration: 500, // 滑动时长
      circular: true, // 衔接动画
      current: 0 // 当前index
    }
  },
  watch: {},
  props: [
    'getNewsData'
  ],
  computed: {},
  methods: {
    currentIndex(e) {
      this.current = e.mp.detail.current
      console.log('index', this.current)
    }
  },
  components: {},
  onLoad () {},
  onShow () {},
  onHide () {},
  onUnload () {
    this.current = 0
  }
}
