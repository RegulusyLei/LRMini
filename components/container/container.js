const behavior = require('../../utils/behavior.js')

Component({
  behaviors: [behavior],
  properties: {
    props: {
      type: Object,
      value: {}
    }
  },
  methods: {
    popConfirm(e) {
      this.triggerEvent('popconfirm', e)
    }
  }
})