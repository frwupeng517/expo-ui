// components/exhibitorCmps/cityList/cityList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    modalHeight: Number,
    allowScroll: Boolean, // 当筛选弹层打开时，即不允许滚动
    lists: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeId: null, // 当前选中的城市分组id
    fixedTitle: '', // 吸顶（当前选中的城市）城市分组名
    intoView: '',
    listHeightArray: [] // 每一个分组相对父容器的高度（包含自身高度）
  },

  ready() {
    setTimeout(() => { 
      // 必须在页面全部渲染完以后调用，否则boundingClientRect的height会有误
      this.handleListData(this.properties.lists)
    }, 500)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 处理城市列表数据
    handleListData(lists) {
      let _this = this
      this.setData({
        activeId: lists[0].id,
        // fixedTitle: lists[0].groupName
      })
      let listHeight = 0, // 所有城市列表累加的高度之和
          array = []
      for(let i = 0; i < lists.length; i++) {
        let obj = wx.createSelectorQuery().in(this)
        obj.select('#intoView' + lists[i].id).boundingClientRect(function(rect) {
          listHeight += Number(rect.height)
          let listObj = {
            'id': rect.dataset.id,
            'groupName': lists[i].groupName,
            'height': listHeight
          }
          array.push(listObj)
        }).exec()
      }
      _this.setData({
        listHeightArray: array
      })
    },
    // 手指触摸动作开始
    startElevator(e) {
      let id = e.currentTarget.dataset.id
      let selectGroup = this.properties.lists.find(item => {
        if(item.id == id) {
          return item
        }
      })
      wx.showToast({
        title: selectGroup.groupName,
        icon: 'none',
        duration: 500
      })
      this.setData({
        activeId: selectGroup.id,
        fixedTitle: selectGroup.groupName,
        intoView: 'intoView' + id
      })
    },
    // 手指触摸后移动
    moveElevator(e) {
      console.log('move')
      console.log(e)
    },
    // 页面城市列表滚动时触发
    onPageScroll(e) {
      let scrollTop = e.detail.scrollTop
      if(this.data.listHeightArray.length > 0) {
        for (let index in this.data.listHeightArray) {
          // 如果垂直方向滚动的距离小于某个分组的高度（当然也要大于其他更小的分组高度），就落到该分组
          // 这种比较方式不太严谨
          if (scrollTop < this.data.listHeightArray[index].height) {
            this.setData({
              activeId: this.data.listHeightArray[index].id,
              fixedTitle: this.data.listHeightArray[index].groupName
            })
            break
          }
        }
      }
    },
    // 点击切换关注城市
    toggleSelectCity(e) {
      let groupindex = e.target.dataset.groupindex,
          index = e.target.dataset.index,
          lists = this.data.lists
      lists[groupindex].items[index].selected = lists[groupindex].items[index].selected ? false : true
      this.setData({
        lists: lists
      })
    }
  }
})
