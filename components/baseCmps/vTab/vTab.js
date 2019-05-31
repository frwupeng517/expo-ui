// components/baseCmps/vTab/vTab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabIndex: Boolean,
    tabItems: Array
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 切换内容标签页
    toggleTab(e) {
      let index = e.currentTarget.dataset.index
      this.setData({
        tabIndex: index
      })

      let behavior = {
        tabIndex: index
      }
      this.triggerEvent('getTabIndex', {
        behavior: behavior
      }, {})
    },
  }
})
