// components/dateTab/dateTab.js
const timeUtil = require('../../../utils/gettime.js')
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
    nextIcon: "/pages/activity/img/icon-arrow-right2.png",
    weekDateArray: [],  // 一周的日期
    currentDateIndex: 0, // 选中的日期下标
  },

  ready: function() {
    let weekDateArray = timeUtil.getDateArray(7)
    this.setData({
      weekDateArray: weekDateArray
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 切换日期
    toggleDate(e) {
      let index = e.currentTarget.dataset.index
      this.setData({
        currentDateIndex: index
      })
    }
  }
})
