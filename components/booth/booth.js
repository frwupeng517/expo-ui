// components/booth/booth.js
let myBehavior = require("../behaviors/my-behavior.js")
Component({
  behaviors: [myBehavior],
  /**
   * 组件的属性列表
   */
  properties: {
    booth: Object,
    showHongBao: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    tapped: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    saveBooth(event) {
      console.log(event)
      console.log(this.properties.booth)
      let id = event.currentTarget.dataset.id
      let booth = this.properties.booth
      if(!booth.isFoucs) {
        wx.showToast({
          title: '关注成功',
          icon: 'success',
          duration: 500
        })
        let behavior = {
          isFoucs: true,
          id: id
        }
        this.triggerEvent('foucsBoothEvent', {
          behavior: behavior
        }, {})
      } else{
        wx.showToast({
          title: '取消关注',
          icon: 'none',
          duration: 500
        })
        let behavior = {
          isFoucs: false,
          id: id
        }
        this.triggerEvent('foucsBoothEvent', {
          behavior: behavior
        }, {})
      }

    }
  }
})
