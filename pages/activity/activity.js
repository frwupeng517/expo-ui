// pages/activity/activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex: 0, // 高亮的标签页
    tabItems: ['选择内容', '观看'],
    windowHeight: 0, // 窗口的高度
    
  },
  // 从子组件接收tabIndex
  onGetTabIndex(e) {
    let tabIndex = e.detail.behavior.tabIndex
    this.setData({
      tabIndex: tabIndex
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

  }
})