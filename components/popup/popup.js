/**
 * 自定义组件
 * Popup组件
 */
// 组件写法
Component({
  properties: {
    popShow: { // 显示或隐藏
      type: Boolean,
      value: false
    },
    popText: { // 文本显示
      type: String,
      value: '对此条咨询不感兴趣',
    },
    popStyle: { // 样式
      type: String,
      value: ''
    },
    popArrow: { // 三角箭头的位置
      type: Number,
      value: 1
    },
    popId: { // Number类型的dataset值
      type: Number,
      value: 0
    },
    popKey: { // String类型的datase值
      type: String,
      value: ''
    }
  },
  methods: {
    emitClick () { // 点击事件
      this.setData({ // 隐藏popup
        popShow: false
      })
      // 组件传值
      this.triggerEvent('popevent', 
      { 
        id: this.data.popId,
        key: this.data.popKey
      })
    }
  }
})