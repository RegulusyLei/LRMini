const utils = require('./utils.js')
const app = getApp()
let postionX = 0

module.exports = Behavior({
  methods: {
    // 点击页面事件
    bindtapEvent(e) {
      utils.initPageStatus(app.globalData.activePageInstance)
    },
    // 触摸屏幕事件
    touchstartEvent(e) {
      postionX = e.changedTouches[0].clientX
    },
    // 触摸离开事件
    touchendEvent(e) {
      let direction = postionX - e.changedTouches[0].clientX
      if (direction < 0 && Math.abs(direction) > 200) { // 向右滑动
        // 返回前一个页面
        // wx.navigateBack({
        //   delta: 1
        // })
      }
    }
  }
})