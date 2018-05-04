/**
 * 自定义组件
 * Toast组件
 */
// 组件写法
Component({
  properties: {
    toastShow: {
      type: Boolean,
      value: false
    },
    toastText: {
      type: String,
      value: '成功',
    },
    holdTime: {
      type: Number,
      value: 3000,
    },
    toastStyle: {
      type: Boolean,
      value: false
    }
  }
})