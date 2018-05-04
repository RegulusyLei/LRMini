//logs.js
const utils = require('../../utils/utils.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return utils.formatTime(new Date(log))
      })
    })
  }
})
