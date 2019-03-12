import SingleLogin from '@/utils/loginManager'

export default {
  data() {
    return {
    }
  },
  methods: {
    async getSessionKey() {
      let _LoginManager = SingleLogin.getInstance()
      let session = await _LoginManager.getSessionKey()
      console.log('session', session)
    }
  },
  props: [],
  components: {
  },
  onLoad() {
    this.getSessionKey()
  },
  onShow() {
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
