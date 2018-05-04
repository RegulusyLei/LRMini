const utils = require('../../utils/utils.js')

Page({
  data: {
    searchTxts: ['大家都在搜：奔驰GLA260', '大家都在搜：阿斯顿马丁', '大家都在搜：改装车大赛'],
    toView: 'a'
  },
  onLoad () {
    utils.initPageInstance(this)
    // let that = this
    // wx.getSetting({
    //   success(res) {
    //     !res.authSetting['scope.userInfo'] ? that.configUserInfo() : ''
    //   }
    // })
  },
  // 点击搜索框
  viewTap () {
    utils.navigateTo('../logs/logs')
  },
  // 获取用户用户名头像等信息
  configUserInfo () {
    utils.configAuthorize('scope.userInfo')
  },
  configUserInfo2 (e) {
    console.log(e)
  },
  // 获取用户手机号
  configUserPhone (e) {
    wx.getSetting({
      success(res) {
        console.log(res)
      }
    })
  },
  // 获取用户相册的功能
  configUserPhoto () {
    utils.configAuthorize('scope.writePhotosAlbum')
  },
  // 显示toast
  showToast () {
    // utils.controlToast.call(this, '企鹅爱车将减少该类型资讯推荐', true)
    utils.controlToast.call(this, '成功提示')
  },
  // 显示popup
  showPopup (e) {
    utils.showPopup.call(this, e)
  },
  // 点击popup
  testFn(e) {
    console.log(e)
  },
  // 楼层跳跃
  jumpView (e) {
    this.setData({
      toView: e.target.dataset.num
    })
  },
  // 跳转到全屏视频页面
  viewVideo () {
    utils.navigateTo('../video/video')
  },
  // 生成海报
  viewCanvas () {
    utils.navigateTo('../canvas/canvas')
  }
})