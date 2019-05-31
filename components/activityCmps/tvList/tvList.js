// components/activityCmps/tvList/tvList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    windowHeight: String || Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentTv: 'CCTV-1 综合',
    tvIndex: 0,
    tvs: ['CCTV-1 综合', '腾讯视频', '爱奇艺', '优酷'], // 频道列表
    tvItems: [], // 节目列表
    scrollHeight: 0,  // 滚动区的高度
  },

  ready: function(options) {
    this.getTvItems()
    setTimeout(() => {
      this.calScrollHeight()
    }, 200)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 切换频道
    bindPickerChange(e) {
      this.setData({
        tvIndex: e.detail.value
      })
    },
    // 切换关注状态
    toggleFocus(e) {
      let index = e.currentTarget.dataset.index
      this.data.tvItems[index].focus = this.data.tvItems[index].focus ? false : true
      this.setData({
        tvItems: this.data.tvItems
      })
    },
    // 获取节目列表
    getTvItems() {
      // ...... wx.request
      let tvItems = [ // 伪造假数据
        { time: '11:54', name: '2019秘境之眼-114', finish: true, focus: false },
        { time: '12:00', name: '新闻30分', finish: true, focus: false  },
        { time: '12:36', name: '今日说法-2019-131', finish: false, focus: false  },
        { time: '13:12', name: '手创中国-2019-2', finish: false, focus: false  },
        { time: '13:17', name: '正阳门下小女人第24集', finish: false, focus: false  },
        { time: '14:05', name: '正阳门下小女人第25集', finish: false, focus: false  },
        { time: '14:54', name: '瞬间中国-2019-31', finish: false, focus: false  },
        { time: '14:58', name: '正阳门下小女人第26集', finish: false, focus: true  },
        { time: '15:49', name: '正阳门下小女人第27集', finish: false, focus: true  },
        { time: '16:35', name: '瞬间中国-2019-32', finish: false, focus: false  }
      ]
      this.setData({
        tvItems: tvItems
      })
    },
    // 计算滚动区的高度
    calScrollHeight() {
      let _this = this
      const query = wx.createSelectorQuery().in(this).select('.toggle-tv')
      query.boundingClientRect(rect => {
        console.log(rect)
        _this.setData({
          scrollHeight: _this.properties.windowHeight - rect.height - rect.top
        })
      }).exec()
    },
  }
})
