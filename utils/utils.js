const app = getApp()

/**
 * 初始化页面实例 绑定到全局app实例上
 */
const initPageInstance = that => {
  app.globalData.activePageInstance = that
}

/**
 * 初始化页面效果状态方法
*/
const initPageStatus = function (that) {
  if (typeof that == 'boolean' && that) { // 传入boolean类型，且值为true，表示含有popup的当前页
    this.hidePopup.call(app.globalData.activePageInstance)
  }else{
    this.hidePopup.call(that) // 为页面绑定隐藏popup事件
  }
}


/**
 * 设置当前导航条内容
 */
const setNavStyle = title => {
  wx.setNavigationBarTitle({
    title: title
  })
}

/**
 * 跳转页面
 */
const navigateTo = url => {
  wx.navigateTo({
    url: url
  })
}

/**
 * 获取用户信息授权
 * 用户拒绝时打开权限设置页面
*/
const configAuthorize = scope => {
  wx.authorize({
    scope: scope,
    success(res) {
      console.log(res)
    },
    fail(res) {
      wx.openSetting({
        success(res) {
          console.log(res)
        }
      })
    }
  })
}


/**
 * 显示popup
*/
const showPopup = function (ele, confirm) {
  // 获取设备宽高度
  let windowWidth = 0
  let windowHeight = 0
  wx.getSystemInfo({
    success(res) {
      windowWidth = res.windowWidth
      windowHeight = res.windowHeight
    }
  })
  // 计算定位的距离
  let horizontal = windowWidth - ele.touches[0].clientX // 点击点距离右部边框的水平宽度
  let vertical = windowHeight - ele.touches[0].clientY // 点击点距离底部边框的垂直高度
  // 定位popup
  if (horizontal > 170 && vertical > 70) { // 三角左上角
    var arrow = 1,
        tempStr = `top:${ele.detail.y + 25}px; left:${ele.detail.x - 13}px`
  } else if (horizontal < 170 && vertical > 70) { // 三角在右上角
    var arrow = 2,
        tempStr = `top:${ele.detail.y + 25}px; left:${ele.detail.x - 167}px`
  } else if (horizontal < 170 && vertical < 70) { // 三角在右下角
    var arrow = 3,
        tempStr = `top:${ele.detail.y - 70}px; left:${ele.detail.x - 167}px`
  } else if (horizontal > 170 && vertical < 70) { // 三角在左下角
    var arrow = 4,
      tempStr = `top:${ele.detail.y - 70}px; left:${ele.detail.x - 13}px`
  }
  // 获取dataset的值
  this.setData({
    props: {
      pop: {
        show: true,
        style: tempStr,
        arrow: arrow,
        id: ele.target.dataset.popid || 0,
        key: ele.target.dataset.popkey || ''
      }
    }
  })
}

/**
 * 隐藏popup
*/
const hidePopup = function () {
  if (this.data.props && this.data.props.pop && this.data.props.pop.show) {
    this.setData({
      props: {
        pop: {
          show: false
        }
      }
    })
  }
}

/**
 * 显示或隐藏toast
*/
const controlToast = function (text, style, time) {
  this.setData({
    props: {
      toast: {
        show: true,
        text: text,
        style: style || false
      }
    }
  })
  if (typeof time === 'number') {
    setTimeout(() => {
      this.setData({
        props: {
          toast: {
            show: false
          }
        }
      })
    }, time)
  } else {
    setTimeout(() => {
      this.setData({
        props: {
          toast: {
            show: false
          }
        }
      })
    }, 2000)
  }
}

/**
 * 时间格式化
*/
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

/**
 * 处理时间小于10的情况，保证时间以两位格式输出
*/
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 随机颜色值
 */
const getRandomColor = () => {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

/**
 * 暴露公用工具方法
*/
module.exports = {
  initPageInstance: initPageInstance,
  initPageStatus: initPageStatus,
  setNavStyle: setNavStyle,
  navigateTo: navigateTo,
  configAuthorize: configAuthorize,
  formatTime: formatTime,
  showPopup: showPopup,
  hidePopup: hidePopup,
  controlToast: controlToast,
  getRandomColor: getRandomColor
}