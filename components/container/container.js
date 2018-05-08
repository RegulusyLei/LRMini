const behavior = require('../common/js/behavior.js')

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