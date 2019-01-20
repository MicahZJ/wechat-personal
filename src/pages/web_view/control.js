
export default {
  data() {
    return {
      url: ''
    }
  },
  methods: {
    /**
     * 获取传参
     */
    getParams() {
      let options = this.$root.$mp.query
      this.url = options.mobileUrl
    }
  },
  props: [],
  computed: {},
  watch: {},
  components: {
  },
  onLoad() {},
  onShow() {
    this.getParams()
  },
  onHide() {},
  onUnload() {}
}
