import SingleLogin from '@/utils/loginManager'
export default {
  data() {
    return {
      info_data: null,
      type: null
    }
  },
  methods: {
    user_info(res) {
      if (res['mp']['detail'].rawData) {
        this.info_data = res['mp']['detail']
        wx.navigateBack()
      }
    }

  },
  onShow: function () {
  },
  onShareAppMessage() {

  },
  mounted() {
    wx.hideShareMenu()
    let options = this.$root.$mp.query
    this.type = options.type
  },

  onHide() {
  },
  onUnload() {
    SingleLogin.getInstance().handleUserInfo(this.info_data, this.type)
  }
}
