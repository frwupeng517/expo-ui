// pages/navigation/navigation.js
Page({
  onShowVerticalEvent: function(event) {
    let showMyLocation = event.detail.behavior.showMyLocation,
        showServiceModal = event.detail.behavior.showServiceModal,
        showHongBao = event.detail.behavior.showHongBao,
        showRecommend = event.detail.behavior.showRecommend,
        showMyLine = event.detail.behavior.showMyLine,
        showHotArea = event.detail.behavior.showHotArea,
        booths = event.detail.behavior.booths
    this.setData({
      showMyLocation: showMyLocation,
      showServiceModal: showServiceModal,
      showHongBao: showHongBao,
      showRecommend: showRecommend,
      showMyLine: showMyLine,
      showHotArea: showHotArea,
      booths: booths
    })
  },
  /*
  onShowMyLocationEvent: function (event) {
    let showMyLocation = event.detail.behavior.showMyLocation
    console.log(showMyLocation)
    this.setData({
      showMyLocation: showMyLocation
    })
  },
  onCustomEvent: function (event) {
    console.log(event)
    let showServiceModal = event.detail.behavior.showServiceModal

    this.setData({
      showServiceModal: showServiceModal
    })
  },
  onShowHongBaoEvent: function(event) {
    let showHongBao = event.detail.behavior.showHongBao
    this.setData({
      showHongBao: showHongBao
    })
  },
  // 获取我关注的展位
  onShowFocusBooth(event) {
    let booths = event.detail.behavior.booths
    console.log(booths)
    this.setData({
      booths: booths
    })
  },
  // 推荐路线
  onShowRecommendWay(event) {
    let booths = event.detail.behavior.booths,
        showRecommend = event.detail.behavior.showRecommend
    this.setData({
      showRecommend: showRecommend,
      booths: booths
    })
  },
  // 我的路线
  onShowMyLineEvent(event) {
    let booths = event.detail.behavior.booths,
      showMyLine = event.detail.behavior.showMyLine
    this.setData({
      showMyLine: showMyLine,
      booths: booths
    })
  },
  */

  /**
   * 页面的初始数据
   */
  data: {
    showSearchIcon: true,
    showRecommend: false,
    booths: [
      { id: "0", name: "", isFoucs: false, luckyMoney: false },
      { id: "1", name: "", isFoucs: false, luckyMoney: false },
      { id: "2", name: "", isFoucs: false, luckyMoney: true },
      { id: "3", name: "", isFoucs: false, luckyMoney: false },
      { id: "4", name: "", isFoucs: false, luckyMoney: false },
      { id: "5", name: "展位A", isFoucs: false, luckyMoney: false },
      { id: "6", name: "", isFoucs: false, luckyMoney: false },
      { id: "7", name: "", isFoucs: false, luckyMoney: false },
      { id: "8", name: "", isFoucs: false, luckyMoney: false },
      { id: "9", name: "展位B", isFoucs: false, luckyMoney: false },
      { id: "10", name: "", isFoucs: false, luckyMoney: true },
      { id: "11", name: "", isFoucs: false, luckyMoney: false },
      { id: "12", name: "", isFoucs: false, luckyMoney: false },
      { id: "13", name: "", isFoucs: false, luckyMoney: false },
      { id: "14", name: "", isFoucs: false, luckyMoney: false },
      { id: "15", name: "", isFoucs: false, luckyMoney: false },
      { id: "16", name: "", isFoucs: false, luckyMoney: true },
      { id: "17", name: "", isFoucs: false, luckyMoney: false },
      { id: "18", name: "", isFoucs: false, luckyMoney: false },
      { id: "19", name: "", isFoucs: false, luckyMoney: false },
      { id: "20", name: "", isFoucs: false, luckyMoney: true },
      { id: "21", name: "", isFoucs: false, luckyMoney: false },
      { id: "22", name: "", isFoucs: false, luckyMoney: false },
      { id: "23", name: "", isFoucs: false, luckyMoney: false },
      { id: "24", name: "", isFoucs: false, luckyMoney: true },
      { id: "25", name: "", isFoucs: false, luckyMoney: false },
      { id: "26", name: "", isFoucs: false, luckyMoney: false },
      { id: "27", name: "", isFoucs: false, luckyMoney: false },
      { id: "28", name: "", isFoucs: false, luckyMoney: false },
      { id: "29", name: "", isFoucs: false, luckyMoney: true },
      { id: "30", name: "", isFoucs: false, luckyMoney: false },
      { id: "31", name: "", isFoucs: false, luckyMoney: false },
      { id: "32", name: "", isFoucs: false, luckyMoney: false },
      { id: "33", name: "", isFoucs: false, luckyMoney: false },
      { id: "34", name: "", isFoucs: false, luckyMoney: false },
      { id: "35", name: "", isFoucs: false, luckyMoney: false },
      { id: "36", name: "", isFoucs: false, luckyMoney: false },
      { id: "37", name: "", isFoucs: false, luckyMoney: false },
      { id: "38", name: "", isFoucs: false, luckyMoney: false }
    ]
  },


  hideIcon: function(event) {
    console.log(event)
    this.setData({
      showSearchIcon: false
    })
  },

  showIcon(event) {
    this.setData({
      // showSearchIcon: true
    })
  },

  closeModal(event) {
    this.setData({
      showServiceModal: false
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    wx.nextTick(() => {
      wx.getSystemInfo({
        success: function(res) {
          _this.setData({
            windowWidth: res.windowWidth
          })
        },
      })
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