// components/activityCmps/filterTab/filterTab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    tabs: ["时间", "地点", "主题", "嘉宾"],
    activeIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabChange(e) {
      console.log(e)
      let id = e.currentTarget.id
      this.setData({
        activeIndex: id
      })
      switch(id) {
        case "1":
          wx.showModal({
            title: '提示',
            content: '这是一个模态弹窗',
            success(res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
      }
    }
  }
})
