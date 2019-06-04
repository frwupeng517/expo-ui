// components/boothContainer/boothContainer.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    width: Number || String, // 屏幕宽度
    showHongBao: Boolean,
    showMyLocation: Boolean,
    showRecommend: Boolean,
    showMyLine: Boolean,
    showHotArea: Boolean,
    booths: Array
  },
  

  /**
   * 组件的初始数据
   */
  data: {
    scrollTop: 100,
    x: 120, // 人的初始横向位置
    y: 120 // 人的初始纵向位置,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 获取我的位置
    onFoucsBoothEvent(event) {
      console.log(event)
      let id = event.detail.behavior.id
      let isFoucs = event.detail.behavior.isFoucs
      console.log(id)
      this.properties.booths.map(item => {
        if (item.id == id) {
          item.isFoucs = isFoucs
        }
      })

      this.setData({
        booths: this.properties.booths
      })
    },
    
    // 当人的位置发生改变时触发的方法
    onChange(e) {
      this.setData({
        x: e.detail.x,
        y: e.detail.y
      })
    }
  }
})
