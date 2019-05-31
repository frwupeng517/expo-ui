// pages/myExpo/myExpo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: 0, // 窗口高度
    scrollHeight: 0, // 滚动区的高度
    scrollItems: [], // 传给子组件vScroll的滚动列表
    tabIndex: 0,
    tabItems: ['观展', '活动'],
    tvLists: [], // 活动列表
    catelogItems: [
      { name: '已完成', selected: true },
      { name: '未完成', selected: false },
    ]
  },
  // 从子组件接收tabIndex
  onGetTabIndex(e) {
    let tabIndex = e.detail.behavior.tabIndex
    if(tabIndex == 1) { // 打开活动标签页下的内容
      this.getTvLists()
    }
    this.setData({
      tabIndex: tabIndex
    })
  },
  // 从v-catelog组件接收当前被选中的分类的小标
  onUpdateCatelog(e) {
    let catelog = e.detail.behavior.catelog
    this.setData({
      catelogItems: catelog
    })
    // 如果当前的标签页是“活动”，则需要查询活动列表
    if(this.data.tabIndex == 1) {
      this.getTvLists()
    }
  },
  // 从滚动组件接收更新后的滚动列表（点击左侧的radio单选框按钮，有的组件没有这个方法）
  onUpdateScrollItems(e) {
    let scrollItems = e.detail.behavior.scrollItems
    this.setData({
      scrollItems: scrollItems
    })
  },
  // 计算滚动区域的高度
  calScrollHeight() {
    let _this = this
    let query = wx.createSelectorQuery().in(this)
    query.select('#tabItems').boundingClientRect(function(rect) {
      _this.setData({
        scrollHeight: _this.data.windowHeight - rect.top - rect.height
      })
    }).exec() 
  },
  // 获取滚动列表内容
  getScrollItems() {
    // wx.request()....
    let scrollItems = [
      {
        id: '0',
        groupName: 'A',
        items: [
          { id: '0-0', name: '阿巴嘎旗（锡林郭勒盟）', selected: true, hongBao: false, empty: false, star: 0 },
          { id: '0-1', name: '阿坝县', selected: false, hongBao: false, empty: false, star: 0 },
          { id: '0-2', name: '阿尔山（兴安盟）', selected: false, hongBao: true, empty: false, star: 3 },
          { id: '0-3', name: '阿拉善盟', selected: false, hongBao: true, empty: false, star: 3 }
        ]
      },
      {
        id: '1',
        groupName: 'B',
        items: [
          { id: '1-0', name: '巴彦淖尔市', selected: false, hongBao: false, empty: false, star: 5 },
          { id: '1-1', name: '包头市', selected: false, hongBao: false, empty: true, star: 0 },
          { id: '1-2', name: '北大荒', selected: false, hongBao: true, empty: false, star: 0 }
        ]
      },
      {
        id: '2',
        groupName: 'C',
        items: [
          { id: '2-0', name: '成都', selected: false, hongBao: false, empty: false, star: 0 },
          { id: '2-1', name: '赤峰市', selected: false, hongBao: false, empty: false, star: 0 },
          { id: '2-2', name: '蔡甸', selected: false, hongBao: false, empty: true, star: 1 }
        ]
      },
      {
        id: '3',
        groupName: 'D',
        items: [
          { id: '3-0', name: '大兴', selected: false, hongBao: false, empty: false, star: 0 },
          { id: '3-1', name: '大不列颠', selected: false, hongBao: false, empty: false, star: 0 },
          { id: '3-2', name: '大义凛然', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '4',
        groupName: 'E',
        items: [
          { id: '4-0', name: '鄂尔多斯市', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '5',
        groupName: 'F',
        items: [
          { id: '5-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '6',
        groupName: 'G',
        items: [
          { id: '6-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '7',
        groupName: 'H',
        items: [
          { id: '7-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '8',
        groupName: 'I',
        items: [
          { id: '8-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '9',
        groupName: 'J',
        items: [
          { id: '9-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '10',
        groupName: 'K',
        items: [
          { id: '10-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '11',
        groupName: 'L',
        items: [
          { id: '11-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '12',
        groupName: 'M',
        items: [
          { id: '12-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '13',
        groupName: 'N',
        items: [
          { id: '13-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '14',
        groupName: 'O',
        items: [
          { id: '14-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '15',
        groupName: 'P',
        items: [
          { id: '15-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '16',
        groupName: 'Q',
        items: [
          { id: '16-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '17',
        groupName: 'R',
        items: [
          { id: '17-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '18',
        groupName: 'S',
        items: [
          { id: '18-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '19',
        groupName: 'T',
        items: [
          { id: '19-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '20',
        groupName: 'U',
        items: [
          { id: '20-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '21',
        groupName: 'V',
        items: [
          { id: '21-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '22',
        groupName: 'W',
        items: [
          { id: '22-0', name: '乌兰察布市', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '23',
        groupName: 'X',
        items: [
          { id: '23-0', name: '锡林郭勒盟', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '24',
        groupName: 'Y',
        items: [
          { id: '24-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '25',
        groupName: 'Z',
        items: [
          { id: '25-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
      {
        id: '26',
        groupName: '#',
        items: [
          { id: '26-0', name: '测试', selected: false, hongBao: false, empty: false, star: 0 }
        ]
      },
    ]
    this.setData({
      scrollItems: scrollItems
    })
  },
  // 获取活动列表
  getTvLists() {
    let status = this.data.catelogItems.find(item => item.selected == true).name
    let done = false // 可能会用于请求数据，判断活动是否已经结束
    if(status == '已完成') {
      done = true
    } else if (status == '未完成') {
      done = false
    }
    // wx.request(.....)
    // 根据活动是否已经结束，伪造一个假的数据，用于UI展示
    let tvLists = []
    if(done) { // 返回完成的活动
      tvLists = [
        { time: '14:05', name: '正阳门下小女人第25集' },
        { time: '14:54', name: '瞬间中国-2019-31' },
        { time: '14:58', name: '正阳门下小女人第26集' },
        { time: '15:49', name: '正阳门下小女人第27集' },
        { time: '16:35', name: '瞬间中国-2019-32' },
        { time: '17:00', name: '舌尖上的中国第三季-器' }
      ]
    } else{ // 返回未完成的活动
      tvLists = [
        { time: '11:54', name: '2019秘境之眼-114' },
        { time: '12:00', name: '新闻30分' },
        { time: '12:36', name: '今日说法' },
        { time: '13:12', name: '手创中国' },
        { time: '13:17', name: '诗词大会' }
      ]
    }
    this.setData({
      tvLists: tvLists
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    wx.getSystemInfo({
      success: function(res) {
        _this.setData({
          windowHeight: res.windowHeight
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    setTimeout(() => {
      this.calScrollHeight()
      this.getScrollItems()
    }, 200)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  plus() {
    let num = this.data.buyNum;
    num++;
    this.setData({
      buyNum: num
    })
  },

  delete() {
    let num = this.data.buyNum;
    if (num > 1) {
      num--;
    }
    this.setData({
      buyNum: num
    })
  },

  showBuyModal() {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      /**
        * http://cubic-bezier.com/ 
        * linear 动画一直较为均匀
        * ease 从匀速到加速在到匀速
        * ease-in 缓慢到匀速
        * ease-in-out 从缓慢到匀速再到缓慢
        * 
        * http://www.tuicool.com/articles/neqMVr
        * step-start 动画一开始就跳到 100% 直到动画持续时间结束 一闪而过
        * step-end 保持 0% 的样式直到动画持续时间结束 一闪而过
        */
      timingFunction: "ease",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(), // export 方法每次调用后会清掉之前的动画操作。
      showModalStatus: true
    })
    setTimeout(() => {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()  // export 方法每次调用后会清掉之前的动画操作。
      })
      console.log(this)
    }, 200)
  },

  hideBuyModal() {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "ease",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
      console.log(this)
    }.bind(this), 200)
  },
})