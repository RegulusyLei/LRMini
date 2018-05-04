const ctx = wx.createCanvasContext('myCanvas')
const utils = require('../../utils/utils.js')

Page({
  onLoad () {
  },
  onReady() {
    ctx.drawImage('./images/img.jpg', 0, 0, 300, 200)
    ctx.setFillStyle('#000')
    ctx.font = '24px sans-serif'
    ctx.fillText('等到花儿都谢了！阿斯顿马', 5, 225)
    ctx.fillText('丁DB11 V6有望明年上市！', 5, 250)
    ctx.draw()
  },
  drawToImage() {
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 300,
      height: 500,
      destWidth: 300,
      destHeight: 500,
      fileType: 'jpg',
      canvasId: 'myCanvas',
      success: function (res) {
        console.log(res.tempFilePath)
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success(msg) {
            console.log(msg)
          },
          fail (msg) {
            console.log(msg)
          }
        })
      }
    })
  },
  jumpPage () {
    utils.navigateTo('../_test/test')
  }
})
