// components/timeLine/timeLine.js
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
    width: '',
    sliderOffset: '',
    START_HOUR: 9,
    END_HOUR: 17,
    currentHour: '', // 当前的小时(以半小时计)
    remainHour: 0, // 剩余小时
    remainLength: 0, // 剩余时长 
    hourPeriod: [9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17]
  },
  
  // 组件布局完成后执行
  ready (options) {
    let currentHour = Number((timeUtil.getDateArray())[0].hour),
        currentMinute = Number((timeUtil.getDateArray())[0].minute)
    if (
      currentHour < this.data.START_HOUR ||
      (currentHour == this.data.START_HOUR && currentMinute < 30 ) ||
      currentHour > this.data.END_HOUR
    ) {
      return
    }
    this.setData({
      currentHour: currentMinute < 30 ? currentHour : currentHour + 0.5
    })
    setTimeout(() => {
      this.getRect()
      this.getRemainHours()
    }, 200)
  },
  detached() {

  },

  

  

  /**
   * 组件的方法列表
   */
  methods: {
    // 获取剩余小时
    getRemainHours() {
      for (let key in this.data.hourPeriod) {
        if (this.data.currentHour == this.data.hourPeriod[key]) {
          this.setData({
            remainLength: key,
            remainHour: this.data.END_HOUR - this.data.currentHour
          })
          break
        }
      }
    },
    // 获取时间段的宽度 9点到17点
    getRect() {
      let _this = this
      wx.createSelectorQuery().in(this).select('#line').boundingClientRect(function(rect) {
        let lineWidth = rect.width
        console.log(lineWidth)
        _this.setData({
          width: lineWidth,
          sliderOffset: lineWidth / (_this.data.hourPeriod.length - 1)*_this.data.remainLength
        })
      }).exec()
    },
  }
})
