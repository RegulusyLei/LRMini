const utils = require('../../../utils/utils.js')
const app = getApp()
let postionX = 0
let postionY = 0

module.exports = Behavior({
  methods: {
    // 点击页面事件
    bindtapEvent(e) {
      utils.initPageStatus(app.globalData.activePageInstance)
    },
    // 触摸屏幕事件
    touchstartEvent(e) {
      utils.pullDownEvent(e)
      postionX = e.changedTouches[0].clientX
      postionY = e.changedTouches[0].clientY
    },
    // 触摸离开事件
    touchendEvent(e) {
      let horizontal_d = postionX - e.changedTouches[0].clientX
      utils.scrollOnHorizontal(horizontal_d)
      let vertical_d = postionY - e.changedTouches[0].clientY
      utils.scrollOnVertical(vertical_d)
    }
  }
})