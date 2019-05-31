// components/baseCmps/vScroll/vScroll.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    scrollHeight: String, // 滚动区的高度
    detailPageUrl: String, // 单项详情页URL
    needGroup: { // 是否需要按分组展示
      type: Boolean,
      default: false
    },
    needCheck: { // 是否需要勾选，如需要，则左侧的单选按钮选中或在右侧添加选中状态的√
      type: Boolean,
      default: false
    },
    scrollItems: Array // 滚动的列表内容
  },

  /**
   * 组件的初始数据
   */
  data: {
    toView: '', // 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素
    elevatorItems: [], // 电梯按钮数组
  },
  ready: function() {
    setTimeout(() => {
      this.initElevatorItems()
    }, 500)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击滚动列表的某一项()
    tapItem(e) {
      console.log(e)
      let detailPageUrl = this.properties.detailPageUrl,
          id = e.currentTarget.dataset.id, // 没有id的手动设为了 'null'
          selected = e.currentTarget.dataset.selected, // select 'null'
          index = e.currentTarget.dataset.index,
          scrollItems = this.properties.scrollItems
      if (detailPageUrl && detailPageUrl != "") { // 跳转至详情页面
        wx.navigateTo({
          url: detailPageUrl + '?id='+id
        })
      } else{ // 处理相应的逻辑
        console.log(selected)
        if (selected == undefined){ // 点击了啥事也不用干
          return
        } else{
          selected = Boolean(selected)
          if (selected) return // 已经选中的不做任何操作
          for (let i in scrollItems) {
            scrollItems[i].selected = (i == index ? true : false)
          }
          console.log(scrollItems)
          // this.setData({
          //   scrollItems: scrollItems
          // })
          let behavior = {
            scrollItems: scrollItems
          }
          this.triggerEvent('updateScrollItems', {
            behavior: behavior
          }, {})
        }
      }
    },
    // 点击checkbox复选框关注某一项
    saveItem(e) {
      let groupindex = e.currentTarget.dataset.groupindex,
          itemindex = e.currentTarget.dataset.itemindex,
          scrollItems = this.data.scrollItems
      scrollItems[groupindex].items[itemindex].selected = scrollItems[groupindex].items[itemindex].selected ? false : true
      // this.setData({
      //   scrollItems: scrollItems
      // })

      let behavior = {
        scrollItems: scrollItems
      }
      this.triggerEvent('updateScrollItems', {
        behavior: behavior
      }, {})
    },
    // 初始化右侧电梯按钮数据
    initElevatorItems() {
      let scrollItems = this.properties.scrollItems,
          elevatorItems = []
      scrollItems.forEach(item => {
        elevatorItems.push({'id': item.groupName +'-'+ item.id, 'name': item.groupName})
      })
      this.setData({
        elevatorItems: elevatorItems
      })
    },
    // 点击电梯数据
    tapElevator(e) {
      let toView = e.currentTarget.dataset.id,
          groupName = e.currentTarget.dataset.name
      this.setData({
        toView: toView
      })
      wx.showToast({
        title: groupName,
        icon: 'none',
        duration: 500
      })
    }
  }
})
